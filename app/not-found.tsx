import { Button } from "@/components/ui/button";
import { LeafSprig } from "@/components/ui/decor";
import { LeafMark } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div
        aria-hidden
        className="absolute -top-24 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sage-soft/35 blur-[120px]"
      />
      <LeafSprig
        aria-hidden
        className="absolute top-10 left-8 hidden h-56 w-auto text-sage/15 lg:block"
      />
      <LeafSprig
        aria-hidden
        className="absolute right-8 bottom-10 hidden h-56 w-auto rotate-180 text-sage/15 lg:block"
      />

      <div className="container-x relative flex flex-col items-center text-center">
        <LeafMark className="h-12 w-12 text-sage" />
        <p className="eyebrow mt-6 text-sage">Page not found</p>
        <h1 className="mt-3 font-display text-[clamp(3.5rem,2rem+6vw,7rem)] leading-none tracking-[-0.03em] text-ink">
          404
        </h1>
        <p className="mt-4 max-w-md leading-relaxed text-stone">
          The page you&apos;re looking for has drifted away. Let&apos;s guide you
          back to something beautiful.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" size="lg">
            Return home
          </Button>
          <Button href="/shop" variant="secondary" size="lg">
            Explore the collection
          </Button>
        </div>
      </div>
    </section>
  );
}
