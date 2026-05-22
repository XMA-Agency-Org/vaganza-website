import { ritualSteps } from "@/lib/content";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

/** The three-step usage ritual — large editorial numerals. */
export function Ritual() {
  return (
    <section id="ritual" className="bg-cream py-24 md:py-36">
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

        <div className="mt-16 grid gap-x-8 gap-y-14 md:mt-20 md:grid-cols-3">
          {ritualSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 130}>
              <div className="border-t border-line pt-8">
                <span className="font-display text-7xl leading-none text-rose/30 md:text-8xl">
                  {step.step}
                </span>
                <h3 className="mt-6 font-display text-[2rem] leading-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs leading-relaxed text-mauve">
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
