// next
import { NextResponse } from 'next/server';

// validator
import validator from 'validator';

// schemas
import { postSingleSchema } from '@/schemas/schemas';

// config
import { blogSettings } from '@/settings/blog';

// types
import { BlogPostSingle } from '@/types/types';

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const id = url.pathname.split('/').pop();

  if (!id || !validator.isNumeric(id))
    return NextResponse.json(
      { status: 'fail', error: 'bad request' },
      { status: 400 },
    );

  try {
    const res = await fetch(blogSettings.apiUrlSingle + id, {
      signal: AbortSignal.timeout(8000),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    const post: BlogPostSingle = {
      title: json.title,
      body: json.body_html,
      url: json.url,
      publishedAt: json.published_at,
      tagList: json.tag_list,
      coverImage: json.cover_image,
    };
    if (!postSingleSchema.safeParse(post).success)
      return NextResponse.json(
        {
          status: 'fail',
          error: 'bad response from upstream API',
        },
        { status: 500 },
      );
    return NextResponse.json(post);
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
