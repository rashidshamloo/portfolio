// react
import { RefObject, useCallback } from 'react';

// next
import Image from 'next/image';

// react-next-tilt
import { Tilt } from 'react-next-tilt';

// next-intl
import { useTranslations } from 'next-intl';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// types
interface SlideProps {
  city: string;
  title: string;
  description: string;
  image: string;
  photographer: string;
  photoLink: string;
  hideElement: RefObject<HTMLAnchorElement>;
}

const Slide = ({
  city,
  title,
  description,
  image,
  photographer,
  photoLink,
  hideElement,
}: SlideProps) => {
  const darkMode = useNextThemes();

  // next-intl
  const t = useTranslations('Showcase');

  // toggles visibility of the hideElement
  const toggleElement = useCallback(
    (show = true) => {
      if (show) hideElement.current?.classList.remove('opacity-0');
      else hideElement.current?.classList.add('opacity-0');
    },
    [hideElement],
  );

  return (
    <article className="relative">
      <Tilt
        spotGlarePosition="top"
        tiltMaxAngleY={5}
        tiltMaxAngleX={5}
        borderRadius="12px"
        spotGlareMaxOpacity={darkMode ? 0.1 : 0.2}
        lineGlareMaxOpacity={darkMode ? 0.03 : 0.06}
        lineGlareBlurAmount="16px"
        className="w-full"
        scale={1.05}
        onMouseEnter={() => toggleElement(false)}
        onTouchStart={() => toggleElement(false)}
        onMouseLeave={() => toggleElement()}
        onTouchEnd={() => toggleElement()}
        shadowEnable={true}
        shadow="0 0 2rem rgba(0,0,0,0.5)"
      >
        <div className="aspect-[16/9] w-full transform-style-3d">
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-z="100"
          >
            <Image
              src={image}
              alt={title}
              className={`h-full w-full object-cover transition-all duration-500`}
              fill
              sizes="100vw"
              unoptimized
            />
          </div>
          <h2
            className="pointer-events-none absolute left-[0.5em] top-[5.25em] rounded-[0.75em] bg-black/60 px-[1em] py-[0.5em] font-merriweather leading-[1] text-accent drop-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] will-change-transform [&>span]:text-[3.75em]"
            data-swiper-parallax-x="30%"
            data-swiper-parallax-z-initial="160"
            data-swiper-parallax-z="50"
            data-swiper-parallax-opacity="0"
          >
            <span>{city}</span>
          </h2>
          <h3
            className="pointer-events-none absolute left-[1.25em] top-[11.5em] rounded-[0.75em] bg-black/60 px-[1em] py-[0.5em] font-merriweather leading-[1] text-brightBlue drop-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] will-change-transform [&>span]:text-[2.5em]"
            data-swiper-parallax-x="25%"
            data-swiper-parallax-z-initial="112"
            data-swiper-parallax-z="50"
            data-swiper-parallax-opacity="0"
          >
            <span>{title}</span>
          </h3>
          <p
            className="absolute left-[2em] right-[7.5em] top-[85%] hidden rounded-[0.75em] bg-black/60 p-[0.5em] text-[max(1em,14px)] leading-[1.5] text-brightBlue drop-shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] will-change-transform sm:right-[8.5em] md:bottom-[3em] md:left-[4em] md:right-[4em] md:top-auto md:block lg:max-w-[50%] lg:p-[1em]"
            data-swiper-parallax-x="-15%"
            data-swiper-parallax-z-initial="64"
            data-swiper-parallax-z="-25"
            data-swiper-parallax-opacity="0"
          >
            {description}
          </p>
          <p
            className="absolute bottom-[2px] right-[2px] rounded-[0.375em] bg-black/60 px-[0.5em] py-[2px] text-[max(0.75em,10px)] text-brightBlue opacity-75 transform-gpu md:bottom-[4px] md:right-[4px]"
            data-swiper-parallax-opacity="0"
            data-swiper-parallax-z="100"
          >
            {t('photo') + ' '}
            <a
              href={photoLink}
              target="_blank"
              rel="noopener"
              className="transition-all duration-300 hover:text-accent"
            >
              {photographer}
            </a>
          </p>
        </div>
      </Tilt>
      <p
        className="mt-2 max-w-[calc(100%_-_7.5em)] rounded-[0.75em] bg-black/60 p-[1em] text-[max(1em,14px)] leading-[1.7] text-brightBlue sm:right-[10em] sm:max-w-[calc(100%_-_8.5em)] md:hidden"
        data-swiper-parallax-x="-15%"
        data-swiper-parallax-z-initial="64"
        data-swiper-parallax-z="-25"
        data-swiper-parallax-opacity="0"
      >
        {description}
      </p>
    </article>
  );
};

export default Slide;
