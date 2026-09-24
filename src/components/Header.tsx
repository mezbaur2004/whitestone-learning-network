"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { ArrowUpRight } from "./icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
          scrolled || open ? "border-line bg-stone-base/80 backdrop-blur-xl" : "border-line bg-transparent"
        }`}
      >
        <div className="container-x flex h-20 items-center justify-between md:h-24">
          <Logo onClick={close} />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {nav.slice(0, -1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors ${
                  isActive(item.href) ? "bg-stone-paper text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden h-12 items-center rounded-full bg-ink px-6 text-[0.95rem] font-semibold text-stone-paper transition-colors hover:bg-ink-soft lg:inline-flex"
            >
              Contact us
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-14 w-14 place-items-center rounded-full bg-stone-paper shadow-[0_1px_2px_rgba(15,16,18,0.06)] transition-transform hover:scale-105 lg:hidden"
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute h-[2px] w-6 rounded bg-ink transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[7px]"
                }`}
              />
              <span className={`absolute h-[2px] w-6 rounded bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`absolute h-[2px] rounded bg-ink transition-all duration-300 ${
                  open ? "w-6 -rotate-45" : "w-4 translate-x-1 translate-y-[7px]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-x-0 bottom-0 top-20 z-40 bg-stone-base/95 backdrop-blur-xl transition-all duration-500 ease-out-soft md:top-24 lg:hidden ${
          open ? "visible opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col justify-between pb-10 pt-8">
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li
                  key={item.href}
                  className="transition-all duration-500 ease-out-soft"
                  style={{
                    transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
                    opacity: open ? 1 : 0,
                    transform: open ? "none" : "translateY(16px)",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={close}
                    className="group flex items-center justify-between border-b border-line py-4"
                  >
                    <span className={`display text-5xl ${isActive(item.href) ? "text-ink" : "text-ink/70"}`}>
                      {item.label}
                    </span>
                    <ArrowUpRight className="h-7 w-7 opacity-40 transition group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-4 text-ink-soft">
            {site.email && (
              <a href={`mailto:${site.email}`} className="block text-xl font-semibold text-ink">
                {site.email}
              </a>
            )}
            {site.socials.length > 0 && (
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {site.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
            <p className="text-sm">
              {site.city}, {site.country}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
