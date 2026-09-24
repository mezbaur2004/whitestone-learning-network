import Link from "next/link";
import { Button } from "@/components/Button";
import { Cairn } from "@/components/Cairn";
import { CtaBanner } from "@/components/CtaBanner";
import { FounderBadge } from "@/components/FounderBadge";
import { FounderSection } from "@/components/FounderSection";
import { InstitutionCard } from "@/components/InstitutionCard";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBand } from "@/components/StatsBand";
import { Testimonials } from "@/components/Testimonials";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { approach, founder, institutions, network, pillars } from "@/content/site";
import { logoFor } from "@/lib/assets";

export default function HomePage() {
  const family = network.map((n) => ({ name: n.name, logo: logoFor(n.slug) }));

  return (
    <>
      {/* Hero */}
      <section className="container-x relative pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">Whitestone Learning Network</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[5.25rem]">
                One family of learning, from first letters to lifelong learning.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
                Whitestone brings together two English-medium international schools in Dhaka, an online academy and a
                literacy resource store, founded by educationist {founder.name}.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="#institutions" size="lg" className="w-full sm:w-auto">
                Explore our institutions
              </Button>
              <Button href="/contact" size="lg" variant="outline" arrow className="w-full sm:w-auto">
                Get in touch
              </Button>
            </Reveal>
            <Reveal delay={320} className="mt-12">
              <FounderBadge />
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden justify-center lg:flex">
            <div className="animate-float">
              <Cairn />
            </div>
            <div className="absolute -left-4 top-10 rounded-2xl bg-stone-paper/90 px-5 py-4 shadow-[0_20px_40px_-24px_rgba(15,16,18,0.4)] backdrop-blur">
              <p className="text-3xl font-bold tracking-tight">{founder.yearsInEducation}</p>
              <p className="text-sm text-muted">years in education</p>
            </div>
            <div className="absolute -right-2 bottom-16 rounded-2xl bg-ink px-5 py-4 text-stone-paper shadow-[0_20px_40px_-20px_rgba(15,16,18,0.6)]">
              <p className="text-3xl font-bold tracking-tight">{institutions.length}</p>
              <p className="text-sm text-stone-paper/60">institutions, one family</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The Whitestone family */}
      <section className="border-y border-line py-10">
        <div className="container-x mb-6">
          <h2 className="text-sm text-muted">The Whitestone family</h2>
        </div>
        <Marquee items={family} />
      </section>

      {/* Stats (only confirmed values render) */}
      <section className="container-x mt-24 md:mt-32">
        <StatsBand />
      </section>

      {/* Institutions */}
      <section id="institutions" className="container-x mt-28 scroll-mt-28 md:mt-40">
        <SectionHeading
          eyebrow="Our institutions"
          title="Four places to learn, one set of values"
          aside={
            <Button href="/institutions" variant="outline" arrow>
              More about each
            </Button>
          }
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {institutions.map((inst, i) => (
            <Reveal key={inst.slug} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <InstitutionCard institution={inst} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we do */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="What we do" title="Schools, screens, homes and teachers" />
        <div className="border-t border-line">
          {pillars.map((p, i) => {
            const external = p.href.startsWith("http");
            const className =
              "group grid gap-4 border-b border-line py-8 transition-colors md:grid-cols-[80px_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:py-10";
            const inner = (
              <>
                <span className="text-sm font-medium text-muted">0{i + 1}</span>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] transition-transform duration-500 ease-out-soft group-hover:translate-x-2 md:text-4xl">
                  {p.title}
                </h3>
                <div>
                  <p className="text-ink-soft">{p.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-stone-paper/70 px-3 py-1 text-xs font-medium text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden h-12 w-12 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-stone-paper md:grid">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </>
            );
            return (
              <Reveal key={p.title} delay={i * 60}>
                {external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className={className}>
                    {inner}
                  </a>
                ) : (
                  <Link href={p.href} className={className}>
                    {inner}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Our approach */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="Our approach" title="What we believe good education looks like" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="group relative overflow-hidden rounded-[24px] bg-stone-paper/70 p-7 ring-1 ring-ink/5 transition-colors duration-500 hover:bg-ink hover:text-stone-paper"
            >
              <span className="text-sm font-medium opacity-50">0{i + 1}</span>
              <h3 className="mt-16 text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-[1.7rem]">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed opacity-70">{p.body}</p>
              {i < approach.length - 1 && (
                <ArrowRight className="absolute right-7 top-7 hidden h-5 w-5 opacity-30 lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </section>

      <FounderSection />

      <Testimonials />

      <CtaBanner />
    </>
  );
}
