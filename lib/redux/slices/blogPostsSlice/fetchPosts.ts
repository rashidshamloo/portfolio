// config
import { blogSettings } from '@/settings/blog';

// types
import { BlogPost } from '@/types/types';

// fetches posts from the api
export const fetchPosts = async (signal: AbortSignal) => {
  const res = await fetch(blogSettings.apiUrl, { signal });
  return await res.json();
};
