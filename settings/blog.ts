import { rootUrl } from './rootUrl';

export const blogSettings = {
  postsPerPage: 3,
  sidePostsCount: 3,
  featuredPosts: ['1588320', '1553256', '1561032'],
  apiUrlAll: 'https://dev.to/api/articles?username=rashidshamloo',
  apiUrlSingle: 'https://dev.to/api/articles/',
  apiUrlAllLocal: rootUrl + '/api/blog',
  apiUrlSingleLocal: rootUrl + '/api/blog/post/',
};
