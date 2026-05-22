import { benefits } from "@/lib/content";
import { iconRegistry } from "../ui/icons";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** Four ways the ritual cares for delicate skin — an editorial column set. */
export function Benefits() {
  return (
    <section className="bg-linen py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="The difference"
          title={
            <>
              Skincare your skin will <em>love</em>
            </>
          }
          intro="Every Vaganza ritual is built around four simple, gentle promises to delicate, sensitive skin."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = iconRegistry[benefit.icon];
            return (
              <Reveal key={benefit.title} delay={index * 110}>
                <div className="group border-t border-line pt-7">
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-rose transition-transform duration-500 group-hover:-translate-y-1" />
                    <span className="font-display text-3xl text-plum/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 font-display text-[1.7rem] leading-snug text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-mauve">
                    {benefit.copy}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
