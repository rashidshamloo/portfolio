'use client';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// next-intl
import { useTranslations } from 'next-intl';

// components
import TopWrapper from '@/components/Layout/TopWrapper';
import PageTitle from '@/components/Layout/PageTitle';
import PageInfo from '@/components/Layout/PageInfo';
import Footer from '../Footer';
import ParallaxBalloonLight from './ParallaxBalloonLight';
import ParallaxBalloonDark from './ParallaxBalloonDark';
import Transition from '@/components/Common/Transition';
import WordBreak from '@/components/Common/WordBreak';

const ShowcaseTop = () => {
  const darkMode = useNextThemes();

  // next-intl
  const t = useTranslations('Showcase');

  return (
    <TopWrapper
      separator={true}
      className="lg:snap-start lg:snap-always"
      innerClass="gap-8"
    >
      <div className="mx-auto flex flex-col items-center justify-start lg:container">
        <PageTitle>{t('pageTitle')}</PageTitle>
        <Transition
          duration={0.75}
          threshold={0}
          delay={0.5}
          effect="fadeTTBSScaleR"
        >
          <PageInfo>
            <WordBreak>{t('pageInfo')}</WordBreak>
          </PageInfo>
        </Transition>
      </div>
      <Transition
        effect="scaleUpS"
        duration={1}
        delay={1}
        className="flex w-full flex-grow items-center justify-center"
      >
        {darkMode ? (
          <ParallaxBalloonDark className="w-[1024px] max-w-[65%] md:max-w-[90%]" />
        ) : (
          <ParallaxBalloonLight className="w-[1024px] max-w-[65%] md:max-w-[90%]" />
        )}
      </Transition>
      <Transition duration={1} delay={1.5} className="w-full">
        <Footer
          lines={[t('topFooter1'), t('topFooter2')]}
          className="text-slate-500/70 before:border-slate-500/30"
        />
      </Transition>
    </TopWrapper>
  );
};

export default ShowcaseTop;
