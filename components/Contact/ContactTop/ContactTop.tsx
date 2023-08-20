'use client';

// react
import { useContext, useState } from 'react';

// next
import dynamic from 'next/dynamic';

// context
import darkModeSetting from '@/context/darkModeSetting';

// next-intl
import { useTranslations } from 'next-intl';

// components

import ContactForm from './ContactForm/ContactForm';
import PostCardAndLetter from './PostCardAndLetter/PostCardAndLetter';
import Transition from '@/components/common/Transition';
const Particles = dynamic(() => import('@/components/common/Particles'));

const ContactTop = () => {
  // next-intl
  const t = useTranslations('Contact');

  // context
  const [darkMode] = useContext(darkModeSetting)!;

  // states
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return (
    <section className="relative z-[1] -mb-[50px]">
      {/* shadow */}
      {/* drop-shadow-[0_10px_5px_rgba(0,0,0,0.4)] */}
      {/* using an image for shadow instead of drop-shadow for performance */}
      <div
        className="pointer-events-none absolute -bottom-[40px] left-0 right-0 -z-[1] h-[80px] bg-[url('/images/shadow.png')]"
        aria-hidden="true"
      ></div>
      <h1 className="sr-only">{t('pageTitle')}</h1>
      <div
        className={`flex min-h-[calc(100dvh_+_50px)] items-center justify-center overflow-hidden bg-[length:1.5rem,auto] pb-16 pt-14 text-darkGrayishViolet/90 dark:text-brightBlue sm:pb-10 sm:pt-20 lg:py-8 [&_li]:font-medium ${
          // flicker prevention
          // if page is not hydrated yet (darkMode === undefined) don't set any background
          // else, set background according to darkMode
          darkMode !== undefined
            ? darkMode
              ? 'bg-heroBgDark after:bg-heroBgDark'
              : 'bg-heroBg after:bg-heroBg'
            : ''
        }`}
        style={{
          maskImage: "url('/images/waves-2.svg')",
          WebkitMaskImage: "url('/images/waves-2.svg')",
          maskPosition: 'bottom',
          WebkitMaskPosition: 'bottom',
          maskSize: '4000px 2000px',
          WebkitMaskSize: '4000px 2000px',
        }}
      >
        <div className="mx-auto flex min-h-[calc(100dvh_-_3.5rem)] w-full flex-col items-center justify-evenly gap-y-10 xl:container sm:min-h-[calc(100dvh_-_5rem)] lg:flex-row">
          <div
            className="flex w-full items-center justify-center lg:max-w-[50%]"
            aria-hidden="true"
          >
            <PostCardAndLetter userName={userName} userEmail={userEmail} />
          </div>
          <Transition
            effect="fadeRTL"
            duration={0.75}
            threshold={0}
            className="lg:pr-4 xl:pr-6"
          >
            <ContactForm
              setUserName={setUserName}
              setUserEmail={setUserEmail}
            />
          </Transition>
        </div>
        {/* <Particles /> */}
      </div>
    </section>
  );
};

export default ContactTop;
