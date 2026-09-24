import type { Institution } from "@/content/site";
import { InstitutionVisual } from "./InstitutionVisual";
import { ArrowUpRight } from "./icons";

export function InstitutionCard({ institution }: { institution: Institution }) {
  return (
    <a href={institution.url} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] ring-1 ring-ink/5">
        <InstitutionVisual institution={institution} />
        <span className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-ink text-stone-paper opacity-0 transition-all duration-500 ease-out-soft group-hover:rotate-45 group-hover:opacity-100 md:scale-90 md:group-hover:scale-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
      <div className="mt-5">
        <span className="rounded-full border border-ink/10 px-3 py-1 text-xs font-medium text-ink-soft">
          {institution.category}
        </span>
        <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-[1.7rem]">
          {institution.name}
        </h3>
        <p className="mt-2 max-w-md text-ink-soft">{institution.summary}</p>
        <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
          Visit site
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          <span className="sr-only">(opens {institution.name} in a new tab)</span>
        </p>
      </div>
    </a>
  );
}
