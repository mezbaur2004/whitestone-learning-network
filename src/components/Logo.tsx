import Link from "next/link";

export function StoneMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path
        d="M8.5 13.2C11.4 6.6 20.8 3.9 28 6.6c6.1 2.3 8.6 8.9 6.9 15.6-1.9 7.5-8.6 12.7-16.1 11.9C10.6 33.2 5.2 27 6 20.4c.3-2.6 1.3-5 2.5-7.2Z"
        fill="currentColor"
      />
      <path
        d="M14 15.5c2.6-3.2 7.4-4.3 11-2.4"
        stroke="#e4e5e6"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
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
      <StoneMark className="h-8 w-8 text-ink transition-transform duration-500 ease-out-soft group-hover:rotate-[-12deg] md:h-9 md:w-9" />
      <span className="text-[1.65rem] font-extrabold leading-none tracking-[-0.055em] md:text-[1.85rem]">
        whitestone
      </span>
    </Link>
  );
}
