'use client';

// next-intl
import { useTranslations } from 'next-intl';

// components
import TopWrapper from '@/components/Layout/TopWrapper';
import Transition from '@/components/Common/Transition';
import HeroCard from './HeroCard/HeroCard';
import Intro from './Intro/Intro';

function Hero() {
  const t = useTranslations('Intro');
  return (
    <TopWrapper separator={true} separatorType="steps" title={t('pageTitle')}>
      <div className="mx-auto flex min-h-screen flex-col-reverse items-center justify-evenly xl:container lg:flex-row [&_li]:font-medium pt-20 lg:pt-0">
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
    </TopWrapper>
  );
}

export default Hero;
