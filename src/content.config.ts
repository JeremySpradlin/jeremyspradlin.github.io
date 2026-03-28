import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/blog",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    featured: z.boolean().default(false),
  }),
});

const home = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/home",
  }),
  schema: z.object({
    roleLine: z.string(),
    greeting: z.string(),
    tagline: z.string(),
    focusTitle: z.string(),
    focusItems: z.array(z.string()).min(1),
  }),
});

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/projects",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    githubUrl: z.string().url(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, home, projects };
