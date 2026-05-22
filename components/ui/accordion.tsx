"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlusIcon } from "./icons";

/**
 * Accessible FAQ-style accordion. One panel open at a time; the first opens
 * by default. Height animates via the CSS grid `0fr → 1fr` technique.
 */
export function Accordion({
  items,
  className,
}: {
  items: { question: string; answer: string }[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-5 py-6 text-left"
              >
                <span
                  className={cn(
                    "font-display text-xl leading-snug transition-colors md:text-2xl",
                    isOpen ? "text-rose" : "text-ink group-hover:text-rose",
                  )}
                >
                  {item.question}
                </span>
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-[135deg] border-plum bg-plum text-cream"
                      : "border-line text-ink group-hover:border-plum",
                  )}
                >
                  <PlusIcon className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pr-12 pb-6 leading-relaxed text-mauve">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
