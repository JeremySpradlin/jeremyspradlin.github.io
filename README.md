# Signal and Noise

Dark, blog-first portfolio site built with Astro for GitHub Pages.

## Stack

- Astro
- Markdown blog posts via Astro content collections
- Simple TypeScript data file for projects
- GitHub Actions deployment to GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Content editing

### Blog posts

Add posts in `src/content/blog/` using frontmatter like:

```md
---
title: "My Post Title"
date: "2026-03-27"
summary: "A short summary for cards and archive pages."
featured: false
---
```

### Projects

Edit project cards in [src/data/projects.ts](/Users/jeremy/Documents/Dev/My_Site/src/data/projects.ts).

### Site settings

Update the title, name, tagline, and accent theme in [src/config/site.ts](/Users/jeremy/Documents/Dev/My_Site/src/config/site.ts).

Available accent themes:

- `blue`
- `green`
- `amber`

### Resume PDF

Place your final PDF at `public/resume.pdf`.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to `main`.

It also sets the Astro base path automatically:

- if the repo is `username.github.io`, the base path is `/`
- otherwise the base path is `/<repo-name>/`
