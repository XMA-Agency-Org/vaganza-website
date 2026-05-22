import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartProvider } from "@/lib/cart/cart-context";
import { siteConfig } from "@/lib/site";
import "./globals.css";

/** Soft, optical serif for display — chosen for its warm, organic character. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

/** Warm humanist sans for body copy and UI. */
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Luxurious Skincare, Naturally Crafted`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Vaganza",
    "luxury skincare UAE",
    "feminine skincare",
    "hydrogel treatment",
    "natural skincare Dubai",
    "Alpha Arbutin",
    "brightening skincare",
    "delicate skin care",
  ],
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Luxurious Skincare, Naturally Crafted`,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Luxurious Skincare, Naturally Crafted`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "shopping",
};

export const viewport: Viewport = {
  themeColor: "#fbf7ef",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream text-ink antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
