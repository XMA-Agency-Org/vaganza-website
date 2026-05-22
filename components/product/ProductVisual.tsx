import { cn } from "@/lib/utils";
import { LeafSprig } from "../ui/decor";
import { LeafMark } from "../ui/logo";

type Accent = "sage" | "blush" | "clay";

const ACCENTS: Record<
  Accent,
  { field: string; glow: string; mark: string; seam: string }
> = {
  sage: {
    field: "bg-rose-soft/35",
    glow: "bg-plum/40",
    mark: "text-plum",
    seam: "bg-plum/25",
  },
  blush: {
    field: "bg-petal/55",
    glow: "bg-rose/45",
    mark: "text-rose",
    seam: "bg-rose/30",
  },
  clay: {
    field: "bg-rose/18",
    glow: "bg-rose/30",
    mark: "text-rose",
    seam: "bg-rose/25",
  },
};

/**
 * A designed stand-in for product photography.
 *
 * It renders a stylised hydrogel-treatment sachet on a soft botanical field,
 * tinted to the product's accent. Used wherever a live Shopify image is not
 * available (i.e. the mock catalogue) so the storefront never shows a broken
 * or empty image — real photos take over automatically once Shopify is wired.
 */
export function ProductVisual({
  accent,
  title,
  sessions,
  className,
  sprig = true,
}: {
  accent: Accent;
  title: string;
  sessions: number;
  className?: string;
  sprig?: boolean;
}) {
  const a = ACCENTS[accent];

  return (
    <div
      className={cn(
        "relative isolate flex items-center justify-center overflow-hidden",
        a.field,
        className,
      )}
      role="img"
      aria-label={`${title} — Vaganza hydrogel treatment`}
    >
      {/* Soft radial glow */}
      <div
        className={cn(
          "absolute left-1/2 top-1/2 -z-10 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 blur-3xl",
          a.glow,
        )}
      />

      {/* Botanical sprigs */}
      {sprig && (
        <>
          <LeafSprig
            className={cn(
              "absolute -right-8 -top-12 h-[78%] w-auto opacity-25",
              a.mark,
            )}
          />
          <LeafSprig
            className={cn(
              "absolute -bottom-16 -left-10 h-[58%] w-auto rotate-180 opacity-[0.18]",
              a.mark,
            )}
          />
        </>
      )}

      {/* Floating accent dots */}
      <span className="absolute left-[14%] top-[20%] h-2.5 w-2.5 rounded-full bg-cream/70 blur-[1px]" />
      <span className="absolute right-[16%] bottom-[24%] h-3.5 w-3.5 rounded-full bg-cream/55 blur-[1px]" />

      {/* The sachet */}
      <div className="relative w-[46%] min-w-[110px]">
        {/* Cast shadow */}
        <div className="absolute -bottom-4 left-1/2 h-7 w-[80%] -translate-x-1/2 rounded-[100%] bg-ink/15 blur-xl" />

        <div className="relative aspect-[7/10] overflow-hidden rounded-[1.5rem] border border-cream/70 bg-linear-to-b from-white to-linen shadow-[0_22px_45px_-22px_rgba(43,42,36,0.5)]">
          {/* Glossy highlight */}
          <div className="absolute -left-1/3 -top-1/4 h-[150%] w-1/2 -rotate-[24deg] bg-linear-to-b from-white/80 to-transparent opacity-70" />

          {/* Top crimp seam */}
          <div
            className={cn(
              "absolute left-1/2 top-3 h-1 w-[58%] -translate-x-1/2 rounded-full",
              a.seam,
            )}
          />

          {/* Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-3 text-center">
            <LeafMark className={cn("h-6 w-6", a.mark)} />
            <span className="font-display text-[0.78rem] font-semibold tracking-[0.26em] text-ink">
              VAGANZA
            </span>
            <span className={cn("h-px w-7", a.seam)} />
            <span className={cn("text-[0.66rem] font-semibold tracking-[0.14em] uppercase", a.mark)}>
              {sessions} {sessions === 1 ? "Session" : "Sessions"}
            </span>
            <span className="text-[0.6rem] tracking-[0.1em] text-mauve uppercase">
              Hydrogel Treatment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
