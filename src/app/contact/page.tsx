import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { FounderBadge } from "@/components/FounderBadge";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { institutions, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Whitestone Learning Network in Dhaka about admissions, courses, resources, partnerships, media or speaking invitations for Abdullah Jaman.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "How do I apply to Wheaton or Guidance International School?",
    a: "Admissions are handled by each school directly. Please use the school's own website for admission dates, fees and forms.",
  },
  {
    q: "Where do I sign in to Pedago Academy or order from Jolly Learning BD?",
    a: "On their own websites. This site introduces the Whitestone family; it doesn't handle logins, courses or orders.",
  },
  {
    q: "How can I invite Abdullah Jaman to speak?",
    a: "Choose “Speaking invitation for Abdullah Jaman” in the form and tell us about your event, audience and date.",
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
          <h1 className="display mt-6 max-w-4xl text-5xl md:text-7xl xl:text-[5.5rem]">How can we help?</h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Tell us what you need and we&rsquo;ll point you to the right team. For admissions, courses and orders, each
            institution&rsquo;s own website is the quickest route.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="rounded-[32px] bg-stone-paper/85 p-6 ring-1 ring-ink/5 md:p-12">
          <ContactForm />
        </Reveal>

        <div className="space-y-4">
          {(site.email || site.phone) && (
            <Reveal delay={100} className="rounded-[28px] bg-ink p-8 text-stone-paper md:p-10">
              {site.email && (
                <>
                  <p className="text-sm text-stone-paper/60">Email us</p>
                  <a href={`mailto:${site.email}`} className="mt-2 block break-words text-2xl font-semibold tracking-tight hover:underline">
                    {site.email}
                  </a>
                </>
              )}
              {site.phone && (
                <>
                  <p className={`text-sm text-stone-paper/60 ${site.email ? "mt-8" : ""}`}>Call us</p>
                  <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`} className="mt-2 block text-2xl font-semibold tracking-tight hover:underline">
                    {site.phone}
                  </a>
                </>
              )}
            </Reveal>
          )}

          <Reveal delay={140} className="rounded-[28px] bg-stone-paper/70 p-8 ring-1 ring-ink/5 md:p-10">
            <p className="text-sm text-muted">Go direct</p>
            <ul className="mt-4 divide-y divide-line">
              {institutions.map((inst) => (
                <li key={inst.slug}>
                  <a
                    href={inst.enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-3"
                  >
                    <span>
                      <span className="block font-semibold tracking-tight">{inst.name}</span>
                      <span className="text-sm text-muted">{inst.category}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 opacity-50 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={180} className="rounded-[28px] bg-stone-paper/70 p-8 ring-1 ring-ink/5 md:p-10">
            <p className="text-sm text-muted">Office</p>
            <address className="mt-2 text-xl font-semibold not-italic leading-snug tracking-tight">
              {site.officeAddress && (
                <>
                  {site.officeAddress}
                  <br />
                </>
              )}
              {site.city}, {site.country}
            </address>
            {site.socials.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full px-4 py-2 text-sm font-medium ring-1 ring-ink/10 transition-colors hover:bg-ink hover:text-stone-paper"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={220} className="rounded-[28px] bg-stone-paper/70 p-8 ring-1 ring-ink/5">
            <FounderBadge />
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
