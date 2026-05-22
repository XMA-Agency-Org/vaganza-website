import { LeafSprig } from "../ui/decor";
import { LeafMark } from "../ui/logo";
import { Reveal } from "../ui/reveal";

/** A calm, editorial statement of the brand's belief. */
export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <LeafSprig
        aria-hidden
        className="absolute top-1/2 -left-8 hidden h-72 w-auto -translate-y-1/2 text-plum/[0.13] lg:block"
      />
      <LeafSprig
        aria-hidden
        className="absolute top-1/2 -right-8 hidden h-72 w-auto -translate-y-1/2 rotate-180 text-plum/[0.13] lg:block"
      />

      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow flex items-center justify-center gap-2.5 text-plum">
            <LeafMark className="h-4 w-4" />
            Our belief
          </p>
          <p className="mt-7 font-display text-[clamp(1.65rem,1.05rem+2.3vw,2.85rem)] leading-[1.28] tracking-[-0.02em] text-balance text-ink">
            Pure by nature, exceptional by Vaganza. We craft skincare that treats
            delicate skin with the gentleness —{" "}
            <em className="italic text-rose">and the luxury</em> — it has always
            deserved.
          </p>
          <div className="mt-9 flex items-center justify-center gap-3 text-sm tracking-[0.16em] text-mauve uppercase">
            <span className="h-px w-8 bg-line" />
            The Vaganza promise
            <span className="h-px w-8 bg-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
