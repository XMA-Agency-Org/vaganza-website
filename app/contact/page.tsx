import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { PageHeader } from "@/components/ui/page-header";
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
      <PageHeader
        current="Contact"
        eyebrow="We're here for you"
        title="Let's talk skincare"
        intro="A question about a product, help choosing a ritual, or a note about an order — our team would love to hear from you."
      />

      <section className="bg-cream pb-24 md:pb-36">
        <div className="container-x grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Contact details */}
          <div>
            <h2 className="font-display text-[1.9rem] leading-tight text-ink">
              Reach us directly
            </h2>
            <p className="mt-2 leading-relaxed text-mauve">
              Choose whichever way suits you best — we reply within hours, seven
              days a week.
            </p>

            <div className="mt-9 border-b border-line">
              {methods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center gap-5 border-t border-line py-6"
                >
                  <method.icon className="h-6 w-6 shrink-0 text-rose" />
                  <span className="flex-1">
                    <span className="block text-[0.7rem] tracking-[0.2em] text-mauve uppercase">
                      {method.label}
                    </span>
                    <span className="font-display text-[1.45rem] text-ink transition-colors group-hover:text-rose">
                      {method.value}
                    </span>
                  </span>
                </a>
              ))}
              <div className="flex items-center gap-5 border-t border-line py-6">
                <MapPinIcon className="h-6 w-6 shrink-0 text-rose" />
                <span className="flex-1">
                  <span className="block text-[0.7rem] tracking-[0.2em] text-mauve uppercase">
                    Location
                  </span>
                  <span className="font-display text-[1.45rem] text-ink">
                    {siteConfig.location}
                  </span>
                </span>
              </div>
            </div>

            <p className="mt-7 flex items-start gap-3 text-sm leading-relaxed text-mauve">
              <TruckIcon className="mt-0.5 h-5 w-5 shrink-0 text-rose" />
              <span>
                <strong className="font-semibold text-ink">
                  Free, discreet delivery
                </strong>{" "}
                to every emirate in the UAE — on every order, with no minimum
                spend.
              </span>
            </p>
          </div>

          {/* Form */}
          <div>
            <h2 className="mb-6 font-display text-[1.9rem] leading-tight text-ink">
              Send us a message
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
