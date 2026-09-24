import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { FounderSection } from "@/components/FounderSection";
import { InstitutionVisual } from "@/components/InstitutionVisual";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "@/components/icons";
import { confirmedFacts, institutions } from "@/content/site";

export const metadata: Metadata = {
  title: "Our institutions",
  description:
    "Wheaton International School, Guidance International School, Pedago Academy and Jolly Learning BD: the institutions of Whitestone Learning Network in Dhaka.",
  alternates: { canonical: "/institutions" },
};

export default function InstitutionsPage() {
  return (
    <>
      <section className="container-x pb-12 pt-14 md:pb-16 md:pt-24">
        <Reveal>
          <p className="eyebrow">Our institutions</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 max-w-5xl text-5xl md:text-7xl xl:text-[5.5rem]">
            Two schools, an academy and a resource store
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            Each Whitestone institution has its own team and its own website. This page introduces them. For admissions,
            courses or orders, please go straight to the institution&rsquo;s own site.
          </p>
        </Reveal>
      </section>

      <section className="container-x space-y-20 md:space-y-28">
        {institutions.map((inst, i) => (
          <article
            key={inst.slug}
            id={inst.slug}
            className="grid scroll-mt-28 items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <Reveal className={`group aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-ink/5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <InstitutionVisual institution={inst} large />
            </Reveal>
            <Reveal delay={100}>
              <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-soft">
                {inst.category}
              </span>
              <h2 className="display mt-5 text-4xl md:text-5xl">{inst.name}</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
                {inst.description.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {inst.slug === "jolly-learning-bd" && confirmedFacts.jollyLearningRelationship && (
                  <p>{confirmedFacts.jollyLearningRelationship}</p>
                )}
              </div>
              <a
                href={inst.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex h-14 items-center gap-2 rounded-full bg-ink px-7 font-semibold text-stone-paper transition-colors hover:bg-ink-soft"
              >
                Visit site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span className="sr-only">(opens {inst.name} in a new tab)</span>
              </a>
            </Reveal>
          </article>
        ))}
      </section>

      <FounderSection eyebrow="Founder" />

      <CtaBanner />
    </>
  );
}
