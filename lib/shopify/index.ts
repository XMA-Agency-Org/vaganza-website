/**
 * Shopify Storefront API client.
 *
 * The storefront works with or without Shopify credentials:
 *  - When SHOPIFY_STORE_DOMAIN + SHOPIFY_STOREFRONT_ACCESS_TOKEN are set,
 *    products and checkout come from the live store.
 *  - Otherwise the app falls back to the local mock catalogue (see
 *    ../data/products.ts), so the site builds, renders, and demos cleanly.
 *
 * Set credentials in `.env.local` (see `.env.example`).
 */

import { productEditorial } from "../data/products";
import {
  CART_CREATE_MUTATION,
  GET_PRODUCT_QUERY,
  GET_PRODUCTS_QUERY,
} from "./queries";
import type { Product, ProductEditorial, ProductImage } from "./types";

const STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN?.replace(
  /^https?:\/\//,
  "",
);
const ACCESS_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const API_VERSION = process.env.SHOPIFY_API_VERSION || "2025-10";

/** True when live Shopify credentials are available. */
export const isShopifyConfigured = Boolean(STORE_DOMAIN && ACCESS_TOKEN);

const ENDPOINT = `https://${STORE_DOMAIN}/api/${API_VERSION}/graphql.json`;

type GraphQLResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

/** Low-level Storefront API request with time-based revalidation. */
async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {},
  cache: RequestCache | "force-cache" = "force-cache",
): Promise<T> {
  if (!isShopifyConfigured) {
    throw new Error("Shopify is not configured.");
  }

  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": ACCESS_TOKEN as string,
    },
    body: JSON.stringify({ query, variables }),
    cache,
    next: { revalidate: 900, tags: ["shopify"] },
  });

  if (!res.ok) {
    throw new Error(`Shopify request failed: ${res.status}`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;
  if (json.errors?.length) {
    throw new Error(json.errors.map((e) => e.message).join("; "));
  }
  if (!json.data) {
    throw new Error("Shopify returned no data.");
  }
  return json.data;
}

/* ----------------------------- Reshaping ------------------------------ */

/** Default editorial content for a live product without an authored entry. */
function fallbackEditorial(handle: string): ProductEditorial {
  return {
    subtitle: "Naturally-derived care for delicate skin.",
    accent: handle.length % 3 === 0 ? "sage" : handle.length % 3 === 1 ? "blush" : "clay",
    rating: 4.8,
    reviewCount: 0,
    sessions: 1,
    highlights: [
      "Crafted with naturally-derived actives",
      "Gentle, dermatologically-minded formula",
      "Free delivery across the UAE",
    ],
    howToUse: [
      "Cleanse and gently pat the skin dry.",
      "Apply the treatment and relax for 15–20 minutes.",
      "Remove and massage in any remaining serum.",
    ],
    keyIngredients: ["Aloe Vera", "Glycerin", "Collagen"],
  };
}

type RawImage = {
  url: string;
  altText: string | null;
  width: number | null;
  height: number | null;
};

function reshapeImage(img: RawImage | null, fallbackAlt: string): ProductImage | null {
  if (!img?.url) return null;
  return {
    url: img.url,
    altText: img.altText || fallbackAlt,
    width: img.width || 1000,
    height: img.height || 1000,
  };
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function reshapeProduct(node: any): Product {
  const editorial = productEditorial[node.handle] ?? fallbackEditorial(node.handle);
  const images: ProductImage[] = (node.images?.nodes ?? [])
    .map((i: RawImage) => reshapeImage(i, node.title))
    .filter(Boolean);

  return {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description ?? "",
    descriptionHtml: node.descriptionHtml ?? "",
    featuredImage: reshapeImage(node.featuredImage, node.title) ?? images[0] ?? null,
    images,
    priceRange: {
      min: node.priceRange.minVariantPrice,
      max: node.priceRange.maxVariantPrice,
    },
    variants: (node.variants?.nodes ?? []).map((v: any) => ({
      id: v.id,
      title: v.title,
      available: v.availableForSale,
      price: v.price,
      compareAtPrice: v.compareAtPrice ?? null,
      selectedOptions: v.selectedOptions ?? [],
    })),
    options: (node.options ?? []).map((o: any) => ({
      id: o.id,
      name: o.name,
      values: o.values,
    })),
    tags: node.tags ?? [],
    available: node.availableForSale,
    ...editorial,
  };
}
/* eslint-enable @typescript-eslint/no-explicit-any */

/* --------------------------- Public methods --------------------------- */

export async function shopifyGetProducts(): Promise<Product[]> {
  const data = await shopifyFetch<{ products: { nodes: unknown[] } }>(
    GET_PRODUCTS_QUERY,
    { first: 50 },
  );
  return data.products.nodes.map(reshapeProduct);
}

export async function shopifyGetProduct(
  handle: string,
): Promise<Product | null> {
  const data = await shopifyFetch<{ product: unknown | null }>(
    GET_PRODUCT_QUERY,
    { handle },
  );
  return data.product ? reshapeProduct(data.product) : null;
}

/**
 * Creates a Shopify cart and returns its hosted checkout URL.
 * Called from the checkout server action.
 */
export async function shopifyCreateCart(
  lines: { merchandiseId: string; quantity: number }[],
): Promise<string> {
  const data = await shopifyFetch<{
    cartCreate: {
      cart: { id: string; checkoutUrl: string } | null;
      userErrors: { message: string }[];
    };
  }>(CART_CREATE_MUTATION, { lines }, "no-store");

  const { cart, userErrors } = data.cartCreate;
  if (userErrors?.length) {
    throw new Error(userErrors.map((e) => e.message).join("; "));
  }
  if (!cart?.checkoutUrl) {
    throw new Error("Shopify did not return a checkout URL.");
  }
  return cart.checkoutUrl;
}
