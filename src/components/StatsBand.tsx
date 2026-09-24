import { stats } from "@/content/site";
import { Reveal } from "./Reveal";

/** Renders only the stats that have a confirmed value in the content config. */
export function StatsBand({ variant = "cards" }: { variant?: "cards" | "plain" }) {
  const shown = stats.filter((s) => s.value);
  if (shown.length === 0) return null;

  const cols = shown.length >= 4 ? "lg:grid-cols-4" : shown.length === 3 ? "lg:grid-cols-3" : "";

  if (variant === "plain") {
    return (
      <div className={`grid grid-cols-2 gap-8 border-y border-line py-12 ${cols}`}>
        {shown.map((s, i) => (
          <Reveal key={s.key} delay={i * 80} className="max-lg:odd:last:col-span-2">
            <p className="display text-4xl md:text-6xl">{s.value}</p>
            <p className="mt-3 max-w-[15rem] text-sm text-muted md:text-base">{s.label}</p>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-line ring-1 ring-line ${cols}`}>
      {shown.map((s, i) => (
        <Reveal key={s.key} delay={i * 80} className="bg-stone-soft/90 p-6 max-lg:odd:last:col-span-2 md:p-10">
          <p className="display text-4xl md:text-6xl">{s.value}</p>
          <p className="mt-3 max-w-[16rem] text-sm text-muted md:text-base">{s.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
