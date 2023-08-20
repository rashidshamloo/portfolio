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

export interface Pages {
  total: number;
  current: number;
}
