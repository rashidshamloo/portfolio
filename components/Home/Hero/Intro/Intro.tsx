// react
import { useEffect, useRef } from 'react';

// next-int
import { useLocale } from 'next-intl';

// react-device-detect
import { isMobile } from 'react-device-detect';

// components
import Transition from '@/components/Common/Transition';
import WordBreak from '@/components/Common/WordBreak';
import Skills from './Skills/Skills';
import Button from '@/components/Common/Button';
import Typed from '@/components/Common/Typed';

// next-intl
import { useTranslations } from 'next-intl';

function Intro() {
  const t = useTranslations('Intro');
  const locale = useLocale();
  const ref = useRef<HTMLDivElement>(null);

  // add margin-top on heights lower than 800px
  // to prevent the header overlapping the content
  useEffect(() => {
    if (isMobile) return;
    const handleResize = () => {
      if (typeof window === undefined || !ref.current) return;
      if (window.innerHeight < 800) ref.current.classList.add('my-16');
      else ref.current.classList.remove('my-16');
    };
    window?.addEventListener('resize', handleResize);
    return () => window?.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={ref} className="w-full md:max-w-[55%]">
      <div className="mt-8 flex flex-col items-start text-center lg:mt-0 lg:text-left">
        <Transition
          effect="fadeTTB"
          className="w-full font-merriweather"
          duration={0.75}
          threshold={0}
          disableOnMobile={true}
        >
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl">
            {t('greeting')}
          </p>
          <p className="mt-2 text-[1.85rem] font-bold tracking-wider sm:text-4xl md:text-[2.25rem] lg:mt-4 xl:text-5xl">
            {t('iam') + ' '}
            <Typed
              strings={[
                t('developer'),
                t('engineer'),
                t('programmer'),
                t('learner'),
                // t('name'),
              ]}
              initialString={t('name')}
              className="text-accent"
            />
          </p>
        </Transition>
        <Transition
          effect="fadeIn"
          className="mx-[5%] mb-4 mt-4 leading-8 tracking-wide lg:mx-auto lg:mb-6 lg:mt-8 xl:text-lg"
          duration={0.75}
          delay={0.5}
          threshold={0}
        >
          <WordBreak>{t('about')}</WordBreak>
        </Transition>
        <div className="mb-8 mt-2 flex w-full flex-col justify-center gap-4 lg:mt-0 lg:flex-row xl:justify-end xl:gap-x-6 [&_span]:font-semibold [&_span]:tracking-wide">
          <Transition effect="fadeRTL" duration={0.75} delay={1.75}>
            <Button
              text={t('resume')}
              type="resume"
              href={
                locale === 'en'
                  ? '/resume/rashid-shamloo-resume.pdf'
                  : '/resume/rashid-shamloo-履歴書.pdf'
              }
              target="_blank"
            />
          </Transition>
          {locale === 'ja' && (
            <Transition effect="fadeRTL" duration={0.75} delay={1.25}>
              <Button
                text={t('resumeWork')}
                type="resume"
                href={'/resume/rashid-shamloo-職務経歴書.pdf'}
                target="_blank"
              />
            </Transition>
          )}
          <Transition effect="fadeLTR" duration={0.75} delay={1}>
            <Button
              text={t('sendMessage')}
              type="contact"
              href={(locale === 'en' ? '' : '/' + locale) + '/contact'}
            />
          </Transition>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default Intro;
