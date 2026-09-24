# Whitestone Learning Network

The front-door website for **Whitestone Learning Network Ltd**, Dhaka, Bangladesh: the family behind
Wheaton International School, Guidance International School, Pedago Academy and Jolly Learning BD,
founded by educationist Abdullah Jaman.

Built with Next.js 15 (App Router), React 19, TypeScript and Tailwind CSS v4.

This site only introduces the network. Every institution links out to its own website. It has no logins,
no LMS or shop features, and no forms that write to any institution's systems.

## Pages

| Route | Page |
| --- | --- |
| `/` | Home: hero, the Whitestone family, stats, institutions, what we do, our approach, founder, community voices, contact CTA |
| `/institutions` | The four institutions in more detail, plus the founder |
| `/about` | Why the network exists, values, founder, leadership |
| `/contact` | Enquiry form with routing to each institution's own site, office details, FAQ |

`/work` and `/work/:slug` redirect (301) to `/institutions`.

## Editing content

**Every editable fact is in `src/content/site.ts`.** A `null` value or an empty array hides that item on
the site, and every value still to be supplied is marked `// TODO: confirm`.

Files that are picked up automatically when you add them:

- `public/images/abdullah-jaman.jpg`: founder photo (a placeholder shows until it exists)
- `public/logos/<slug>.(svg|png|webp|jpg)`: logos for the "Whitestone family" strip. The slugs are
  `wis`, `gis`, `pedago-academy`, `jolly-learning-bd` and `abdullah-jaman`. The text name shows until a logo exists.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run build
```
