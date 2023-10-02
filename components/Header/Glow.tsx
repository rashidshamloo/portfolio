'use client';

// react
import { useCallback, useEffect, useRef } from 'react';

// framer motion
import { motion, useMotionValue, animate } from 'framer-motion';

// next-intl
import { useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';

const Glow = () => {
  // next-intl

  const locale = useLocale();
  const pathname = usePathname();

  // ref
  const glowRef = useRef<HTMLDivElement>(null);
  const animationId = useRef(0);

  // motionValue
  const translateX = useMotionValue(0);
  const scaleX = useMotionValue(1);
  const scaleY = useMotionValue(1);

  // animates the glow
  const animateGlow = useCallback(
    async (jump = false) => {
      if (!glowRef.current) return;

      const pathName = pathname.includes('blog') ? '/blog' : pathname;

      const pathNametoCheck =
        locale === 'en'
          ? pathName
          : '/' + locale + (pathName === '/' ? '' : pathName);

      const currentPathElement = document.querySelector<HTMLAnchorElement>(
        `[href="${pathNametoCheck}"]`,
      );

      if (!currentPathElement) {
        setTimeout(() => animateGlow(), 10);
        return;
      }

      const boundigRect = currentPathElement.getBoundingClientRect();
      const currentPathElementCenter = boundigRect.left + boundigRect.width / 2;

      if (
        translateX.get() === currentPathElementCenter &&
        !translateX.isAnimating()
      )
        return;

      /*
       *  set a new animationId and only continue doing
       *  animations if another animation hasn't been started
       *  and the animationId stays the same
       *  (needed when links are clicked consecutively
       *  and this function is called again before
       *  the previous one is finished running)
       */
      animationId.current++;
      const currentId = animationId.current;

      if (jump) {
        scaleX.jump(boundigRect.width / 12);
        scaleY.jump(0.25);
        translateX.jump(currentPathElementCenter);
      } else {
        if (currentId === animationId.current && glowRef.current) {
          glowRef.current.classList.add(
            'shadow-[0_0_0.5rem_0.1rem_rgba(110,231,183,0.8)]',
          );
          glowRef.current.classList.remove(
            'shadow-[0_0_0.25rem_0.1rem_rgba(110,231,183,0.5)]',
          );

          await Promise.all([animate(scaleX, 1), animate(scaleY, 1)]);
        }

        if (currentId === animationId.current)
          await animate(translateX, currentPathElementCenter, {
            type: 'spring',
            mass: 0.5,
            stiffness: 120,
          });

        if (currentId === animationId.current) {
          glowRef.current.classList.add(
            'shadow-[0_0_0.25rem_0.1rem_rgba(110,231,183,0.5)]',
          );
          glowRef.current.classList.remove(
            'shadow-[0_0_0.5rem_0.1rem_rgba(110,231,183,0.8)]',
          );

          await Promise.all([
            animate(scaleX, boundigRect.width / 12),
            animate(scaleY, 0.25),
          ]);
        }
      }
    },
    [pathname, locale, translateX, scaleX, scaleY],
  );

  useEffect(() => {
    animateGlow();
  }, [animateGlow]);

  const handleResize = useCallback(() => {
    animateGlow(true);
  }, [animateGlow]);

  // adding resize event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <motion.div
      style={{ translateX, scaleX, scaleY }}
      // style={{ transform: 'none' }}
      ref={glowRef}
      className="absolute -left-[5px] bottom-[5%] hidden h-[10px] w-[10px] origin-center rounded-[5px] bg-emerald-300/80 shadow-[0_0_0.5rem_0.1rem_rgba(110,231,183,0.8)] translate-z-0 lg:block"
    ></motion.div>
  );
};

export default Glow;
