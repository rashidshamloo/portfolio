'use client';

// next-intl
import { useTranslations } from 'next-intl';

// react-device-detect
import { isMobile } from 'react-device-detect';

// components
import SocialSection from './SocialSection';
import Transition from '@/components/common/Transition';

const Social = () => {
  const t = useTranslations('Social');
  return (
    <section className="overflow-hidden bg-[#95afe5] bg-[url('/images/social-wave.svg'),url('/images/social-dot.svg')] bg-[cover,auto] bg-center py-[100px] dark:bg-grayishBlue dark:bg-[url('/images/social-wave-dark.svg'),url('/images/social-dot-dark.svg')] lg:bg-[cover,auto] lg:py-[150px]">
      <div className="mx-auto xl:container">
        <Transition
          component="h2"
          className="mx-[5%] text-center text-[2rem] font-bold uppercase leading-[1.5] text-brightBlue drop-shadow-[0.075em_0.075em_0_rgba(0,0,0,0.3)] transition-all duration-500 dark:text-brightBlue/80 md:text-4xl lg:mx-auto lg:text-[2.65rem]"
        >
          {t('otherWaysToContactMe')}
        </Transition>
        <div className="mt-8 flex flex-col items-center justify-evenly gap-y-4 text-[0.85rem] lg:mt-16 lg:flex-row lg:text-[0.75rem] xl:text-[0.85rem]">
          <Transition
            effect="fadeLTR"
            threshold={0.5}
            duration={0.75}
            delay={isMobile ? 0 : 0.5}
          >
            <SocialSection
              icon="/images/icons/linkedin-original.svg"
              iconBg="/images/blob-1.svg"
              iconSize={35}
              title="Linkedin"
              handle="@rashid-shamloo"
              link="https://www.linkedin.com/in/rashid-shamloo/"
              text={t('linkedin')}
            />
          </Transition>
          <Transition effect="fadeBTT" threshold={0.5} duration={0.75}>
            <SocialSection
              icon="/images/icons/twitter.svg"
              iconBg="/images/blob-2.svg"
              iconSize={50}
              title="Twitter"
              handle="@rashidshamloo"
              link="https://twitter.com/rashidshamloo"
              text={t('twitter')}
            />
          </Transition>
          <Transition
            effect="fadeRTL"
            threshold={0.5}
            duration={0.75}
            delay={isMobile ? 0 : 0.5}
          >
            <SocialSection
              icon="/images/icons/email.svg"
              iconBg="/images/blob-3.svg"
              iconSize={45}
              title="Email"
              handle="rashidshamloo@gmail.com"
              link="mailto:rashidshamloo@gmail.com"
              text={t('email')}
            />
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Social;
