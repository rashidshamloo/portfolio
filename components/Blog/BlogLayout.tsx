// react
import { PropsWithChildren } from 'react';

// components
import BlogAside from '@/components/Blog/BlogAside';

// glass provider
import glassClass from '@/styles/glassProvider';

// types
import { BlogPost } from '@/types/types';

interface BlogLayoutProps extends PropsWithChildren {
  posts: BlogPost[];
}

const BlogLayout = ({ children, posts }: BlogLayoutProps) => {
  return (
    <section
      className={
        'text-DarkViolet relative isolate min-h-screen max-w-full bg-[length:1.5rem,cover] bg-[repeat:repeat, no-repeat] overflow-hidden bg-heroBg pt-20 dark:bg-heroBgDark dark:text-brightBlue ' +
        glassClass
      }
    >
      <div className="mx-auto lg:container flex flex-row-reverse items-start justify-center gap-x-4">
        <BlogAside />
        <div className="flex min-h-screen flex-col-reverse items-start justify-evenly gap-y-8 lg:flex-row pb-20 max-w-[90%] lg:max-w-[700px] w-full">
          {children}
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
