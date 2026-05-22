import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { brandValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Vaganza crafts naturally-derived, dermatologically-tested intimate skincare for delicate skin — built slowly, gently, and with quiet devotion in the UAE.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        current="About"
        eyebrow="Our story"
        title="Skincare crafted with quiet devotion"
        intro="Vaganza was founded on a simple belief — that every woman deserves skincare as gentle as it is luxurious."
      />

      {/* Story */}
      <section className="bg-linen py-24 md:py-36">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] shadow-[0_50px_90px_-50px_rgba(47,32,39,0.55)]">
              <Image
                src="/brand/lifestyle.jpg"
                alt="Women of every age, cared for by Vaganza"
                fill
                sizes="(min-width: 1024px) 44vw, 90vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="eyebrow flex items-center gap-3 text-rose">
              <span className="h-px w-9 bg-current opacity-60" />
              Why Vaganza
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,1.4rem+2.2vw,3.1rem)] leading-[1.08] tracking-[-0.02em] text-ink">
              Born from a belief that gentle should never mean less
            </h2>
            <div className="mt-7 flex flex-col gap-5 leading-relaxed text-mauve">
              <p>
                Delicate skin is often the most overlooked. Too many products ask
                it to choose between results and comfort — between feeling cared
                for and feeling calm. We didn&apos;t think that was fair.
              </p>
              <p>
                So Vaganza began with a different idea: naturally-derived actives,
                formulated slowly and deliberately, around what sensitive skin
                genuinely needs. Alpha Arbutin to brighten gently. Aloe Vera and
                Glycerin to soothe and hydrate. Collagen to restore softness.
                Nothing harsh, nothing it doesn&apos;t need.
              </p>
              <p>
                Today, the Vaganza Secret Mask is cared for by women across the
                UAE — a quiet act of self-care, delivered discreetly to the door.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-24 md:py-36">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                The principles behind every <em>ritual</em>
              </>
            }
          />
          <div className="mt-16 grid gap-x-10 gap-y-12 md:mt-20 md:grid-cols-3">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 130}>
                <div className="border-t border-line pt-8">
                  <span className="font-display text-5xl leading-none text-rose/30">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-[1.7rem] leading-snug text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-mauve">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-petal py-24 md:py-32">
        <div className="container-x flex flex-col items-center gap-7 text-center">
          <p className="eyebrow text-rose">Begin your ritual</p>
          <h2 className="max-w-2xl font-display font-normal text-[clamp(2rem,1.4rem+2.4vw,3.4rem)] leading-[1.1] tracking-[-0.02em] text-balance text-ink">
            A ritual your skin will quietly thank you for.
          </h2>
          <Button href="/shop" size="lg">
            Explore the collection
          </Button>
        </div>
      </section>
    </>
  );
}
