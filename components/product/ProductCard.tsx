import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify/types";
import { cn, discountPercent, formatMoney } from "@/lib/utils";
import { StarRating } from "../ui/star-rating";
import { AddToCartButton } from "./AddToCartButton";
import { ProductVisual } from "./ProductVisual";

/** Product card for collection grids and the homepage showcase. */
export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const price = product.priceRange.min;
  const compareAt = product.variants[0]?.compareAtPrice ?? null;
  const saved = compareAt
    ? discountPercent(price.amount, compareAt.amount)
    : 0;
  const href = `/products/${product.handle}`;

  return (
    <article className="group flex flex-col">
      <Link
        href={href}
        className="relative block overflow-hidden rounded-[1.75rem] border border-line bg-linen"
        aria-label={product.title}
      >
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col items-start gap-2">
          {product.badge && (
            <span className="rounded-full bg-ink/90 px-3 py-1 text-[0.66rem] font-semibold tracking-[0.12em] text-cream uppercase">
              {product.badge}
            </span>
          )}
          {saved > 0 && (
            <span className="rounded-full bg-rose px-3 py-1 text-[0.66rem] font-semibold tracking-[0.12em] text-cream uppercase">
              Save {saved}%
            </span>
          )}
        </div>

        <div className="aspect-[4/5] w-full overflow-hidden">
          {product.featuredImage ? (
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText}
              width={product.featuredImage.width}
              height={product.featuredImage.height}
              priority={priority}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
          ) : (
            <ProductVisual
              accent={product.accent}
              title={product.title}
              sessions={product.sessions}
              className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
            />
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col px-1 pt-5">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={14} />
          <span className="text-xs text-mauve">
            {product.reviewCount > 0
              ? `${product.rating.toFixed(1)} (${product.reviewCount})`
              : "New"}
          </span>
        </div>

        <h3 className="mt-2 font-display text-xl leading-tight text-ink">
          <Link href={href} className="transition-colors hover:text-plum">
            {product.title}
          </Link>
        </h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-mauve">
          {product.subtitle}
        </p>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-lg text-ink">
            {formatMoney(price.amount, price.currencyCode)}
          </span>
          {compareAt && saved > 0 && (
            <span className="text-sm text-mauve line-through">
              {formatMoney(compareAt.amount, compareAt.currencyCode)}
            </span>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <AddToCartButton
            product={product}
            size="sm"
            buttonVariant="primary"
            fullWidth
            withIcon
          />
          <Link
            href={href}
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-full border border-line px-5 text-sm",
              "text-ink transition-colors hover:border-ink",
            )}
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
