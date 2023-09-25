// next
import { Metadata } from 'next';

// components
import SectionNavigation from '@/components/Layout/SectionNavigation';
import ShowcaseTop from '@/components/Showcase/ShowcaseTop/ShowcaseTop';
import JapanSlider from '@/components/Showcase/JapanSlider/JapanSlider';
import Flowers from '@/components/Showcase/Flowers';
import FlipTiltParallax from '@/components/Showcase/FlipTiltParallax/FlipTiltParallax';
import ParallexScroll from '@/components/Showcase/ParallaxScroll';

// metadata
export const metadata: Metadata = {
  title: 'Rashid Shamloo | Showcase',
  description: "Rashid Shamloo's Project Showcase",
  keywords:
    'Rashid Shamloo, Rashid, Shamloo, Showcase, Web Developer, Front-end Developer',
  metadataBase: new URL('https://www.rashidshamloo.com'),
  alternates: {
    canonical: '/blog',
    languages: {
      'en-US': '/en/blog',
      'ja-JP': '/ja/blog',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'ja_JP',
    url: '/showcase',
    title: 'Rashid Shamloo | Showcase',
    siteName: 'Rashid Shamloo | Portfolio',
    description: "Rashid Shamloo's Project Showcase",
    images: {
      url: '/images/screenshots/showcase.webp',
      alt: "Rashid Shamloo's Project Showcase",
      width: 800,
      height: 440,
      type: 'image/webp',
      secureUrl: '/images/screenshots/showcase.webp',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rashid Shamloo | Showcase',
    description: "Rashid Shamloo's Project Showcase",
    images: '/images/screenshots/showcase.webp',
    creator: '@rashidshamloo',
    site: '@rashidshamloo',
  },
};

const Showcase = () => {
  return (
    <>
      <ShowcaseTop />
      <ParallexScroll />
      <JapanSlider />
      <FlipTiltParallax />
      <Flowers />
      <SectionNavigation />
    </>
  );
};

export default Showcase;
