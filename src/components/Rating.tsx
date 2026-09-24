import { Star } from "./icons";

export function Rating() {
  return (
    <div className="flex items-center gap-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-stone-paper shadow-[0_1px_0_rgba(15,16,18,0.06)]">
        <span className="relative text-2xl font-extrabold tracking-tighter">
          W<span className="absolute -right-1.5 top-1 h-2 w-2 rounded-full bg-star" />
        </span>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <span className="text-3xl font-semibold tracking-tight">4.9</span>
          <div className="flex gap-0.5 text-star">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
          </div>
        </div>
        <p className="text-sm text-muted md:text-base">Based on 210 partner reviews</p>
      </div>
    </div>
  );
}
