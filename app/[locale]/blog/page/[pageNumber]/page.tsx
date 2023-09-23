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
        <div className="flex flex-col items-center justify-center gap-y-4 text-[0.65rem] sm:text-sm lg:text-base w-full">
          {posts !== undefined &&
            posts.posts
              .slice(
                (pages.current - 1) * blogSettings.postsPerPage,
                (pages.current - 1) * blogSettings.postsPerPage +
                  blogSettings.postsPerPage
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
                  <article className="relative rounded-xl p-4 glass flex flex-col gap-3 transform-style-3d">
                    <h2 className="font-merriweather text-2xl font-bold border-b-2 pb-2 border-brightBlue text-center dark:border-darkGrayishBlue">
                      <Link
                        href={`/blog/post/${post.slug}-${String(post.id)}`}
                        className="hover:text-accent/70 transition-all duration-300"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    {post.coverImage !== null && (
                      <Link
                        href={`/blog/post/${post.slug}-${String(post.id)}`}
                        className="aspect-[50/21] overflow-hidden rounded-xl hover:border-darkGrayishBlue/50 dark:hover:border-grayishGreen/50 border-[1px] border-transparent hover:shadow-md hover:brightness-[1.15] [&_img]:transition-all transition-all [&_img]:duration-300 duration-300 hover:[&_img]:scale-110 relative"
                      >
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          className="object-cover w-full h-full"
                          sizes="600px"
                          fill
                        />
                      </Link>
                    )}
                    <div className="flex justify-between items-center border-t-2 pt-2 border-brightBlue dark:border-darkGrayishBlue md:flex-row flex-col gap-2 text-sm">
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
                            className="inline-block glass rounded-lg px-2"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={`/blog/post/${post.slug}-${String(post.id)}`}
                      className="py-[2px] text-center mt-2 rounded-xl glass block [&.glass]:hover:bg-grayishGreen/20 dark:[&.glass]:hover:bg-grayishGreen/20 hover:text-accent transition-all duration-300"
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
