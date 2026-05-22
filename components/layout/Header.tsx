"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart/cart-context";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { BagIcon, CloseIcon, MenuIcon, PhoneIcon } from "../ui/icons";
import { Logo } from "../ui/logo";

export function Header() {
  const pathname = usePathname();
  const { count, hydrated, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add a hairline + lift once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href.startsWith("/#")
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 bg-cream/95 backdrop-blur-md transition-shadow duration-300",
        scrolled
          ? "border-b border-line shadow-[0_10px_30px_-22px_rgba(47,32,39,0.5)]"
          : "border-b border-transparent",
      )}
    >
      <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        {/* Left — mobile toggle + logo */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="-ml-1.5 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] md:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          <Link href="/" aria-label="Vaganza — home">
            <Logo />
          </Link>
        </div>

        {/* Center — desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "link-underline text-[0.92rem] font-medium transition-colors",
                isActive(link.href) ? "text-rose" : "text-ink hover:text-rose",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right — actions */}
        <div className="flex items-center gap-1">
          <a
            href={siteConfig.phoneHref}
            aria-label="Call Vaganza"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] lg:flex"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            onClick={openCart}
            aria-label={`Open bag, ${count} items`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
          >
            <BagIcon className="h-6 w-6" />
            {hydrated && count > 0 && (
              <span className="absolute top-0.5 right-0.5 flex h-[1.15rem] min-w-[1.15rem] items-center justify-center rounded-full bg-rose px-1 text-[0.66rem] font-semibold text-cream">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] md:hidden",
          menuOpen ? "" : "pointer-events-none",
        )}
        aria-hidden={!menuOpen}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/45 backdrop-blur-[2px] transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <nav
          className={cn(
            "absolute top-0 left-0 flex h-full w-[82%] max-w-sm flex-col bg-cream transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <Logo />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06]"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-4 py-3 font-display text-2xl transition-colors",
                  isActive(link.href)
                    ? "bg-linen text-rose"
                    : "text-ink hover:bg-linen",
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-line px-6 py-5">
            <p className="text-sm text-mauve">Speak with our team</p>
            <a
              href={siteConfig.phoneHref}
              className="mt-1 flex items-center gap-2 font-display text-lg text-ink"
            >
              <PhoneIcon className="h-5 w-5 text-rose" />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
