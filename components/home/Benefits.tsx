import { benefits } from "@/lib/content";
import { iconRegistry } from "../ui/icons";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** Four ways the ritual cares for delicate skin — benefit cards. */
export function Benefits() {
  return (
    <section className="bg-linen py-20 md:py-28">
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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = iconRegistry[benefit.icon];
            return (
              <Reveal key={benefit.title} delay={index * 90}>
                <div className="group h-full rounded-[1.75rem] border border-line bg-cream p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_50px_-30px_rgba(43,42,36,0.4)]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-plum/10 text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-cream">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl text-ink">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-mauve">
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
