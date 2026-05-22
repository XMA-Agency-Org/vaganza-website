import Image from "next/image";
import { Button } from "../ui/button";
import { CheckIcon } from "../ui/icons";
import { LeafMark } from "../ui/logo";
import { Reveal } from "../ui/reveal";
import { StarRating } from "../ui/star-rating";

/**
 * Homepage hero — a full-bleed lifestyle image (Vaganza's own photography)
 * beneath a deep-wine gradient that carries the brand's first impression.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[max(86vh,40rem)] items-center overflow-hidden">
      {/* Brand lifestyle photography */}
      <Image
        src="/brand/lifestyle.jpg"
        alt="Women of every age, cared for by Vaganza"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Wine gradient — legibility + brand wash */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-wine/95 via-wine/72 to-wine/35" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-wine/60 to-transparent" />

      <div className="container-x py-20 md:py-28">
        <div className="max-w-xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-2.5 text-rose-soft">
              <LeafMark className="h-4 w-4" />
              Secret Mask · by Vaganza
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 font-display text-[clamp(2.9rem,1.7rem+4.6vw,5.2rem)] leading-[1.03] tracking-[-0.02em] text-balance text-cream">
              Every woman deserves{" "}
              <em className="font-display italic text-rose-soft">luxurious</em>{" "}
              skincare.
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-6 max-w-md text-[1.08rem] leading-relaxed text-cream/80">
              Vaganza&apos;s Secret Mask is a pH-balanced, dermatologically-tested
              intimate treatment — crafted to moisturize, soothe and gently
              brighten the most delicate skin.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/shop" variant="light" size="lg">
                Shop the Ritual
              </Button>
              <Button href="/#ingredients" variant="outline" size="lg">
                Discover the Science
              </Button>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center gap-2.5">
                <StarRating rating={4.9} size={17} />
                <span className="text-sm text-cream/80">
                  <strong className="font-semibold text-cream">4.9</strong> ·
                  Loved across the UAE
                </span>
              </div>
              <span className="hidden h-4 w-px bg-cream/25 sm:block" />
              <div className="flex items-center gap-2 text-sm text-cream/80">
                <CheckIcon className="h-5 w-5 text-rose-soft" />
                Dermatologically tested
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
