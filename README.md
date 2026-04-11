# FlowPilot

Responsive landing page for **FlowPilot**, a fictional AI workspace product. Built as the deliverable for a Senior Frontend + Vibe Coding technical test.

## Submission links

- Live URL (Vercel): https://flow-pilot-eight.vercel.app/
- GitHub Repository: https://github.com/JuanAlejo-Rivera/FlowPilot
- Video Walkthrough (2-4 min): https://REPLACE_WITH_YOUR_VIDEO_URL
- Walkthrough script (repo file): VIDEO_WALKTHROUGH.md

> Replace the remaining placeholder URL before sending the final submission.

---

## Submission checklist

- [x] Single responsive landing page with required sections
- [x] Source code in GitHub repository
- [x] README with setup, stack, decisions, AI usage and trade-offs
- [x] Live deployed URL added above
- [ ] 2-4 minute walkthrough video URL added above

---

## Highlights

- **Six required sections**: Hero, Features, Benefits, Social proof, Final CTA, Footer — plus a sticky nav and an in-page workspace mockup.
- **Fully responsive** from 320px up to ultra-wide, with a mobile-first nav, fluid typography and a 3D-tilted mock UI that flattens on hover.
- **Dark mode** via a 3-state toggle (Light / System / Dark) with `localStorage` persistence and an anti-flash inline script on `index.html`.
- **i18n** with `i18next` + browser language detector: English and Spanish, persisted in `localStorage`, with the `<html lang>` attribute kept in sync on route changes.
- **Router** with 8 placeholder routes (`/demo`, `/pricing`, `/about`, `/careers`, `/press`, `/docs`, `/changelog`, `/status`) plus a custom 404.
- **Accessible**: landmark regions, `aria-label`s on icon-only controls, `aria-pressed` on the theme toggle, `aria-expanded` on the mobile menu, `motion-reduce:` variants for users who prefer reduced motion.
- **Zero animation libraries**: a small `Reveal` component powered by `IntersectionObserver` handles the scroll-in animations.

---

## Stack

| | |
| --- | --- |
| Framework | React 19 + Vite 8 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 (via `@tailwindcss/vite`, no `tailwind.config.js`) |
| Routing | `react-router-dom` v7 |
| i18n | `i18next` + `react-i18next` + `i18next-browser-languagedetector` |
| Icons | Hand-rolled inline SVG |

No component library, no animation library, no icon pack. Everything visual is Tailwind utilities + SVG.

---

## Getting started

```bash
npm install
npm run dev          # local dev server
npm run build        # type-check + production build
npm run preview      # preview the production build
```

Node 20+ is recommended.

---

## Project structure

```
src/
├── components/
│   ├── LanguageSwitcher.tsx   # EN / ES segmented control
│   └── ThemeToggle.tsx        # Light / System / Dark segmented control
├── i18n/
│   ├── index.ts               # i18next init
│   └── resources/
│       ├── en.ts              # English copy (source of truth for key shape)
│       └── es.ts              # Spanish copy
├── layouts/
│   └── AppLayout.tsx          # Outlet wrapper
├── pages/
│   ├── landing/
│   │   └── LandingParts.tsx   # Nav, MockUI, FeatureCard, BenefitCard, Reveal, class tokens
│   ├── LandingPage.tsx        # The landing page (composition)
│   ├── InfoPage.tsx           # Generic shell for /pricing, /about, /docs, ...
│   └── NotFoundPage.tsx       # 404
├── i18n/                      # (above)
├── index.css                  # Tailwind entry + base layer
├── main.tsx                   # Entry
└── router.tsx                 # Routes + HtmlLanguageSync
```

Class-name tokens like `btnPrimary`, `btnGhost`, `eyebrow`, `sectionH2`, `sectionLead` live in `LandingParts.tsx` so that the landing page stays composable and consistent without duplicated strings.

---

## Design decisions

- **Tailwind v4, no config file.** Using the new Oxide engine, CSS variables through `@theme`, and arbitrary bracket values (`bg-[radial-gradient(...)]`, `max-w-[1120px]`) for anything that wouldn't read well as a preset.
- **Class-based dark mode.** `html.dark` is set by an inline script in `index.html` _before_ React mounts, reading `localStorage.theme` first and falling back to `prefers-color-scheme`. This avoids the flash of wrong theme.
- **Router + hash links coexist.** Anchors like `#features` scroll inside the landing, while `/pricing`, `/about`, etc. are real routes handled by React Router. Different jobs.
- **Anti-flash for i18n too.** `i18next-browser-languagedetector` reads `localStorage` first so the language choice survives reloads without a flicker.
- **One source of truth for copy.** `en.ts` is typed `as const` and the Spanish file mirrors the exact shape, so a missing translation surfaces as a TypeScript error instead of runtime `undefined`.

---

## AI-assisted workflow

This build was done with AI pair-programming support (primarily GitHub Copilot Chat in this iteration). My role was product direction, architecture and taste; AI support helped with code generation, migration from vanilla CSS to Tailwind v4, and copy iteration.

What I used AI for:

- Scaffolding the landing composition and the MockUI from a verbal description of the layout.
- Migrating the first draft (vanilla CSS) to Tailwind v4 utilities in one pass.
- Iterating on copy until it stopped sounding like a generated pitch deck (the "AI smell" pass).
- Generating Spanish translations with consistent tone.
- Proposing the `Reveal` component and the `ThemeToggle` anti-flash approach.

What I kept to myself:

- All product decisions: which sections, what the hero says, what the metrics mean, which colors.
- Pushing back when the output got generic (the "remove AI smell" revision).
- Verifying every dependency version and the Tailwind v4 migration path.

---

## Known trade-offs & what I would do next

- **Stats and testimonial are still fictional**, by design — this is a landing for a made-up product. In a real launch these would come from a CMS or MDX.
- **Email form is a stub.** `onSubmit` calls `preventDefault` and stops. Wiring it to a real endpoint is a 10-line change.
- **No analytics, no cookie banner, no privacy page.** Out of scope for the test.
- **Images.** The hero visual is a pure-HTML mock on purpose — no external image requests, no CLS. In production I'd add a real screenshot behind `loading="lazy"` + a `fetchpriority="high"` LCP image.
- **Tests.** I'd add Playwright smoke tests for the nav, the theme toggle persistence and the language switcher.

---

## License

For evaluation purposes only.
