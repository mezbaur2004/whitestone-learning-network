import type { Metadata } from "next";
import Image from "next/image";
import { Cairn } from "@/components/Cairn";
import { CtaBanner } from "@/components/CtaBanner";
import { FounderSection } from "@/components/FounderSection";
import { Marquee } from "@/components/Marquee";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsBand } from "@/components/StatsBand";
import { leadership, network, values } from "@/content/site";
import { logoFor, publicFile } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Whitestone Learning Network exists, the values behind our schools, online academy and learning resources, and our founder Abdullah Jaman.",
  alternates: { canonical: "/about" },
};

const initialsOf = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

export default function AboutPage() {
  const family = network.map((n) => ({ name: n.name, logo: logoFor(n.slug) }));

  return (
    <>
      <section className="container-x pb-16 pt-14 md:pb-24 md:pt-24">
        <div className="grid items-end gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal>
              <p className="eyebrow">About Whitestone</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-6 text-5xl md:text-7xl xl:text-[5.5rem]">Learning on solid ground</h1>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-ink-soft md:text-xl">
              Whitestone Learning Network Ltd is the family behind two English-medium schools in Dhaka, an online academy
              and a literacy resource store. Each has its own team and character, and all of them share one idea of what
              a good education is for.
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
            <p className="eyebrow">Why a network</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
              A child&rsquo;s learning doesn&rsquo;t stop at the school gate
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                Children learn in classrooms, but also at home and, more and more, on a screen. Whitestone brings these
                places together so they pull in the same direction.
              </p>
              <p>
                Our <strong className="font-semibold text-ink">schools</strong> are where children spend most of their
                learning day. <strong className="font-semibold text-ink">Pedago Academy</strong> carries good teaching
                online, for learners who need flexibility.{" "}
                <strong className="font-semibold text-ink">Jolly Learning BD</strong> puts Jolly Phonics resources into
                the hands of parents and teachers, so that early reading is supported at home as well as at school.
              </p>
              <p>
                Travellers have long stacked white stones to mark the way for the people who come after them. That is
                the idea behind our name: each step placed carefully, so the next generation can find the path.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <StatsBand variant="plain" />
      </section>

      {/* Values */}
      <section className="container-x mt-28 md:mt-40">
        <SectionHeading eyebrow="What we believe" title="Academic rigour and character, taught together" />
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

      <FounderSection />

      {/* Leadership: hidden until names are confirmed in the content config */}
      {leadership.length > 0 && (
        <section className="container-x mt-28 md:mt-40">
          <SectionHeading eyebrow="Leadership" title="The people who lead our network" />
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {leadership.map((t, i) => {
              const photo = publicFile(t.photo);
              return (
                <Reveal key={t.name} delay={i * 80} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-[radial-gradient(120%_90%_at_30%_15%,#f7f7f6_0%,#e3e5e7_55%,#cfd2d6_100%)] ring-1 ring-ink/5">
                    {photo ? (
                      <Image src={photo} alt={t.name} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
                    ) : (
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold tracking-tight text-ink/60 md:text-4xl">
                        {initialsOf(t.name)}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-lg font-semibold tracking-tight">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      <section className="mt-28 border-y border-line py-10 md:mt-40">
        <div className="container-x mb-6">
          <h2 className="text-sm text-muted">The Whitestone family</h2>
        </div>
        <Marquee items={family} />
      </section>

      <CtaBanner />
    </>
  );
}
