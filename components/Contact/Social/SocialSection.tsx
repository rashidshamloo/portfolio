'use client';

// next
import Image from 'next/image';

// budoux
import WordBreak from '@/components/Common/WordBreak';

// types
interface socialSectionProps {
  icon: string;
  iconBg: string;
  iconSize: number;
  title: string;
  handle: string;
  link: string;
  text: string;
}

const SocialSection = ({
  icon,
  iconBg,
  iconSize,
  title,
  handle,
  link,
  text,
}: socialSectionProps) => {
  return (
    <a
      className="mx-auto block max-w-[95dvw] text-grayishBlue/80 transition-transform duration-500 will-change-transform transform hover:text-darkViolet/80 hover:scale-105 sm:max-w-none hover:[&>div]:bg-brightBlue4 dark:hover:[&>div]:bg-grayishBlue [&_.blob-bg]:hover:bg-darkViolet [&_.blob-bg]:hover:rotate-[30deg] dark:[&_.blob-bg]:hover:bg-lightViolet"
      href={link}
      target="_blank"
    >
      <div className=" mt-[10em] flex w-[25em] max-w-full flex-col items-center justify-center rounded-2xl border-[1px] border-brightBlue/50 bg-brightBlue bg-[url('/images/contact/social/social-wave-2.svg')] bg-cover bg-[center_-4em] bg-no-repeat shadow-[0.5em_0.5em_0_rgba(0,0,0,0.2)] transition-colors duration-500 dark:border-darkViolet/50 dark:bg-grayishBlue2 dark:bg-[url('/images/contact/social/social-wave-2-dark.svg')] dark:text-brightBlue/90">
        <div className="relative mx-auto -mb-[40%] flex aspect-square w-[80%] items-center justify-center drop-shadow-[0.5em_0.5em_0_rgba(0,0,0,0.2)] -translate-y-1/2">
          <div
            className="blob-bg absolute inset-0 bg-grayishBlue2 transition-all duration-500 transform dark:bg-mediumViolet"
            style={{
              maskImage: `url('${iconBg}')`,
              WebkitMaskImage: `url('${iconBg}')`,
              maskSize: '120%',
              WebkitMaskSize: '120%',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
            }}
          ></div>
          <Image
            src={icon}
            alt="Twitter Logo"
            aria-hidden="true"
            width="0"
            height="0"
            className="relative drop-shadow-[0.5em_0.5em_0_rgba(0,0,0,0.2)]"
            style={{ width: `${iconSize}%` }}
          />
        </div>
        <div className="min-h-[20em] px-[2.5em] text-center">
          <h3 className="text-[2.25em] font-bold will-change-transform">
            {title}
          </h3>
          <p className="text-[1.35em] font-medium will-change-transform">
            {handle}
          </p>
          <hr className="mx-auto my-4 w-[90%] border-t-2 border-dotted border-darkViolet/30 dark:border-brightBlue/30" />
          <p className="text-[1.35em] font-medium leading-loose will-change-transform lg:leading-relaxed">
            <WordBreak>{text}</WordBreak>
          </p>
        </div>
      </div>
    </a>
  );
};

export default SocialSection;
