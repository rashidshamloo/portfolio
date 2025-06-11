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
      <div className="mx-auto flex min-h-screen flex-col-reverse items-center justify-between pt-20 xl:container lg:flex-row lg:px-8 lg:pt-0 [&_li]:font-medium">
        <Intro />
        <Transition
          delay={1.5}
          duration={0.75}
          threshold={0}
          effect="fadeRTL"
          className="p-4"
          disableOnMobile={true}
        >
          <HeroCard />
        </Transition>
      </div>
    </TopWrapper>
  );
}

export default Hero;
