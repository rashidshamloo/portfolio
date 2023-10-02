'use client';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Transition from '../../Common/Transition';
import MoreProjectsItem from './MoreProjectsItem';
import SectionWrapper from '@/components/Layout/SectionWrapper';
import WordBreak from '@/components/Common/WordBreak';

const MoreProjects = () => {
  const t = useTranslations('MoreProjects');
  return (
    <SectionWrapper
      separator={false}
      innerClass="dark:bg-mediumViolet bg-brightBlue3 bg-[url('/images/projects/bg-blob.svg'),url('/images/projects/bg.svg')] dark:bg-[url('/images/projects/bg-blob-dark.svg'),url('/images/projects/bg-dark.svg')] bg-[length:100%_100%,auto] py-32 flex items-center justify-around flex-col gap-16"
    >
      <Transition
        component="h2"
        className="mx-[5%] text-center text-[2rem] font-bold uppercase leading-[1.5] text-mediumViolet/80 drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] transition-all duration-500 dark:text-brightBlue/80 md:text-4xl lg:mx-auto lg:text-[2.65rem]"
      >
        {t('title')}
      </Transition>
      <div className="mt-16 flex w-full flex-col items-center justify-evenly gap-y-40 pb-12 sm:gap-y-52 lg:mt-0 lg:flex-row">
        <Transition effect="fadeLTR" delay={0.5}>
          <MoreProjectsItem
            icon="github"
            title="GitHub"
            text={t('github')}
            link="https://github.com/rashidshamloo"
            bg="blob.svg"
            bgReverse={true}
          />
        </Transition>
        <Transition effect="fadeRTL" delay={0.5}>
          <MoreProjectsItem
            icon="fem"
            title="Frontend Mentor"
            text={t('frontendmentor')}
            link="https://www.frontendmentor.io/profile/rashidshamloo"
            bg="blob.svg"
            rotateReverse={true}
          />
        </Transition>
      </div>
    </SectionWrapper>
  );
};

export default MoreProjects;
