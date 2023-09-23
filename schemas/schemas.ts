// zod
import { z } from 'zod';

export const postsSchema = z.array(
  z.object({
    id: z.number(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    url: z.string(),
    publishedAt: z.string(),
    readingTime: z.number(),
    tagList: z.array(z.string()),
    coverImage: z.union([z.string(), z.null()]),
    reactionCount: z.number(),
  })
);

export const postSingleSchema = z.object({
  title: z.string(),
  body: z.string(),
  url: z.string(),
  publishedAt: z.string(),
  tagList: z.string(),
  coverImage: z.union([z.string(), z.null()]),
});
