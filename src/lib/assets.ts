import "server-only";
import fs from "node:fs";
import path from "node:path";

const publicDir = path.join(process.cwd(), "public");

/** Returns the public path if the file exists in /public, otherwise null. */
export function publicFile(src: string | null | undefined): string | null {
  if (!src) return null;
  return fs.existsSync(path.join(publicDir, src)) ? src : null;
}

/** Finds /public/logos/<slug>.(svg|png|webp|jpg) if one has been added. */
export function logoFor(slug: string): string | null {
  for (const ext of ["svg", "png", "webp", "jpg"]) {
    const found = publicFile(`/logos/${slug}.${ext}`);
    if (found) return found;
  }
  return null;
}
