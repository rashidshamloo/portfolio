'use client';

// react
import { useState } from 'react';

// next-intl
import { useTranslations } from 'next-intl';

// components
import ContactForm from './ContactForm/ContactForm';
import PostCardAndLetter from './PostCardAndLetter/PostCardAndLetter';
import Transition from '@/components/Common/Transition';
import TopWrapper from '@/components/Layout/TopWrapper';

const ContactTop = () => {
  // next-intl
  const t = useTranslations('Contact');

  // states
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  return (
    <TopWrapper separator={true}>
      <div className="mx-auto flex w-full flex-grow flex-col items-center justify-evenly gap-y-10 pt-12 xl:container lg:flex-row">
        <div
          className="flex w-full items-center justify-center lg:max-w-[50%]"
          aria-hidden="true"
        >
          <PostCardAndLetter userName={userName} userEmail={userEmail} />
        </div>
        <Transition
          effect="fadeRTL"
          duration={0.75}
          delay={0.5}
          threshold={0}
          className="flex items-center justify-center lg:pr-4 xl:pr-6"
        >
          <ContactForm setUserName={setUserName} setUserEmail={setUserEmail} />
        </Transition>
      </div>
    </TopWrapper>
  );
};

export default ContactTop;
