/**
 * Editorial site content — marketing copy, ingredients, ritual steps, FAQs
 * and social proof. Centralised so copy can be edited without touching JSX.
 *
 * ⚠️  PLACEHOLDER SOCIAL PROOF
 * `testimonials` below are representative samples for layout purposes only.
 * The per-product `rating` / `reviewCount` (see lib/data/products.ts) are also
 * placeholders. Replace ALL of these with genuine customer reviews — ideally by
 * connecting a Shopify reviews app (Judge.me, Loox, Okendo) — before launch.
 * Displaying invented reviews or ratings to shoppers is misleading.
 */

export type IconName =
  | "droplet"
  | "sparkle"
  | "leaf"
  | "feather"
  | "shield"
  | "truck"
  | "heart"
  | "lock"
  | "gift";

/* ----------------------------- Trust bar ------------------------------ */

export const trustMarquee: string[] = [
  "Dermatologically tested",
  "pH-balanced for sensitive areas",
  "Moisturizing · Brightening · Soothing",
  "Naturally-derived actives",
  "Free, discreet UAE delivery",
  "Loved across the Emirates",
];

/* ------------------------------ Benefits ------------------------------ */

export const benefits: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "droplet",
    title: "Deeply Hydrates",
    copy: "Aloe Vera and Glycerin flood delicate skin with lasting, cushioned moisture.",
  },
  {
    icon: "sparkle",
    title: "Gently Brightens",
    copy: "Alpha Arbutin works gradually to even tone and soften dark areas — never harshly.",
  },
  {
    icon: "feather",
    title: "Soothes & Calms",
    copy: "A cooling hydrogel ritual that comforts and quiets the most sensitive skin.",
  },
  {
    icon: "heart",
    title: "Restores Softness",
    copy: "Collagen helps skin feel supple, smooth and genuinely cared-for.",
  },
];

/* ----------------------------- Ingredients ---------------------------- */

export const ingredients: {
  name: string;
  role: string;
  copy: string;
  accent: "sage" | "blush" | "clay";
}[] = [
  {
    name: "Alpha Arbutin",
    role: "The gentle brightener",
    copy: "A naturally-considered active that gradually evens skin tone and softens the look of dark areas — without the irritation of harsher agents.",
    accent: "blush",
  },
  {
    name: "Aloe Vera",
    role: "The soother",
    copy: "Calms, cools and comforts delicate skin while delivering a wave of lightweight, breathable hydration.",
    accent: "sage",
  },
  {
    name: "Collagen",
    role: "The restorer",
    copy: "Supports a soft, healthy-looking texture, helping skin feel supple, smooth and resilient.",
    accent: "clay",
  },
  {
    name: "Glycerin",
    role: "The hydration magnet",
    copy: "Draws moisture deep into the skin and holds it there, leaving a lasting, comfortable softness.",
    accent: "sage",
  },
];

/* ------------------------------- Ritual ------------------------------- */

export const ritualSteps: { step: string; title: string; copy: string }[] = [
  {
    step: "01",
    title: "Cleanse",
    copy: "Begin with clean, dry skin so every active can absorb fully and work undisturbed.",
  },
  {
    step: "02",
    title: "Treat",
    copy: "Smooth the hydrogel treatment into place and relax for 15–20 quiet minutes.",
  },
  {
    step: "03",
    title: "Reveal",
    copy: "Remove, massage in the remaining essence, and let soft, even-toned results build.",
  },
];

/* --------------------------- Why Vaganza ------------------------------ */

export const promises: { icon: IconName; title: string; copy: string }[] = [
  {
    icon: "leaf",
    title: "Pure by nature",
    copy: "Naturally-derived actives, chosen for delicate skin and nothing it doesn't need.",
  },
  {
    icon: "shield",
    title: "Dermatologically tested",
    copy: "pH-balanced and dermatologically tested — gentle enough for the most sensitive skin.",
  },
  {
    icon: "lock",
    title: "Discreet delivery",
    copy: "Plain, considered packaging — your ritual stays entirely your own.",
  },
  {
    icon: "truck",
    title: "Free UAE shipping",
    copy: "Complimentary delivery to every emirate, on every single order.",
  },
];

/* ---------------------------- Testimonials ---------------------------- */
/* ⚠️ PLACEHOLDER — replace with verified customer reviews before launch. */

export const testimonials: {
  name: string;
  location: string;
  rating: number;
  quote: string;
}[] = [
  {
    name: "Sample Review",
    location: "Dubai, UAE",
    rating: 5,
    quote:
      "My skin felt instantly soothed and noticeably softer. The ritual itself is genuinely calming — it feels like a small act of self-care.",
  },
  {
    name: "Sample Review",
    location: "Abu Dhabi, UAE",
    rating: 5,
    quote:
      "I started with the Trio Set and saw my tone look more even within a few weeks. Gentle enough that I never worried about sensitivity.",
  },
  {
    name: "Sample Review",
    location: "Sharjah, UAE",
    rating: 5,
    quote:
      "The packaging arrived beautifully and discreetly. Hydration is the first thing you notice — it lasts all day.",
  },
  {
    name: "Sample Review",
    location: "Dubai, UAE",
    rating: 4,
    quote:
      "A lovely, considered product. The Advanced Collection made it easy to stay consistent and the results built steadily.",
  },
];

/* -------------------------------- FAQ --------------------------------- */

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Is Vaganza suitable for sensitive, delicate skin?",
    answer:
      "Yes. Every treatment is formulated specifically for delicate skin, using naturally-derived, gentle actives. We avoid harsh agents in favour of soothing ingredients like Aloe Vera and Glycerin.",
  },
  {
    question: "How often should I use a treatment?",
    answer:
      "We recommend one session every 4–5 days. The Trio and Advanced sets are designed to be used as a consistent course for the most visible, lasting results.",
  },
  {
    question: "When will I see results?",
    answer:
      "Hydration and comfort are immediate. Brightening and a more even tone build gradually with consistent use — most rituals are designed around a multi-week course for this reason.",
  },
  {
    question: "What ingredients does Vaganza use?",
    answer:
      "Our hydrogel treatments are powered by naturally-derived actives: Alpha Arbutin for gentle brightening, Aloe Vera to soothe, Collagen to restore softness, and Glycerin for lasting hydration.",
  },
  {
    question: "Do you deliver across the UAE?",
    answer:
      "Yes — we offer free, discreet delivery to every emirate in the UAE, on every order, with no minimum spend.",
  },
  {
    question: "How is my order packaged?",
    answer:
      "Always discreetly. Your order arrives in plain, considered packaging with no product details visible from the outside — your ritual stays entirely private.",
  },
];

/* ---------------------------- Brand values ---------------------------- */

export const brandValues: { title: string; copy: string }[] = [
  {
    title: "Considered, never rushed",
    copy: "Each formula is built slowly and deliberately, around what delicate skin genuinely needs.",
  },
  {
    title: "Gentle as a principle",
    copy: "We believe care should never come at the cost of comfort. Soothing comes first, always.",
  },
  {
    title: "Made for every woman",
    copy: "Luxurious skincare shouldn't feel exclusive. Vaganza is crafted to be welcoming and kind.",
  },
];
