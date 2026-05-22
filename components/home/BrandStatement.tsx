import { Reveal } from "../ui/reveal";

/** A calm, editorial statement of the brand's belief — a moment to breathe. */
export function BrandStatement() {
  return (
    <section className="bg-cream py-32 md:py-48">
      <div className="container-x">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-9 text-rose">Our belief</p>
          <p className="font-display text-[clamp(2rem,1.15rem+3.1vw,3.75rem)] leading-[1.24] tracking-[-0.015em] text-balance text-ink">
            Pure by nature, exceptional by Vaganza. We craft skincare that
            treats delicate skin with the gentleness —{" "}
            <em className="italic text-rose">and the luxury</em> — it has always
            deserved.
          </p>
          <div className="mt-11 flex items-center justify-center gap-3 text-xs tracking-[0.26em] text-mauve uppercase">
            <span className="h-px w-10 bg-line" />
            The Vaganza promise
            <span className="h-px w-10 bg-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
