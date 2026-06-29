---
name: port-portfolio-data
description: Port Kabeer Ali's personal portfolio data into this SvelteKit template, replacing the original template owner's (Muhammad Ashar's) content. Use when updating profile, experience, education, skills, projects, social links, stats, or project images in this repo, or when re-syncing from the legacy React portfolio at D:/kabeerali/src.
---

# Port portfolio data (Kabeer Ali)

This SvelteKit portfolio is built on a template originally authored by Muhammad Ashar.
The goal is to replace ALL of Ashar's identity/content with Kabeer Ali's, sourced from the
legacy React portfolio at `D:/kabeerali/src`.

## Owner: Kabeer Ali (single source of truth)

- **Name:** Kabeer Ali — Software Engineer
- **Current role:** Software Engineer @ Strategic Systems International (Mar 2026 – Present)
- **Education:** BS Information Technology, PUCIT / FCIT Old Campus, Lahore
- **GitHub username:** `kabeerali1825`
- **Socials:** GitHub `kabeerali1825`, LinkedIn `kabeer-ali18`, Instagram `whykabeer`,
  Medium `@kabeeransari2003`, Twitter/X `AliKabeer_`, Email `k.ali@ssidecisions.com`
- Kabeer does NOT have an Upwork profile.

## Data source → destination mapping

The template's data lives in `src/lib/data/*.ts` (TypeScript, typed by `src/lib/types.ts`).
The legacy data lives in `D:/kabeerali/src/data/*.js` (React/JSX). Map as follows:

| Legacy React (`D:/kabeerali/src/data`) | Template (`src/lib/data`) | Notes |
| --- | --- | --- |
| `aboutMeData.js` | `profile.ts` (`bio`) | Combine the two bio paragraphs |
| `experienceData.js` | `experience.ts` | `period` → split into `start`/`end`; keep `highlights`, `tech` |
| (PUCIT/FCIT) | `education.ts` | BS IT, PUCIT/FCIT Old Campus, Lahore |
| `skillsData.js` / `clientsData.js` | `skills.ts` | Logo lists → assign numeric `level` per skill |
| `projects.js` + `singleProjectData.js` | `projects.ts` | Rich detail (objective/challenge/solution/tech) in `description` |
| `statsData.js` | `upwork.ts` stats / Hero | Headline metrics |

## Key conventions

- **Types are enforced** by `src/lib/types.ts`. Match the shapes exactly (e.g. `Experience.start`/`end`,
  `Project.slug/cover/images/links`).
- **Project images** go in `static/projects/<slug>/`. `cover` is the card thumbnail; `images[]` is the
  modal gallery. Reference with absolute web paths like `/projects/<slug>/cover.png`. Copy source images
  from `D:/kabeerali/src/images/<...>` into the matching `static/projects/<slug>/` folder.
- **Profile photo** → `static/img/profile.jpg` (legacy: `D:/kabeerali/src/images/KabeerProfile.png` or
  `profile.jpeg`).
- **Social icons** are SVG paths in `src/lib/components/ui/Icon.svelte`. The icon set must include
  `medium` and `twitter`; add them to both the `paths` map and the `filled` set, and to the
  `SocialLink.icon` union in `types.ts`.
- **Skills** use proficiency bars with a numeric `level` (0–100). Legacy data has no levels — assign
  sensible values from Kabeer's experience.
- **Featured projects** drive the home page (`featuredProjects` derived from `featured: true`).
- After editing, run `npm run check` (svelte-check) to confirm types still pass, then `npm run dev`.

## Workflow

1. Read the legacy data files and the current template data files.
2. Rewrite each `src/lib/data/*.ts` with Kabeer's content, preserving the typed shape.
3. Copy/rename images into `static/projects/<slug>/` and `static/img/profile.jpg`.
4. Add any missing social icons to `Icon.svelte` + `types.ts`.
5. Sweep the codebase for residual "Ashar"/"im-ashar"/template URLs and replace.
6. Validate with `npm run check`.
