import type { Metadata } from "next";
import { Promises } from "@/components/home/Promises";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { WhatsappIcon } from "@/components/ui/icons";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { getAllProducts } from "@/lib/products";
import { whatsappUrl } from "@/lib/site";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Shop All Skincare",
  description:
    "Explore the full Vaganza collection — the Secret Mask intimate treatment in single sessions, sets and complete brightening rituals.",
  alternates: { canonical: "/shop" },
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <>
      <PageHeader
        current="Shop"
        eyebrow="The collection"
        title="Naturally-crafted skincare, made for delicate skin"
        intro="Every Vaganza ritual is a soothing Secret Mask treatment — pH-balanced, dermatologically tested, and powered by naturally-derived actives."
      />

      {/* Product grid */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="container-x">
          <p className="mb-10 text-sm tracking-wide text-mauve">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={(index % 3) * 130}>
                <ProductCard product={product} priority={index < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Promises />

      {/* Help CTA */}
      <section className="bg-petal py-24 md:py-32">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <p className="eyebrow text-rose">Here to help</p>
          <h2 className="max-w-xl font-display font-normal text-[clamp(2rem,1.4rem+2.2vw,3.2rem)] leading-[1.1] tracking-[-0.02em] text-balance text-ink">
            Not sure where to begin?
          </h2>
          <p className="max-w-md leading-relaxed text-mauve">
            Tell us a little about your skin and our team will help you choose
            the ritual that fits you best.
          </p>
          <Button
            href={whatsappUrl(
              "Hello Vaganza, I'd love help choosing the right ritual for my skin.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
          >
            <WhatsappIcon className="h-5 w-5" />
            Ask our team
          </Button>
        </div>
      </section>
    </>
  );
}
