import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "@/components/icons";
import { projects } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: project.client, description: project.summary };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const more = projects.filter((p) => p.slug !== project.slug && p.slug !== next.slug).slice(0, 2);

  return (
    <>
      <section className="container-x pb-12 pt-10 md:pt-16">
        <Reveal>
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
            <ArrowRight className="h-4 w-4 rotate-180" /> All work
          </Link>
        </Reveal>
        <Reveal delay={60}>
          <p className="eyebrow mt-10">{project.client}</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="display mt-6 max-w-5xl text-5xl md:text-7xl">{project.title}</h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{project.summary}</p>
        </Reveal>

        <Reveal delay={240} className="mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 text-sm md:grid-cols-4">
          {[
            ["Client", project.client],
            ["Category", project.category],
            ["Year", project.year],
            ["Services", project.services.join(", ")],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-muted">{k}</p>
              <p className="mt-1 font-semibold">{v}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="container-x">
        <Reveal className="group aspect-[4/3] overflow-hidden rounded-[32px] ring-1 ring-ink/5 md:aspect-[16/8]">
          <ProjectVisual project={project} large />
        </Reveal>
      </section>

      <section className="container-x mt-20 grid gap-12 md:mt-28 lg:grid-cols-[1fr_1.6fr]">
        <Reveal>
          <p className="eyebrow">The challenge</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-2xl leading-snug tracking-[-0.02em] md:text-3xl">{project.challenge}</p>
        </Reveal>

        <Reveal>
          <p className="eyebrow">Our approach</p>
        </Reveal>
        <ol className="space-y-0 border-t border-line">
          {project.approach.map((step, i) => (
            <Reveal as="li" key={step} delay={i * 80} className="flex gap-6 border-b border-line py-6">
              <span className="text-sm font-medium text-muted">0{i + 1}</span>
              <p className="text-lg text-ink-soft md:text-xl">{step}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="eyebrow">The outcome</p>
        </Reveal>
        <Reveal delay={80}>
          <p className="text-2xl leading-snug tracking-[-0.02em] md:text-3xl">{project.outcome}</p>
        </Reveal>
      </section>

      <section className="container-x mt-20 md:mt-28">
        <div className="grid gap-4 md:grid-cols-3">
          {project.results.map((r, i) => (
            <Reveal
              key={r.label}
              delay={i * 90}
              className={`rounded-[28px] p-8 md:p-10 ${i === 0 ? "bg-ink text-stone-paper" : "bg-stone-paper/80 ring-1 ring-ink/5"}`}
            >
              <p className="display text-5xl md:text-7xl">{r.value}</p>
              <p className="mt-3 opacity-60">{r.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-24 md:mt-32">
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col gap-4 border-y border-line py-10 md:flex-row md:items-center md:justify-between md:py-14"
        >
          <div>
            <p className="text-sm text-muted">Next project</p>
            <p className="display mt-2 text-4xl transition-transform duration-500 ease-out-soft group-hover:translate-x-2 md:text-6xl">
              {next.client}
            </p>
          </div>
          <span className="grid h-16 w-16 place-items-center rounded-full bg-ink text-stone-paper transition-transform duration-500 ease-out-soft group-hover:translate-x-2">
            <ArrowRight className="h-6 w-6" />
          </span>
        </Link>

        <div className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {more.map((p) => (
            <Reveal key={p.slug}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner title="Want results like these?" />
    </>
  );
}
