import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    order: z.number().default(1),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
  }),
});

export const collections = {
  pages,
  projects,
};
