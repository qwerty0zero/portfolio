import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    badge: z.string().optional(),
    subtitle: z.string().optional(),
  }),
});

export const directionItemSchema = z.object({
  id: z.string(),
  index: z.string(),
  title: z.string(),
  tagline: z.string(),
  description: z.string(),
  skills: z.array(z.string()),
  responsibilities: z.array(z.string()),
});

export type DirectionItem = z.infer<typeof directionItemSchema>;

const home = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/home" }),
  schema: z.object({
    title: z.string().optional(),
    badge: z.string().optional(),
    lead: z.string().optional(),

    // Hero section fields
    name: z.string().optional(),
    role: z.string().optional(),
    scrollCueText: z.string().optional(),
    githubUrl: z.string().optional(),
    linkedinUrl: z.string().optional(),

    // About section fields
    text: z.string().optional(),
    authorName: z.string().optional(),
    authorRole: z.string().optional(),

    // Directions section fields
    items: z.array(directionItemSchema).optional(),

    // Projects section fields
    description: z.string().optional(),
    domains: z.array(z.string()).optional(),
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
  home,
  projects,
};
