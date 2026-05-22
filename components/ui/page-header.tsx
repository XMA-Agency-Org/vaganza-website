import Link from "next/link";

/**
 * Consistent, editorial page header for interior pages (shop, about, contact).
 * Spacious and type-led — no decorative clutter.
 */
export function PageHeader({
  eyebrow,
  title,
  intro,
  current,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  current: string;
}) {
  return (
    <section className="bg-cream pt-14 pb-12 md:pt-24 md:pb-16">
      <div className="container-x">
        <nav className="flex items-center gap-2 text-sm text-mauve">
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
          <span aria-hidden>·</span>
          <span className="text-ink">{current}</span>
        </nav>

        <p className="eyebrow mt-10 flex items-center gap-3 text-rose">
          <span className="h-px w-9 bg-current opacity-60" />
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl font-display font-normal text-[clamp(2.6rem,1.6rem+3.7vw,5rem)] leading-[1.02] tracking-[-0.025em] text-balance text-ink">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-mauve">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
