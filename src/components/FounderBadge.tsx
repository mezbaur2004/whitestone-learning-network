import Image from "next/image";
import { founder } from "@/content/site";
import { publicFile } from "@/lib/assets";

export function FounderBadge() {
  const photo = publicFile(founder.photo);
  return (
    <a href={founder.url} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
      <div className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-stone-paper shadow-[0_1px_0_rgba(15,16,18,0.06)]">
        {photo ? (
          <Image src={photo} alt={founder.name} fill sizes="56px" className="object-cover" />
        ) : (
          <span className="text-lg font-extrabold tracking-tighter">{founder.initials}</span>
        )}
      </div>
      <p className="text-[0.95rem] leading-snug text-ink-soft md:text-base">
        Founded by <span className="font-semibold text-ink group-hover:underline">{founder.name}</span>
        <span className="mx-2 text-ink/30">·</span>
        {founder.yearsInEducation} years in education
      </p>
    </a>
  );
}
