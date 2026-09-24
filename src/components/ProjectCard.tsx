import Link from "next/link";
import type { Project } from "@/lib/data";
import { ProjectVisual } from "./ProjectVisual";
import { ArrowUpRight } from "./icons";

export function ProjectCard({ project, tall = false }: { project: Project; tall?: boolean }) {
  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div
        className={`relative overflow-hidden rounded-[28px] ${tall ? "aspect-[4/5]" : "aspect-[4/3]"} ring-1 ring-ink/5`}
      >
        <ProjectVisual project={project} />
        <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-ink text-stone-paper opacity-0 transition-all duration-500 ease-out-soft group-hover:opacity-100 group-hover:rotate-45 md:scale-90 md:group-hover:scale-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{project.client}</p>
          <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-[1.7rem]">
            {project.title}
          </h3>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {[project.category, project.year].map((t) => (
          <span key={t} className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-soft">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
