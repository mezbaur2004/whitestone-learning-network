import type { Metadata } from "next";
import { Cairn } from "@/components/Cairn";
import { CtaBanner } from "@/components/CtaBanner";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { milestones, partners, stats, team, values } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "The story, values and people behind Whitestone Learning Network.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container-x pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">About Whitestone</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-5xl md:text-7xl xl:text-[5.5rem]">
                We build learning on solid ground
              </h1>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
              Whitestone Learning Network is a team of educators, designers and technologists. For fifteen years
              we&rsquo;ve helped institutions design learning that is simple to use, grounded in evidence and built
              to last.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="container-x">
        <Reveal className="relative grid overflow-hidden rounded-[36px] bg-stone-paper/80 ring-1 ring-ink/5 lg:grid-cols-2">
          <div className="relative flex min-h-[360px] items-center justify-center bg-[radial-gradient(120%_90%_at_30%_20%,#f7f7f6_0%,#e6e7e9_55%,#d5d7da_100%)] py-16">
            <Cairn className="scale-90 md:scale-100" />
          </div>
          <div className="p-8 md:p-14">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">Why &ldquo;Whitestone&rdquo;?</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Travellers have long stacked white stones to mark the way for the people who come after them.
                That&rsquo;s how we think about learning: each step placed carefully, so that the next person can
                find the path more easily.
              </p>
              <p>
                We started as a small tutoring collective. Today we partner with schools, universities, foundations
                and companies around the world, but the idea hasn&rsquo;t changed.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="container-x mt-24 md:mt-32">
        <div className="grid grid-cols-2 gap-8 border-y border-line py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="display text-4xl md:text-6xl">{s.value}</p>
              <p className="mt-3 max-w-[15rem] text-sm text-muted md:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="What we believe" title="The principles behind every project" />
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={(i % 2) * 100} className="rounded-[28px] bg-stone-paper/70 p-8 ring-1 ring-ink/5 md:p-10">
              <span className="text-sm font-medium text-muted">0{i + 1}</span>
              <h3 className="mt-10 text-3xl font-semibold tracking-[-0.035em]">{v.title}</h3>
              <p className="mt-3 text-lg text-ink-soft">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="Milestones" title="Fifteen years, one stone at a time" />
        <ol className="border-t border-line">
          {milestones.map((m, i) => (
            <Reveal
              as="li"
              key={m.year}
              delay={i * 60}
              className="grid gap-2 border-b border-line py-7 md:grid-cols-[200px_1fr] md:items-baseline md:gap-8"
            >
              <span className="display text-3xl md:text-4xl">{m.year}</span>
              <p className="text-lg text-ink-soft md:text-xl">{m.text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Team */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="Leadership" title="The people who set the path" />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((t, i) => (
            <Reveal key={t.name} delay={i * 80} className="group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[radial-gradient(120%_90%_at_30%_15%,#f7f7f6_0%,#e3e5e7_55%,#cfd2d6_100%)] ring-1 ring-ink/5">
                <div
                  className="absolute bottom-0 left-1/2 h-[62%] w-[70%] -translate-x-1/2 transition-transform duration-700 ease-out-soft group-hover:-translate-y-2"
                  style={{
                    borderRadius: "50% 50% 44% 56% / 60% 60% 40% 40%",
                    background: "radial-gradient(circle at 35% 25%, #fbfbfa 0%, #e2e4e6 60%, #cdd0d4 100%)",
                    boxShadow: "inset -10px -14px 26px rgba(15,16,18,0.08)",
                  }}
                />
                <span className="absolute left-1/2 top-[48%] -translate-x-1/2 text-3xl font-bold tracking-tight text-ink/70 md:text-4xl">
                  {t.initials}
                </span>
              </div>
              <p className="mt-4 text-lg font-semibold tracking-tight">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-28 border-y border-line py-10 md:mt-40">
        <Marquee items={partners} />
      </section>

      <CtaBanner title="Come build with us." body="Whether you're planning a new program or rethinking an old one, we'd love to hear about it." />
    </>
  );
}
