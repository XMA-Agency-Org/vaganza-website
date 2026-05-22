import { cn } from "@/lib/utils";

/**
 * Consistent section header: optional eyebrow, a display title, and intro copy.
 * Pass `<em>` inside `title` for an italic, sage-toned emphasis.
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
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4 flex items-center gap-2.5",
            align === "center" && "justify-center",
            tone === "cream" ? "text-rose-soft" : "text-plum",
          )}
        >
          <span className="h-px w-7 bg-current opacity-50" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-[clamp(2rem,1.25rem+2.7vw,3.45rem)] leading-[1.08] tracking-[-0.02em] text-balance",
          "[&_em]:font-display [&_em]:italic",
          tone === "cream" ? "text-cream [&_em]:text-rose-soft" : "text-ink [&_em]:text-rose",
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-5 text-[1.05rem] leading-relaxed",
            tone === "cream" ? "text-cream/75" : "text-mauve",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
