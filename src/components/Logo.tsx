import Link from "next/link";
import { useId } from "react";

// The brand mark: a flat white pebble, lit from the top left, with a soft
// underside, faint mineral speckles and a vein. Reads on light and dark backgrounds.
const STONE_PATH =
  "M4.3 23.2C3.6 17.9 8.9 12.2 16.4 10.4c6.4-1.5 13.9-.6 17.7 3.5 3.3 3.6 2.4 9.1-2.2 12.9-4.3 3.5-10.6 5-16.6 4.4C9.3 30.6 4.9 27.9 4.3 23.2Z";

const SPECKLES: [number, number, number, number][] = [
  // cx, cy, r, opacity
  [8.6, 21.4, 0.3, 0.3],
  [13.9, 26.8, 0.35, 0.28],
  [26.4, 24.6, 0.4, 0.3],
  [29.8, 16.2, 0.3, 0.26],
  [18.2, 17.9, 0.25, 0.22],
  [22.9, 13.6, 0.28, 0.24],
  [31.2, 21.3, 0.3, 0.28],
  [10.9, 17.3, 0.25, 0.2],
];

export function StoneMark({ className = "" }: { className?: string }) {
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const id = (name: string) => `stone-${name}-${uid}`;
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <radialGradient id={id("body")} cx="36%" cy="28%" r="78%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="38%" stopColor="#f2f3f4" />
          <stop offset="78%" stopColor="#d9dce0" />
          <stop offset="100%" stopColor="#c3c7cc" />
        </radialGradient>
        <linearGradient id={id("under")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="50%" stopColor="#0f1012" stopOpacity="0" />
          <stop offset="100%" stopColor="#0f1012" stopOpacity="0.14" />
        </linearGradient>
        <radialGradient id={id("shine")} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={id("shadow")} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f1012" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#0f1012" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="20.6" cy="32.2" rx="14" ry="2.6" fill={`url(#${id("shadow")})`} />
      <path d={STONE_PATH} fill={`url(#${id("body")})`} />
      <path d={STONE_PATH} fill={`url(#${id("under")})`} />
      <path
        d="M12.4 12.6c1.6 3.6 4 7 7.6 9.4 2.6 1.8 4.4 4 5.1 7.2"
        stroke="#7d838b"
        strokeOpacity="0.3"
        strokeWidth="0.5"
        strokeLinecap="round"
        fill="none"
      />
      {SPECKLES.map(([cx, cy, r, o]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={r} fill="#6f757d" fillOpacity={o} />
      ))}
      <ellipse cx="15.4" cy="14.6" rx="6.2" ry="2.2" transform="rotate(-10 15.4 14.6)" fill={`url(#${id("shine")})`} />
      <path d={STONE_PATH} fill="none" stroke="#0f1012" strokeOpacity="0.2" strokeWidth="0.8" />
    </svg>
  );
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group inline-flex items-center gap-2.5"
      aria-label="Whitestone Learning Network — home"
    >
      <StoneMark className="h-10 w-10 transition-transform duration-500 ease-out-soft group-hover:rotate-[-10deg] md:h-11 md:w-11" />
      <span className="text-[1.65rem] font-extrabold leading-none tracking-[-0.055em] md:text-[1.85rem]">
        whitestone
      </span>
    </Link>
  );
}
