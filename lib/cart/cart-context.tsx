"use client";

/**
 * Client-side shopping bag.
 *
 * Lines are held in React state and mirrored to localStorage so the bag
 * survives reloads. Checkout itself is delegated to Shopify's hosted checkout
 * (via the `createCheckout` server action) — this context only manages the
 * pre-checkout bag UI.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { CartLine, Product, ProductVariant } from "../shopify/types";

const STORAGE_KEY = "vaganza:cart:v1";

type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  currencyCode: string;
  isOpen: boolean;
  hydrated: boolean;
  addItem: (product: Product, variant: ProductVariant, quantity?: number) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  removeItem: (variantId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Restore the bag from localStorage on first mount.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      // Corrupt storage — start with an empty bag.
    }
    setHydrated(true);
  }, []);

  // Persist the bag whenever it changes (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // Storage unavailable (private mode / quota) — bag stays in-memory.
    }
  }, [lines, hydrated]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const addItem = useCallback(
    (product: Product, variant: ProductVariant, quantity = 1) => {
      setLines((current) => {
        const existing = current.find((l) => l.variantId === variant.id);
        if (existing) {
          return current.map((l) =>
            l.variantId === variant.id
              ? { ...l, quantity: l.quantity + quantity }
              : l,
          );
        }
        const line: CartLine = {
          variantId: variant.id,
          productId: product.id,
          handle: product.handle,
          title: product.title,
          variantTitle: variant.title,
          price: variant.price,
          image: product.featuredImage,
          accent: product.accent,
          quantity,
        };
        return [...current, line];
      });
      setIsOpen(true);
    },
    [],
  );

  const updateQuantity = useCallback((variantId: string, quantity: number) => {
    setLines((current) =>
      quantity <= 0
        ? current.filter((l) => l.variantId !== variantId)
        : current.map((l) =>
            l.variantId === variantId ? { ...l, quantity } : l,
          ),
    );
  }, []);

  const removeItem = useCallback((variantId: string) => {
    setLines((current) => current.filter((l) => l.variantId !== variantId));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const count = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  );
  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + parseFloat(l.price.amount) * l.quantity, 0),
    [lines],
  );
  const currencyCode = lines[0]?.price.currencyCode ?? "AED";

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count,
      subtotal,
      currencyCode,
      isOpen,
      hydrated,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openCart,
      closeCart,
    }),
    [
      lines,
      count,
      subtotal,
      currencyCode,
      isOpen,
      hydrated,
      addItem,
      updateQuantity,
      removeItem,
      clearCart,
      openCart,
      closeCart,
    ],
  );

  return <CartContext value={value}>{children}</CartContext>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a <CartProvider>.");
  }
  return ctx;
}
