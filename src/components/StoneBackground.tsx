// Fixed, low-contrast "white stone" backdrop: soft pebble shapes, faint
// marble veins and a fine grain. Sits behind all page content.
export function StoneBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#e9eaeb_0%,#e3e4e5_45%,#dfe0e2_100%)]" />

      <div
        className="animate-float absolute -right-40 -top-32 h-[560px] w-[680px] opacity-70 blur-2xl"
        style={{
          borderRadius: "58% 42% 55% 45% / 48% 60% 40% 52%",
          background: "radial-gradient(circle at 35% 30%, #f7f7f6 0%, #ecedee 45%, transparent 75%)",
        }}
      />
      <div
        className="animate-float absolute -left-52 top-[45%] h-[520px] w-[560px] opacity-60 blur-3xl [animation-delay:-6s]"
        style={{
          borderRadius: "45% 55% 38% 62% / 55% 42% 58% 45%",
          background: "radial-gradient(circle at 60% 40%, #f5f5f4 0%, #e8e9ea 50%, transparent 78%)",
        }}
      />

      <svg className="absolute inset-0 h-full w-full opacity-[0.06]" preserveAspectRatio="none" viewBox="0 0 1440 900">
        <g fill="none" stroke="#0f1012" strokeLinecap="round">
          <path d="M-40 180 C 220 120, 380 260, 620 210 S 1020 90, 1480 170" strokeWidth="1.2" />
          <path d="M-40 520 C 180 470, 420 600, 700 540 S 1100 430, 1480 500" strokeWidth="0.9" />
          <path d="M300 -20 C 340 160, 260 320, 360 520 S 420 820, 380 940" strokeWidth="0.7" />
          <path d="M1060 -20 C 1000 200, 1120 380, 1040 600 S 1100 820, 1080 940" strokeWidth="0.8" />
          <path d="M520 700 C 700 660, 820 760, 980 720 S 1260 650, 1480 720" strokeWidth="0.6" />
        </g>
      </svg>

      <svg className="absolute inset-0 h-full w-full opacity-[0.22] mix-blend-multiply">
        <filter id="stone-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.35" />
          </feComponentTransfer>
        </filter>
        <rect width="100%" height="100%" filter="url(#stone-grain)" />
      </svg>
    </div>
  );
}
