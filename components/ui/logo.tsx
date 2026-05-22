import { cn } from "@/lib/utils";

/** The Vaganza leaf mark — a small two-leaf sprig used beside the wordmark. */
export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 36C20 24 14 16 5 13C5 25 11 33 20 36Z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M20 36C20 22 26 12 35 8C35 22 29 32 20 36Z"
        fill="currentColor"
      />
      <path
        d="M20 36V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/**
 * Brand wordmark. `tone` controls colour against light or dark backgrounds.
 */
export function Logo({
  className,
  tone = "ink",
  showMark = true,
}: {
  className?: string;
  tone?: "ink" | "cream";
  showMark?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 select-none",
        tone === "cream" ? "text-cream" : "text-ink",
        className,
      )}
    >
      {showMark && (
        <LeafMark className="h-[1.15em] w-[1.15em] text-sage shrink-0" />
      )}
      <span className="font-display text-[1.45rem] leading-none font-semibold tracking-[-0.01em]">
        Vaganza
      </span>
    </span>
  );
}

/** Compact circular monogram — for favicons and tight spaces. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-sage text-cream",
        className,
      )}
    >
      <span className="font-display text-[0.95em] font-semibold leading-none">
        V
      </span>
    </span>
  );
}
