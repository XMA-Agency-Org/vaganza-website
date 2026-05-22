/**
 * Central brand + site configuration for Vaganza.
 * Edit values here to update contact details, links, and SEO defaults site-wide.
 */

export const siteConfig = {
  name: "Vaganza",
  legalName: "Vaganza Official",
  /** Production domain — update if the canonical domain changes. */
  url: "https://vaganzaofficial.com",
  tagline: "Luxurious skincare, naturally crafted.",
  description:
    "Vaganza's Secret Mask is a pH-balanced, dermatologically-tested intimate treatment that moisturizes, soothes and gently brightens delicate skin — luxurious, naturally-crafted care every woman deserves.",
  // Contact details (sourced from the current vaganzaofficial.com site)
  phoneDisplay: "+971 54 741 1369",
  phoneHref: "tel:+971547411369",
  whatsapp: "971547411369",
  email: "info@vaganzaofficial.com",
  location: "United Arab Emirates",
  social: {
    instagram: "https://instagram.com/vaganza",
    tiktok: "https://tiktok.com/@vaganza",
    facebook: "https://facebook.com/vaganzaofficial",
  },
} as const;

export const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Our Ritual", href: "/#ritual" },
  { label: "Ingredients", href: "/#ingredients" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerLinks = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Single Session", href: "/products/single-session" },
    { label: "Trio Set", href: "/products/trio-set" },
    { label: "Advanced Collection", href: "/products/advanced-collection" },
  ],
  company: [
    { label: "About Vaganza", href: "/about" },
    { label: "Our Ingredients", href: "/#ingredients" },
    { label: "How It Works", href: "/#ritual" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/#faq" },
    { label: "Shipping & Delivery", href: "/contact" },
    { label: "Track Your Order", href: "/contact" },
    { label: "Get in Touch", href: "/contact" },
  ],
} as const;

/** Builds a pre-filled WhatsApp ordering link — used as a graceful fallback. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
