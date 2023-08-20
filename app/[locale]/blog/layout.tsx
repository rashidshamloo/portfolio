'use client';

// react
import { PropsWithChildren } from 'react';

// components
import BlogAside from '@/components/Blog/BlogAside';

// glass provider
import glassClass from '@/styles/glassProvider';

const BlogLayout = ({ children }: PropsWithChildren) => {
  return (
    <section
      className={
        ' text-DarkViolet/90 relative isolate min-h-screen max-w-full bg-[length:1.5rem,auto] overflow-hidden bg-heroBg pt-20 dark:bg-heroBgDark dark:text-brightBlue/90 ' +
        glassClass
      }
    >
      <div className="mx-auto xl:container flex flex-col-reverse lg:flex-row-reverse items-start justify-center gap-x-4 gap-y-8 pb-24">
        <BlogAside />
        <div className="flex lg:mx-0 min-h-screen flex-col-reverse items-start justify-evenly gap-y-8 lg:flex-row max-w-[90%] mx-auto lg:w-[calc(65%_-_0.5rem)]">
          {children}
        </div>
      </div>
    </section>
  );
};

export default BlogLayout;
