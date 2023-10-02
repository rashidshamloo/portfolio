'use client';

// next
import { usePathname } from 'next/navigation';

// react-flip-tilt
import { Parallax } from 'react-next-parallax';

// next-intl
import { useTranslations } from 'next-intl';

// components
import TopWrapper from '@/components/Layout/TopWrapper';

const NotFoundPage = () => {
  const pathName = usePathname();

  const t = useTranslations('Error');

  return (
    <TopWrapper innerClass="items-center justify-center" separator={false}>
      <Parallax
        className="w-[300px] max-w-[90%]"
        borderRadius="16px"
        animationMode="edge-to-edge-x"
        spotGlareMaxOpacity={0.2}
        shadow="0 0 1.5rem rgba(0,0,0,0.5)"
        lineGlareMaxOpacity={0.05}
      >
        <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[16px] border-[8px] bg-[linear-gradient(to_bottom_right,rgba(203,213,225,0.2),rgba(175,190,205,0.2))] px-4 py-8 will-change-transform dark:border-black/40 dark:bg-[linear-gradient(to_bottom_right,rgba(53,63,75,0.3),rgba(25,40,55,0.3))]">
          <p data-parallax-offset="20" className="text-6xl text-accent/90">
            404
          </p>
          <h1
            data-parallax-offset="10"
            data-parallax-rotation="-10;10"
            className="text-4xl"
          >
            {t('notFound')}
          </h1>
          <p data-parallax-offset="5" className="text-center text-xl">
            <i style={{ wordBreak: 'break-word' }}>
              {t('message')} &quot;{pathName}&quot;
            </i>
          </p>
        </div>
      </Parallax>
    </TopWrapper>
  );
};

export default NotFoundPage;
