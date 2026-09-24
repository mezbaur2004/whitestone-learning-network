import { testimonials } from "@/content/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Hidden entirely until real, approved quotes are added to the content config. */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section className="container-x mt-28 md:mt-40">
      <SectionHeading eyebrow="Community" title="Voices from our community" />
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={`${t.name}-${i}`}
            delay={i * 100}
            className={`flex flex-col justify-between rounded-[28px] p-8 md:p-10 ${
              i === 0 ? "bg-ink text-stone-paper" : "bg-stone-paper/80 ring-1 ring-ink/5"
            }`}
          >
            <p className="text-5xl font-bold leading-none opacity-30">&ldquo;</p>
            <blockquote className="mt-4 text-xl leading-snug tracking-[-0.015em] md:text-2xl">{t.quote}</blockquote>
            <div className="mt-10">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm opacity-60">
                {t.role}, {t.institution}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
