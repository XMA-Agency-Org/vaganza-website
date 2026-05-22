import type { Product } from "@/lib/shopify/types";
import { ProductCard } from "../product/ProductCard";
import { Button } from "../ui/button";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** The product collection — the homepage's primary conversion surface. */
export function ProductShowcase({ products }: { products: Product[] }) {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            align="left"
            eyebrow="The collection"
            title={
              <>
                Find your <em>ritual</em>
              </>
            }
            intro="Three considered ways to begin — from a first discovery to the complete Vaganza journey."
          />
          <Button
            href="/shop"
            variant="secondary"
            className="hidden shrink-0 md:inline-flex"
          >
            View all products
          </Button>
        </div>

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index * 110}>
              <ProductCard product={product} priority={index === 0} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button href="/shop" variant="secondary">
            View all products
          </Button>
        </div>
      </div>
    </section>
  );
}
