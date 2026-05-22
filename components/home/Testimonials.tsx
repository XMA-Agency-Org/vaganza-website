import { testimonials } from "@/lib/content";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";
import { StarRating } from "../ui/star-rating";

/**
 * Social proof — large, airy editorial quotes.
 * ⚠️ The `testimonials` data is placeholder — replace with verified customer
 * reviews (ideally via a Shopify reviews app) before launch. See lib/content.ts.
 */
export function Testimonials() {
  return (
    <section className="bg-linen py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loved & trusted"
          title={
            <>
              Cared for by women across the <em>Emirates</em>
            </>
          }
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 md:mt-20 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={(index % 2) * 130}>
              <figure className="border-t border-line pt-8">
                <StarRating rating={testimonial.rating} size={16} />
                <blockquote className="mt-6 font-display text-[1.7rem] leading-[1.4] text-ink italic">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-7 text-sm">
                  <span className="font-medium text-ink">
                    {testimonial.name}
                  </span>
                  <span className="text-mauve"> · {testimonial.location}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
