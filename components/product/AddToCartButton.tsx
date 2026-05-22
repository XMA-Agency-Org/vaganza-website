"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart/cart-context";
import type { Product, ProductVariant } from "@/lib/shopify/types";
import { Button } from "../ui/button";
import { BagIcon, CheckIcon } from "../ui/icons";

/**
 * Adds a product variant to the bag and opens the drawer.
 * Falls back to the first available variant when none is passed explicitly.
 */
export function AddToCartButton({
  product,
  selectedVariant,
  quantity = 1,
  label = "Add to Bag",
  buttonVariant = "primary",
  size = "md",
  fullWidth = false,
  withIcon = false,
  className,
}: {
  product: Product;
  selectedVariant?: ProductVariant;
  quantity?: number;
  label?: string;
  buttonVariant?: "primary" | "secondary" | "dark" | "light";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  withIcon?: boolean;
  className?: string;
}) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const variant =
    selectedVariant ??
    product.variants.find((v) => v.available) ??
    product.variants[0];

  const soldOut = !variant || !variant.available;

  function handleAdd() {
    if (!variant) return;
    addItem(product, variant, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1800);
  }

  if (soldOut) {
    return (
      <Button
        variant="secondary"
        size={size}
        fullWidth={fullWidth}
        className={className}
        disabled
      >
        Sold Out
      </Button>
    );
  }

  return (
    <Button
      onClick={handleAdd}
      variant={buttonVariant}
      size={size}
      fullWidth={fullWidth}
      className={className}
      aria-label={`Add ${product.title} to bag`}
    >
      {justAdded ? (
        <>
          <CheckIcon className="h-[1.1em] w-[1.1em]" />
          Added to Bag
        </>
      ) : (
        <>
          {withIcon && <BagIcon className="h-[1.1em] w-[1.1em]" />}
          {label}
        </>
      )}
    </Button>
  );
}
