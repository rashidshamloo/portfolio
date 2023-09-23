// config
import { blogSettings } from '@/settings/blog';

// fetches posts from the api
export const fetchPosts = async (signal: AbortSignal) => {
  const res = await fetch(blogSettings.apiUrlAllLocal, { signal });
  return await res.json();
};
