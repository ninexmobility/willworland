# Will Worland — Personal Site

Modern React + Vite + TypeScript site for my resume, projects, and /uses page. Styled with MUI, state via Redux Toolkit, data fetching via TanStack Query, and deployed to Cloudflare Pages.

## Tech Stack

- React 19, TypeScript, Vite 7
- MUI 7 (custom theme in `src/theme.ts`)
- Redux Toolkit + React Redux
- TanStack Query (React Query)
- React Router v7
- Cloudflare Pages deployment (GitHub Actions workflow)

## Project Structure (high level)

- `src/data/resume.ts` — resume content (summary, experience, skills, projects, education, awards)
- `src/data/projects.ts` and `src/data/projects/*` — project cards and detail data (e.g., HF mini toolbox)
- `src/data/announcement.ts` — top banner message/link toggles
- `src/pages` — route-level pages (`Home`, `Projects`, `ProjectDetail`, `Uses`)
- `src/components` — shared UI (header/footer/banner/resume sections)
- `src/store` — Redux store, preferences slice (light/dark mode)
- `src/theme.ts` — MUI theme (palette/typography/radius overrides)
- `public/` — static assets (including optimized gallery images)

## Getting Started

```bash
npm install
npm run dev    # start Vite dev server
npm run lint   # static checks
npm run build  # production build
```

## Deployment (Cloudflare Pages)

- Workflow: `.github/workflows/deploy.yml`
- Build command: `npm run build`
- Output directory: `dist`
- Secrets required in GitHub repo:
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
  - `GITHUB_TOKEN` (provided by Actions)

Push to `main` triggers build + deploy to the `willworland` Pages project.

## Content & Customization

- Resume: edit `src/data/resume.ts`
- Projects: edit `src/data/projects.ts` (+ detail files under `src/data/projects/`)
- Gallery assets: place optimized images in `public/hf-toolbox` (already optimized via `sips`)
- Announcement banner: toggle/message/link in `src/data/announcement.ts`
- Theme: update `src/theme.ts` for colors, typography, radius
- Routing: see `src/main.tsx` (`/`, `/projects`, `/projects/:slug`, `/uses`)

---
