import Image from "next/image";
import { StoneMark } from "./Logo";

type Item = { name: string; logo: string | null };

export function Marquee({ items }: { items: Item[] }) {
  // Repeat the set so the strip is always wider than the viewport.
  const base = items.length < 6 ? [...items, ...items] : items;
  const loop = [...base, ...base];
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="animate-marquee flex w-max items-center gap-14 py-2 hover:[animation-play-state:paused] md:gap-20">
        {loop.map((item, i) => (
          <span
            key={`${item.name}-${i}`}
            aria-hidden={i >= items.length}
            className="flex items-center gap-3 whitespace-nowrap text-2xl font-bold tracking-[-0.04em] text-ink/35 md:text-3xl"
          >
            {item.logo ? (
              <Image src={item.logo} alt={item.name} width={160} height={48} className="h-10 w-auto opacity-60 grayscale" />
            ) : (
              <>
                <StoneMark className="h-5 w-5 opacity-60" />
                {item.name}
              </>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
