import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const echoes = defineCollection({
  // Load Markdown and MDX files in the `src/content/echoes/` directory.
  loader: glob({ base: "./src/content/echoes", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
    }),
});

export const collections = { echoes };
