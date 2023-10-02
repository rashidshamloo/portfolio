// next
import Image from 'next/image';
import { Metadata } from 'next';

// components
import BlogPostHighlight from '@/components/Blog/BlogPostHighlight';
import Loading from '@/components/Common/Loading';

// styles
import { className } from '@/styles/blogPostStyle';

// settings
import { blogSettings } from '@/settings/blog';

// types
import { BlogPostSingle } from '@/types/types';
interface articleProps {
  params: {
    slug: string;
  };
}

// Note: Next.js memorizes fetch requests so it won't run two times, one for metadata and one inside the component
// see: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#returns

import blogSummary from '@/data/blogSummary.json';

// metadata
export async function generateMetadata({
  params,
}: articleProps): Promise<Metadata> {
  const articleId = params.slug.slice(params.slug.lastIndexOf('-') + 1);
  const res = await fetch(blogSettings.apiUrlSingleLocal + articleId, {
    next: { revalidate: 3600 },
  });
  //
  const post: BlogPostSingle = await res.json();
  return {
    title: post.title,
    description: blogSummary[articleId as keyof typeof blogSummary],
    metadataBase: new URL('https://www.rashidshamloo.com'),
    alternates: {
      canonical: '/blog/post/' + params.slug,
      languages: {
        'en-US': '/en/blog/post/' + params.slug,
        'ja-JP': '/ja/blog/post/' + params.slug,
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: '/blog/post/' + params.slug,
      title: post.title,
      siteName: 'Rashid Shamloo | Blog',
      description: blogSummary[articleId as keyof typeof blogSummary],
      images: {
        url: post.coverImage || '',
        alt: post.title,
        width: 640,
        height: 269,
        type: 'image/webp',
        secureUrl: post.coverImage || '',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: blogSummary[articleId as keyof typeof blogSummary],
      images: post.coverImage || '',
      creator: '@rashidshamloo',
      site: '@rashidshamloo',
    },
  };
}

const Post = async ({ params }: articleProps) => {
  // articleId
  const articleId = params.slug.slice(params.slug.lastIndexOf('-') + 1);

  const res = await fetch(blogSettings.apiUrlSingleLocal + articleId, {
    next: { revalidate: 3600 },
  });
  const post: BlogPostSingle = await res.json();

  return (
    <>
      {post ? (
        <div
          className={
            'glass blog-post w-full max-w-full overflow-hidden rounded-xl p-4 md:p-6 ' +
            className
          }
        >
          {post.coverImage && (
            <div className="relative aspect-[50/21] w-full overflow-hidden rounded-lg">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
            </div>
          )}
          <h1>{post.title}</h1>
          <BlogPostHighlight postBody={post.body} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Post;
