/**
 * Unified product data layer.
 * Components import from here and never need to know whether the data came
 * from Shopify or the local mock catalogue. Wrapped in React `cache` so each
 * request fetches at most once.
 */

import { cache } from "react";
import { mockProducts } from "./data/products";
import {
  isShopifyConfigured,
  shopifyGetProduct,
  shopifyGetProducts,
} from "./shopify";
import type { Product } from "./shopify/types";

export const getAllProducts = cache(async (): Promise<Product[]> => {
  if (isShopifyConfigured) {
    try {
      const products = await shopifyGetProducts();
      if (products.length) return products;
    } catch (error) {
      console.error("[shopify] product list fetch failed, using mock data:", error);
    }
  }
  return mockProducts;
});

export const getProduct = cache(
  async (handle: string): Promise<Product | undefined> => {
    if (isShopifyConfigured) {
      try {
        const product = await shopifyGetProduct(handle);
        if (product) return product;
      } catch (error) {
        console.error(`[shopify] product "${handle}" fetch failed, using mock data:`, error);
      }
    }
    return mockProducts.find((p) => p.handle === handle);
  },
);

/** The products surfaced on the homepage, ordered by ascending price. */
export async function getFeaturedProducts(): Promise<Product[]> {
  const all = await getAllProducts();
  return [...all]
    .sort(
      (a, b) =>
        parseFloat(a.priceRange.min.amount) - parseFloat(b.priceRange.min.amount),
    )
    .slice(0, 3);
}
