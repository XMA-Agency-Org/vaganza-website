import { cn } from "@/lib/utils";
import { LeafMark } from "./logo";

/**
 * Seamless, infinitely-scrolling text marquee.
 * The track holds two copies of the items and translates by -50%, so the loop
 * is gapless. Hovering pauses it. Pure CSS — no JavaScript.
 */
export function Marquee({
  items,
  className,
  tone = "ink",
}: {
  items: string[];
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <div
      className={cn("flex overflow-hidden", className)}
      role="presentation"
      aria-hidden="true"
    >
      <div className="flex w-max shrink-0 animate-marquee items-center hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <span key={item} className="flex shrink-0 items-center">
                <span
                  className={cn(
                    "px-7 text-[0.82rem] font-medium tracking-[0.16em] uppercase whitespace-nowrap",
                    tone === "cream" ? "text-cream/85" : "text-ink/75",
                  )}
                >
                  {item}
                </span>
                <LeafMark
                  className={cn(
                    "h-3.5 w-3.5 shrink-0",
                    tone === "cream" ? "text-sage-soft" : "text-sage",
                  )}
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
