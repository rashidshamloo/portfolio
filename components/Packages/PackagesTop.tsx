'use client';

// next
import dynamic from 'next/dynamic';

// next-intl
import { useTranslations } from 'next-intl';

// data
import packages from '@/data/packages.json';

// components
import Transition from '@/components/Common/Transition';
import Package from './Package';
import PageTitle from '../Layout/PageTitle';
import TopWrapper from '../Layout/TopWrapper';

// glass class
import glassClass from '@/styles/glassProvider';

const PackagesTop = () => {
  // next-intl
  const t = useTranslations('Packages');

  return (
    <TopWrapper separator={false}>
      <PageTitle>{t('pageTitle')}</PageTitle>
      <div
        className={
          'mx-auto mt-4 flex flex-col gap-y-4 pb-6 xl:container lg:mt-8 lg:pb-0 [&_li]:font-medium ' +
          glassClass
        }
      >
        {packages.map((data, i) => {
          return (
            <Transition
              effect="fadeBTTS"
              threshold={0.15}
              duration={0.75}
              className="min-h-[40rem] w-full"
              key={i}
            >
              <hr className="mx-auto mb-4 w-[70%] border-b-2 border-t-0 border-dashed border-darkViolet/10 drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] dark:border-brightBlue/10" />
              <Package data={data} reverse={!!(i % 2)} />
            </Transition>
          );
        })}
      </div>
    </TopWrapper>
  );
};

export default PackagesTop;
