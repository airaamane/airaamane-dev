# Claude training — SvelteKit

A Svelte 5 / SvelteKit recreation of the current published Claude training site, preserving its authored styles, portrait, copy, three pages, mobile navigation, accordions, and downloadable agendas.

- Repository: https://github.com/airaamane/airaamane-dev
- Production: https://abdellah-claude-training.vercel.app

## Development

Requires Node.js 22.

```sh
npm ci
npm run dev
```

## Validation and production build

```sh
npm run check
npm run build
npm run preview
```

All pages, robots.txt, and sitemap.xml are prerendered. `@sveltejs/adapter-vercel` produces the Vercel deployment output. Interactive components hydrate with Svelte; no original site JavaScript or embedded remote website is required.

## Pages

- `/` — homepage, workshops, consulting, business agenda, FAQs
- `/claude-code-training/` — Claude Code workshop and downloadable agenda
- `/claude-agent-sdk-training/` — Agent SDK workshop and downloadable agenda

The original booking placeholder remains disabled. To enable it, set `bookingUrl` in `src/lib/site.ts` to your verified Calendly URL and redeploy. Set `siteUrl` in the same file when changing the primary domain; canonical metadata, structured data, sitemap, and robots.txt use it.

## Deploy

The repository is connected to the `abdellah-claude-training` project in the `rocksalt-coffee` Vercel team. Pushes to `main` deploy to production; pull requests receive preview deployments.

To deploy manually:

```sh
vercel deploy --prod --scope rocksalt-coffee
```

The project uses the current SvelteKit Vercel framework preset (`sveltekit-1`). No secrets or database are required.

`scripts/migrate-reference.mjs` documents the initial migration and accepts a path to the original site's `dist` directory. It is not needed to run, build, or deploy this app. Edit the Svelte source directly for future changes.
