import Image from "next/image";
import { founder } from "@/content/site";
import { publicFile } from "@/lib/assets";
import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";

export function FounderSection({ eyebrow = "Our founder" }: { eyebrow?: string }) {
  const photo = publicFile(founder.photo);

  return (
    <section id="founder" className="container-x mt-28 scroll-mt-28 md:mt-40">
      <Reveal className="grid overflow-hidden rounded-[36px] bg-stone-paper/80 ring-1 ring-ink/5 lg:grid-cols-[1fr_1.35fr]">
        <div className="relative min-h-[380px] bg-[radial-gradient(120%_90%_at_30%_15%,#f7f7f6_0%,#e3e5e7_55%,#cfd2d6_100%)]">
          {photo ? (
            <Image
              src={photo}
              alt={`${founder.name}, ${founder.title}`}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          ) : (
            // Placeholder until /public/images/abdullah-jaman.jpg is added.
            <div aria-hidden className="absolute inset-0">
              <div
                className="absolute bottom-0 left-1/2 h-[62%] w-[58%] -translate-x-1/2"
                style={{
                  borderRadius: "50% 50% 44% 56% / 60% 60% 40% 40%",
                  background: "radial-gradient(circle at 35% 25%, #fbfbfa 0%, #e2e4e6 60%, #cdd0d4 100%)",
                  boxShadow: "inset -10px -14px 26px rgba(15,16,18,0.08)",
                }}
              />
              <span className="absolute left-1/2 top-[52%] -translate-x-1/2 text-5xl font-bold tracking-tight text-ink/60">
                {founder.initials}
              </span>
            </div>
          )}
        </div>

        <div className="p-8 md:p-14">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="display mt-5 text-4xl md:text-5xl">{founder.name}</h2>
          <p className="mt-2 text-lg font-medium text-muted">{founder.title}</p>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
            {founder.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l-2 border-ink pl-5 text-xl leading-snug tracking-[-0.015em] md:text-2xl">
            &ldquo;{founder.excerpt}&rdquo;
          </blockquote>
          <a
            href={founder.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex h-14 items-center gap-2 rounded-full bg-ink px-7 font-semibold text-stone-paper transition-colors hover:bg-ink-soft"
          >
            Visit abdullahjaman.com
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
