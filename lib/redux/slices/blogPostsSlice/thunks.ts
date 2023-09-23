import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk';
import { fetchPosts as fetchPostsFromAPI } from './fetchPosts';

export const fetchPosts = createAppAsyncThunk(
  'blogPosts/fetchPosts',
  async (signal: AbortSignal) => await fetchPostsFromAPI(signal)
);
