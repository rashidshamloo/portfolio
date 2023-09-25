// react
import { PropsWithChildren } from 'react';

// next
import { Metadata } from 'next';

// components
import TopWrapper from '@/components/Layout/TopWrapper';
import BlogAside from '@/components/Blog/BlogAside';

// glass provider
import glassClass from '@/styles/glassProvider';

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | Blog',
  description: "Rashid Shamloo's Blog",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, Blog, Web Developer, Front-end Developer',
  metadataBase: new URL('https://www.rashidshamloo.com'),
  alternates: {
    canonical: '/blog',
    languages: {
      'en-US': '/en/blog',
      'ja-JP': '/ja/blog',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/blog',
    title: 'Rashid Shamloo | Blog',
    siteName: 'Rashid Shamloo | Portfolio',
    description: "Rashid Shamloo's Blog",
    images: {
      url: '/images/screenshots/blog.webp',
      alt: "Rashid Shamloo's Blog",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/blog.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashid Shamloo | Blog',
    description: "Rashid Shamloo's Blog",
    images: '/images/screenshots/blog.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

const BlogLayout = ({ children }: PropsWithChildren) => {
  return (
    <TopWrapper className={glassClass} separator={false}>
      <div className="relative isolate mx-auto xl:container flex flex-col-reverse lg:flex-row-reverse items-start justify-center gap-x-4 gap-y-8 pb-4 pt-20 overflow-hidden w-full">
        <BlogAside />
        <div className="flex lg:mx-0 min-h-[100dvh] flex-col-reverse items-start justify-evenly gap-y-8 lg:flex-row w-full max-w-[90%] mx-auto lg:w-[calc(65%_-_0.5rem)]">
          {children}
        </div>
      </div>
    </TopWrapper>
  );
};

export default BlogLayout;
