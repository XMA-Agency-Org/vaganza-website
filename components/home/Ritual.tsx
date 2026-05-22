import { ritualSteps } from "@/lib/content";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** The three-step usage ritual — reduces purchase hesitation. */
export function Ritual() {
  return (
    <section id="ritual" className="bg-cream py-20 md:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Your ritual, in three <em>quiet</em> steps
            </>
          }
          intro="Effortless to follow and genuinely calming — Vaganza is designed to slip gently into your day."
        />

        <div className="relative mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting line */}
          <div
            aria-hidden
            className="absolute top-9 right-[16%] left-[16%] hidden border-t border-dashed border-sage/30 md:block"
          />

          {ritualSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 110}>
              <div className="relative flex flex-col items-center text-center">
                <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-line bg-cream font-display text-2xl text-sage shadow-sm">
                  {step.step}
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-xs leading-relaxed text-stone">
                  {step.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
