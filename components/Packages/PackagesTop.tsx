'use client';

// react
import { useContext } from 'react';

// next
import dynamic from 'next/dynamic';

// context
import darkModeSetting from '@/context/darkModeSetting';

// next-intl
import { useTranslations } from 'next-intl';

// data
import packages from '@/data/packages.json';

// components
import Transition from '@/components/common/Transition';
const Package = dynamic(() => import('./Package'));
const Particles = dynamic(() => import('@/components/common/Particles'));

// glass class
import glassClass from '@/styles/glassProvider';

const PackagesTop = () => {
  // next-intl
  const t = useTranslations('Packages');

  // context
  const [darkMode] = useContext(darkModeSetting)!;

  return (
    <section className="relative z-[1] -mb-[50px]">
      <div
        className={`flex min-h-[calc(100dvh_+_50px)] items-center justify-center overflow-hidden bg-cover pb-16 pt-[4.5rem] text-darkGrayishViolet/90 dark:text-brightBlue lg:pb-24 lg:pt-16 [&_li]:font-medium ${
          // flicker prevention
          // if page is not hydrated yet (darkMode === undefined) don't set any background
          // else, set background according to darkMode
          darkMode !== undefined
            ? darkMode
              ? 'bg-heroBgDark after:bg-heroBgDark'
              : 'bg-heroBg after:bg-heroBg'
            : ''
        } ${glassClass}`}
      >
        <div className="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center gap-y-4 xl:container sm:min-h-[calc(100dvh_-_5rem)]">
          <Transition
            component="h1"
            className="my-4 text-center font-merriweather text-3xl font-bold tracking-wider text-darkViolet/80 dark:text-brightBlue/80 sm:text-4xl md:my-8 md:text-[2.65rem] xl:text-5xl"
          >
            {t('pageTitle')}
          </Transition>
          {packages.map((data, i) => {
            return (
              <Transition threshold={0.1} className="w-full" key={i}>
                <hr className="mx-auto w-[70%] border-b-2 border-t-0 border-dashed border-darkViolet/10 drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] dark:border-brightBlue/10" />
                <Package data={data} reverse={!!(i % 2)} />
              </Transition>
            );
          })}
        </div>
        <Particles />
      </div>
    </section>
  );
};

export default PackagesTop;
