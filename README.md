# Humberto Guzmán Portfolio

A concise, production-ready personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It is a single-page, editorial-style site that presents Humberto Guzmán's positioning, experience, projects, education, and contact details.

## Tech stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Vercel Web Analytics (production only)

## Local development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Production build

```bash
pnpm build
pnpm start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Import the repository at https://vercel.com/new.
3. Use the default settings (framework auto-detected as Next.js) and deploy.
4. After deploying, add your production domain and update `siteUrl` in `lib/content.ts` so canonical and Open Graph URLs are correct.

Web Analytics is enabled automatically in production. No extra configuration is required.

## Where to edit content

Almost all text, links, and structured data live in a single file:

- `lib/content.ts`
  - `profile` — name, descriptor, hero copy, location, email, CV path, site URL
  - `links` — LinkedIn and GitHub
  - `nav` — navigation items
  - `aboutParagraphs` — the About narrative
  - `capabilities` and `tools` — the Capabilities section
  - `experience` and `earlierExperience` — the Experience section
  - `projects` — the Selected projects cards
  - `education` — the Education list
  - `principles` — the How I work section

## Where to update images

Images live in `public/images/`:

- `humberto-portrait.jpg` — hero portrait (rendered in black and white)
- `technical-presentation.jpg` — Experience section feature image
- `mustang-mach-e.jpg` — shown in the Design & Release Engineer role
- `ford-headquarters.jpg` — How I work section

Replace a file in place (keep the same filename) or update the path in the relevant component. All images use the Next.js `Image` component and include meaningful alt text.

## Where to update the CV

The downloadable CV is served from:

- `public/documents/Humberto_Guzman_Master_CV_2026.pdf`

Replace this file with the approved Master CV PDF, keeping the same filename, or update `profile.cvPath` in `lib/content.ts`.

## Items to confirm before publishing

These are marked in the code with `FACTUAL REVIEW` comments:

1. `profile.email` in `lib/content.ts` is a placeholder. Replace it with the email from Humberto's approved CV.
2. `profile.siteUrl` in `lib/content.ts` is a placeholder domain. Update it to the final production URL.
3. The CV file in `public/documents/` is a placeholder PDF. Replace it with the approved Master CV.
4. The `MBA AI Copilot` project card is marked in progress with placeholder detail. Confirm its scope and any link before publishing.
5. The favicon and icons in `public/` are the default placeholders. Replace if a custom mark is desired.

## Notes

- The site is single-page with anchor navigation.
- No backend, database, authentication, or contact form. Contact uses a `mailto` link.
- Motion is minimal and respects reduced-motion preferences by default.
