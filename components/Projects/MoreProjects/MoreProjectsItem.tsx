// components
import WordBreak from '@/components/Common/WordBreak';

// types
interface moreProjectsItemProps {
  icon: 'github' | 'fem';
  title: string;
  text: string;
  link: string;
  bg: string;
  bgReverse?: boolean;
  rotateReverse?: boolean;
}

const MoreProjectsItem = ({
  icon,
  title,
  text,
  link,
  bg,
  bgReverse = false,
  rotateReverse = false,
}: moreProjectsItemProps) => {
  return (
    <div className="relative w-[22em] text-xs drop-shadow-[0.5rem_0.5rem_0_rgba(0,0,0,0.2)] sm:text-sm lg:text-[0.8rem] xl:text-[0.925rem]">
      <a
        href={link}
        target="_blank"
        className={
          'relative z-10 hover:[&>div]:scale-105 [&_h2]:hover:text-brightBlue dark:[&_h2]:hover:text-darkViolet [&_p]:hover:text-brightBlue/70 dark:[&_p]:hover:text-darkViolet/80 [&~div]:hover:bg-grayishBlue [&~div]:hover:scale-105  dark:[&~div]:hover:bg-veryLightViolet2 ' +
          (rotateReverse
            ? '[&~div]:hover:rotate-[-25deg] '
            : '[&~div]:hover:rotate-[25deg] ') +
          (icon === 'github'
            ? "[&_.icon]:bg-[url('/images/icons/github.svg')] [&_.icon]:hover:bg-[url('/images/icons/github-dark.svg')] dark:[&_.icon]:bg-[url('/images/icons/github-dark.svg')] dark:[&_.icon]:hover:bg-[url('/images/icons/github.svg')]"
            : "[&_.icon]:bg-[url('/images/icons/fem.png')]")
        }
      >
        <div className="flex flex-col items-center gap-y-[2em] transition-all duration-300">
          <div className="flex flex-col items-center gap-y-[1.5em]">
            <div
              className="icon aspect-square w-[8em] bg-contain bg-no-repeat"
              aria-hidden="true"
            />
            <h2 className="text-[2.25em] font-bold text-darkViolet/80 transition-all duration-300 dark:text-brightBlue/70">
              {title}
            </h2>
          </div>
          <p className="text-center text-[1.5em] leading-relaxed text-darkViolet/50 transition-all duration-300 will-change-transform dark:text-brightBlue/50">
            <WordBreak>{text}</WordBreak>
          </p>
        </div>
      </a>
      <div
        className={
          'absolute -inset-[8em] bg-brightBlue/60 backdrop-blur-[2px] transition-all duration-300 dark:bg-black/30 md:-inset-[10em] ' +
          (bgReverse ? 'rotate-y-[180deg]' : '')
        }
        style={{
          maskImage: `url('/images/projects/${bg}')`,
          WebkitMaskImage: `url('/images/projects/${bg}')`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      />
    </div>
  );
};

export default MoreProjectsItem;
