import { Button } from "@/components/Button";
import { Cairn } from "@/components/Cairn";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <Cairn className="scale-75" />
      <h1 className="display mt-8 text-5xl md:text-7xl">Page not found</h1>
      <p className="mt-4 max-w-md text-lg text-ink-soft">This stone has been moved. Let&rsquo;s get you back on the path.</p>
      <Button href="/" size="lg" className="mt-10">
        Back to home
      </Button>
    </section>
  );
}
