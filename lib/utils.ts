/** Small, dependency-free helpers shared across the app. */

/** Joins class names, dropping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a money value for the UAE storefront.
 * Whole numbers render without decimals (e.g. "AED 89"); otherwise two decimals.
 */
export function formatMoney(
  amount: string | number,
  currencyCode = "AED",
): string {
  const value = typeof amount === "string" ? parseFloat(amount) : amount;
  if (Number.isNaN(value)) return `${currencyCode} 0`;
  const hasFraction = value % 1 !== 0;
  const formatted = value.toLocaleString("en-AE", {
    minimumFractionDigits: hasFraction ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return `${currencyCode} ${formatted}`;
}

/** Percentage saved between a compare-at price and the current price. */
export function discountPercent(
  price: string | number,
  compareAt: string | number,
): number {
  const p = typeof price === "string" ? parseFloat(price) : price;
  const c = typeof compareAt === "string" ? parseFloat(compareAt) : compareAt;
  if (!c || c <= p) return 0;
  return Math.round(((c - p) / c) * 100);
}

/** Builds a stable cart-line key from a variant id. */
export function lineKey(variantId: string): string {
  return variantId;
}
