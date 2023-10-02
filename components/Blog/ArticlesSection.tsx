// react
import { useState, useEffect } from 'react';

// next
import Link from 'next/link';
import Image from 'next/image';

// react-next-tilt
import { Tilt } from 'react-next-tilt';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// components
import Loading from '@/components/Common/Loading';

// types
import { BlogPost } from '@/types/types';

interface ArticleSectionProps {
  title: string;
  articles: BlogPost[];
}

const ArticlesSection = ({ title, articles }: ArticleSectionProps) => {
  const darkMode = useNextThemes();

  return (
    <>
      {articles.length > 1 ? (
        <div className="flex w-full flex-col items-center justify-center gap-4 font-merriweather">
          <h2 className="w-full border-b-2 border-brightBlue pb-2 text-center text-xl font-bold dark:border-darkGrayishBlue md:text-2xl">
            {title}
          </h2>
          <div className="flex flex-col items-center justify-center gap-2">
            {articles.map((article, index) => (
              <Tilt
                key={index}
                tiltMaxAngleX={0}
                tiltMaxAngleY={15}
                gyroMaxAngleY={15}
                gyroReverse={!(index % 2)}
                spotGlareMaxOpacity={!darkMode ? 0.2 : 0.2}
                lineGlareMaxOpacity={!darkMode ? 0.05 : 0.03}
                lineGlareColor={!darkMode ? undefined : 'silver'}
                className="w-full"
                borderRadius="12px"
              >
                <Link
                  href={`/blog/post/${article.slug}-${String(article.id)}`}
                  className="glass relative flex flex-col items-center justify-center gap-1 rounded-xl p-2 translate-z-[0px] transform hover:shadow-md [&.glass]:hover:bg-grayishGreen/20 dark:[&.glass]:hover:bg-grayishGreen/20 [&_h3]:transition-all  [&_h3]:duration-300 [&_h3]:hover:text-accent [&_img]:transition-all [&_img]:duration-300 [&_img]:hover:brightness-[1.15] [&_img]:hover:scale-110"
                >
                  <h3 className="text-center">{article.title}</h3>
                  {article.coverImage !== null && (
                    <div className="relative aspect-[50/21] w-full overflow-hidden rounded-xl">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        sizes="400px"
                        fill
                      />
                    </div>
                  )}
                </Link>
              </Tilt>
            ))}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ArticlesSection;
