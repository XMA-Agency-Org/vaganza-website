/**
 * Editorial content + local mock catalogue.
 *
 * `productEditorial` is the single source of truth for marketing copy. It is
 * merged onto live Shopify products (by handle) AND used to build the mock
 * products below — so the copy stays identical whichever data source is live.
 *
 * The three products mirror the real Vaganza range — the "Secret Mask"
 * intimate treatment, sold in packs:
 *   Single Session (AED 89) · Trio Set (AED 249) · Advanced Collection (AED 459)
 */

import type { Money, Product, ProductEditorial, ProductImage } from "../shopify/types";

export const productEditorial: Record<string, ProductEditorial> = {
  "single-session": {
    subtitle: "A single Secret Mask treatment for intimate, delicate skin.",
    accent: "blush",
    rating: 4.8,
    reviewCount: 73,
    sessions: 1,
    highlights: [
      "One Secret Mask intimate treatment",
      "Moisturizing, brightening & soothing",
      "pH-balanced for sensitive areas",
      "Dermatologically tested · free UAE delivery",
    ],
    howToUse: [
      "Cleanse the area and gently pat the skin dry.",
      "Unfold the Secret Mask and smooth it into place.",
      "Relax for 15–20 minutes as the active serum absorbs.",
      "Remove, then massage in the remaining essence.",
    ],
    keyIngredients: ["Alpha Arbutin", "Aloe Vera", "Glycerin"],
  },
  "trio-set": {
    subtitle: "Three Secret Mask treatments — the complete starter ritual.",
    badge: "Most Loved",
    accent: "sage",
    rating: 4.9,
    reviewCount: 142,
    sessions: 3,
    highlights: [
      "Three Secret Mask intimate treatments",
      "A complete three-week starter ritual",
      "Visibly smoother, more even-toned skin",
      "Better value than three single treatments",
    ],
    howToUse: [
      "Use one Secret Mask every 4–5 days for best results.",
      "Cleanse, then smooth the mask into place.",
      "Relax for 15–20 minutes, then remove.",
      "Massage in the remaining serum and repeat across the set.",
    ],
    keyIngredients: ["Alpha Arbutin", "Collagen", "Aloe Vera", "Glycerin"],
  },
  "advanced-collection": {
    subtitle: "Six Secret Mask treatments for a complete transformation.",
    badge: "Best Value",
    accent: "clay",
    rating: 5.0,
    reviewCount: 108,
    sessions: 6,
    highlights: [
      "Six Secret Mask intimate treatments",
      "Our most complete brightening course",
      "Designed for lasting, cumulative results",
      "The best value per treatment we offer",
    ],
    howToUse: [
      "Follow one treatment every 4–5 days across six weeks.",
      "Cleanse, then apply the Secret Mask.",
      "Relax for 15–20 minutes and let the actives work.",
      "Remove, massage in the serum, and stay consistent.",
    ],
    keyIngredients: ["Alpha Arbutin", "Collagen", "Aloe Vera", "Glycerin"],
  },
};

/** Helper to build a Money object. */
function aed(amount: string): Money {
  return { amount, currencyCode: "AED" };
}

/** Shared product photography for the mock catalogue. */
const MASK_IMAGE: ProductImage = {
  url: "/brand/product-mask.jpg",
  altText: "Vaganza Secret Mask intimate treatment",
  width: 832,
  height: 464,
};

/** Builds a complete mock Product from minimal input + its editorial entry. */
function buildMockProduct(input: {
  handle: string;
  title: string;
  price: string;
  compareAt?: string;
  description: string;
  descriptionHtml: string;
  tags: string[];
}): Product {
  const editorial = productEditorial[input.handle];
  const variantId = `mock:${input.handle}`;
  return {
    id: `mock-product:${input.handle}`,
    handle: input.handle,
    title: input.title,
    description: input.description,
    descriptionHtml: input.descriptionHtml,
    featuredImage: MASK_IMAGE,
    images: [MASK_IMAGE],
    priceRange: { min: aed(input.price), max: aed(input.price) },
    variants: [
      {
        id: variantId,
        title: "Default",
        available: true,
        price: aed(input.price),
        compareAtPrice: input.compareAt ? aed(input.compareAt) : null,
        selectedOptions: [{ name: "Title", value: "Default Title" }],
      },
    ],
    options: [],
    tags: input.tags,
    available: true,
    ...editorial,
  };
}

export const mockProducts: Product[] = [
  buildMockProduct({
    handle: "single-session",
    title: "Single Session",
    price: "89.00",
    description:
      "One Secret Mask intimate treatment for delicate, sensitive skin. A pH-balanced, dermatologically-tested hydrogel mask infused with Alpha Arbutin, Aloe Vera and Glycerin to moisturize, soothe and gradually brighten — the perfect introduction to the Vaganza ritual.",
    descriptionHtml:
      "<p>One Secret Mask intimate treatment for delicate, sensitive skin. A pH-balanced, dermatologically-tested hydrogel mask infused with Alpha Arbutin, Aloe Vera and Glycerin.</p><p>Moisturizing, brightening and soothing — the perfect, gentle introduction to the Vaganza ritual.</p>",
    tags: ["Bestseller", "Hydrating", "Brightening"],
  }),
  buildMockProduct({
    handle: "trio-set",
    title: "Trio Set",
    price: "249.00",
    compareAt: "267.00",
    description:
      "Three Secret Mask intimate treatments — the complete way to begin. A pH-balanced, dermatologically-tested three-week ritual that reveals smoother, more even-toned and visibly cared-for skin, with naturally-derived actives at every step.",
    descriptionHtml:
      "<p>Three Secret Mask intimate treatments — the complete way to begin your Vaganza ritual. A pH-balanced, dermatologically-tested three-week course.</p><p>Used once every few days, the Trio Set builds gentle, cumulative results — smoother, more even-toned, visibly cared-for skin.</p>",
    tags: ["Bestseller", "Set", "Brightening", "Collagen"],
  }),
  buildMockProduct({
    handle: "advanced-collection",
    title: "Advanced Collection",
    price: "459.00",
    compareAt: "534.00",
    description:
      "Six Secret Mask intimate treatments — our most complete brightening course. A pH-balanced, dermatologically-tested six-week transformation ritual crafted for lasting, cumulative results and our best value per treatment.",
    descriptionHtml:
      "<p>Six Secret Mask intimate treatments — our most complete brightening course. A considered, six-week transformation ritual.</p><p>The Advanced Collection is pH-balanced and dermatologically tested, crafted for women who want lasting, cumulative results — visibly brighter, softer, more comfortable skin — at the best value per treatment we offer.</p>",
    tags: ["Best Value", "Set", "Brightening", "Collagen"],
  }),
];
