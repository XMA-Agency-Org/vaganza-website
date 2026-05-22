import { ingredients } from "@/lib/content";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** The "what's inside" section — an immersive ingredient story on dark wine. */
export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="bg-wine py-24 text-cream md:py-40"
    >
      <div className="container-x">
        <SectionHeading
          tone="cream"
          align="left"
          eyebrow="What's inside"
          title={
            <>
              Naturally-derived actives, <em>nothing more</em>
            </>
          }
          intro="Four considered ingredients, each chosen for the way it cares for delicate skin — no harsh fillers, no compromise."
        />

        <div className="mt-16 grid gap-x-16 gap-y-14 md:mt-24 md:grid-cols-2">
          {ingredients.map((ingredient, index) => (
            <Reveal key={ingredient.name} delay={(index % 2) * 130}>
              <div className="border-t border-cream/15 pt-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="eyebrow text-rose-soft">
                    {ingredient.role}
                  </span>
                  <span className="font-display text-3xl text-cream/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-[2.6rem] leading-[1.05] text-cream">
                  {ingredient.name}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-cream/65">
                  {ingredient.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
