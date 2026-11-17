# joannahong.github.io

Personal site of Joanna Hong, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run locally

```sh
export PATH="$HOME/.local/node/bin:$PATH"   # Node is installed here
npm install        # first time only
npm run dev        # → http://localhost:4321
```

## Where things live

| What you want to change | File |
| --- | --- |
| Name, links, email, CV link | `src/data/profile.ts` |
| News on the home page | `src/data/news.ts` |
| Projects (Google, earlier) | `src/data/projects.ts` |
| Publications | `src/data/publications.ts` |
| CV page (experience, awards, service…) | `src/data/cv.ts` |
| Home page bio & headline | `src/pages/index.astro` |
| Colors & fonts | `src/styles/global.css` (top of file) |
| Blog posts | `src/content/blog/*.md` |
| Profile photo | `public/profile.jpg` |

## Writing a blog post

```sh
npm run new-post -- "My post title"
```

This creates `src/content/blog/my-post-title.md` as a **draft**. Drafts show up in
`npm run dev` but not on the live site. Set `draft: false` (or delete the line) to publish.

Frontmatter:

```yaml
---
title: 'My post title'
description: 'One-line summary for the list page and link previews.'
date: 2026-11-17
tags: ['speech', 'evals']
draft: false
---
```

See `src/content/blog/markdown-style-guide.md` (a draft) for every supported element.
Put images in `public/blog/<post-name>/` and link them as `/blog/<post-name>/figure.png`.

## Deploying

Pushing to `main` builds and deploys automatically via `.github/workflows/deploy.yml`.

One-time setup: on GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
