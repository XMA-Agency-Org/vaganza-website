import Image from "next/image";
import type { Product } from "@/lib/shopify/types";
import { Button } from "../ui/button";
import { SingleLeaf } from "../ui/decor";
import { LeafMark } from "../ui/logo";
import { LeafIcon, TruckIcon } from "../ui/icons";
import { Reveal } from "../ui/reveal";
import { StarRating } from "../ui/star-rating";
import { ProductVisual } from "../product/ProductVisual";

/** Homepage hero — the brand's first, decisive impression. */
export function Hero({ product }: { product?: Product }) {
  return (
    <section className="grain relative overflow-hidden">
      {/* Soft gradient-mesh background */}
      <div
        aria-hidden
        className="absolute -top-32 -left-24 h-[34rem] w-[34rem] rounded-full bg-sage-soft/45 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] rounded-full bg-blush/55 blur-[120px]"
      />

      {/* Floating botanicals */}
      <SingleLeaf
        aria-hidden
        className="absolute top-[18%] left-[6%] hidden h-12 w-12 animate-float text-sage/30 lg:block"
      />
      <SingleLeaf
        aria-hidden
        className="absolute top-[62%] right-[8%] hidden h-9 w-9 animate-float-slow text-moss/30 lg:block"
      />

      <div className="container-x relative grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-20">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-2.5 text-sage">
              <LeafMark className="h-4 w-4" />
              Pure by nature · Crafted for delicate skin
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,1.6rem+4.4vw,4.9rem)] leading-[1.04] tracking-[-0.03em] text-balance text-ink">
              Every woman deserves{" "}
              <em className="font-display italic text-sage">luxurious</em>{" "}
              skincare.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-stone">
              Vaganza hydrogel rituals soothe, deeply hydrate and gently brighten
              delicate skin — with naturally-derived actives, and nothing it
              doesn&apos;t need.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/shop" size="lg">
                Shop the Ritual
              </Button>
              <Button href="/#ingredients" variant="secondary" size="lg">
                Discover the Science
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5">
                <StarRating rating={4.9} size={17} />
                <span className="text-sm text-stone">
                  <strong className="font-semibold text-ink">4.9</strong> · Loved
                  across the UAE
                </span>
              </div>
              <span className="hidden h-4 w-px bg-line sm:block" />
              <div className="flex items-center gap-2 text-sm text-stone">
                <TruckIcon className="h-5 w-5 text-sage" />
                Free, discreet UAE delivery
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={180} className="relative">
          <div className="relative mx-auto max-w-md lg:mr-0 lg:ml-auto">
            {/* Main panel */}
            <div className="relative aspect-[5/6] overflow-hidden rounded-[2.5rem] border border-line shadow-[0_40px_80px_-40px_rgba(43,42,36,0.45)]">
              {product?.featuredImage ? (
                <Image
                  src={product.featuredImage.url}
                  alt={product.featuredImage.altText}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <ProductVisual
                  accent={product?.accent ?? "sage"}
                  title={product?.title ?? "Vaganza Ritual"}
                  sessions={product?.sessions ?? 3}
                  className="h-full w-full"
                />
              )}
            </div>

            {/* Floating chip — top left */}
            <div className="absolute -top-5 -left-4 flex items-center gap-3 rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-left-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/12 text-sage">
                <LeafIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">100% naturally</p>
                <p className="text-xs text-stone">derived actives</p>
              </div>
            </div>

            {/* Floating chip — bottom right */}
            <div className="absolute -right-3 -bottom-5 rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-lg backdrop-blur-sm sm:-right-7">
              <p className="text-xs tracking-wide text-stone uppercase">
                Key actives
              </p>
              <p className="mt-0.5 font-display text-base text-ink">
                Aloe · Collagen · Arbutin
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
