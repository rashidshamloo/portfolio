'use client';

// next
import dynamic from 'next/dynamic';

// next-intl
import { useTranslations } from 'next-intl';

// data
import projects from '@/data/projects.json';

// components
import Transition from '@/components/Common/Transition';
const Project = dynamic(() => import('./Project'));
import PageTitle from '../Layout/PageTitle';
import TopWrapper from '../Layout/TopWrapper';

// glass class
import glassClass from '@/styles/glassProvider';

const ProjectsTop = () => {
  // next-intl
  const t = useTranslations('Projects');

  return (
    <TopWrapper separator={true}>
      <PageTitle>{t('pageTitle')}</PageTitle>
      <div
        className={
          'mt-8 gap-y-4 flex flex-col xl:container mx-auto [&_li]:font-medium ' +
          glassClass
        }
      >
        {projects.map((data, i) => {
          return (
            <Transition
              effect="fadeBTTS"
              threshold={0.15}
              duration={0.75}
              className="w-full min-h-[31.25rem]"
              key={i}
            >
              <hr className="mx-auto w-[70%] border-b-2 border-t-0 border-dashed border-darkViolet/10 drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] dark:border-brightBlue/10 mb-4" />
              <Project data={data} reverse={!!(i % 2)} />
            </Transition>
          );
        })}
      </div>
    </TopWrapper>
  );
};

export default ProjectsTop;
