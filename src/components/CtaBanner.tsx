import { Button } from "./Button";
import { Reveal } from "./Reveal";
import { Cairn } from "./Cairn";

export function CtaBanner({
  title = "Let's talk about learning.",
  body = "Admissions, partnerships, media or speaking invitations. Tell us what you need and we'll point you to the right team.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="container-x mt-28 md:mt-40">
      <Reveal className="relative overflow-hidden rounded-[36px] bg-stone-paper/80 px-6 py-14 ring-1 ring-ink/5 md:px-16 md:py-20">
        <div className="relative z-10 max-w-2xl">
          <h2 className="display text-4xl md:text-6xl">{title}</h2>
          <p className="mt-6 max-w-lg text-lg text-ink-soft">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" size="lg" arrow>
              Contact us
            </Button>
            <Button href="/institutions" size="lg" variant="outline">
              Explore our institutions
            </Button>
          </div>
        </div>
        <Cairn className="pointer-events-none absolute -bottom-6 right-10 hidden scale-90 opacity-90 lg:flex" />
      </Reveal>
    </section>
  );
}
