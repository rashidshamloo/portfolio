'use client';

// react
import { useCallback, useEffect, useRef } from 'react';

// next-int
import { useTranslations } from 'next-intl';

// icon
import { FaArrowUp } from 'react-icons/fa6';

// components
import Tooltip from './Tooltip';

// types
interface ScrollToTopProps {
  triggerAt?: number;
}

const ScrollToTop = ({ triggerAt = 100 }: ScrollToTopProps) => {
  const t = useTranslations('Other');

  const ref = useRef<HTMLButtonElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  let timeoutId: ReturnType<typeof setTimeout>;

  const handleScroll = useCallback(() => {
    if (!ref.current || window.innerWidth < 1024) return;
    if (document.documentElement.scrollTop > triggerAt) {
      ref.current.classList.remove('opacity-0');
      ref.current.classList.remove('pointer-events-none');
      ref.current.classList.add('opacity-60');
    } else {
      ref.current.classList.remove('opacity-60');
      ref.current.classList.add('opacity-0');
      ref.current.classList.add('pointer-events-none');
    }
  }, [triggerAt]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <button
      ref={ref}
      aria-label="Back to Top"
      className="hidden lg:flex aspect-square hover:text-slate-100 w-[48px] dark:hover:bg-slate-300/70 dark:hover:text-slate-700 hover:bg-slate-700/70 fixed bottom-4 right-4 xl:bottom-10 xl:right-10 opacity-0 transition-all duration-500 justify-center items-center rounded-full border-[1px] hover:border-slate-100/70 border-slate-700/70 dark:border-slate-100/70 z-[100] bg-slate-300 text-slate-700/70 dark:bg-slate-700/70 dark:text-slate-300"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      onMouseOver={() => {
        timeoutId = setTimeout(() => {
          if (tooltipRef.current)
            tooltipRef.current.classList.remove('opacity-0');
        }, 500);
      }}
      onMouseOut={() => {
        clearTimeout(timeoutId);
        if (tooltipRef.current) tooltipRef.current.classList.add('opacity-0');
      }}
    >
      <FaArrowUp size={24} />
      <Tooltip
        ref={tooltipRef}
        className="opacity-0 pointer-events-none transition-all duration-500"
      >
        {t('backToTop')}
      </Tooltip>
    </button>
  );
};

export default ScrollToTop;
