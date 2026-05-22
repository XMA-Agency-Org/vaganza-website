import Image from "next/image";
import { Button } from "../ui/button";
import { CheckIcon } from "../ui/icons";
import { Reveal } from "../ui/reveal";
import { StarRating } from "../ui/star-rating";

/**
 * Homepage hero — a full-bleed lifestyle image (Vaganza's own photography)
 * with a slow cinematic zoom, beneath a deep-wine gradient that carries the
 * brand's first impression.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[max(92vh,44rem)] items-center overflow-hidden">
      {/* Brand lifestyle photography with a slow Ken Burns zoom */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <Image
          src="/brand/lifestyle.jpg"
          alt="Women of every age, cared for by Vaganza"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
      </div>

      {/* Wine gradient — legibility + brand wash */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-wine/95 via-wine/72 to-wine/35" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-wine/70 via-transparent to-wine/20" />

      <div className="container-x w-full py-28 md:py-32">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-rose-soft">Secret Mask · by Vaganza</p>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-7 font-display font-normal text-[clamp(3rem,1.6rem+5.6vw,6.4rem)] leading-[1.0] tracking-[-0.025em] text-balance text-cream">
              Every woman deserves{" "}
              <em className="italic text-rose-soft">luxurious</em> skincare.
            </h1>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-8 max-w-md text-[1.1rem] leading-relaxed text-cream/80">
              Vaganza&apos;s Secret Mask is a pH-balanced, dermatologically-tested
              intimate treatment — crafted to moisturize, soothe and gently
              brighten the most delicate skin.
            </p>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/shop" variant="light" size="lg">
                Shop the Ritual
              </Button>
              <Button href="/#ingredients" variant="outline" size="lg">
                Discover the Science
              </Button>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3">
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

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="text-[0.62rem] tracking-[0.3em] text-cream/55 uppercase">
          Scroll
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-cream/20">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-cream/80" />
        </span>
      </div>
    </section>
  );
}
