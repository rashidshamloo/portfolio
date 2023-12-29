'use client';

// react
import { useEffect, useState } from 'react';

// next
import Link from 'next-intl/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// redux-toolkit
import { useDispatch, useSelector, selectPosts, fetchPosts } from '@/lib/redux';

// next-intl
import { useTranslations } from 'next-intl';

// react-next-tilt
import { Tilt } from 'react-next-tilt';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// components
import Pagination from '@/components/Blog/Pagination';
import Loading from '@/components/Common/Loading';

// settings
import { blogSettings } from '@/settings/blog';

// types
import { Pages } from '@/types/types';

const BlogPage = () => {
  const darkMode = useNextThemes();

  // redux-toolkit
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  // router
  const pathName = usePathname();

  // next-intl
  const t = useTranslations('Blog');

  //state
  const [pages, setPages] = useState<Pages>({ total: 1, current: 1 });

  // fetch blog posts if not already in state
  useEffect(() => {
    const controller = new AbortController();
    if (posts.posts.length === 0) dispatch(fetchPosts(controller.signal));
    return () => controller.abort();
  }, [dispatch, posts.posts.length]);

  // set number of pages
  useEffect(() => {
    setPages({
      current: Number(pathName.split('/').pop()),
      total: Math.ceil(posts.posts.length / blogSettings.postsPerPage),
    });
  }, [pathName, posts.posts]);

  return posts.status === 'error' ? (
    <div>{posts.error}</div>
  ) : (
    <>
      {posts.posts.length > 0 ? (
        <div className="flex w-full flex-col items-center justify-center gap-y-4 text-[0.65rem] sm:text-sm lg:text-base">
          {posts !== undefined &&
            posts.posts
              .slice(
                (pages.current - 1) * blogSettings.postsPerPage,
                (pages.current - 1) * blogSettings.postsPerPage +
                  blogSettings.postsPerPage,
              )
              .map((post, index) => (
                <Tilt
                  key={index}
                  tiltMaxAngleX={0}
                  tiltMaxAngleY={15}
                  gyroMaxAngleY={15}
                  gyroReverse={!(index % 2)}
                  spotGlareMaxOpacity={!darkMode ? 0.2 : 0.2}
                  lineGlareMaxOpacity={!darkMode ? 0.05 : 0.03}
                  lineGlareColor={!darkMode ? undefined : 'silver'}
                  borderRadius="12px"
                  perspective="5000px"
                  className="w-full"
                >
                  <article className="glass relative flex flex-col gap-3 rounded-xl p-4 transform-style-3d">
                    <h2 className="border-b-2 border-brightBlue pb-2 text-center font-merriweather text-2xl font-bold dark:border-darkGrayishBlue">
                      <Link
                        href={`/blog/post/${post.slug}-${String(post.id)}`}
                        className="transition-all duration-300 hover:text-accent/70"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.coverImage !== null && (
                      <Link
                        href={`/blog/post/${post.slug}-${String(post.id)}`}
                        className="relative aspect-[50/21] overflow-hidden rounded-xl border-[1px] border-transparent transition-all duration-300 hover:border-darkGrayishBlue/50 hover:shadow-md hover:brightness-[1.15] dark:hover:border-grayishGreen/50 [&_img]:transition-all [&_img]:duration-300 hover:[&_img]:scale-110"
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          className="h-full w-full object-cover"
                          sizes="600px"
                          fill
                        />
                      </Link>
                    )}
                    <div className="flex flex-col items-center justify-between gap-2 border-t-2 border-brightBlue pt-2 text-sm dark:border-darkGrayishBlue md:flex-row">
                      <p className="inline-block">
                        {t('published')}:{' '}
                        {new Date(post.publishedAt).toLocaleDateString()} -{' '}
                        {post.readingTime}
                        {t('minutesRead')}
                      </p>
                      <div className="inline-flex gap-2">
                        {post.tagList.map((tag, index) => (
                          <div
                            key={index}
                            className="glass inline-block rounded-lg px-2"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/blog/post/${post.slug}-${String(post.id)}`}
                      className="glass mt-2 block rounded-xl py-[2px] text-center transition-all duration-300 hover:text-accent [&.glass]:hover:bg-grayishGreen/20 dark:[&.glass]:hover:bg-grayishGreen/20"
                    >
                      {t('readTheFullArticle')}
                    </Link>
                  </article>
                </Tilt>
              ))}
          <Pagination
            pages={pages}
            url="/blog/page/"
            className="mt-4 text-sm lg:text-base"
          />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default BlogPage;
