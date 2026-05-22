import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/shopify/types";
import { discountPercent, formatMoney } from "@/lib/utils";
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
  const saved = compareAt ? discountPercent(price.amount, compareAt.amount) : 0;
  const href = `/products/${product.handle}`;

  return (
    <article className="group flex flex-col">
      <Link
        href={href}
        className="relative block overflow-hidden rounded-2xl bg-linen"
        aria-label={product.title}
      >
        {/* Badges */}
        <div className="absolute top-5 left-5 z-10 flex flex-col items-start gap-2">
          {product.badge && (
            <span className="rounded-full bg-ink/90 px-3.5 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-cream uppercase">
              {product.badge}
            </span>
          )}
          {saved > 0 && (
            <span className="rounded-full bg-rose px-3.5 py-1.5 text-[0.62rem] font-semibold tracking-[0.16em] text-cream uppercase">
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
              sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
              className="h-full w-full object-cover transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          ) : (
            <ProductVisual
              accent={product.accent}
              title={product.title}
              sessions={product.sessions}
              className="h-full w-full transition-transform duration-[1.3s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
            />
          )}
        </div>
      </Link>

      {/* Info */}
      <div className="flex flex-1 flex-col pt-6">
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} size={14} />
          <span className="text-xs text-mauve">
            {product.reviewCount > 0
              ? `${product.rating.toFixed(1)} (${product.reviewCount})`
              : "New"}
          </span>
        </div>

        <h3 className="mt-3 font-display text-[1.65rem] leading-tight text-ink">
          <Link href={href} className="transition-colors hover:text-rose">
            {product.title}
          </Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[0.95rem] leading-relaxed text-mauve">
          {product.subtitle}
        </p>

        <div className="mt-4 flex items-baseline gap-2.5">
          <span className="font-display text-[1.45rem] text-ink">
            {formatMoney(price.amount, price.currencyCode)}
          </span>
          {compareAt && saved > 0 && (
            <span className="text-sm text-mauve line-through">
              {formatMoney(compareAt.amount, compareAt.currencyCode)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-6">
          <AddToCartButton
            product={product}
            size="md"
            buttonVariant="primary"
            fullWidth
            withIcon
          />
        </div>
      </div>
    </article>
  );
}
