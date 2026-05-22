import { NewsletterForm } from "../layout/NewsletterForm";
import { Reveal } from "../ui/reveal";

/** Email capture — the soft, final invitation to stay connected. */
export function Newsletter() {
  return (
    <section className="bg-wine py-20 text-cream md:py-28">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-rose-soft">The Vaganza circle</p>
          <h2 className="mt-7 font-display font-normal text-[clamp(2.2rem,1.4rem+2.8vw,3.9rem)] leading-[1.08] tracking-[-0.02em] text-balance text-cream">
            Skincare rituals & quiet luxuries, to your inbox
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-cream/70">
            Be first to know about new launches, gentle skincare notes, and
            moments made only for our circle.
          </p>
          <div className="mx-auto mt-9 max-w-md">
            <NewsletterForm tone="dark" />
          </div>
          <p className="mt-4 text-xs text-cream/45">
            No noise — only considered things. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
