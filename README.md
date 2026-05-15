# IshanBrarWebsite (local)

This is a Next.js portfolio site (App Router + Tailwind).

## Run locally

```bash
cd site
npm run dev
```

Then open `http://localhost:3000`.

## Production domain

Canonical URL: **https://www.ishanbrar.com**

Copy `.env.example` to `.env.local` for local testing, and set `NEXT_PUBLIC_SITE_URL` in Vercel for production deploys.

## Screenshot conventions

Web project screenshots live under:

`site/public/projects/<slug>/`

Example:

`site/public/projects/pga/01.png`

Update the references in `site/src/data/projects.ts` as you add more images.

## Capture web screenshots

```bash
cd site
npm run capture:screens
```

This uses Playwright for web apps like `mapper`, `ethnic-mapper`, and `mymini`.

## Capture iOS screenshots

```bash
cd site
npm run capture:ios
```

Notes:

- `PunjabiTutor` uses its existing UI test and writes directly into `public/projects/punjabitutor/`.
- `Trivia` and `CornerApp` use a non-invasive launch-only flow that builds the app, boots the simulator, launches it, and captures the initial visible state without modifying those repos.
- You can target one app with `npm run capture:ios -- --app=punjabitutor`.
- You can choose a simulator with `npm run capture:ios -- --device="iPhone 16 Pro"`.

## Sync GitHub metadata (optional)

```bash
cd site
npm run sync:github
```

This writes `site/src/data/github-repos.json` for reference.
