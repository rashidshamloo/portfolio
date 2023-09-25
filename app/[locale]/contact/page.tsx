// next
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

// components
import ContactTop from '@/components/Contact/ContactTop/ContactTop';
const Social = dynamic(() => import('@/components/Contact/Social/Social'));

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | Contact Information',
  description: "Rashid Shamloo's Contact Information",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, Contact Information, Web Developer, Front-end Developer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: 'https://rashidshamloo.com/contact',
    title: 'Rashid Shamloo | Contact Information',
    siteName: 'Rashid Shamloo | Portfolio',
    description: "Rashid Shamloo's Contact Information",
    images: {
      url: 'http://rashidshamloo.com/images/screenshots/contact.webp',
      alt: "Rashid Shamloo's Contact Information",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: 'https://rashidshamloo.com/images/screenshots/contact.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashid Shamloo | Contact Information',
    description: "Rashid Shamloo's Contact Information",
    images: 'https://rashidshamloo.com/images/screenshots/contact.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

const Contact = () => {
  return (
    <>
      <ContactTop />
      <Social />
    </>
  );
};

export default Contact;
