/**
 * Editorial content + local mock catalogue.
 *
 * `productEditorial` is the single source of truth for marketing copy. It is
 * merged onto live Shopify products (by handle) AND used to build the mock
 * products below — so the copy stays identical whichever data source is live.
 *
 * The three products mirror the real Vaganza range:
 *   Single Session (AED 89) · Trio Set (AED 249) · Advanced Collection (AED 459)
 */

import type { Money, Product, ProductEditorial } from "../shopify/types";

export const productEditorial: Record<string, ProductEditorial> = {
  "single-session": {
    subtitle: "A single ritual of targeted care for delicate skin.",
    accent: "blush",
    rating: 4.8,
    reviewCount: 73,
    sessions: 1,
    highlights: [
      "One precision hydrogel treatment",
      "Soothes, deeply hydrates & gently brightens",
      "Powered by Alpha Arbutin & Aloe Vera",
      "Free, discreet delivery across the UAE",
    ],
    howToUse: [
      "Cleanse the area and gently pat the skin dry.",
      "Unfold the hydrogel treatment and smooth it into place.",
      "Relax for 15–20 minutes as the active serum absorbs.",
      "Remove, then massage in the remaining essence.",
    ],
    keyIngredients: ["Alpha Arbutin", "Aloe Vera", "Glycerin"],
  },
  "trio-set": {
    subtitle: "Three sessions of balanced, precision brightening care.",
    badge: "Most Loved",
    accent: "sage",
    rating: 4.9,
    reviewCount: 142,
    sessions: 3,
    highlights: [
      "Three full hydrogel treatments",
      "The complete way to begin your ritual",
      "Visibly smoother, more even-toned skin",
      "Better value than three single sessions",
    ],
    howToUse: [
      "Use one treatment every 4–5 days for best results.",
      "Cleanse, then smooth the hydrogel into place.",
      "Relax for 15–20 minutes, then remove.",
      "Massage in the remaining serum and repeat across the set.",
    ],
    keyIngredients: ["Alpha Arbutin", "Collagen", "Aloe Vera", "Glycerin"],
  },
  "advanced-collection": {
    subtitle: "Six sessions for a complete transformation ritual.",
    badge: "Best Value",
    accent: "clay",
    rating: 5.0,
    reviewCount: 108,
    sessions: 6,
    highlights: [
      "Six full hydrogel treatments",
      "Our most complete brightening course",
      "Designed for lasting, cumulative results",
      "The best value per session we offer",
    ],
    howToUse: [
      "Follow a session every 4–5 days across six weeks.",
      "Cleanse, then apply the hydrogel treatment.",
      "Relax for 15–20 minutes and let the actives work.",
      "Remove, massage in the serum, and stay consistent.",
    ],
    keyIngredients: [
      "Alpha Arbutin",
      "Collagen",
      "Aloe Vera",
      "Glycerin",
    ],
  },
};

/** Helper to build a Money object. */
function aed(amount: string): Money {
  return { amount, currencyCode: "AED" };
}

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
    featuredImage: null,
    images: [],
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
      "One precision hydrogel treatment for delicate, sensitive skin. A soothing essence of Alpha Arbutin, Aloe Vera and Glycerin that hydrates, calms and gradually brightens — the perfect introduction to the Vaganza ritual.",
    descriptionHtml:
      "<p>One precision hydrogel treatment for delicate, sensitive skin. A soothing essence of Alpha Arbutin, Aloe Vera and Glycerin that hydrates, calms and gradually brightens.</p><p>The perfect introduction to the Vaganza ritual — gentle enough for the most delicate areas, considered enough to feel like a treat.</p>",
    tags: ["Bestseller", "Hydrating", "Brightening"],
  }),
  buildMockProduct({
    handle: "trio-set",
    title: "Trio Set",
    price: "249.00",
    compareAt: "267.00",
    description:
      "Three full hydrogel treatments — the complete way to begin. A balanced, precision course that reveals smoother, more even-toned and visibly cared-for skin, with naturally-derived actives at every step.",
    descriptionHtml:
      "<p>Three full hydrogel treatments — the complete way to begin your Vaganza ritual. A balanced, precision course designed to reveal smoother, more even-toned and visibly cared-for skin.</p><p>Used once every few days, the Trio Set builds gentle, cumulative results with naturally-derived actives at every step.</p>",
    tags: ["Bestseller", "Set", "Brightening", "Collagen"],
  }),
  buildMockProduct({
    handle: "advanced-collection",
    title: "Advanced Collection",
    price: "459.00",
    compareAt: "534.00",
    description:
      "Six full hydrogel treatments — our most complete brightening course. A six-week transformation ritual crafted for lasting, cumulative results and our best value per session.",
    descriptionHtml:
      "<p>Six full hydrogel treatments — our most complete brightening course. A considered, six-week transformation ritual.</p><p>The Advanced Collection is crafted for women who want lasting, cumulative results — visibly brighter, softer, more comfortable skin — at the best value per session we offer.</p>",
    tags: ["Best Value", "Set", "Brightening", "Collagen"],
  }),
];
