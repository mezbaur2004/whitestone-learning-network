// A stack of soft white stones — the brand's visual signature in the hero.
const stones = [
  { w: 300, h: 150, r: "52% 48% 46% 54% / 60% 58% 42% 40%", rot: -3, tone: ["#fbfbfa", "#d9dbde"] },
  { w: 230, h: 120, r: "48% 52% 55% 45% / 58% 55% 45% 42%", rot: 4, tone: ["#fafaf9", "#d6d8dc"] },
  { w: 170, h: 96, r: "55% 45% 50% 50% / 62% 60% 40% 38%", rot: -5, tone: ["#fbfbfb", "#d8dadd"] },
  { w: 112, h: 72, r: "50% 50% 46% 54% / 64% 62% 38% 36%", rot: 6, tone: ["#fcfcfc", "#dcdee1"] },
];

export function Cairn({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`flex flex-col-reverse items-center ${className}`}>
      {stones.map((s, i) => (
        <div
          key={i}
          className="relative -mt-3"
          style={{ width: s.w, height: s.h, transform: `rotate(${s.rot}deg)`, zIndex: 10 - i }}
        >
          <div
            className="absolute inset-0"
            style={{
              borderRadius: s.r,
              background: `radial-gradient(120% 110% at 32% 22%, ${s.tone[0]} 0%, #eeeff0 38%, ${s.tone[1]} 100%)`,
              boxShadow:
                "inset -10px -14px 28px rgba(15,16,18,0.08), inset 8px 10px 18px rgba(255,255,255,0.9), 0 18px 30px -18px rgba(15,16,18,0.35)",
            }}
          />
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]" viewBox="0 0 100 60" preserveAspectRatio="none">
            <path d={`M8 ${30 + i * 3} C 30 ${18 + i}, 55 ${40 - i * 2}, 92 ${26 + i}`} stroke="#0f1012" strokeWidth="0.6" fill="none" />
          </svg>
        </div>
      ))}
      <div className="mt-2 h-6 w-80 rounded-[50%] bg-ink/10 blur-xl" />
    </div>
  );
}
