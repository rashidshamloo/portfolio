// redux toolkit
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// thunks
import { fetchPosts } from './thunks';

// schemas
import { postsSchema } from '@/schemas/schemas';

// types
import { BlogPost } from '@/types/types';
type Status = 'idle' | 'loading' | 'error';
type InitialState = { posts: BlogPost[]; status: Status; error: string };

// initial state
const initialState: InitialState = {
  posts: [],
  status: 'idle',
  error: '',
};

// blogPosts slice
export const blogPostsSlice = createSlice({
  name: 'blogPosts',
  initialState,
  // these reducers are not used in this project
  // i just created them for learning purposes
  reducers: {
    add: (state, action: PayloadAction<BlogPost>) => {
      state.posts.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    set: (state, action: PayloadAction<BlogPost[]>) => {
      state.posts = action.payload;
    },
  },
  // fetchPosts thunk
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        // validate API response using Zod
        if (postsSchema.safeParse(action.payload).success) {
          state.status = 'idle';
          state.posts = action.payload;
        } else {
          state.status = 'error';
          state.error = 'wrong API response';
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        // when the fetch request is aborted using an abort signal,
        // action.payload is undefined, so skipping it
        if (action.payload) {
          state.status = 'error';
          state.error = action.payload || 'unknown error';
        }
      });
  },
});
