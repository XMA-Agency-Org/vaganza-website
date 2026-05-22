import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The Vaganza logo — the brand's real circular badge mark paired with a
 * Cormorant Garamond wordmark. A compact horizontal lockup that sits cleanly
 * in headers and footers. `tone="cream"` inverts it for dark backgrounds.
 */
export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
    >
      <Image
        src="/brand/mark.png"
        alt=""
        width={248}
        height={244}
        priority
        className={cn(
          "h-9 w-9 md:h-10 md:w-10",
          tone === "cream" && "brightness-0 invert",
        )}
      />
      <span
        className={cn(
          "font-display text-[1.7rem] leading-none font-medium tracking-[0.005em]",
          tone === "cream" ? "text-cream" : "text-ink",
        )}
      >
        Vaganza
      </span>
    </span>
  );
}

/**
 * The Vaganza leaf mark — a small two-leaf sprig used as a delicate accent
 * beside eyebrows and in the marquee.
 */
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

/** Compact circular monogram — for favicons and tight spaces. */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-plum text-cream",
        className,
      )}
    >
      <span className="font-display text-[0.95em] font-semibold leading-none">
        V
      </span>
    </span>
  );
}
