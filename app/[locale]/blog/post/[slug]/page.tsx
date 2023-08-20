'use client';

// react
import { useEffect, useState } from 'react';

// next
import Image from 'next/image';

// components
import BlogPostHighlight from '@/components/Blog/BlogPostHighlight';
import Loading from '@/components/common/Loading';

// styles
import { className } from '@/styles/blogPostStyle';

// types
interface articleProps {
  params: {
    slug: string;
  };
}

interface post {
  title: string;
  body: string;
  url: string;
  publishedAt: string;
  tagList: string[];
  coverImage: string | null;
}

const Post = ({ params }: articleProps) => {
  // state
  const [post, setPost] = useState<post | null>(null);

  // articleId
  const articleId = params.slug.slice(params.slug.lastIndexOf('-') + 1);

  useEffect(() => {
    // get posts with needed fields from Dev.to API
    const getPost = async (signal: AbortSignal, articleId: number) => {
      try {
        const res = await fetch('https://dev.to/api/articles/' + articleId, {
          signal,
        });
        const post: any = await res.json();
        const tempPost: post = {
          title: post.title,
          body: post.body_html,
          url: post.url,
          publishedAt: post.published_at,
          tagList: post.tag_list,
          coverImage: post.cover_image,
        };
        setPost(tempPost);
      } catch (e) {
        console.error(e);
      }
    };
    const controller = new AbortController();
    getPost(controller.signal, Number(articleId));
    return () => controller.abort();
  }, [articleId]);

  return (
    <>
      {post ? (
        <div
          className={
            'w-full rounded-xl p-4 md:p-6 glass max-w-full overflow-hidden blog-post' +
            className
          }
        >
          {post.coverImage && (
            <div className="w-full aspect-[50/21] relative rounded-lg overflow-hidden">
              <Image src={post.coverImage} alt={post.title} fill />
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
