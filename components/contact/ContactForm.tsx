"use client";

import { useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { Button } from "../ui/button";
import { WhatsappIcon } from "../ui/icons";

/**
 * Contact form.
 *
 * Rather than silently posting to a stub endpoint, this composes the enquiry
 * into a WhatsApp message and opens a chat — so the message genuinely reaches
 * the Vaganza team. (Swap for a server-side email handler if preferred.)
 */
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("A product question");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const composed = `Hello Vaganza,\n\nName: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`;
    window.open(whatsappUrl(composed), "_blank", "noopener");
    setSent(true);
  }

  const fieldClass =
    "w-full rounded-2xl border border-line bg-cream px-4 py-3 text-[0.95rem] text-ink outline-none transition-colors placeholder:text-stone/60 focus:border-sage";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-line bg-linen p-6 md:p-8"
    >
      <div className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="contact-name"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Your name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              className={fieldClass}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="mb-1.5 block text-sm font-medium text-ink"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="contact-topic"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            How can we help?
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className={fieldClass}
          >
            <option>A product question</option>
            <option>Help choosing a ritual</option>
            <option>An existing order</option>
            <option>Delivery & shipping</option>
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="mb-1.5 block text-sm font-medium text-ink"
          >
            Your message
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us a little more…"
            className={`${fieldClass} resize-none`}
          />
        </div>

        <Button type="submit" size="lg" fullWidth>
          <WhatsappIcon className="h-5 w-5" />
          Send via WhatsApp
        </Button>

        {sent && (
          <p className="text-center text-sm text-sage">
            Opening WhatsApp — if it didn&apos;t open, message us directly at the
            number opposite.
          </p>
        )}
        <p className="text-center text-xs text-stone">
          We typically reply within a few hours, 7 days a week.
        </p>
      </div>
    </form>
  );
}
