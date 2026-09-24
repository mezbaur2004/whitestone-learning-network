"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";
import { ArrowUpRight } from "./icons";

const interests = ["Learning program", "Digital platform", "Educator training", "Strategy & evaluation", "Something else"];
const budgets = ["< $25K", "$25K–$75K", "$75K–$150K", "$150K+"];

export function ContactForm() {
  const [interest, setInterest] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [sent, setSent] = useState(false);

  const toggle = (value: string) =>
    setInterest((cur) => (cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value]));

  // No backend yet: open the visitor's email client with the enquiry filled in.
  // Replace with an API route or form service when one is chosen.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organisation: ${data.get("org") || "-"}`,
      `Interested in: ${interest.join(", ") || "-"}`,
      `Budget: ${budget || "-"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `New enquiry from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const chip = (selected: boolean) =>
    `h-11 rounded-full px-5 text-sm font-medium transition-colors ${
      selected ? "bg-ink text-stone-paper" : "bg-stone-base/70 text-ink-soft ring-1 ring-ink/10 hover:text-ink"
    }`;

  const field =
    "w-full border-b border-ink/15 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-ink/35 focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset>
        <legend className="mb-4 text-sm font-medium text-muted">I&rsquo;m interested in…</legend>
        <div className="flex flex-wrap gap-2">
          {interests.map((i) => (
            <button key={i} type="button" aria-pressed={interest.includes(i)} onClick={() => toggle(i)} className={chip(interest.includes(i))}>
              {i}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-2 md:grid-cols-2 md:gap-x-8">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input name="name" required autoComplete="name" placeholder="Your name*" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email address*" className={field} />
        </label>
        <label className="block md:col-span-2">
          <span className="sr-only">Organisation</span>
          <input name="org" autoComplete="organization" placeholder="School or organisation" className={field} />
        </label>
        <label className="block md:col-span-2">
          <span className="sr-only">Project details</span>
          <textarea name="message" required rows={4} placeholder="Tell us about your learners and goals*" className={`${field} resize-none`} />
        </label>
      </div>

      <fieldset>
        <legend className="mb-4 text-sm font-medium text-muted">Estimated budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button key={b} type="button" aria-pressed={budget === b} onClick={() => setBudget(b === budget ? "" : b)} className={chip(budget === b)}>
              {b}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex h-16 w-full items-center justify-center gap-2 rounded-full bg-ink px-10 text-lg font-semibold text-stone-paper transition-colors hover:bg-ink-soft sm:w-auto"
        >
          Send message
          <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
        <p className="text-sm text-muted" aria-live="polite">
          {sent ? "Thanks! Your email app should open with your message ready to send." : "We reply within two working days."}
        </p>
      </div>
    </form>
  );
}
