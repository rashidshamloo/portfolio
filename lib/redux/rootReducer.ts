/* Instruments */
import { blogPostsSlice } from './slices/blogPostsSlice/blogPostsSlice';

export const reducer = {
  posts: blogPostsSlice.reducer,
};
