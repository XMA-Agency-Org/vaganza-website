import Image from "next/image";
import type { Product } from "@/lib/shopify/types";
import { discountPercent, formatMoney } from "@/lib/utils";
import { AddToCartButton } from "../product/AddToCartButton";
import { ProductVisual } from "../product/ProductVisual";
import { Button } from "../ui/button";
import { CheckIcon } from "../ui/icons";
import { Reveal } from "../ui/reveal";

/** A focused conversion moment for the best-value collection. */
export function BundleHighlight({ product }: { product?: Product }) {
  if (!product) return null;

  const price = product.priceRange.min;
  const compareAt = product.variants[0]?.compareAtPrice ?? null;
  const saved = compareAt
    ? discountPercent(price.amount, compareAt.amount)
    : 0;

  return (
    <section className="bg-petal py-20 md:py-28">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Visual */}
          <Reveal>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-[1.5rem] shadow-[0_50px_90px_-50px_rgba(47,32,39,0.6)]">
                {product.featuredImage ? (
                  <Image
                    src={product.featuredImage.url}
                    alt={product.featuredImage.altText}
                    fill
                    sizes="(min-width: 1024px) 44vw, 90vw"
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
                <div className="absolute -top-6 -right-3 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-plum text-center text-cream shadow-xl sm:-right-6">
                  <span className="text-[0.58rem] tracking-[0.18em] uppercase">
                    Save
                  </span>
                  <span className="font-display text-3xl leading-none">
                    {saved}%
                  </span>
                </div>
              )}
            </div>
          </Reveal>

          {/* Pitch */}
          <Reveal delay={140}>
            <p className="eyebrow flex items-center gap-3 text-rose">
              <span className="h-px w-9 bg-current opacity-60" />
              Best value · {product.sessions} treatments
            </p>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,1.4rem+2.7vw,3.7rem)] leading-[1.05] tracking-[-0.02em] text-ink">
              The complete{" "}
              <em className="italic text-rose">{product.title}</em>
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-mauve">
              {product.description}
            </p>

            <ul className="mt-8 flex flex-col gap-3">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-plum text-cream">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="text-[0.975rem] text-ink">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex items-baseline gap-3">
              <span className="font-display text-[2.5rem] leading-none text-ink">
                {formatMoney(price.amount, price.currencyCode)}
              </span>
              {compareAt && saved > 0 && (
                <span className="text-lg text-mauve line-through">
                  {formatMoney(compareAt.amount, compareAt.currencyCode)}
                </span>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
