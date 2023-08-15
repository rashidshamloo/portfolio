'use client';

// react
import { Fragment, useContext } from 'react';

// next
import dynamic from 'next/dynamic';

// context
import darkModeSetting from '@/context/darkModeSetting';

// next-intl
import { useTranslations } from 'next-intl';

// data
import projects from '@/data/projects.json';

// components
import Transition from '@/components/common/Transition';
const Project = dynamic(() => import('./Project'));
const Particles = dynamic(() => import('@/components/common/Particles'));

// glass class
import glassClass from '@/styles/glassProvider';

const ProjectsTop = () => {
  // next-intl
  const t = useTranslations('Projects');

  // context
  const [darkMode] = useContext(darkModeSetting)!;

  return (
    <section className="relative z-[1] -mb-[50px]">
      <div
        className={`flex min-h-[calc(100dvh_+_50px)] items-center justify-center overflow-hidden bg-cover pb-16 pt-[4.5rem] text-darkGrayishViolet/90 dark:text-brightBlue sm:pb-10 lg:py-16 [&_li]:font-medium ${
          // flicker prevention
          // if page is not hydrated yet (darkMode === undefined) don't set any background
          // else, set background according to darkMode
          darkMode !== undefined
            ? darkMode
              ? 'bg-heroBgDark after:bg-heroBgDark'
              : 'bg-heroBg after:bg-heroBg'
            : ''
        } ${glassClass}`}
        style={{
          maskImage: "url('/images/waves-2.svg'),rect(0,0,100%,80%)",
          WebkitMaskImage:
            "url('/images/waves-2.svg'),linear-gradient(black 95%,transparent 0%)",
          maskPosition: 'bottom',
          WebkitMaskPosition: 'bottom',
        }}
      >
        <div className="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-center gap-y-4 xl:container sm:min-h-[calc(100dvh_-_5rem)]">
          <Transition
            component="h1"
            className="my-4 text-center font-merriweather text-3xl font-bold tracking-wider text-darkViolet/80 dark:text-brightBlue/80 sm:text-4xl md:my-8 md:text-[2.65rem] xl:text-5xl"
          >
            {t('pageTitle')}
          </Transition>
          {projects.map((data, i) => {
            return (
              <Fragment key={i}>
                <hr className="mx-auto w-[70%] border-b-2 border-t-0 border-dashed border-darkViolet/10 drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] dark:border-brightBlue/10" />
                <Transition threshold={0.1} className="w-full">
                  <Project data={data} reverse={!!(i % 2)} />
                </Transition>
              </Fragment>
            );
          })}
        </div>
        <Particles />
      </div>
    </section>
  );
};

export default ProjectsTop;
