import { promises } from "@/lib/content";
import { iconRegistry } from "../ui/icons";

/** Slim reassurance band — brand + service promises. */
export function Promises() {
  return (
    <section className="bg-linen">
      <div className="container-x grid gap-x-8 gap-y-7 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
        {promises.map((promise) => {
          const Icon = iconRegistry[promise.icon];
          return (
            <div key={promise.title} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-plum/10 text-plum">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-[1.05rem] text-ink">
                  {promise.title}
                </p>
                <p className="mt-0.5 text-sm leading-snug text-mauve">
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
