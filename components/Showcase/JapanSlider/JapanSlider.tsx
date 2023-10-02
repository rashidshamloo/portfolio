'use client';

// react
import { useEffect, useRef, useState } from 'react';

// swiper
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import { Parallax } from 'swiper-mods/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/parallax';

// next-intl
import { useLocale, useTranslations } from 'next-intl';

// components
import NavigationButtons from './NavigationButtons';
import GithubLink from './GithubLink';
import Slide from './Slide';
import SectionWrapper from '@/components/Layout/SectionWrapper';
import Transition from '@/components/Common/Transition';
import Footer from '../Footer';

// data
import slides from '@/data/japanSlides.json';

// shuffles slides but keeps "Tokyo Tower" as the first slide
const shuffle = (slides: SlideType[]) => {
  const output = [...slides];
  return output.sort((a, b) => {
    if (a.title.en === 'Tokyo Tower') return -1;
    if (b.title.en === 'Tokyo Tower') return 1;
    return 0.5 - Math.random();
  });
};

// types
export interface SlideType {
  city: { en: string; ja: string };
  title: { en: string; ja: string };
  description: { en: string; ja: string };
  image: string;
  photographer: string;
  photoLink: string;
}

const JapanSlider = () => {
  // next-intl
  const locale = useLocale();
  const t = useTranslations('Showcase');
  const loc = locale === 'en' ? locale : 'ja';

  // state
  const [isStart, setIsStart] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [shuffledSlides, setShuffledSlides] = useState<SlideType[]>([]);

  // ref
  const swiper = useRef<SwiperClass | null>(null);
  const githubLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setShuffledSlides(shuffle(slides));
  }, []);

  return (
    <SectionWrapper
      separator={true}
      className="lg:snap-center lg:snap-always"
      innerClass="flex flex-col items-center justify-center gap-[8em] sm:gap-[4em] dark:bg-[#272a33] bg-grayishBlue bg-[url('/images/showcase/slides/blob.svg'),url('/images/showcase/slides/bg.svg')] bg-[length:100%_100%,auto] text-[6px] xs:text-[9px] sm:gap-[5.5em] sm:text-xs md:justify-center md:text-[0.8rem] lg:text-sm xl:text-base"
      zIndex={8}
    >
      <h2 className="relative inline-block font-merriweather text-[4.5em] leading-[1] text-brightBlue before:absolute before:right-[105%] before:top-1/2 before:w-[1em] before:origin-right before:border-b-2 before:border-brightGrayishBlue before:-translate-y-1/2 after:absolute after:left-[105%] after:top-1/2 after:w-[1em] after:origin-right after:border-b-2 after:border-brightGrayishBlue after:-translate-y-1/2 dark:text-brightGrayishBlue3 sm:text-[3.5em]">
        {t('slideTitle')}
      </h2>
      <div className="relative flex flex-col gap-2 md:gap-4">
        <Swiper
          modules={[Navigation, EffectFade, Parallax]}
          onBeforeInit={(s) => {
            swiper.current = s;
            setIsEnd(s.isEnd);
            setIsStart(s.isBeginning);
          }}
          onSlideChange={(s) => {
            setIsEnd(s.isEnd);
            setIsStart(s.isBeginning);
          }}
          className="w-[83vw] !overflow-visible md:aspect-[16/9] lg:w-[64em]"
          speed={500}
          effect="fade"
          parallax={true}
          allowTouchMove={false}
        >
          {shuffledSlides.map((slide) => (
            <SwiperSlide key={slide.title.en}>
              <Slide
                city={slide.city[loc]}
                title={slide.title[loc]}
                description={slide.description[loc]}
                image={'/images/showcase/slides/' + slide.image}
                photographer={slide.photographer}
                photoLink={slide.photoLink}
                hideElement={githubLink}
              />
            </SwiperSlide>
          ))}
          <GithubLink ref={githubLink} />
        </Swiper>
        <NavigationButtons isStart={isStart} isEnd={isEnd} swiper={swiper} />
      </div>
      <Transition className="w-full">
        <Footer
          lines={[t('japanSliderFooter')]}
          className="!text-slate-300/70 before:!border-slate-300/30"
        />
      </Transition>
    </SectionWrapper>
  );
};

export default JapanSlider;
