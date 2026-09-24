"use client";

import { useState, type FormEvent } from "react";
import { enquiryTypes, institutions, site } from "@/content/site";
import { ArrowUpRight } from "./icons";

export function ContactForm() {
  const [type, setType] = useState("");
  const [sent, setSent] = useState(false);

  const selected = enquiryTypes.find((t) => t.value === type);
  const route = selected?.routeTo ? institutions.find((i) => i.slug === selected.routeTo) : undefined;

  // Front door only: no backend. The form opens the visitor's email app with
  // the enquiry filled in, addressed to the Whitestone office email.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!site.email) return;
    const data = new FormData(e.currentTarget);
    const body = [
      `Enquiry type: ${selected?.label ?? "-"}`,
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Organisation: ${data.get("org") || "-"}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${selected?.label ?? "Enquiry"} from ${data.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full border-b border-ink/15 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-ink/35 focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <label className="block">
        <span className="mb-3 block text-sm font-medium text-muted">Enquiry type*</span>
        <div className="relative">
          <select
            name="type"
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="h-14 w-full appearance-none rounded-full bg-stone-base/70 px-6 pr-12 text-lg font-medium text-ink ring-1 ring-ink/10 outline-none transition focus:ring-ink"
          >
            <option value="" disabled>
              Choose what you need help with
            </option>
            {enquiryTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </label>

      {route && (
        <div className="rounded-[24px] bg-ink p-6 text-stone-paper md:p-8" aria-live="polite">
          <p className="text-sm text-stone-paper/60">Fastest route</p>
          <p className="mt-2 text-xl font-semibold leading-snug tracking-tight">
            {route.name} handles {selected?.topic} directly.
          </p>
          <p className="mt-2 text-stone-paper/70">
            Please contact them on their own website for the quickest answer. You can still write to us below if you need
            help with anything else.
          </p>
          <a
            href={route.enquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-stone-paper px-6 font-semibold text-ink transition-colors hover:bg-white"
          >
            Go to {route.enquiryUrl.replace(/^https?:\/\//, "").replace(/\/$/, "")}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      )}

      {site.email ? (
        <>
          <div className="grid gap-2 md:grid-cols-2 md:gap-x-8">
            <label className="block">
              <span className="sr-only">Your name</span>
              <input name="name" required autoComplete="name" placeholder="Your name*" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input name="email" type="email" required autoComplete="email" placeholder="Email address*" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone (optional)" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Organisation</span>
              <input name="org" autoComplete="organization" placeholder="Organisation (optional)" className={field} />
            </label>
            <label className="block md:col-span-2">
              <span className="sr-only">Message</span>
              <textarea name="message" required rows={4} placeholder="How can we help?*" className={`${field} resize-none`} />
            </label>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="group inline-flex h-16 w-full items-center justify-center gap-2 rounded-full bg-ink px-10 text-lg font-semibold text-stone-paper transition-colors hover:bg-ink-soft sm:w-auto"
            >
              Send message
              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <p className="text-sm text-muted" aria-live="polite">
              {sent ? "Thank you. Your email app should open with your message ready to send." : site.responseTime}
            </p>
          </div>
        </>
      ) : (
        !route && (
          <p className="rounded-[20px] bg-stone-base/60 p-6 text-ink-soft ring-1 ring-ink/5">
            Our office contact details will be published here shortly. In the meantime, you can reach each institution
            through its own website.
          </p>
        )
      )}
    </form>
  );
}
