import { cn } from "@/lib/utils";
import { StarIcon } from "./icons";

/**
 * Five-star rating with fractional fill (e.g. 4.8 stars).
 * The filled layer is clipped to a percentage of the empty layer beneath it.
 */
export function StarRating({
  rating,
  size = 16,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const stars = [0, 1, 2, 3, 4];
  const dimension = { width: size, height: size };

  return (
    <span
      className={cn("relative inline-flex shrink-0", className)}
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      <span className="flex text-stone/25">
        {stars.map((i) => (
          <StarIcon key={i} style={dimension} />
        ))}
      </span>
      <span
        className="absolute inset-0 flex overflow-hidden text-clay"
        style={{ width: `${pct}%` }}
      >
        {stars.map((i) => (
          <StarIcon key={i} className="shrink-0" style={dimension} />
        ))}
      </span>
    </span>
  );
}
