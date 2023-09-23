'use client';

// react
import { PropsWithChildren } from 'react';

// components
import TopWrapper from '@/components/Layout/TopWrapper';
import BlogAside from '@/components/Blog/BlogAside';

// glass provider
import glassClass from '@/styles/glassProvider';

const BlogLayout = ({ children }: PropsWithChildren) => {
  return (
    <TopWrapper className={glassClass} separator={false}>
      <div className="relative isolate mx-auto xl:container flex flex-col-reverse lg:flex-row-reverse items-start justify-center gap-x-4 gap-y-8 pb-4 pt-20 overflow-hidden">
        <BlogAside />
        <div className="flex lg:mx-0 min-h-screen flex-col-reverse items-start justify-evenly gap-y-8 lg:flex-row max-w-[90%] mx-auto lg:w-[calc(65%_-_0.5rem)]">
          {children}
        </div>
      </div>
    </TopWrapper>
  );
};

export default BlogLayout;
