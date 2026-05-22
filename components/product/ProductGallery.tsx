"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/shopify/types";
import { cn } from "@/lib/utils";
import { ProductVisual } from "./ProductVisual";

/**
 * Product image gallery with thumbnail navigation.
 * Falls back to the designed {@link ProductVisual} when no photos exist.
 */
export function ProductGallery({ product }: { product: Product }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { images } = product;

  if (images.length === 0) {
    return (
      <div className="overflow-hidden rounded-[2rem] border border-line">
        <ProductVisual
          accent={product.accent}
          title={product.title}
          sessions={product.sessions}
          className="aspect-square w-full"
        />
      </div>
    );
  }

  const active = images[activeIndex] ?? images[0];

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-line bg-linen">
        <Image
          src={active.url}
          alt={active.altText}
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={`${image.url}-${index}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
              className={cn(
                "relative aspect-square overflow-hidden rounded-xl border transition-all",
                index === activeIndex
                  ? "border-sage ring-1 ring-sage"
                  : "border-line hover:border-ink/40",
              )}
            >
              <Image
                src={image.url}
                alt={image.altText}
                fill
                sizes="140px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
