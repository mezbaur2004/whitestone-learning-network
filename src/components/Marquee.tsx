import { StoneMark } from "./Logo";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-14 py-2 hover:[animation-play-state:paused] md:gap-20">
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 whitespace-nowrap text-2xl font-bold tracking-[-0.04em] text-ink/35 md:text-3xl"
          >
            <StoneMark className="h-5 w-5 opacity-60" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
