# Portfolio

[jazwinn.github.io/Jaz-Portfolio](https://jazwinn.github.io/Jaz-Portfolio)

Personal portfolio site — a single static page covering my work in GPU computing,
real-time graphics and computer vision. Built with **React**, **TypeScript**,
**Vite** and **Tailwind CSS**, and served as static files from GitHub Pages.

## Layout

| Path | What's in it |
| --- | --- |
| `Portfolio-Site/` | The Vite application |
| `Portfolio-Site/src/data/` | Project and experience content — edit here to change what the page says |
| `Portfolio-Site/src/assets/` | Project screenshots (WebP) and the résumé PDF |
| `.github/workflows/deploy.yml` | Builds and publishes to GitHub Pages on every push to `main` |

## Local development

```bash
npm --prefix Portfolio-Site install
npm --prefix Portfolio-Site run dev
```

The dev server runs at <http://localhost:5173/Jaz-Portfolio/> — the path matters,
since `base` in `vite.config.ts` matches the Pages URL.

## Deploying

Pushing to `main` triggers the workflow, which lints, builds, and force-pushes
`Portfolio-Site/dist` to the `gh-pages` branch — the branch GitHub Pages serves
this repository from. No repository settings need changing.

`npm --prefix Portfolio-Site run deploy` does the same thing from your machine
if you want to publish without pushing to `main`.

## Editing content

Nothing is hard-coded into the components:

- **Projects** — `Portfolio-Site/src/data/projects.ts`. `spotlight` is the featured
  panel, `featured` the main grid, `smallerWorks` the compact list.
- **Work experience and education** — `Portfolio-Site/src/data/experience.ts`.
- **Skills** — the `groups` array in `Portfolio-Site/src/Skills.tsx`.

Screenshots are downscaled to 1600px and stored as WebP; run new ones through the
same treatment to keep the page light.
