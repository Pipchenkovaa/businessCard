# Alina Pipchenkova — Portfolio

A dark, typographic personal site built with **Vite + React + TypeScript + Tailwind CSS + Framer Motion**.
Direction: flat black, strictly monochrome (no gradients) with a single pink accent,
dark-glass panels, editorial type, a `//` syntax motif, and a chromed letter "A" in the
hero. Bilingual (EN / RU).

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # output in /dist
npm run preview
```

## Project structure

```
src/
  i18n/
    content.ts                 ← ALL copy (EN + RU) + shared links — edit this first
    lang.tsx                   ← language context, hook (useLang) and EN/RU persistence
  lib/utils.ts                 ← cn() class-merge helper
  components/
    ui/                        ← reusable primitives (drop real Aceternity / 21st.dev here)
      Backdrop.tsx             ← flat black canvas + film grain (no gradients)
      LetterA.tsx              ← chromed "A" hero anchor (floats + tilts to cursor)
      GlassCard.tsx · Reveal.tsx · Marquee removed
      Eyebrow.tsx              ← inline "// LABEL" marker
      SectionHeader.tsx        ← numbered "NN // LABEL" + hairline + large title (editorial rhythm)
      LangToggle.tsx           ← fixed EN/RU switch, bottom-right
    sections/                  ← one file per section
      Nav · Hero · Work · About · Approach · Services · Stack · Experience · Lab · Colophon · Contact · Footer
  App.tsx                      ← wraps everything in <LangProvider>
  index.css                    ← Tailwind layers + the .glass material
```

## Editing content
Everything textual is in **`src/i18n/content.ts`** — two objects, `en` and `ru`, with the
same shape. `links` (email, telegram, github, phone) is shared across both languages.

## Before publishing
- **`public/cv.pdf`** — the "Download CV" button links here. Drop your CV file in `public/`
  as `cv.pdf` (or change `links.cv` in `content.ts`). Until then the button 404s.
- **Hero letter** — the chromed "A" is `public/letter-a.jpg`, shown with `mix-blend: screen`
  so its black background drops out. Swap the file (keep it on pure black) to restyle it.
- Fonts load from Google Fonts (Unbounded / Onest / JetBrains Mono), all with Cyrillic.

## Design tokens (`tailwind.config.ts`)
`bg #000000 · surface #101010 · line #404040 · muted #b7b7b7 · ink #ffffff · accent #ff66ad` — no gradients
Fonts: Unbounded (display) · Onest (body) · JetBrains Mono (labels) · Playfair Display italic (editorial pull-quotes)

## Deploy to GitHub Pages
`vite.config.ts` uses `base: "./"`, so the build works at a project subpath
(`/Portfolio-Website/`) unchanged. Use a GitHub Actions workflow that runs
`npm ci && npm run build` and publishes `dist/`, or push `dist/` to the `gh-pages` branch.
