import { faqs } from "@/lib/content";
import { whatsappUrl } from "@/lib/site";
import { Accordion } from "../ui/accordion";
import { Button } from "../ui/button";
import { WhatsappIcon } from "../ui/icons";
import { SectionHeading } from "../ui/section-heading";

/** Frequently asked questions — handles objections before checkout. */
export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-24 md:py-36">
      <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
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
          <div className="mt-9">
            <p className="font-display text-2xl text-ink">Still curious?</p>
            <p className="mt-2 max-w-sm leading-relaxed text-mauve">
              Our team is happy to help you choose the right ritual for your
              skin.
            </p>
            <Button
              href={whatsappUrl(
                "Hello Vaganza, I have a question about your products.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              className="mt-5"
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
