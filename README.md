# Kabeer Ali — Portfolio

A modern, colorful, interactive developer portfolio built with **SvelteKit**, **Tailwind CSS 4**,
**GSAP**, and a lightweight **Three.js** hero. Deployed to **Netlify**, with a serverless function
for live GitHub stats.

## Tech stack

- **SvelteKit** (Svelte 5 runes) + TypeScript
- **Tailwind CSS 4** (`@tailwindcss/vite`, configured via `@theme` in `src/app.css`)
- **GSAP** + ScrollTrigger for scroll animations
- **Three.js** — lazy-loaded particle hero (code-split, paused off-screen, respects reduced motion)
- **adapter-netlify** — `+server.ts` endpoints deploy as Netlify Functions

## Project structure

```
src/lib/data/        # ← single source of truth for content
  profile.ts         # name, title, bio, contact, social links, Topmate
  projects.ts        # all projects (add one object + images in static/projects/<slug>/)
  skills.ts          # skills by category
  experience.ts      # work timeline
  education.ts       # education
src/lib/components/   # UI + sections
src/routes/api/       # github serverless endpoint
static/               # images, favicon, resume.pdf
```

### Adding a project

Append an object to `src/lib/data/projects.ts` and drop its images in
`static/projects/<slug>/`. `cover` is the card thumbnail; `images[]` is the modal gallery.

### Updating the resume

Replace `static/resume.pdf` with the latest CV (the download button links to `/resume.pdf`).

### Contact form

The contact form opens the visitor's email client via a `mailto:` link pre-filled with their
name, email, and message — addressed to the `email` in `src/lib/data/profile.ts`. No email
service or API key is required.

## Local development

```bash
npm install
cp .env.example .env      # fill in the value below
npm run dev
```

### Environment variables

| Variable       | Purpose                                                    |
| -------------- | ---------------------------------------------------------- |
| `GITHUB_TOKEN` | Fine-grained PAT (read-only public data) for `/api/github` |

Without `GITHUB_TOKEN`, the GitHub section degrades gracefully to a "visit my profile" card.

## Build & deploy

```bash
npm run build     # outputs via adapter-netlify
```

Connect the repo to Netlify and set `GITHUB_TOKEN` in **Site settings → Environment variables**.
`netlify dev` runs the functions locally.
