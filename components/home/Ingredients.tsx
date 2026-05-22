import { ingredients } from "@/lib/content";
import { OrganicBlob } from "../ui/decor";
import {
  DropletIcon,
  FeatherIcon,
  HeartIcon,
  type IconProps,
  SparkleIcon,
} from "../ui/icons";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** Icons paired to the ingredients (same order as lib/content.ts). */
const ICONS: ((p: IconProps) => React.ReactElement)[] = [
  SparkleIcon, // Alpha Arbutin
  FeatherIcon, // Aloe Vera
  HeartIcon, // Collagen
  DropletIcon, // Glycerin
];

const TINT: Record<string, string> = {
  sage: "bg-rose-soft/25",
  blush: "bg-petal/30",
  clay: "bg-rose/35",
};

/** The "what's inside" section — the active ingredient story on a dark field. */
export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="relative overflow-hidden bg-wine py-20 text-cream md:py-28"
    >
      <OrganicBlob
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 text-plum/20"
      />
      <OrganicBlob
        aria-hidden
        className="absolute -bottom-32 -left-24 h-80 w-80 text-plum/15"
      />

      <div className="container-x relative">
        <SectionHeading
          tone="cream"
          eyebrow="What's inside"
          title={
            <>
              Naturally-derived actives, <em>nothing more</em>
            </>
          }
          intro="Four considered ingredients, each chosen for the way it cares for delicate skin — no harsh fillers, no compromise."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {ingredients.map((ingredient, index) => {
            const Icon = ICONS[index] ?? DropletIcon;
            return (
              <Reveal key={ingredient.name} delay={index * 90}>
                <div className="group h-full rounded-[1.75rem] border border-cream/10 bg-cream/[0.04] p-7 transition-colors duration-300 hover:bg-cream/[0.08]">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-cream ${
                        TINT[ingredient.accent] ?? TINT.sage
                      }`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="eyebrow text-rose-soft">{ingredient.role}</p>
                      <h3 className="mt-0.5 font-display text-2xl text-cream">
                        {ingredient.name}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-cream/65">
                    {ingredient.copy}
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
