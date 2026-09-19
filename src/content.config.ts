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

export const benchmarkMetricSchema = z.object({
  id: z.string(),
  label: z.string(),
  astroVal: z.string().optional(),
  nextVal: z.string().optional(),
  unit: z.string().optional(),
  astroPercent: z.number().min(0).max(100).optional(),
  nextPercent: z.number().min(0).max(100).optional(),
});

export type BenchmarkMetric = z.infer<typeof benchmarkMetricSchema>;

export const benchmarkMetaSchema = z.object({
  badge: z.string(),
  title: z.string(),
  note: z.string(),
  astroLabel: z.string().optional(),
  nextLabel: z.string().optional(),
});

export type BenchmarkMeta = z.infer<typeof benchmarkMetaSchema>;

export const highlightItemSchema = z.object({
  badge: z.string(),
  title: z.string(),
  description: z.string(),
});

export type HighlightItem = z.infer<typeof highlightItemSchema>;

export const manifestoItemSchema = z.object({
  highlight: z.string(),
  text: z.string(),
});

export const manifestoSchema = z.object({
  badge: z.string(),
  items: z.array(manifestoItemSchema),
});

export type ManifestoData = z.infer<typeof manifestoSchema>;

export const showcaseTabItemSchema = z.object({
  id: z.string(),
  index: z.string(),
  tabTitle: z.string(),
  heading: z.string(),
  text: z.string(),
  manifesto: manifestoSchema.optional(),
  metrics: z.array(benchmarkMetricSchema).optional(),
  benchmarkMeta: benchmarkMetaSchema.optional(),
  highlights: z.array(highlightItemSchema).optional(),
});

export type ShowcaseTabItem = z.infer<typeof showcaseTabItemSchema>;

export const faqItemSchema = z.object({
  id: z.string(),
  index: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.string().optional(),
});

export type FaqItem = z.infer<typeof faqItemSchema>;

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

    // Showcase section fields
    tabs: z.array(showcaseTabItemSchema).optional(),

    // FAQ section fields
    faqItems: z.array(faqItemSchema).optional(),

    // Footer section fields
    bio: z.string().optional(),
    email: z.string().optional(),
    producedBy: z.string().optional(),
    producedByUrl: z.string().optional(),
    navAnchors: z
      .array(
        z.object({
          id: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
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
