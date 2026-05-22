import type { Metadata } from "next";
import Link from "next/link";
import { Promises } from "@/components/home/Promises";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { LeafSprig } from "@/components/ui/decor";
import { WhatsappIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { getAllProducts } from "@/lib/products";
import { whatsappUrl } from "@/lib/site";

export const revalidate = 900;

export const metadata: Metadata = {
  title: "Shop All Skincare",
  description:
    "Explore the full Vaganza collection of naturally-derived hydrogel treatments for delicate skin — single sessions, sets, and complete brightening rituals.",
  alternates: { canonical: "/shop" },
};

export default async function ShopPage() {
  const products = await getAllProducts();

  return (
    <>
      {/* Page header */}
      <section className="relative overflow-hidden bg-linen pt-12 pb-16 md:pt-16 md:pb-20">
        <LeafSprig
          aria-hidden
          className="absolute -top-6 right-4 hidden h-64 w-auto text-plum/15 md:block"
        />
        <div className="container-x relative">
          <nav className="flex items-center gap-2 text-sm text-mauve">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden>·</span>
            <span className="text-ink">Shop</span>
          </nav>
          <p className="eyebrow mt-6 text-plum">The collection</p>
          <h1 className="mt-3 max-w-2xl font-display text-[clamp(2.3rem,1.5rem+3vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-balance text-ink">
            Naturally-crafted skincare, made for delicate skin
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-mauve">
            Every Vaganza ritual is a soothing hydrogel treatment powered by
            naturally-derived actives. Choose a single session, or commit to the
            complete brightening journey.
          </p>
        </div>
      </section>

      {/* Product grid */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <p className="mb-8 text-sm text-mauve">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.id} delay={(index % 3) * 100}>
                <ProductCard product={product} priority={index < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Promises />

      {/* Help CTA */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-col items-center gap-5 rounded-[2rem] border border-line bg-linen px-6 py-12 text-center">
            <h2 className="font-display text-[clamp(1.6rem,1.2rem+1.6vw,2.3rem)] tracking-[-0.02em] text-ink">
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
        </div>
      </section>
    </>
  );
}
