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
| Profile photo | `public/profile.jpg` |

## Deploying

```sh
npm run deploy
```

This builds the site and pushes the static files to the **`2027`** branch, which GitHub Pages
serves directly (**Settings → Pages → Deploy from a branch → `2027` / root**). It also pushes the
source code to the **`2027-src`** branch. Commit your changes before deploying.

To roll back to the previous site, switch the Pages branch back to `new`.
