import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * The Vaganza brand logo — the real "Secret Mask by Vaganza" lockup.
 * `tone="cream"` inverts it to white for use on dark backgrounds.
 */
export function Logo({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "cream";
}) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Vaganza"
      width={626}
      height={398}
      priority
      className={cn(
        "h-12 w-auto select-none md:h-[3.4rem]",
        tone === "cream" && "brightness-0 invert",
        className,
      )}
    />
  );
}

/**
 * The Vaganza leaf mark — a small two-leaf sprig used as a delicate accent
 * beside eyebrows, in the marquee, and as a fallback monogram.
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
