import { testimonials } from "@/lib/content";
import { QuoteIcon } from "../ui/icons";
import { LeafMark } from "../ui/logo";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { StarRating } from "../ui/star-rating";

/**
 * Social proof.
 * ⚠️ The `testimonials` data is placeholder — replace with verified customer
 * reviews (ideally via a Shopify reviews app) before launch. See lib/content.ts.
 */
export function Testimonials() {
  return (
    <section className="bg-linen py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loved & trusted"
          title={
            <>
              Cared for by women across the <em>Emirates</em>
            </>
          }
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={(index % 2) * 90}>
              <figure className="flex h-full flex-col rounded-[1.75rem] border border-line bg-cream p-7">
                <QuoteIcon className="h-8 w-8 text-plum/30" />
                <blockquote className="mt-4 flex-1 text-[1.05rem] leading-relaxed text-ink">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-plum/12 text-plum">
                    <LeafMark className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-display text-base text-ink">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-mauve">{testimonial.location}</p>
                  </div>
                  <StarRating rating={testimonial.rating} size={15} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
