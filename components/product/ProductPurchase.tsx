"use client";

import { useState, useTransition } from "react";
import { createCheckout } from "@/lib/actions";
import type { Product } from "@/lib/shopify/types";
import { whatsappUrl } from "@/lib/site";
import { cn, discountPercent, formatMoney } from "@/lib/utils";
import { Button } from "../ui/button";
import { LockIcon, MinusIcon, PlusIcon, TruckIcon } from "../ui/icons";
import { AddToCartButton } from "./AddToCartButton";

/**
 * The product buy panel: price, variant options, quantity, and the
 * add-to-bag / buy-now actions. Buy Now goes straight to Shopify checkout
 * (or a WhatsApp order when Shopify isn't configured).
 */
export function ProductPurchase({ product }: { product: Product }) {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(() => {
    const initial: Record<string, string> = {};
    product.options.forEach((option) => {
      initial[option.name] = option.values[0];
    });
    return initial;
  });
  const [quantity, setQuantity] = useState(1);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const selectedVariant =
    product.variants.find((variant) =>
      variant.selectedOptions.every(
        (option) => selectedOptions[option.name] === option.value,
      ),
    ) ?? product.variants[0];

  const price = selectedVariant?.price ?? product.priceRange.min;
  const compareAt = selectedVariant?.compareAtPrice ?? null;
  const saved = compareAt
    ? discountPercent(price.amount, compareAt.amount)
    : 0;

  function handleBuyNow() {
    if (!selectedVariant) return;
    setError(null);
    startTransition(async () => {
      const result = await createCheckout([
        { variantId: selectedVariant.id, quantity },
      ]);
      if (result.ok) {
        window.location.href = result.url;
        return;
      }
      if (result.reason === "not-configured") {
        const total = formatMoney(
          parseFloat(price.amount) * quantity,
          price.currencyCode,
        );
        const message = `Hello Vaganza, I'd like to order:\n\n• ${product.title} ×${quantity} — ${total}\n\nPlease let me know how to complete my order. Thank you!`;
        window.open(whatsappUrl(message), "_blank", "noopener");
        return;
      }
      setError(result.message ?? "Something went wrong. Please try again.");
    });
  }

  return (
    <div>
      {/* Price */}
      <div className="flex flex-wrap items-baseline gap-3">
        <span className="font-display text-[2rem] leading-none text-ink">
          {formatMoney(price.amount, price.currencyCode)}
        </span>
        {compareAt && saved > 0 && (
          <>
            <span className="text-lg text-stone line-through">
              {formatMoney(compareAt.amount, compareAt.currencyCode)}
            </span>
            <span className="rounded-full bg-clay/15 px-2.5 py-1 text-xs font-semibold text-clay">
              Save {saved}%
            </span>
          </>
        )}
      </div>

      {/* Variant options */}
      {product.options
        .filter((option) => option.values.length > 1)
        .map((option) => (
          <div key={option.id} className="mt-6">
            <p className="text-sm font-medium text-ink">{option.name}</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {option.values.map((value) => {
                const isSelected = selectedOptions[option.name] === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      setSelectedOptions((prev) => ({
                        ...prev,
                        [option.name]: value,
                      }))
                    }
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm transition-all",
                      isSelected
                        ? "border-sage bg-sage text-cream"
                        : "border-line text-ink hover:border-ink",
                    )}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

      {/* Quantity */}
      <div className="mt-6">
        <p className="text-sm font-medium text-ink">Quantity</p>
        <div className="mt-2.5 inline-flex items-center rounded-full border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
          >
            <MinusIcon className="h-4 w-4" />
          </button>
          <span className="w-10 text-center tabular-nums">{quantity}</span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
          >
            <PlusIcon className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-7 flex flex-col gap-3">
        <AddToCartButton
          product={product}
          selectedVariant={selectedVariant}
          quantity={quantity}
          size="lg"
          fullWidth
          withIcon
        />
        <Button
          onClick={handleBuyNow}
          variant="dark"
          size="lg"
          fullWidth
          disabled={pending || !selectedVariant?.available}
        >
          {pending ? "Preparing checkout…" : "Buy it Now"}
        </Button>
      </div>
      {error && <p className="mt-2.5 text-xs text-clay">{error}</p>}

      {/* Reassurance */}
      <div className="mt-7 flex flex-col gap-2.5 border-t border-line pt-6">
        <p className="flex items-center gap-2.5 text-sm text-stone">
          <TruckIcon className="h-5 w-5 shrink-0 text-sage" />
          Free, discreet delivery across the UAE
        </p>
        <p className="flex items-center gap-2.5 text-sm text-stone">
          <LockIcon className="h-5 w-5 shrink-0 text-sage" />
          Secure checkout — your details always stay private
        </p>
      </div>
    </div>
  );
}
