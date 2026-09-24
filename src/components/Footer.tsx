import Link from "next/link";
import { nav, network, site } from "@/content/site";
import { StoneMark } from "./Logo";
import { ArrowUpRight } from "./icons";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-stone-paper">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[520px] opacity-[0.07]"
        style={{
          borderRadius: "58% 42% 55% 45% / 48% 60% 40% 52%",
          background: "radial-gradient(circle at 35% 30%, #ffffff 0%, #9a9da3 60%, transparent 80%)",
        }}
      />
      <div className="container-x relative pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <p className="text-sm text-stone-paper/60">Questions about admissions, courses or resources?</p>
            <Link href="/contact" className="group mt-4 inline-flex items-end gap-4">
              <span className="display text-6xl md:text-8xl">Let&rsquo;s talk</span>
              <span className="mb-2 grid h-14 w-14 place-items-center rounded-full bg-stone-paper text-ink transition-transform duration-500 ease-out-soft group-hover:rotate-45 md:mb-4 md:h-20 md:w-20">
                <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8" />
              </span>
            </Link>
            {site.email && (
              <a
                href={`mailto:${site.email}`}
                className="mt-10 block text-xl font-medium text-stone-paper/80 transition-colors hover:text-stone-paper md:text-2xl"
              >
                {site.email}
              </a>
            )}
            {site.phone && (
              <a
                href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}
                className="mt-2 block text-lg text-stone-paper/60 transition-colors hover:text-stone-paper"
              >
                {site.phone}
              </a>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-4">
            <div>
              <p className="mb-4 text-stone-paper/50">Pages</p>
              <ul className="space-y-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-base transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="mb-4 text-stone-paper/50">Our network</p>
              <ul className="space-y-3">
                {network.map((n) => (
                  <li key={n.slug}>
                    <a
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-base transition-colors hover:text-white"
                    >
                      {n.name}
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-opacity group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 space-y-10 md:col-span-1">
              {site.socials.length > 0 && (
                <div>
                  <p className="mb-4 text-stone-paper/50">Follow</p>
                  <ul className="space-y-3">
                    {site.socials.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base transition-colors hover:text-white"
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <p className="mb-4 text-stone-paper/50">Office</p>
                <address className="text-base not-italic leading-relaxed">
                  {site.officeAddress && (
                    <>
                      {site.officeAddress}
                      <br />
                    </>
                  )}
                  {site.city}, {site.country}
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-sm text-stone-paper/50 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <StoneMark className="h-6 w-6 text-stone-paper" />
            <span>
              © {new Date().getFullYear()} {site.legalName}
            </span>
          </div>
          <p>{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
