import { cn } from "@/lib/utils";

/**
 * Consistent section header: optional eyebrow, a large display title, and
 * intro copy. Pass `<em>` inside `title` for an italic, rose-toned emphasis.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "ink",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "center" | "left";
  tone?: "ink" | "cream";
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  const Tag = as;
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-6 flex items-center gap-3",
            align === "center" && "justify-center",
            tone === "cream" ? "text-rose-soft" : "text-rose",
          )}
        >
          <span className="h-px w-9 bg-current opacity-60" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display font-normal text-[clamp(2.5rem,1.5rem+3.6vw,4.6rem)] leading-[1.03] tracking-[-0.02em] text-balance",
          "[&_em]:italic",
          tone === "cream"
            ? "text-cream [&_em]:text-rose-soft"
            : "text-ink [&_em]:text-rose",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-6 text-[1.075rem] leading-relaxed",
            align === "center" && "mx-auto max-w-xl",
            tone === "cream" ? "text-cream/70" : "text-mauve",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
