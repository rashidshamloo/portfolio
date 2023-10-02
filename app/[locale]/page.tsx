//next
import dynamic from 'next/dynamic';

// components
import Hero from '@/components/Home/Hero/Hero';

const TechnologyAndPassion = dynamic(
  () => import('@/components/Home/TechnologyAndPassion/TechnologyAndPassion'),
);

export default function Home() {
  return (
    <>
      <Hero />
      <TechnologyAndPassion />
    </>
  );
}
