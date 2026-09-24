import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Rating } from "@/components/Rating";
import { Reveal } from "@/components/Reveal";
import { site, socials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Whitestone Learning Network.",
};

const faqs = [
  {
    q: "What kinds of organisations do you work with?",
    a: "Schools, universities, foundations, and companies with learning programs for staff or customers.",
  },
  {
    q: "How long does a typical project take?",
    a: "Most programs and platforms take 8–20 weeks from first conversation to launch, depending on scope.",
  },
  {
    q: "Can you work with our existing tools?",
    a: "Yes. We often design around the systems you already have, and only recommend new tools when they clearly help.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="container-x pb-12 pt-14 md:pb-16 md:pt-24">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl xl:text-[5.5rem]">Let&rsquo;s start something lasting</h1>
        </Reveal>
      </section>

      <section className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="rounded-[32px] bg-stone-paper/85 p-6 ring-1 ring-ink/5 md:p-12">
          <ContactForm />
        </Reveal>

        <div className="space-y-4">
          <Reveal delay={100} className="rounded-[28px] bg-ink p-8 text-stone-paper md:p-10">
            <p className="text-sm text-stone-paper/60">Email us</p>
            <a href={`mailto:${site.email}`} className="mt-2 block break-words text-2xl font-semibold tracking-tight hover:underline">
              {site.email}
            </a>
            <p className="mt-8 text-sm text-stone-paper/60">Call us</p>
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="mt-2 block text-2xl font-semibold tracking-tight hover:underline">
              {site.phone}
            </a>
          </Reveal>

          <Reveal delay={160} className="rounded-[28px] bg-stone-paper/70 p-8 ring-1 ring-ink/5 md:p-10">
            <p className="text-sm text-muted">Visit</p>
            <p className="mt-2 text-xl font-semibold leading-snug tracking-tight">
              {site.address}
              <br />
              {site.city}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full px-4 py-2 text-sm font-medium ring-1 ring-ink/10 transition-colors hover:bg-ink hover:text-stone-paper"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220} className="rounded-[28px] bg-stone-paper/70 p-8 ring-1 ring-ink/5">
            <Rating />
          </Reveal>
        </div>
      </section>

      <section className="container-x mt-28 md:mt-40">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Good to know</h2>
          </Reveal>
          <div className="border-t border-line">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 70}>
                <details className="group border-b border-line py-6 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-semibold tracking-[-0.02em] md:text-2xl">
                    {f.q}
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full ring-1 ring-ink/15 transition-transform duration-300 group-open:rotate-45">
                      <span className="text-2xl leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-lg text-ink-soft">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
