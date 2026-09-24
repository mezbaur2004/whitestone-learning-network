import type { Metadata } from "next";
import { CtaBanner } from "@/components/CtaBanner";
import { Reveal } from "@/components/Reveal";
import { WorkGrid } from "@/components/WorkGrid";
import { projects } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected learning programs, platforms and training projects by Whitestone Learning Network.",
};

export default function WorkPage() {
  return (
    <>
      <section className="container-x pb-12 pt-14 md:pb-16 md:pt-24">
        <Reveal>
          <p className="eyebrow">Our work</p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display mt-6 max-w-5xl text-5xl md:text-7xl xl:text-[5.5rem]">
            Learning that people finish, and remember
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
            A selection of programs, platforms and training we&rsquo;ve designed with our partners, from early
            reading to online degrees.
          </p>
        </Reveal>
      </section>

      <section className="container-x">
        <WorkGrid projects={projects} />
      </section>

      <CtaBanner title="Have a project in mind?" />
    </>
  );
}
