import { ReduxState } from '@/lib/redux';

export const selectPosts = (state: ReduxState) => state.posts;
