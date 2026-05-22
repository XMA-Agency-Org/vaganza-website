import { Benefits } from "@/components/home/Benefits";
import { BrandStatement } from "@/components/home/BrandStatement";
import { BundleHighlight } from "@/components/home/BundleHighlight";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { Ingredients } from "@/components/home/Ingredients";
import { Newsletter } from "@/components/home/Newsletter";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Promises } from "@/components/home/Promises";
import { Ritual } from "@/components/home/Ritual";
import { Testimonials } from "@/components/home/Testimonials";
import { Marquee } from "@/components/ui/marquee";
import { trustMarquee } from "@/lib/content";
import { getFeaturedProducts } from "@/lib/products";
import { siteConfig } from "@/lib/site";

// Revalidate homepage product data periodically.
export const revalidate = 900;

export default async function HomePage() {
  const products = await getFeaturedProducts();
  const featured =
    products.find((p) => p.handle === "trio-set") ?? products[1] ?? products[0];
  const advanced =
    products.find((p) => p.handle === "advanced-collection") ??
    products[products.length - 1];

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    areaServed: "AE",
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.tiktok,
      siteConfig.social.facebook,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneDisplay,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <Hero product={featured} />

      <div className="bg-forest py-3.5">
        <Marquee items={trustMarquee} tone="cream" />
      </div>

      <BrandStatement />
      <Benefits />
      <ProductShowcase products={products} />
      <Ingredients />
      <Ritual />
      <Promises />
      <Testimonials />
      <BundleHighlight product={advanced} />
      <FAQ />
      <Newsletter />
    </>
  );
}
