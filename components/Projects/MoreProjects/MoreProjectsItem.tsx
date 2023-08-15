// components
import WordBreak from '@/components/common/WordBreak';

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
    <div className="relative isolate w-[22em] text-xs sm:text-sm lg:text-[0.8rem] xl:text-[0.925rem] drop-shadow-[0.5rem_0.5rem_0_rgba(0,0,0,0.2)]">
      <a
        href={link}
        target="_blank"
        className={
          'hover:[&>div]:scale-105 [&_h2]:hover:text-brightBlue dark:[&_h2]:hover:text-darkViolet [&_p]:hover:text-brightBlue/70 dark:[&_p]:hover:text-darkViolet/80 [&~div]:hover:scale-105 [&~div]:hover:bg-mediumViolet/70  dark:[&~div]:hover:bg-brightBlue3/50 ' +
          (bgReverse ? '[&~div]:hover:-scale-x-100 ' : '') +
          (rotateReverse
            ? '[&~div]:hover:rotate-[-25deg] '
            : '[&~div]:hover:rotate-[25deg] ') +
          //
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
          <p className="text-center text-[1.5em] leading-relaxed text-darkViolet/50 transition-all duration-300 dark:text-brightBlue/50">
            <WordBreak>{text}</WordBreak>
          </p>
        </div>
      </a>
      <div
        className={
          'bg absolute -inset-[10em] -z-[1] bg-white/20 backdrop-blur-[2px] transition-all duration-300 dark:bg-black/30 ' +
          (bgReverse ? '-scale-x-100' : '')
        }
        style={{
          maskImage: `url('/images/${bg}')`,
          WebkitMaskImage: `url('/images/${bg}')`,
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
        }}
      ></div>
    </div>
  );
};

export default MoreProjectsItem;
