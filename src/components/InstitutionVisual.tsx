import type { Institution } from "@/content/site";

// Placeholder cover art built from the institution's tones. Swap for real
// photography (next/image) once it is available.
export function InstitutionVisual({ institution, large = false }: { institution: Institution; large?: boolean }) {
  const [a, b] = institution.tones;
  const host = institution.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ background: `radial-gradient(120% 90% at 20% 10%, #f6f6f5 0%, ${a} 45%, ${b} 100%)` }}
    >
      <div
        className="absolute -bottom-16 -right-10 h-[70%] w-[65%] opacity-70 transition-transform duration-700 ease-out-soft group-hover:-translate-y-2 group-hover:rotate-2"
        style={{
          borderRadius: "58% 42% 55% 45% / 48% 60% 40% 52%",
          background: `radial-gradient(circle at 35% 30%, #fbfbfa 0%, ${a} 60%, ${b} 100%)`,
          boxShadow: "inset -12px -16px 30px rgba(15,16,18,0.08), 0 30px 50px -30px rgba(15,16,18,0.35)",
        }}
      />

      <div
        className={`absolute left-[8%] top-[14%] w-[62%] rounded-2xl bg-white/80 p-4 shadow-[0_24px_60px_-28px_rgba(15,16,18,0.35)] backdrop-blur-sm transition-transform duration-700 ease-out-soft group-hover:-translate-y-1.5 ${
          large ? "md:p-7" : "md:p-5"
        }`}
      >
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="ml-2 truncate rounded-full bg-ink/[0.05] px-2.5 py-0.5 text-[0.7rem] font-medium text-ink/50">
            {host}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink text-lg font-extrabold text-stone-paper md:h-12 md:w-12">
            {institution.glyph}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold tracking-tight md:text-base">{institution.shortName}</p>
            <p className="truncate text-xs text-muted">{institution.category}</p>
          </div>
        </div>
        <div className="mt-5 space-y-2">
          <div className="h-2 w-full rounded-full bg-ink/10" />
          <div className="h-2 w-4/5 rounded-full bg-ink/10" />
          <div className="h-2 w-3/5 rounded-full bg-ink/10" />
        </div>
      </div>
    </div>
  );
}
