import Image from "next/image";
import type { Product } from "@/lib/shopify/types";
import { discountPercent, formatMoney } from "@/lib/utils";
import { AddToCartButton } from "../product/AddToCartButton";
import { ProductVisual } from "../product/ProductVisual";
import { Button } from "../ui/button";
import { CheckIcon } from "../ui/icons";
import { Reveal } from "../ui/reveal";

/** A focused conversion push for the best-value collection. */
export function BundleHighlight({ product }: { product?: Product }) {
  if (!product) return null;

  const price = product.priceRange.min;
  const compareAt = product.variants[0]?.compareAtPrice ?? null;
  const saved = compareAt
    ? discountPercent(price.amount, compareAt.amount)
    : 0;

  return (
    <section className="bg-blush py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div className="aspect-square overflow-hidden rounded-[2.5rem] border border-blush-deep/30 shadow-[0_40px_70px_-40px_rgba(43,42,36,0.5)]">
                {product.featuredImage ? (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText}
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                  />
                ) : (
                  <ProductVisual
                    accent={product.accent}
                    title={product.title}
                    sessions={product.sessions}
                    className="h-full w-full"
                  />
                )}
              </div>
              {saved > 0 && (
                <div className="absolute -top-5 -right-3 flex h-[5.5rem] w-[5.5rem] flex-col items-center justify-center rounded-full bg-clay text-center text-cream shadow-lg sm:-right-5">
                  <span className="text-[0.62rem] tracking-[0.14em] uppercase">
                    Save
                  </span>
                  <span className="font-display text-2xl leading-none">
                    {saved}%
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Pitch */}
          <Reveal delay={120}>
            <p className="eyebrow flex items-center gap-2.5 text-clay">
              <span className="h-px w-7 bg-current opacity-50" />
              Best value · {product.sessions} sessions
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,1.3rem+2.4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink">
              The complete{" "}
              <em className="italic text-sage">{product.title}</em>
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-stone">
              {product.description}
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage text-cream">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[0.95rem] text-ink">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex items-baseline gap-3">
              <span className="font-display text-3xl text-ink">
                {formatMoney(price.amount, price.currencyCode)}
              </span>
              {compareAt && saved > 0 && (
                <span className="text-lg text-stone line-through">
                  {formatMoney(compareAt.amount, compareAt.currencyCode)}
                </span>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <AddToCartButton product={product} size="lg" withIcon />
              <Button
                href={`/products/${product.handle}`}
                variant="secondary"
                size="lg"
              >
                View details
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
