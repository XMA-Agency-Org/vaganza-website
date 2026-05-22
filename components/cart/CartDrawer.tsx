"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useTransition } from "react";
import { createCheckout } from "@/lib/actions";
import { useCart } from "@/lib/cart/cart-context";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { cn, formatMoney } from "@/lib/utils";
import type { CartLine } from "@/lib/shopify/types";
import { Button } from "../ui/button";
import { BagIcon, CheckIcon, CloseIcon, MinusIcon, PlusIcon } from "../ui/icons";
import { LeafMark } from "../ui/logo";

const ACCENT_BG: Record<CartLine["accent"], string> = {
  sage: "bg-sage-soft/45 text-sage",
  blush: "bg-blush/65 text-blush-deep",
  clay: "bg-clay/15 text-clay",
};

/** Builds a pre-filled WhatsApp order message (used when Shopify isn't wired). */
function buildOrderMessage(lines: CartLine[], subtotal: number): string {
  const items = lines
    .map((l) => {
      const variant =
        l.variantTitle && l.variantTitle !== "Default"
          ? ` (${l.variantTitle})`
          : "";
      const total = formatMoney(
        parseFloat(l.price.amount) * l.quantity,
        l.price.currencyCode,
      );
      return `• ${l.title}${variant} ×${l.quantity} — ${total}`;
    })
    .join("\n");
  return `Hello Vaganza, I'd like to place an order:\n\n${items}\n\nSubtotal: ${formatMoney(
    subtotal,
  )}\n\nPlease let me know how to complete my order. Thank you!`;
}

export function CartDrawer() {
  const {
    lines,
    count,
    subtotal,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
  } = useCart();
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  // Close on Escape.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  function handleCheckout() {
    setError(null);
    startTransition(async () => {
      const result = await createCheckout(
        lines.map((l) => ({ variantId: l.variantId, quantity: l.quantity })),
      );
      if (result.ok) {
        window.location.href = result.url;
        return;
      }
      if (result.reason === "not-configured") {
        // Graceful fallback: hand the order off via WhatsApp.
        window.open(
          whatsappUrl(buildOrderMessage(lines, subtotal)),
          "_blank",
          "noopener",
        );
        return;
      }
      setError(result.message ?? "Something went wrong. Please try again.");
    });
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90]",
        isOpen ? "" : "pointer-events-none",
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={cn(
          "absolute inset-0 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-400",
          isOpen ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping bag"
        className={cn(
          "absolute top-0 right-0 flex h-full w-full max-w-[27rem] flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b border-line px-6 py-5">
          <div className="flex items-baseline gap-2">
            <h2 className="font-display text-xl text-ink">Your Bag</h2>
            <span className="text-sm text-stone">
              ({count} {count === 1 ? "item" : "items"})
            </span>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close bag"
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </header>

        {lines.length === 0 ? (
          /* Empty state */
          <div className="flex flex-1 flex-col items-center justify-center gap-5 px-8 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-linen text-sage">
              <BagIcon className="h-8 w-8" />
            </span>
            <div>
              <p className="font-display text-xl text-ink">Your bag is empty</p>
              <p className="mt-1.5 text-sm text-stone">
                Begin your Vaganza ritual — your skin will thank you.
              </p>
            </div>
            <Button href="/shop" onClick={closeCart} size="md">
              Discover the ritual
            </Button>
          </div>
        ) : (
          <>
            {/* Lines */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <ul className="flex flex-col gap-5">
                {lines.map((line) => (
                  <li key={line.variantId} className="flex gap-4">
                    <div
                      className={cn(
                        "relative h-24 w-[4.6rem] shrink-0 overflow-hidden rounded-xl",
                        ACCENT_BG[line.accent],
                      )}
                    >
                      {line.image ? (
                        <Image
                          src={line.image.url}
                          alt={line.image.altText}
                          fill
                          sizes="74px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center">
                          <LeafMark className="h-7 w-7" />
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <Link
                          href={`/products/${line.handle}`}
                          onClick={closeCart}
                          className="font-display text-[1.02rem] leading-tight text-ink hover:text-sage"
                        >
                          {line.title}
                        </Link>
                        <span className="text-sm font-medium text-ink">
                          {formatMoney(
                            parseFloat(line.price.amount) * line.quantity,
                            line.price.currencyCode,
                          )}
                        </span>
                      </div>
                      {line.variantTitle && line.variantTitle !== "Default" && (
                        <span className="mt-0.5 text-xs text-stone">
                          {line.variantTitle}
                        </span>
                      )}

                      <div className="mt-auto flex items-center justify-between pt-3">
                        {/* Quantity stepper */}
                        <div className="flex items-center rounded-full border border-line">
                          <button
                            onClick={() =>
                              updateQuantity(line.variantId, line.quantity - 1)
                            }
                            aria-label="Decrease quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
                          >
                            <MinusIcon className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-7 text-center text-sm tabular-nums">
                            {line.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(line.variantId, line.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="flex h-8 w-8 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
                          >
                            <PlusIcon className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(line.variantId)}
                          className="text-xs text-stone underline-offset-4 transition-colors hover:text-clay hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <footer className="border-t border-line bg-linen px-6 py-5">
              <p className="mb-3 flex items-center justify-center gap-2 text-[0.8rem] text-sage">
                <CheckIcon className="h-4 w-4" />
                Free, discreet delivery across the UAE included
              </p>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm text-stone">Subtotal</span>
                <span className="font-display text-xl text-ink">
                  {formatMoney(subtotal)}
                </span>
              </div>
              {error && (
                <p className="mb-3 text-center text-xs text-clay">{error}</p>
              )}
              <Button
                onClick={handleCheckout}
                fullWidth
                size="lg"
                disabled={pending}
              >
                {pending ? "Preparing checkout…" : "Proceed to Checkout"}
              </Button>
              <button
                onClick={closeCart}
                className="mt-3 w-full text-center text-sm text-stone underline-offset-4 hover:text-ink hover:underline"
              >
                Continue shopping
              </button>
              <p className="mt-3 text-center text-[0.7rem] text-stone/80">
                Secure checkout · Need help? {siteConfig.phoneDisplay}
              </p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
