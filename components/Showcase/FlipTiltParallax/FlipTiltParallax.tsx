'use client';

// next-intl
import { useTranslations } from 'next-intl';

// react-flip-tilt
import { FlipTilt } from 'react-flip-tilt';

// components
import FishParallaxFront from './FishParallaxFront';
import FishParallaxBack from './FishParallaxBack';
import SectionWrapper from '@/components/Layout/SectionWrapper';
import Footer from '../Footer';
import Transition from '@/components/Common/Transition';

const FlipTiltParallax = () => {
  // next-intl
  const t = useTranslations('Showcase');
  return (
    <SectionWrapper
      className="lg:snap-center lg:snap-always"
      innerClass="dark:bg-[#3a4461] bg-[rgb(146,180,207)] bg-[url('/images/showcase/fish/blob.svg'),url('/images/showcase/fish/bg.svg')] bg-[length:100%_100%,auto] flex items-center justify-center flex-col gap-16"
      zIndex={7}
    >
      <Transition
        effect="textReveal"
        threshold={1}
        component="h2"
        className="relative inline-block font-merriweather text-[clamp(1.5rem,_1rem_+_3vw,_3.5rem)] leading-[1] text-darkGrayishBlue/90 before:absolute before:right-[105%] before:top-1/2 before:w-[1em] before:origin-right before:border-b-2 before:border-brightGrayishBlue before:-translate-y-1/2 after:absolute after:left-[105%] after:top-1/2 after:w-[1em] after:origin-right after:border-b-2 after:border-brightGrayishBlue after:-translate-y-1/2 dark:text-brightGrayishBlue3"
      >
        {t('fishTitle')}
      </Transition>
      <div className="mx-auto inline-grid max-w-[90%] grid-cols-2 gap-4 md:grid-cols-4">
        {[...Array(8)].map((_, i) => (
          <Transition key={i} delay={i * 0.2} effect="scaleUpS">
            <FlipTilt
              type="parallax"
              overflowHiddenEnable={true}
              animationMode="edge-to-edge-x"
              front={<FishParallaxFront index={i + 1} />}
              back={<FishParallaxBack index={i + 1} />}
              borderRadius="16px"
              borderWidth="5px"
              lineGlareMixBlendMode="overlay"
              lineGlareMaxOpacity={0.15}
              tabIndex={0}
              className="aspect-[35/46] max-w-[250px] outline-none [&>div]:focus-visible:outline [&>div]:focus-visible:outline-2 [&>div]:focus-visible:outline-black"
              aria-label={'Flip-Tilt Component ' + (i + 1)}
              role="figure"
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
            />
          </Transition>
        ))}
      </div>
      <Transition className="w-full">
        <Footer
          lines={[t('fishFooter1'), t('fishFooter2')]}
          className="text-slate-500 before:border-slate-500/50"
        />
      </Transition>
    </SectionWrapper>
  );
};

export default FlipTiltParallax;
