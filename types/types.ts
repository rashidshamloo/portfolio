export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  readingTime: number;
  tagList: string[];
  coverImage: string | null;
  reactionCount: number;
}

export interface BlogPostSingle {
  title: string;
  body: string;
  url: string;
  publishedAt: string;
  tagList: string[];
  coverImage: string | null;
}

export interface Pages {
  total: number;
  current: number;
}
