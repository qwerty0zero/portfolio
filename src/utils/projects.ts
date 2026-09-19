import type { CollectionEntry } from "astro:content";
import type { Lang } from "@i18n/languages";

export interface CleanProjectItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  year: string;
  stack: string[];
  order: number;
  githubUrl?: string;
  liveUrl?: string;
}

/**
 * Parses a project entry ID (e.g. "en/project-1.md" or "en/project-1") into language code and slug.
 */
export function parseProjectSlug(projectId: string): {
  lang: Lang;
  slug: string;
} {
  const cleanId = projectId.replace(/\.md$/, "");
  const [langCode, ...slugParts] = cleanId.split("/");
  return {
    lang: langCode as Lang,
    slug: slugParts.join("/"),
  };
}

/**
 * Filters all projects by the specified language, sorts by order, and formats as CleanProjectItem.
 */
export function getProjectsByLang(
  allProjects: CollectionEntry<"projects">[],
  lang: Lang,
): CleanProjectItem[] {
  return allProjects
    .filter((p) => p.id.startsWith(`${lang}/`))
    .sort((a, b) => a.data.order - b.data.order)
    .map((p) => {
      const { slug } = parseProjectSlug(p.id);
      return {
        slug,
        title: p.data.title,
        category: p.data.category,
        description: p.data.description,
        year: p.data.year,
        stack: p.data.stack,
        order: p.data.order,
        githubUrl: p.data.githubUrl,
        liveUrl: p.data.liveUrl,
      };
    });
}
