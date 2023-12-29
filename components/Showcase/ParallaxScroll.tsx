'use client';

// react-scroll-parallax
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

// next-intl
import { useTranslations } from 'next-intl';

// components
import SectionWrapper from '../Layout/SectionWrapper';

import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--montserrat',
});

function ParallexScroll() {
  const t = useTranslations('Showcase');
  return (
    <SectionWrapper
      className={`lg:snap-center lg:snap-always ${montserrat.className}`}
      separator={true}
      innerClass="relative font-montserrat [&_div]:absolute [&_div]:inset-[-1rem] [&_div]:bg-cover [&_div]:bg-bottom "
      zIndex={9}
    >
      <div className="bg-[url('/images/showcase/parallax/sky.png')]"></div>
      <ParallaxProvider>
        <Parallax translateX={[-2, 2]}>
          <div className="bg-[url('/images/showcase/parallax/clouds_1.png')]"></div>
        </Parallax>
        <Parallax translateX={[5, -5]}>
          <div className="bg-[url('/images/showcase/parallax/clouds_2.png')]"></div>
        </Parallax>
        <Parallax translateX={[-8, 8]}>
          <div className="bg-[url('/images/showcase/parallax/clouds_3.png')]"></div>
        </Parallax>
        <Parallax translateY={[-8, 8]}>
          <div className="bg-[url('/images/showcase/parallax/rocks_3.png')]"></div>
        </Parallax>
        <Parallax translateY={[-16, 16]}>
          <div className="bg-[url('/images/showcase/parallax/rocks_2.png')]"></div>
        </Parallax>
        <Parallax translateY={[-24, 24]}>
          <div className="bg-[url('/images/showcase/parallax/rocks_1.png')]"></div>
        </Parallax>
        <Parallax translateY={[-26, 26]}>
          <div className="bg-[url('/images/showcase/parallax/pines.png')]"></div>
        </Parallax>
        <Parallax translateX={[-40, 40]} translateY={[40, -40]}>
          <div className="bg-[url('/images/showcase/parallax/birds.png')]"></div>
        </Parallax>
        <Parallax translateX={[-40, 40]}>
          <h2 className="absolute left-[18%] top-[20%] text-center text-[1.6rem] uppercase text-white drop-shadow-[0_0_0.5rem_hsla(0,0%,0%,0.5)] lg:text-5xl">
            {t('parallaxLine1')}
          </h2>
        </Parallax>
        <Parallax translateX={[40, -40]}>
          <h2 className="absolute right-[18%] top-[52%] text-center text-[1.6rem] uppercase text-darkGrayishViolet drop-shadow-[0_0_0.5rem_hsla(0,0%,100%,0.5)] lg:text-5xl">
            {t('parallaxLine2')}
          </h2>
        </Parallax>
      </ParallaxProvider>
    </SectionWrapper>
  );
}

export default ParallexScroll;
