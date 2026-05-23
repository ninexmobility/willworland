import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    coverCredit: z
      .object({
        name: z.string(),
        url: z.string().url(),
      })
      .optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    timeframe: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    link: z.string().optional(),
    repo: z.string().url().optional(),
    cover: z.string(),
    coverAlt: z.string(),
    highlights: z
      .array(
        z.union([
          z.string(),
          z.object({
            text: z.string(),
            subpoints: z.array(z.string()).default([]),
          }),
        ]),
      )
      .default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    inlineImages: z
      .array(
        z.object({
          id: z.string(),
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
          link: z.string().url().optional(),
        }),
      )
      .default([]),
  }),
});

export const collections = { posts, projects };
