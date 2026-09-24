import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">{title}</h2>
      </Reveal>
      {aside && <Reveal delay={120}>{aside}</Reveal>}
    </div>
  );
}
