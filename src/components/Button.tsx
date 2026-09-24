import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "./icons";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  size?: "md" | "lg";
  className?: string;
  arrow?: boolean;
};

const variants = {
  dark: "bg-ink text-stone-paper hover:bg-ink-soft",
  light: "bg-stone-paper text-ink hover:bg-white",
  outline: "border border-ink/15 text-ink hover:border-ink hover:bg-ink hover:text-stone-paper",
};

const sizes = {
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-16 px-9 text-lg md:h-[4.25rem]",
};

export function Button({ href, children, variant = "dark", size = "md", className = "", arrow = false }: Props) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[-0.01em] transition-colors duration-300 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 ease-out-soft group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}
