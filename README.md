# Whitestone Learning Network

Brand portfolio site built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.
It's a light, stone-toned design with bold type, pill buttons and a faint "white stone" background.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, partners, stats, featured work, services, process, testimonials |
| `/work` | Portfolio grid with category filter |
| `/work/[slug]` | Case study (statically generated for each project) |
| `/about` | Story, values, milestones, team |
| `/contact` | Enquiry form, contact details, FAQ |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

## Editing content

All copy lives in `src/lib/data.ts`: projects, services, stats, testimonials, team and contact details.
**The current content is placeholder** and should be replaced with real Whitestone material.

- **Project imagery:** `src/components/ProjectVisual.tsx` draws placeholder cover art from each project's `tones`.
  Swap it for `next/image` once real photos are available.
- **Contact form:** `src/components/ContactForm.tsx` currently opens the visitor's email app (`mailto:`).
  Connect it to an API route or form service to receive submissions directly.
- **Theme colours:** the tokens are the `@theme` block in `src/app/globals.css`.
- **Background texture:** `src/components/StoneBackground.tsx`.
