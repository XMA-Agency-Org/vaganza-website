import Link from "next/link";
import { footerLinks, siteConfig, whatsappUrl } from "@/lib/site";
import { LeafBranch } from "../ui/decor";
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TiktokIcon,
  WhatsappIcon,
} from "../ui/icons";
import { Logo } from "../ui/logo";

const currentYear = new Date().getFullYear();

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="eyebrow text-sage-soft">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <LeafBranch className="pointer-events-none absolute -top-6 right-0 h-40 w-auto text-sage-soft/15" />

      <div className="container-x relative py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo tone="cream" />
            <p className="mt-4 text-[0.95rem] leading-relaxed text-cream/70">
              Naturally-derived, dermatologically-minded skincare for delicate
              skin. Pure botanicals and considered rituals — because every woman
              deserves luxurious care.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
                { Icon: TiktokIcon, href: siteConfig.social.tiktok, label: "TikTok" },
                { Icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Shop" links={footerLinks.shop} />
          <LinkColumn title="Company" links={footerLinks.company} />

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-sage-soft">Get in Touch</h3>
            <ul className="mt-4 flex flex-col gap-3.5">
              <li>
                <a
                  href={siteConfig.phoneHref}
                  className="flex items-start gap-3 text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
                >
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-soft" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl("Hello Vaganza, I'd like to ask about your products.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
                >
                  <WhatsappIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-soft" />
                  Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-[0.95rem] text-cream/70 transition-colors hover:text-cream"
                >
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-soft" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[0.95rem] text-cream/70">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sage-soft" />
                {siteConfig.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-5 border-t border-cream/15 pt-7 md:flex-row md:items-center md:justify-between">
          <p className="text-[0.82rem] text-cream/55">
            © {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {["Visa", "Mastercard", "Apple Pay", "Cash on Delivery"].map(
              (method) => (
                <span
                  key={method}
                  className="rounded-md border border-cream/15 px-2.5 py-1 text-[0.7rem] tracking-wide text-cream/60"
                >
                  {method}
                </span>
              ),
            )}
          </div>
          <div className="flex gap-5 text-[0.82rem] text-cream/55">
            <Link href="/contact" className="transition-colors hover:text-cream">
              Privacy
            </Link>
            <Link href="/contact" className="transition-colors hover:text-cream">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
