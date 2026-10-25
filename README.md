# Aashish Nayak Portfolio

A static Astro + TypeScript + Tailwind CSS portfolio with a handwritten notebook design, inspired by the supplied visual reference. It uses self-hosted Kalam, Permanent Marker and IBM Plex Mono fonts, Lucide icons, and native JavaScript for filtering, navigation, theme selection and email copying. No React hydration, database, analytics or runtime API is needed.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:4321. The local Node development dependency supplies the runtime required by Astro inside npm scripts. For deployment, use Node 22.23.4 or newer.

```sh
npm run check
npm run build
npm run test
npm run preview
```

## Routes

`/`, `/projects/`, thirteen `/projects/[slug]/` pages, `/about/`, `/experience/`, `/writing/`, `/contact/`, `/resume/`, and `/404.html`. Published Markdown articles automatically create `/writing/[slug]/` pages.

## Content updates

- `src/data/site.ts`: identity, links, status and resume availability.
- `src/data/projects.ts`: typed project content. Only add verified URLs and contributions. Unknown fields are optional.
- `src/data/experience.ts`: employment, skills and learning areas.
- `src/content/writing/`: Markdown articles. Frontmatter requires `title`, `description`, and a real `published` date. Set `draft: false` only when ready to publish. Optional `tags` is a string array. The directory intentionally contains no invented articles.
- Put the actual resume at `public/resume.pdf` and rebuild to enable download links. No replacement PDF is generated.
- Portrait is sourced from the supplied public GitHub profile. Replace `public/images/aashish-github.jpg` with your preferred photo.

## Production domain and SEO

No portfolio domain was provided. Set `SITE_URL` to the verified HTTPS origin (without a path) before the production build. This enables absolute canonical URLs, social URLs and the XML sitemap. Without it the preview intentionally uses `noindex` and robots disallow; no domain is invented. There are no required secrets or other environment variables.

## Deploy to Vercel

Import the repository into Vercel, select Astro, use `npm run build`, output directory `dist`, and a compatible Node 22 runtime. Set `SITE_URL` to your confirmed production origin, then deploy. No server adapter is required. The same `dist` directory works on static hosting that serves directory indexes and `404.html`.

## Content limitations

The supplied PRD is the primary content source. Worldlytic's live website, the public GitHub profile and two repository URLs were checked. Other unverified project links remain unset. Wickto's scorecard is from the existing local project assets. Several historical projects have only brief descriptions; detailed architecture, trade-offs and outcomes should be added only when documented. No resume PDF, published articles or confirmed portfolio domain were supplied.
