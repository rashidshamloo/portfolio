'use client';

// react
import { useState, useEffect, useRef } from 'react';

// next
import dynamic from 'next/dynamic';

// next-intl
import { useTranslations } from 'next-intl';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// components
const TPSection = dynamic(() => import('./TPSection'));
// const MovingBackground = dynamic(() => import('./MovingBackground'));
import MovingBackground from './MovingBackground';

const TechnologyAndPassion = () => {
  const darkMode = useNextThemes();

  // state
  const [show, setShow] = useState(false);

  // next-intl
  const t = useTranslations('TechnologyAndPassion');

  // ref
  const containerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLHeadingElement>(null);
  const movingBackgroundRef = useRef<HTMLDivElement>(null);

  // preload/show moving background and the sections after 3 seconds
  // and show immediately if the page is already scrolled
  setTimeout(
    () => !show && setShow(true),
    typeof window !== 'undefined' && document.documentElement.scrollTop > 0
      ? 0
      : 3000,
  );

  useEffect(() => {
    const handleScroll = () => {
      // show moving background and sections only after scroll
      if (!show) setShow(true);

      if (
        !containerRef.current ||
        !triggerRef.current ||
        !movingBackgroundRef.current
      ) {
        return;
      }

      // classes to switch based on scroll position
      const techClasses = [
        'text-brightBlue/90',
        '[&_p]:rounded-t-md',
        '[&_*]:border-brightBlue/30',
        '[&_p]:bg-darkBlue/70',
        'before:[&_div]:border-brightBlue/30',
        'after:[&_*]:border-brightBlue/30',
      ];
      const passionClasses = [
        'text-grayishBrown/90',
        '[&_*]:border-darkViolet/30',
        'before:[&_div]:border-darkViolet/30',
        'after:[&_*]:border-darkViolet/30',
        'dark:[&_p]:bg-brightBlue/10',
      ];

      // when center of trigger element reaches center of screen
      const boundingRect = triggerRef.current.getBoundingClientRect();
      if (boundingRect.top + boundingRect.height / 2 > window.innerHeight / 2) {
        movingBackgroundRef.current.classList.remove('opacity-0');
        containerRef.current.classList.add(...techClasses);
        containerRef.current.classList.remove(...passionClasses);
      } else {
        movingBackgroundRef.current.classList.add('opacity-0');
        containerRef.current.classList.remove(...techClasses);
        containerRef.current.classList.add(...passionClasses);
      }
    };
    window?.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => window?.removeEventListener('scroll', handleScroll);
  }, [show]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden pb-20 pt-12 font-semibold text-brightBlue/90 lg:pb-32 lg:pt-32 after:[&>h2]:transition-all after:[&>h2]:duration-500 [&_*]:border-brightBlue/30 before:[&_div]:border-brightBlue/30  [&_p]:rounded-t-md [&_p]:bg-darkBlue/70 [&_p]:transition-colors [&_p]:duration-500"
      style={{
        backgroundColor: darkMode ? '#c69058' : '#fef9f6',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23${
          darkMode ? 'e2be89' : 'f9d6b2'
        }' fill-opacity='0.33'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {show && (
        <MovingBackground
          containerElement={containerRef.current}
          ref={movingBackgroundRef}
        />
      )}
      <div className="relative mx-auto flex flex-col items-center lg:container">
        {show && (
          <>
            <TPSection
              title={t('techTitle')}
              text={[
                t('techText1'),
                t('techText2'),
                t('techText3'),
                t('techText4'),
              ]}
              images={[
                '/images/home/tech-01.webp',
                '/images/home/tech-02.webp',
              ]}
            />
            <TPSection
              title={t('passionTitle')}
              text={[
                t('passionText1'),
                t('passionText2'),
                t('passionText3'),
                t('passionText4'),
              ]}
              images={[
                '/images/home/passion-01.webp',
                '/images/home/passion-02.webp',
              ]}
              triggerRef={triggerRef}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default TechnologyAndPassion;
