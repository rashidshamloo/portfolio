'use client';

// next-intl
import { useTranslations } from 'next-intl';

// react-device-detect
import { isMobile } from 'react-device-detect';

// components
import SocialSection from './SocialSection';
import Transition from '@/components/Common/Transition';
import SectionWrapper from '@/components/Layout/SectionWrapper';

const Social = () => {
  const t = useTranslations('Social');
  return (
    <SectionWrapper
      zIndex={9}
      innerClass="overflow-hidden bg-[#95afe5] bg-[url('/images/contact/social/social-wave.svg'),url('/images/contact/social/social-dot.svg')] bg-[cover,auto] bg-center dark:bg-grayishBlue dark:bg-[url('/images/contact/social/social-wave-dark.svg'),url('/images/contact/social/social-dot-dark.svg')]"
      separator={false}
    >
      {/* <div className=""> */}
      <div className="mx-auto flex flex-grow flex-col justify-center py-[100px] xl:container lg:py-[50px]">
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
              iconBg="/images/contact/social/blob-1.svg"
              iconSize={35}
              title={t('linkedinTitle')}
              handle="@rashid-shamloo"
              link="https://www.linkedin.com/in/rashid-shamloo/"
              text={t('linkedin')}
            />
          </Transition>
          <Transition effect="fadeBTT" threshold={0.5} duration={0.75}>
            <SocialSection
              icon="/images/icons/x-dark.svg"
              iconBg="/images/contact/social/blob-2.svg"
              iconSize={29}
              title={t('twitterTitle')}
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
              iconBg="/images/contact/social/blob-3.svg"
              iconSize={45}
              title={t('emailTitle')}
              handle="rashidshamloo@gmail.com"
              link="mailto:rashidshamloo@gmail.com"
              text={t('email')}
            />
          </Transition>
        </div>
      </div>
      {/* </div> */}
    </SectionWrapper>
  );
};

export default Social;
