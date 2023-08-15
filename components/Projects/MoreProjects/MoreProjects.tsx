'use client';

// next-intl
import { useTranslations } from 'next-intl';

// components
import Transition from '../../common/Transition';
import MoreProjectsItem from './MoreProjectsItem';

const MoreProjects = () => {
  const t = useTranslations('MoreProjects');
  return (
    <section
      className="relative overflow-hidden bg-brightBlue3 bg-[url('/images/projects/bg-blob.svg'),url('/images/projects/bg.svg')] bg-[length:100%_100%,auto] pb-32 pt-20 dark:bg-mediumViolet dark:bg-[url('/images/projects/bg-blob-dark.svg'),url('/images/projects/bg-dark.svg')]"
      style={{
        backgroundRepeat: 'no-repeat,repeat',
      }}
    >
      <div className="xl:container mx-auto gap-y-28 flex flex-col items-center justify-center md:gap-y-32 md:pb-48 md:pt-28">
        <Transition
          component="h2"
          className="text-center text-4xl font-bold tracking-wide text-darkViolet/70 dark:text-brightBlue/70 sm:mb-8 sm:text-5xl lg:mb-0 xl:text-6xl"
        >
          {t('title')}
        </Transition>
        <div className="flex w-full flex-col items-center justify-evenly gap-y-40 sm:gap-y-52 lg:flex-row">
          <Transition effect="fadeLTR" delay={0.5}>
            <MoreProjectsItem
              icon="github"
              title="GitHub"
              text={t('github')}
              link="https://github.com/rashidshamloo"
              bg="blob-4.svg"
              bgReverse={true}
            />
          </Transition>
          <Transition effect="fadeRTL" delay={0.5}>
            <MoreProjectsItem
              icon="fem"
              title="Frontend Mentor"
              text={t('frontendmentor')}
              link="https://www.frontendmentor.io/profile/rashidshamloo"
              bg="blob-4.svg"
              rotateReverse={true}
            />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default MoreProjects;
