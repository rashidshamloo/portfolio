'use client';

// react
import { useRef } from 'react';

// next-intl
import { useTranslations } from 'next-intl';

// components
import FooterSocialLinks from './FooterSocialLinks';
import FooterNavigation from './FooterNavigation';
import FooterTechnologies from './FooterTechnologies';
import FooterTitle from './FooterTitle';

function Footer() {
  const t = useTranslations('Footer');
  const ref = useRef<HTMLElement>(null);
  return (
    <section
      ref={ref}
      className="relative z-[1] -mt-[50px] bg-heroBg bg-center pb-8 pt-20 font-medium dark:bg-heroBgDark"
      style={{
        maskImage: "url('/images/waves.svg')",
        WebkitMaskImage: "url('/images/waves.svg')",
        maskPosition: 'top',
        WebkitMaskPosition: 'top',
      }}
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-darkViolet/70 dark:text-brightBlue/80 [&_a]:relative [&_a]:inline-flex [&_a]:text-darkViolet/70 [&_a]:transition-all [&_a]:duration-500 [&_a]:transform hover:[&_a]:translate-x-2 hover:[&_a]:text-accent dark:[&_a]:text-brightBlue/80 dark:hover:[&_a]:text-accent [&_h3]:mb-3 [&_h3]:inline-block [&_h3]:border-b-[1px] [&_h3]:border-darkViolet/50 [&_h3]:pb-1 [&_h3]:pr-4 [&_h3]:font-merriweather [&_h3]:font-semibold [&_h3]:tracking-wide dark:[&_h3]:border-brightBlue/50 [&_li]:my-1 [&_ul]:inline-block">
        <div className="inline-grid grid-cols-1 gap-y-8 lg:w-full lg:grid-cols-4 [&>*]:flex [&>*]:flex-col [&>*]:items-start lg:[&>*]:items-center [&>div>div]:flex [&>div>div]:flex-col">
          <div>
            <FooterTitle />
          </div>
          <div>
            <div>
              <h3>{t('navigation')}</h3>
              <FooterNavigation />
            </div>
          </div>
          <div>
            <div>
              <h3>{t('sns')}</h3>
              <FooterSocialLinks />
            </div>
          </div>
          <div>
            <div>
              <h3>{t('tech')}</h3>
              <FooterTechnologies />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
