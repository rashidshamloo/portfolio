'use client';

// react
import { useEffect } from 'react';

// redux-toolkit
import { useDispatch, useSelector, selectPosts, fetchPosts } from '@/lib/redux';

// next-intl
import { useTranslations } from 'next-intl';

// components
import ArticlesSection from '@/components/Blog/ArticlesSection';

// settings
import { blogSettings } from '@/settings/blog';

const BlogAside = () => {
  // redux-toolkit
  const posts = useSelector(selectPosts).posts;
  const dispatch = useDispatch();

  // next-intl
  const t = useTranslations('Blog');

  // fetch blog posts if not already in state
  useEffect(() => {
    const controller = new AbortController();
    if (posts.length === 0) dispatch(fetchPosts(controller.signal));
    return () => controller.abort();
  }, [dispatch, posts.length]);

  return (
    <aside className="glass mx-auto flex max-w-[90%] flex-col items-center justify-start gap-8 rounded-xl p-4 md:p-6 lg:mx-0 lg:w-[calc(27%_-_0.5rem)]">
      <ArticlesSection
        title={t('featuredArticles')}
        articles={posts
          .filter((post) =>
            blogSettings.featuredPosts.includes(String(post.id)),
          )
          .sort(
            (a, b) =>
              blogSettings.featuredPosts.indexOf(String(a.id)) -
              blogSettings.featuredPosts.indexOf(String(b.id)),
          )}
      />
      <ArticlesSection
        title={t('popularArticles')}
        articles={[...posts]
          .sort((a, b) => b.reactionCount - a.reactionCount)
          .slice(0, blogSettings.sidePostsCount)}
      />
    </aside>
  );
};

export default BlogAside;
