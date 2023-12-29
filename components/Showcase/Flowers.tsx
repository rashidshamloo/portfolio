'use client';

// next-intl
import { useTranslations } from 'next-intl';

// react-flip-tilt
import { FlipTilt } from 'react-flip-tilt';

// components
import Footer from './Footer';
import Transition from '../Common/Transition';
import SectionWrapper from '../Layout/SectionWrapper';

const Flowers = () => {
  // next-intl
  const t = useTranslations('Showcase');
  return (
    <SectionWrapper
      separator={false}
      className="lg:snap-center lg:snap-always"
      innerClass="dark:bg-[#4c314d] bg-[rgb(218,195,231)] bg-[url('/images/showcase/flowers/blob.svg'),url('/images/showcase/flowers/bg.svg')] bg-[length:100%_100%,auto] py-[100px] lg:py-0 lg:!min-h-[calc(100vh_+_200px)] flex items-center justify-center flex-col gap-16"
    >
      <Transition
        effect="textReveal"
        threshold={1}
        component="h2"
        className="relative inline-block font-merriweather text-[clamp(1.5rem,_1rem_+_3vw,_3.5rem)] leading-[1] text-darkGrayishBlue/90 before:absolute before:right-[105%] before:top-1/2 before:w-[1em] before:origin-right before:border-b-2 before:border-brightGrayishBlue before:-translate-y-1/2 after:absolute after:left-[105%] after:top-1/2 after:w-[1em] after:origin-right after:border-b-2 after:border-brightGrayishBlue after:-translate-y-1/2 dark:text-brightGrayishBlue3"
      >
        {t('flowersTitle')}
      </Transition>
      <div className="inline-grid max-w-[90%] grid-cols-2 gap-4 md:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Transition key={i} delay={i * 0.2} effect="scaleUpS">
            <FlipTilt
              front={`/images/showcase/flowers/0${i + 1}-front.webp`}
              back={`/images/showcase/flowers/0${i + 1}-back.webp`}
              className="max-w-[250px]"
              borderWidth="12px"
              borderRadius="50%"
              shadow="0 0 1.5rem rgba(0,0,0,0.5)"
            />
          </Transition>
        ))}
      </div>
      <Transition className="w-full">
        <Footer
          lines={[t('flowersFooter1'), t('flowersFooter2')]}
          className="text-slate-500 before:border-slate-500/50"
        />
      </Transition>
    </SectionWrapper>
  );
};

export default Flowers;
