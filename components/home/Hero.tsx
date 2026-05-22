import Image from "next/image";
import { Fragment } from "react";
import { Button } from "../ui/button";
import { CheckIcon } from "../ui/icons";
import { StarRating } from "../ui/star-rating";

/** Words of the hero headline; `luxurious` carries the italic rose emphasis. */
const HEADLINE = ["Every", "woman", "deserves", "luxurious", "skincare."];

/**
 * Homepage hero — a full-bleed lifestyle image with a slow Ken Burns zoom,
 * a deep-wine gradient, and a choreographed entrance: the image fades in,
 * the headline focuses in word by word, and each block rises in sequence.
 * All CSS-driven, and disabled under prefers-reduced-motion.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[max(92vh,44rem)] items-center overflow-hidden">
      {/* Brand lifestyle photography — fades in, then drifts via Ken Burns */}
      <div className="animate-hero-fade absolute inset-0 -z-20 overflow-hidden">
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
          <p
            className="animate-hero-rise eyebrow text-rose-soft"
            style={{ animationDelay: "0.2s" }}
          >
            Secret Mask · by Vaganza
          </p>

          <h1 className="mt-7 font-display text-[clamp(3rem,1.6rem+5.6vw,6.4rem)] leading-[1.05] font-normal tracking-[-0.025em] text-balance text-cream">
            {HEADLINE.map((word, i) => (
              <Fragment key={word}>
                <span
                  className="animate-hero-word inline-block"
                  style={{ animationDelay: `${0.4 + i * 0.085}s` }}
                >
                  {word === "luxurious" ? (
                    <em className="italic text-rose-soft">{word}</em>
                  ) : (
                    word
                  )}
                </span>
                {i < HEADLINE.length - 1 ? " " : ""}
              </Fragment>
            ))}
          </h1>

          <p
            className="animate-hero-rise mt-8 max-w-md text-[1.1rem] leading-relaxed text-cream/80"
            style={{ animationDelay: "0.95s" }}
          >
            Vaganza&apos;s Secret Mask is a pH-balanced, dermatologically-tested
            intimate treatment — crafted to moisturize, soothe and gently
            brighten the most delicate skin.
          </p>

          <div
            className="animate-hero-rise mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "1.1s" }}
          >
            <Button href="/shop" variant="light" size="lg">
              Shop the Ritual
            </Button>
            <Button href="/#ingredients" variant="outline" size="lg">
              Discover the Science
            </Button>
          </div>

          <div
            className="animate-hero-rise mt-12 flex flex-wrap items-center gap-x-7 gap-y-3"
            style={{ animationDelay: "1.25s" }}
          >
            <div className="flex items-center gap-2.5">
              <StarRating rating={4.9} size={17} />
              <span className="text-sm text-cream/80">
                <strong className="font-semibold text-cream">4.9</strong> · Loved
                across the UAE
              </span>
            </div>
            <span className="hidden h-4 w-px bg-cream/25 sm:block" />
            <div className="flex items-center gap-2 text-sm text-cream/80">
              <CheckIcon className="h-5 w-5 text-rose-soft" />
              Dermatologically tested
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="animate-hero-fade absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        style={{ animationDelay: "1.6s" }}
      >
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
