import { faqs } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { Accordion } from "../ui/accordion";
import { Button } from "../ui/button";
import { WhatsappIcon } from "../ui/icons";
import { SectionHeading } from "../ui/section-heading";

/** Frequently asked questions — handles objections before checkout. */
export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Good to know"
            title={
              <>
                Your questions, <em>answered</em>
              </>
            }
            intro="Everything worth knowing before you begin your Vaganza ritual."
          />
          <div className="mt-8 rounded-[1.75rem] border border-line bg-linen p-6">
            <p className="font-display text-lg text-ink">Still curious?</p>
            <p className="mt-1 text-sm leading-relaxed text-stone">
              Our team is happy to help you choose the right ritual for your
              skin.
            </p>
            <Button
              href={whatsappUrl(
                "Hello Vaganza, I have a question about your products.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              size="sm"
              className="mt-4"
            >
              <WhatsappIcon className="h-4 w-4" />
              Chat with us
            </Button>
          </div>
        </div>

        <Accordion items={faqs} />
      </div>
    </section>
  );
}
