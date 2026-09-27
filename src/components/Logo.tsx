import Link from "next/link";
import { useId } from "react";

// The brand mark: a white stone, shaded so it reads on both light and dark backgrounds.
const STONE_PATH =
  "M8.5 13.2C11.4 6.6 20.8 3.9 28 6.6c6.1 2.3 8.6 8.9 6.9 15.6-1.9 7.5-8.6 12.7-16.1 11.9C10.6 33.2 5.2 27 6 20.4c.3-2.6 1.3-5 2.5-7.2Z";

export function StoneMark({ className = "" }: { className?: string }) {
  const id = `stone-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <radialGradient id={id} cx="35%" cy="28%" r="80%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="45%" stopColor="#f1f2f3" />
          <stop offset="100%" stopColor="#cfd2d6" />
        </radialGradient>
      </defs>
      <path d={STONE_PATH} fill={`url(#${id})`} stroke="#0f1012" strokeOpacity="0.2" strokeWidth="1" />
      <path
        d="M13.5 16c2.6-3.2 7.4-4.3 11-2.4"
        stroke="#0f1012"
        strokeOpacity="0.14"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
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
      <StoneMark className="h-8 w-8 transition-transform duration-500 ease-out-soft group-hover:rotate-[-12deg] md:h-9 md:w-9" />
      <span className="text-[1.65rem] font-extrabold leading-none tracking-[-0.055em] md:text-[1.85rem]">
        whitestone
      </span>
    </Link>
  );
}
