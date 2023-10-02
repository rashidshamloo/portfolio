// next
import { NextResponse } from 'next/server';

// schemas
import { postsSchema } from '@/schemas/schemas';

// config
import { blogSettings } from '@/settings/blog';

// types
import { BlogPost } from '@/types/types';

export const GET = async () => {
  try {
    const res = await fetch(blogSettings.apiUrlAll, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    const posts: BlogPost[] = json.map((post: any) => ({
      id: post.id,
      slug: post.slug,
      title: post.title,
      description: post.description,
      url: post.url,
      publishedAt: post.published_at,
      readingTime: post.reading_time_minutes,
      tagList: post.tag_list,
      coverImage: post.cover_image,
      reactionCount: post.public_reactions_count,
    }));
    if (!postsSchema.safeParse(posts).success)
      return NextResponse.json(
        {
          status: 'fail',
          error: 'bad response from upstream API',
        },
        { status: 500 },
      );
    return NextResponse.json(posts);
  } catch (e) {
    return NextResponse.json(
      {
        status: 'fail',
        error: 'upstream API request fail',
      },
      { status: 500 },
    );
  }
};
