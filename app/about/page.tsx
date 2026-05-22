import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeafSprig, OrganicBlob } from "@/components/ui/decor";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { LeafMark } from "@/components/ui/logo";
import { brandValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Vaganza crafts naturally-derived, dermatologically-minded skincare for delicate skin — built slowly, gently, and with quiet devotion in the UAE.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-linen pt-12 pb-16 md:pt-16 md:pb-20">
        <LeafSprig
          aria-hidden
          className="absolute -top-6 right-6 hidden h-64 w-auto text-plum/15 md:block"
        />
        <div className="container-x relative max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-mauve">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden>·</span>
            <span className="text-ink">About</span>
          </nav>
          <p className="eyebrow mt-6 text-plum">Our story</p>
          <h1 className="mt-3 font-display text-[clamp(2.3rem,1.5rem+3vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-balance text-ink">
            Skincare crafted with quiet devotion
          </h1>
          <p className="mt-5 text-[1.08rem] leading-relaxed text-mauve">
            Vaganza was founded on a simple belief — that every woman deserves
            skincare as gentle as it is luxurious. We create naturally-derived
            rituals for the skin that asks for the most care.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative isolate flex aspect-[4/5] items-center justify-center overflow-hidden rounded-[2.5rem] border border-line bg-rose-soft/30">
              <div className="absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum/35 blur-3xl" />
              <OrganicBlob
                aria-hidden
                className="absolute -bottom-10 -right-10 h-56 w-56 text-cream/50"
              />
              <LeafSprig
                aria-hidden
                className="absolute -top-8 left-6 h-3/4 w-auto text-plum/30"
              />
              <div className="relative flex flex-col items-center gap-4 px-8 text-center">
                <LeafMark className="h-14 w-14 text-plum" />
                <p className="font-display text-2xl text-ink">
                  Pure by nature
                </p>
                <p className="max-w-[14rem] text-sm leading-relaxed text-mauve">
                  Considered, gentle skincare — made for the delicate and the
                  deserving.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="eyebrow text-plum">Why Vaganza</p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,1.3rem+1.8vw,2.6rem)] leading-[1.12] tracking-[-0.02em] text-ink">
              Born from a belief that gentle should never mean less
            </h2>
            <div className="mt-5 flex flex-col gap-4 leading-relaxed text-mauve">
              <p>
                Delicate skin is often the most overlooked. Too many products
                ask it to choose between results and comfort — between feeling
                cared for and feeling calm. We didn&apos;t think that was fair.
              </p>
              <p>
                So Vaganza began with a different idea: naturally-derived
                actives, formulated slowly and deliberately, around what
                sensitive skin genuinely needs. Alpha Arbutin to brighten gently.
                Aloe Vera and Glycerin to soothe and hydrate. Collagen to restore
                softness. Nothing harsh, nothing it doesn&apos;t need.
              </p>
              <p>
                Today, Vaganza rituals are cared for by women across the UAE — a
                quiet act of self-care, delivered discreetly to the door.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-linen py-16 md:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="What we stand for"
            title={
              <>
                The principles behind every <em>ritual</em>
              </>
            }
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 100}>
                <div className="h-full rounded-[1.75rem] border border-line bg-cream p-7">
                  <span className="font-display text-3xl text-plum/40">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-mauve">
                    {value.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-wine py-16 text-cream md:py-20">
        <div className="container-x flex flex-col items-center gap-6 text-center">
          <LeafMark className="h-10 w-10 text-rose-soft" />
          <h2 className="max-w-xl font-display text-[clamp(1.7rem,1.2rem+1.8vw,2.6rem)] leading-[1.14] tracking-[-0.02em] text-balance">
            Begin a ritual your skin will quietly thank you for.
          </h2>
          <Button href="/shop" variant="light" size="lg">
            Explore the collection
          </Button>
        </div>
      </section>
    </>
  );
}
