'use client';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

//types
interface postCardProps {
  segments?: number;
  lightImage: string;
  darkImage: string;
}

const PostCard = ({ segments = 4, lightImage, darkImage }: postCardProps) => {
  const darkMode = useNextThemes();

  return (
    <div className="text-[0.75em]">
      <div className="relative mb-[7em] mt-[14em] flex h-[22.5em] w-[40em] transition-all duration-500 rotate-[-25deg] skew-x-[25deg] after:absolute after:inset-0 after:z-[-1] after:bg-black/20 after:blur-lg after:transition-all after:duration-500 hover:-translate-y-[1.25em] hover:rotate-[-25deg] hover:skew-x-[-25deg] after:hover:top-3/4 [&>div:nth-child(even)]:hover:skew-y-[-25deg] [&>div:nth-child(odd)]:hover:skew-y-[25deg] [&>div]:h-full [&>div]:w-1/4 [&>div]:border-y-[0.3125em] [&>div]:border-white [&>div]:bg-white [&>div]:bg-cover [&>div]:transition-all [&>div]:duration-500 first:[&>div]:border-l-[0.3125em] last:[&>div]:border-r-[0.3125em] [&>div]:hover:shadow-[inset_.75em_0_2.125em_rgba(0,0,0,0.5)]">
        {[...Array(segments)].map((_, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundImage: `url('${darkMode ? darkImage : lightImage}')`,
                backgroundPosition: `calc(-${40 / segments}em * ${index})`,
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default PostCard;
