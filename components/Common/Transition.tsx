'use client';

// react
import { forwardRef, useMemo } from 'react';

// media query
import { isMobile } from 'react-device-detect';

// framer motion
import {
  m,
  useReducedMotion,
  CustomDomComponent,
  MotionProps,
  Transition,
} from 'framer-motion';

// variants
import { variants, variantsType } from '@/settings/variants';

// types
interface transitionProps extends React.HTMLAttributes<HTMLElement> {
  effect?: keyof variantsType;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  ease?: string;
  component?: string;
  disableOnMobile?: boolean;
  // ref?: React.Ref<HTMLElement>;
}
// : React.FC<transitionProps & MotionProps>
const Transition = forwardRef<HTMLElement, transitionProps & MotionProps>(
  (
    {
      effect = 'fadeIn',
      duration = 0.5,
      delay = 0,
      threshold = 0.5,
      once = true,
      ease = 'easeOut',
      component = 'div',
      children,
      className,
      disableOnMobile = false,
      ...props
    },
    ref,
  ) => {
    const disableMotion = useReducedMotion();
    const MotionElement = useMemo(
      () => m(component) as CustomDomComponent<transitionProps>,
      [component],
    );

    const transition: Transition = {
      duration: disableMotion || (disableOnMobile && isMobile) ? 0 : duration,
      delay: disableMotion || isMobile ? 0 : delay,
      ease,
      staggerChildren: effect === 'textReveal' ? 0.1 : 0,
    };
    return (
      <MotionElement
        variants={
          disableMotion
            ? undefined
            : effect !== 'textReveal'
            ? variants[effect]
            : undefined
        }
        initial="initial"
        whileInView="animate"
        animate="animateNIV"
        exit="exit"
        viewport={{ amount: threshold, once }}
        transition={transition}
        className={'will-change-transform ' + className}
        {...props}
        ref={ref}
      >
        {!!children &&
          (effect === 'textReveal' && typeof children === 'string'
            ? children.split('').map((char, index) => (
                <m.span
                  variants={variants[effect]}
                  // transition={transition}
                  key={index}
                  className="relative inline-block whitespace-pre"
                >
                  {char}
                </m.span>
              ))
            : children)}
      </MotionElement>
    );
  },
);

Transition.displayName = 'Transition';

export default Transition;
