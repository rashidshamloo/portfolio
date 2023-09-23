// react
import { useState, useEffect } from 'react';

// next
import Link from 'next/link';
import Image from 'next/image';

// react-next-tilt
import { Tilt } from 'react-next-tilt';

// next-themes
import { useTheme } from 'next-themes';

// components
import Loading from '@/components/Common/Loading';

// types
import { BlogPost } from '@/types/types';

interface ArticleSectionProps {
  title: string;
  articles: BlogPost[];
}

const ArticlesSection = ({ title, articles }: ArticleSectionProps) => {
  // next-themes
  const { theme } = useTheme();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (theme === undefined) return;
    setDarkMode(theme === 'dark' ? true : false);
  }, [theme]);

  return (
    <>
      {articles.length > 1 ? (
        <div className="font-merriweather flex flex-col items-center justify-center gap-4 w-full">
          <h2 className="text-xl md:text-2xl font-bold border-b-2 pb-2 border-brightBlue dark:border-darkGrayishBlue w-full text-center">
            {title}
          </h2>
          <div className="flex items-center justify-center gap-2 flex-col w-">
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
                  className="translate-z-[0px] transform flex items-center justify-center gap-1 flex-col glass p-2 rounded-xl hover:shadow-md [&_img]:hover:brightness-[1.15] [&.glass]:hover:bg-grayishGreen/20 dark:[&.glass]:hover:bg-grayishGreen/20 [&_img]:transition-all  [&_img]:duration-300 [&_h3]:transition-all [&_h3]:duration-300 [&_img]:hover:scale-110 relative [&_h3]:hover:text-accent"
                >
                  <h3 className="text-center">{article.title}</h3>
                  {article.coverImage !== null && (
                    <div className="relative w-full aspect-[50/21] overflow-hidden rounded-xl">
                      <Image
                        src={article.coverImage}
                        alt={article.title}
                        className="object-cover w-full h-full"
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
