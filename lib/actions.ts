"use server";

/**
 * Server Actions for the storefront.
 * Kept server-only so Shopify credentials never reach the client bundle.
 */

import { isShopifyConfigured, shopifyCreateCart } from "./shopify";

export type CheckoutLine = { variantId: string; quantity: number };

export type CheckoutResult =
  | { ok: true; url: string }
  | { ok: false; reason: "empty" | "not-configured" | "error"; message?: string };

/**
 * Creates a Shopify cart from the current line items and returns the hosted,
 * PCI-compliant Shopify checkout URL.
 *
 * When Shopify is not yet configured, returns `reason: "not-configured"` so the
 * client can fall back to a pre-filled WhatsApp order (a deliberate, working
 * fallback for the UAE market — not an error state).
 */
export async function createCheckout(
  lines: CheckoutLine[],
): Promise<CheckoutResult> {
  if (!lines.length) {
    return { ok: false, reason: "empty", message: "Your bag is empty." };
  }

  if (!isShopifyConfigured) {
    return { ok: false, reason: "not-configured" };
  }

  try {
    const url = await shopifyCreateCart(
      lines.map((l) => ({ merchandiseId: l.variantId, quantity: l.quantity })),
    );
    return { ok: true, url };
  } catch (error) {
    console.error("[checkout] failed:", error);
    return {
      ok: false,
      reason: "error",
      message:
        error instanceof Error
          ? error.message
          : "We couldn't start checkout. Please try again.",
    };
  }
}

export type SubscribeResult = { ok: boolean; message: string };

/**
 * Newsletter sign-up.
 *
 * ⚠️ INTEGRATION REQUIRED — this is a stub. It validates the email but does NOT
 * yet persist it anywhere. Before launch, connect a real provider (Shopify
 * Marketing / Klaviyo / Mailchimp) here so sign-ups are actually captured.
 */
export async function subscribeToNewsletter(
  _prev: SubscribeResult | null,
  formData: FormData,
): Promise<SubscribeResult> {
  const email = String(formData.get("email") || "").trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!valid) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  // TODO: persist `email` to your email marketing provider.
  console.log("[newsletter] sign-up (not yet persisted):", email);

  return {
    ok: true,
    message: "Welcome to the Vaganza circle — beautiful things ahead.",
  };
}
