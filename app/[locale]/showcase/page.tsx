'use client';

// components
import SectionNavigation from '@/components/Layout/SectionNavigation';
import ShowcaseTop from '@/components/Showcase/ShowcaseTop/ShowcaseTop';
import JapanSlider from '@/components/Showcase/JapanSlider/JapanSlider';
import Flowers from '@/components/Showcase/Flowers';
import FlipTiltParallax from '@/components/Showcase/FlipTiltParallax/FlipTiltParallax';
import ParallexScroll from '@/components/Showcase/ParallaxScroll';

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
