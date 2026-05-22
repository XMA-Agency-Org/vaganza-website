"use client";

import { useActionState } from "react";
import { subscribeToNewsletter } from "@/lib/actions";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, CheckIcon } from "../ui/icons";

/**
 * Email capture form. Submits via the `subscribeToNewsletter` server action.
 * NOTE: that action is currently a stub — connect it to a real email provider
 * before launch (see lib/actions.ts).
 */
export function NewsletterForm({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [state, formAction, pending] = useActionState(
    subscribeToNewsletter,
    null,
  );

  const onDark = tone === "dark";

  if (state?.ok) {
    return (
      <p
        className={cn(
          "flex items-center gap-2.5 text-[0.95rem]",
          onDark ? "text-cream" : "text-sage",
        )}
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sage text-cream">
          <CheckIcon className="h-4 w-4" />
        </span>
        {state.message}
      </p>
    );
  }

  return (
    <div>
      <form
        action={formAction}
        className={cn(
          "flex items-center gap-1.5 rounded-full p-1.5",
          onDark ? "bg-cream/12 ring-1 ring-cream/20" : "bg-cream ring-1 ring-line",
        )}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className={cn(
            "h-11 flex-1 bg-transparent px-4 text-[0.95rem] outline-none placeholder:text-stone/70",
            onDark ? "text-cream placeholder:text-cream/55" : "text-ink",
          )}
        />
        <button
          type="submit"
          disabled={pending}
          className="flex h-11 shrink-0 items-center gap-1.5 rounded-full bg-sage px-5 text-sm font-medium text-cream transition-colors hover:bg-forest disabled:opacity-60"
        >
          {pending ? "Joining…" : "Join"}
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </form>
      {state && !state.ok && (
        <p className="mt-2 pl-4 text-xs text-clay">{state.message}</p>
      )}
    </div>
  );
}
