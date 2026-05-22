/**
 * Framework-agnostic domain types for the storefront.
 * Shopify Storefront API responses are reshaped into these (see ./index.ts),
 * and the local mock catalog (../data/products.ts) produces the same shapes,
 * so the UI never needs to know which data source is active.
 */

export type Money = {
  amount: string;
  currencyCode: string;
};

export type ProductImage = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type ProductVariant = {
  id: string;
  title: string;
  available: boolean;
  price: Money;
  compareAtPrice: Money | null;
  /** Selected option values, e.g. { Size: "Trio" }. */
  selectedOptions: { name: string; value: string }[];
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

/**
 * Editorial content that enriches a product beyond raw commerce data.
 * For mock products this is authored inline; for live Shopify products it is
 * merged in from `productEditorial` keyed by handle.
 */
export type ProductEditorial = {
  /** Short benefit-led tagline shown under the title. */
  subtitle: string;
  /** Marketing badge, e.g. "Bestseller". */
  badge?: string;
  /** Accent color token used by the CSS product visual. */
  accent: "sage" | "blush" | "clay";
  rating: number;
  reviewCount: number;
  /** Number of treatment sessions included. */
  sessions: number;
  /** Three-to-five scannable benefit bullets. */
  highlights: string[];
  /** Step-by-step usage ritual. */
  howToUse: string[];
  /** Key active ingredients featured for this product. */
  keyIngredients: string[];
};

export type Product = {
  id: string;
  handle: string;
  title: string;
  description: string;
  descriptionHtml: string;
  featuredImage: ProductImage | null;
  images: ProductImage[];
  priceRange: { min: Money; max: Money };
  variants: ProductVariant[];
  options: ProductOption[];
  tags: string[];
  available: boolean;
} & ProductEditorial;

/** A single line in the shopping cart. */
export type CartLine = {
  variantId: string;
  productId: string;
  handle: string;
  title: string;
  variantTitle: string;
  price: Money;
  image: ProductImage | null;
  accent: "sage" | "blush" | "clay";
  quantity: number;
};
