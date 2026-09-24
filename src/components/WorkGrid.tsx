"use client";

import { useState } from "react";
import type { Project } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid({ projects }: { projects: Project[] }) {
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {categories.map((c) => {
          const count = c === "All" ? projects.length : projects.filter((p) => p.category === c).length;
          const selected = c === active;
          return (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(c)}
              className={`h-11 rounded-full px-5 text-sm font-semibold transition-colors ${
                selected ? "bg-ink text-stone-paper" : "bg-stone-paper/70 text-ink-soft ring-1 ring-ink/5 hover:text-ink"
              }`}
            >
              {c}
              <span className="ml-2 opacity-50">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
        {shown.map((p, i) => (
          <div
            key={p.slug}
            className={`animate-[fadeUp_0.7s_var(--ease-out-soft)_both] ${i % 2 === 1 ? "md:mt-24" : ""}`}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </>
  );
}
