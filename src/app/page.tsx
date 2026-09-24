import Link from "next/link";
import { Button } from "@/components/Button";
import { Cairn } from "@/components/Cairn";
import { CtaBanner } from "@/components/CtaBanner";
import { Marquee } from "@/components/Marquee";
import { ProjectCard } from "@/components/ProjectCard";
import { Rating } from "@/components/Rating";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { partners, process, projects, services, stats, testimonials } from "@/lib/data";

export default function HomePage() {
  const featured = projects.slice(0, 4);

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
              <h1 className="display mt-6 text-[2.9rem] sm:text-6xl md:text-7xl xl:text-[5.5rem]">
                Learning Programs, Platforms &amp; Training That Last
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
                We help schools, universities and organisations turn big learning goals into programs,
                digital experiences and teaching practice that people actually finish, and remember.
              </p>
            </Reveal>
            <Reveal delay={240} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Contact Us
              </Button>
              <Button href="/work" size="lg" variant="outline" arrow className="w-full sm:w-auto">
                View our work
              </Button>
            </Reveal>
            <Reveal delay={320} className="mt-12">
              <Rating />
            </Reveal>
          </div>

          <Reveal delay={200} className="relative hidden justify-center lg:flex">
            <div className="animate-float">
              <Cairn />
            </div>
            <div className="absolute -left-4 top-10 rounded-2xl bg-stone-paper/90 px-5 py-4 shadow-[0_20px_40px_-24px_rgba(15,16,18,0.4)] backdrop-blur">
              <p className="text-3xl font-bold tracking-tight">120K+</p>
              <p className="text-sm text-muted">learners reached</p>
            </div>
            <div className="absolute -right-2 bottom-16 rounded-2xl bg-ink px-5 py-4 text-stone-paper shadow-[0_20px_40px_-20px_rgba(15,16,18,0.6)]">
              <p className="text-3xl font-bold tracking-tight">92%</p>
              <p className="text-sm text-stone-paper/60">completion rate</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partners */}
      <section className="border-y border-line py-10">
        <div className="container-x mb-6">
          <p className="text-sm text-muted">Trusted by schools, universities and foundations</p>
        </div>
        <Marquee items={partners} />
      </section>

      {/* Stats */}
      <section className="container-x mt-24 md:mt-32">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-line ring-1 ring-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="bg-stone-soft/90 p-6 md:p-10">
              <p className="display text-4xl md:text-6xl">{s.value}</p>
              <p className="mt-3 max-w-[16rem] text-sm text-muted md:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured work */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that changed how people learn"
          aside={
            <Button href="/work" variant="outline" arrow>
              All projects
            </Button>
          }
        />
        <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 120} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="What we do" title="Four ways we help learning work better" />
        <div className="border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <Link
                href="/contact"
                className="group grid gap-4 border-b border-line py-8 transition-colors md:grid-cols-[80px_1.1fr_1.4fr_auto] md:items-center md:gap-8 md:py-10"
              >
                <span className="text-sm font-medium text-muted">0{i + 1}</span>
                <h3 className="text-3xl font-semibold tracking-[-0.035em] transition-transform duration-500 ease-out-soft group-hover:translate-x-2 md:text-4xl">
                  {s.title}
                </h3>
                <div>
                  <p className="text-ink-soft">{s.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-stone-paper/70 px-3 py-1 text-xs font-medium text-ink-soft">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="hidden h-12 w-12 place-items-center rounded-full border border-ink/15 transition-all duration-500 group-hover:rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-stone-paper md:grid">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="How we work" title="A simple process, done with care" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal
              key={p.step}
              delay={i * 90}
              className="group relative overflow-hidden rounded-[24px] bg-stone-paper/70 p-7 ring-1 ring-ink/5 transition-colors duration-500 hover:bg-ink hover:text-stone-paper"
            >
              <span className="text-sm font-medium opacity-50">{p.step}</span>
              <h3 className="mt-16 text-3xl font-semibold tracking-[-0.035em]">{p.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed opacity-70">{p.body}</p>
              {i < process.length - 1 && (
                <ArrowRight className="absolute right-7 top-7 hidden h-5 w-5 opacity-30 lg:block" />
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="Partner voices" title="In their words" />
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 100}
              className={`flex flex-col justify-between rounded-[28px] p-8 md:p-10 ${
                i === 0 ? "bg-ink text-stone-paper lg:row-span-1" : "bg-stone-paper/80 ring-1 ring-ink/5"
              }`}
            >
              <p className="text-5xl font-bold leading-none opacity-30">&ldquo;</p>
              <blockquote className="mt-4 text-xl leading-snug tracking-[-0.015em] md:text-2xl">{t.quote}</blockquote>
              <div className="mt-10 flex items-center gap-3">
                <div
                  className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold ${
                    i === 0 ? "bg-stone-paper text-ink" : "bg-ink text-stone-paper"
                  }`}
                >
                  {t.name
                    .replace("Dr. ", "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm opacity-60">{t.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
