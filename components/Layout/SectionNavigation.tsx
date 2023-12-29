'use client';

// react
import { useCallback, useEffect, useRef, useState } from 'react';

// material-ui
import { ArrowDropUpRounded, ArrowDropDownRounded } from '@mui/icons-material';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

const SectionNavigation = () => {
  const darkMode = useNextThemes();
  // state
  const [sectionElements, setSectionElements] = useState<Array<HTMLElement>>(
    [],
  );
  const [sectionsInView, setSectionsInView] = useState<Array<boolean>>([]);

  // ref
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  // navigates to a section based on the index number
  const navigateTo = useCallback(
    (index: number) => {
      // get section element to navigate to
      const navToElement = sectionElements[index];
      if (!navToElement) return;

      // center the element in viewport
      const position =
        navToElement.getBoundingClientRect().y -
        (window.innerHeight - navToElement.getBoundingClientRect().height) / 2;

      // scroll to the start if it's the first section else scroll to position
      window.scrollTo({
        top: index === 0 ? 0 : position + document.documentElement.scrollTop,
        behavior: 'smooth',
      });
    },
    [sectionElements],
  );

  // navigates to the next or previous section based on passed value
  const navigateSection = useCallback(
    (direction: 'prev' | 'next') => {
      let navSectionIndex: number;
      // get index of current section that's in view
      const index = sectionsInView.indexOf(true);
      // if direction is true (next item)
      if (direction === 'next') {
        // if we're at the last section do nothing
        if (index === sectionsInView.length - 1) return;
        navSectionIndex = index + 1;
      }
      // if direction is false (previous item)
      else {
        // if we're at the first section do nothing
        if (index === 0) return;
        // section ids start at 1 so index is already id-1
        navSectionIndex = index - 1;
      }
      // navigate to the section id
      navigateTo(navSectionIndex);
    },
    [navigateTo, sectionsInView],
  );

  // event handler for left/right arrow navigation
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        navigateSection('next');
      } else if (e.key === 'ArrowLeft') {
        navigateSection('prev');
      }
    },
    [navigateSection],
  );

  // adding event listener for keyboard navigation
  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  }, [handleKeydown, sectionElements]);

  useEffect(() => {
    const elements: HTMLElement[] = [];
    document
      .querySelectorAll<HTMLElement>('[data-section="1"]')
      .forEach((ele) => elements.push(ele));
    setSectionElements(elements);
    if (sectionsInView.length !== elements.length) {
      const sectiondInViewDefault = Array(elements.length).fill(false);
      sectiondInViewDefault[0] = true;
      setSectionsInView(sectiondInViewDefault);
    }
  }, [sectionsInView.length]);

  useEffect(() => {
    let options = {
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (
      entries: IntersectionObserverEntry[],
      // , observer: IntersectionObserver
    ) => {
      for (const entry of entries) {
        const index = sectionElements.indexOf(entry.target as HTMLElement);
        setSectionsInView((prev) =>
          prev.map((p, i) => (i === index ? entry.isIntersecting : p)),
        );
      }
    };

    let observer = new IntersectionObserver(handleIntersection, options);

    for (const ele of sectionElements) {
      if (ele) observer.observe(ele);
    }
  }, [sectionElements, sectionsInView.length, setSectionsInView]);

  const arrowClassName =
    'dark:stroke-slate-100/50 stroke-slate-700/50 stroke-[0.35px] [&:not(:disabled)]:cursor-pointer text-slate-100/40 dark:text-slate-700/40 dark:hover:[&:not(:disabled)]:text-slate-700/60 hover:[&:not(:disabled)]:text-slate-400/60 will-change-transform text-[3.5rem] flex justify-center overflow-hidden hover:[&:not(:disabled)]:scale-[125%] items-center w-6 leading-[0] h-6 p-4 transition-all duration-300 dark:active:[&:not(:disabled)]:text-slate-700 active:[&:not(:disabled)]:text-slate-500 disabled:opacity-[0.3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-black';

  // disable next/prev nav buttons based on the section in view
  useEffect(() => {
    if (!prevRef.current || !nextRef.current) return;

    if (sectionsInView[0]) prevRef.current.disabled = true;
    else prevRef.current.disabled = false;

    if (sectionsInView[sectionsInView.length - 1])
      nextRef.current.disabled = true;
    else nextRef.current.disabled = false;
  }, [sectionsInView]);

  return (
    <div className="fixed top-1/2 z-50 hidden flex-col items-center justify-center gap-8 -translate-y-1/2 lg:right-3 lg:flex xl:right-12">
      <button
        className={arrowClassName}
        onClick={() => navigateSection('prev')}
        ref={prevRef}
        aria-label="Previous Section"
      >
        <ArrowDropUpRounded fontSize="inherit" />
      </button>
      {sectionElements.map((_, index) => (
        <div className="flex flex-col items-center justify-center" key={index}>
          <button
            className='absolute aspect-square w-[10px] rounded-full border-[1px] border-slate-700/50 transition-all duration-300 will-change-transform scale-100 before:absolute before:-inset-[0.7rem] before:rounded-full hover:!bg-slate-400/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black active:!bg-slate-500 dark:border-slate-100/50 dark:hover:!bg-slate-700/60 dark:active:!bg-slate-700 hover:[&:not([data-active="true"])]:scale-150 hover:[&_[data-active="true"]]:bg-blue-500'
            // drop-shadow-[0_0_2px_rgba(0,0,0,0.4)]
            style={{
              transform: sectionsInView[index] ? 'scale(2)' : 'scale(1)',
              backgroundColor: sectionsInView[index]
                ? darkMode
                  ? 'rgba(51,65,85,0.7)'
                  : 'rgba(241,245,249,0.7)'
                : darkMode
                ? 'rgba(51,65,85,0.4)'
                : 'rgba(241,245,249,0.4)',
            }}
            onClick={() => navigateTo(index)}
            // set active to true if same section is in view
            data-active={sectionsInView[index] ? true : false}
            aria-label={`Go to Section ${index}`}
          />
        </div>
      ))}
      <button
        className={arrowClassName}
        onClick={() => navigateSection('next')}
        ref={nextRef}
        aria-label="Next Section"
      >
        <ArrowDropDownRounded fontSize="inherit" />
      </button>
    </div>
  );
};

export default SectionNavigation;
