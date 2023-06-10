'use client';

// react
import { useContext } from 'react';

// next
import dynamic from 'next/dynamic';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Transition from '@/components/common/Transition';
import HeroCard from './HeroCard/HeroCard';
import Intro from './Intro/Intro';
const Particles = dynamic(() => import('@/components/common/Particles'));

// context
import darkModeSetting from '@/context/darkModeSetting';

function Hero() {
  const t = useTranslations('Intro');
  const [darkMode] = useContext(darkModeSetting)!;
  return (
    <section className="relative z-[1] -mb-[50px]">
      {/* shadow */}
      {/* drop-shadow-[0_10px_5px_rgba(0,0,0,0.4)] */}
      {/* using an image for shadow instead of drop-shadow for performance */}
      <div
        className="pointer-events-none absolute -bottom-[40px] left-0 right-0 -z-[1] h-[80px] bg-[url('/images/shadow.png')]"
        aria-hidden="true"
      ></div>
      <h1 className="sr-only">{t('pageTitle')}</h1>
      <div
        className={`min-h-[calc(100dvh_+_50px)] overflow-x-hidden bg-cover bg-scroll pb-10 pt-20 text-darkGrayishViolet/90 dark:text-brightBlue lg:pb-0 lg:pt-0 [&_li]:font-medium ${
          // flicker prevention
          // if page is not hydrated yet (darkMode === undefined) don't set any background
          // else, set background according to darkMode
          darkMode !== undefined
            ? darkMode
              ? 'bg-heroBgDark after:bg-heroBgDark'
              : 'bg-heroBg after:bg-heroBg'
            : ''
        }`}
        style={{
          maskImage: "url('/images/steps.svg')",
          WebkitMaskImage: "url('/images/steps.svg')",
          maskPosition: 'bottom',
          WebkitMaskPosition: 'bottom',
        }}
      >
        <div className="mx-auto flex min-h-screen flex-col-reverse items-center justify-evenly gap-y-4 xl:container lg:flex-row">
          <Intro />
          <Transition
            delay={1.5}
            duration={0.75}
            threshold={0}
            effect="fadeRTL"
            className="p-4"
          >
            <HeroCard />
          </Transition>
        </div>
        <Particles />
      </div>
    </section>
  );
}

export default Hero;
