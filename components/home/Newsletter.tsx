import { NewsletterForm } from "../layout/NewsletterForm";
import { LeafBranch } from "../ui/decor";
import { LeafMark } from "../ui/logo";
import { Reveal } from "../ui/reveal";

/** Email capture — the soft, final call to stay connected. */
export function Newsletter() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream md:py-24">
      <LeafBranch
        aria-hidden
        className="absolute -top-4 -left-10 h-44 w-auto text-sage-soft/15"
      />
      <LeafBranch
        aria-hidden
        className="absolute -right-10 -bottom-6 h-44 w-auto rotate-180 text-sage-soft/15"
      />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow flex items-center justify-center gap-2.5 text-sage-soft">
            <LeafMark className="h-4 w-4" />
            The Vaganza circle
          </p>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,1.3rem+2.2vw,2.85rem)] leading-[1.12] tracking-[-0.02em] text-balance text-cream">
            Skincare rituals & quiet luxuries, to your inbox
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-cream/70">
            Be first to know about new launches, gentle skincare notes, and
            moments made only for our circle.
          </p>
          <div className="mx-auto mt-8 max-w-md">
            <NewsletterForm tone="dark" />
          </div>
          <p className="mt-3 text-xs text-cream/45">
            No noise — only considered things. Unsubscribe anytime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
