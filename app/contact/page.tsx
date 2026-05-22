import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";
import { LeafSprig } from "@/components/ui/decor";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TruckIcon,
  WhatsappIcon,
} from "@/components/ui/icons";
import { siteConfig, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Vaganza team — by phone, WhatsApp or email. We're here to help you choose the right skincare ritual for your skin.",
  alternates: { canonical: "/contact" },
};

const methods = [
  {
    icon: PhoneIcon,
    label: "Call us",
    value: siteConfig.phoneDisplay,
    href: siteConfig.phoneHref,
    external: false,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "Chat with our team",
    href: whatsappUrl("Hello Vaganza, I'd like to ask a question."),
    external: true,
  },
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-linen pt-12 pb-16 md:pt-16 md:pb-20">
        <LeafSprig
          aria-hidden
          className="absolute -top-6 right-6 hidden h-64 w-auto text-plum/15 md:block"
        />
        <div className="container-x relative max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-mauve">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden>·</span>
            <span className="text-ink">Contact</span>
          </nav>
          <p className="eyebrow mt-6 text-plum">We&apos;re here for you</p>
          <h1 className="mt-3 font-display text-[clamp(2.3rem,1.5rem+3vw,3.8rem)] leading-[1.06] tracking-[-0.02em] text-balance text-ink">
            Let&apos;s talk skincare
          </h1>
          <p className="mt-5 text-[1.08rem] leading-relaxed text-mauve">
            Whether you have a question about a product, need help choosing a
            ritual, or want to follow up on an order — our team would love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-2xl text-ink">Reach us directly</h2>
            <p className="mt-2 leading-relaxed text-mauve">
              Prefer to talk? Choose whichever way suits you best.
            </p>

            <div className="mt-7 flex flex-col gap-3">
              {methods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-linen p-5 transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-plum/12 text-plum transition-colors group-hover:bg-plum group-hover:text-cream">
                    <method.icon className="h-6 w-6" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.12em] text-mauve uppercase">
                      {method.label}
                    </span>
                    <span className="font-display text-lg text-ink">
                      {method.value}
                    </span>
                  </span>
                </a>
              ))}

              <div className="flex items-center gap-4 rounded-2xl border border-line bg-linen p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-plum/12 text-plum">
                  <MapPinIcon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs tracking-[0.12em] text-mauve uppercase">
                    Location
                  </span>
                  <span className="font-display text-lg text-ink">
                    {siteConfig.location}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-2xl bg-plum/10 p-5">
              <TruckIcon className="mt-0.5 h-6 w-6 shrink-0 text-plum" />
              <p className="text-sm leading-relaxed text-mauve">
                <strong className="font-semibold text-ink">
                  Free, discreet delivery
                </strong>{" "}
                to every emirate in the UAE — on every order, with no minimum
                spend.
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-5 font-display text-2xl text-ink">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
