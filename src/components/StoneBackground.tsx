"use client";

import { useEffect, useRef } from "react";

// Fixed, low-contrast "white stone" backdrop: soft pebble shapes, faint
// marble veins and a fine grain. Sits behind all page content.
//
// Kept cheap to composite: the pebbles only translate (no rotate), their
// blur is never on the animated element, and the grain is a pre-rendered
// tile (public/textures/stone-grain.png, rendered once from the original
// feTurbulence fractalNoise filter) instead of live noise.
export function StoneBackground() {
  const ref = useRef<HTMLDivElement>(null);

  // Pause the drift animation while the tab is hidden.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sync = () => el.classList.toggle("is-paused", document.visibilityState === "hidden");
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return (
    <div ref={ref} aria-hidden className="stone-bg pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#e9eaeb_0%,#e3e4e5_45%,#dfe0e2_100%)]" />

      {/* Each pebble: the wrapper only translates (compositor-only), and the
          blur sits on a static child, so it is rasterized once and then just
          moved, not re-filtered every frame. */}
      <div className="animate-drift absolute -right-40 -top-32 h-[560px] w-[680px]">
        <div
          className="absolute inset-0 opacity-70 blur-2xl"
          style={{
            borderRadius: "58% 42% 55% 45% / 48% 60% 40% 52%",
            background: "radial-gradient(circle at 35% 30%, #f7f7f6 0%, #ecedee 45%, transparent 75%)",
          }}
        />
      </div>
      <div className="animate-drift absolute -left-52 top-[45%] h-[520px] w-[560px] [animation-delay:-6s]">
        <div
          className="absolute inset-0 opacity-60 blur-3xl"
          style={{
            borderRadius: "45% 55% 38% 62% / 55% 42% 58% 45%",
            background: "radial-gradient(circle at 60% 40%, #f5f5f4 0%, #e8e9ea 50%, transparent 78%)",
          }}
        />
      </div>

      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 1440 900">
        <g fill="none" stroke="#0f1012" strokeLinecap="round">
          <path d="M-40 180 C 220 120, 380 260, 620 210 S 1020 90, 1480 170" strokeWidth="1.2" />
          <path d="M-40 520 C 180 470, 420 600, 700 540 S 1100 430, 1480 500" strokeWidth="0.9" />
          <path d="M300 -20 C 340 160, 260 320, 360 520 S 420 820, 380 940" strokeWidth="0.7" />
          <path d="M1060 -20 C 1000 200, 1120 380, 1040 600 S 1100 820, 1080 940" strokeWidth="0.8" />
          <path d="M520 700 C 700 660, 820 760, 980 720 S 1260 650, 1480 720" strokeWidth="0.6" />
        </g>
      </svg>

      {/* The tile is pure black with the grain in its alpha channel, so normal
          blending gives exactly the pixels mix-blend-multiply did, without
          forcing a full-viewport blend on every frame the pebbles move. */}
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{ backgroundImage: "url(/textures/stone-grain.png)", backgroundRepeat: "repeat", backgroundSize: "256px 256px" }}
      />
    </div>
  );
}
