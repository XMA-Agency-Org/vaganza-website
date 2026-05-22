import { promises } from "@/lib/content";
import { iconRegistry } from "../ui/icons";

/** Slim reassurance band — brand + service promises. */
export function Promises() {
  return (
    <section className="bg-linen">
      <div className="container-x grid gap-x-10 gap-y-10 border-y border-line py-14 sm:grid-cols-2 lg:grid-cols-4">
        {promises.map((promise) => {
          const Icon = iconRegistry[promise.icon];
          return (
            <div key={promise.title} className="flex items-start gap-4">
              <Icon className="mt-0.5 h-7 w-7 shrink-0 text-rose" />
              <div>
                <p className="font-display text-[1.3rem] leading-tight text-ink">
                  {promise.title}
                </p>
                <p className="mt-1.5 text-[0.92rem] leading-relaxed text-mauve">
                  {promise.copy}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
