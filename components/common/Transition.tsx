'use client';

// react
import { forwardRef, useContext, useMemo } from 'react';

// media query
import { isMobile } from 'react-device-detect';

// framer motion
import {
  motion,
  useReducedMotion,
  CustomDomComponent,
  MotionProps,
} from 'framer-motion';

// context
import AnimationSetting from '@/context/animationSetting';

// variants
import { variants, variantsType } from '@/settings/variants';
import React from 'react';

// types
interface transitionProps extends React.HTMLAttributes<HTMLElement> {
  effect?: keyof variantsType;
  duration?: number;
  delay?: number;
  threshold?: number;
  once?: boolean;
  ease?: string;
  component?: string;
  ref?: React.Ref<HTMLElement>;
}

const Transition: React.FC<transitionProps & MotionProps> = forwardRef(
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
      ...props
    },
    ref
  ) => {
    const disableMotion = useReducedMotion();
    const enableAnimation = useContext(AnimationSetting);
    const MotionElement = useMemo(
      () => motion(component) as CustomDomComponent<transitionProps>,
      [component]
    );
    return (
      <MotionElement
        variants={variants[effect]}
        initial="initial"
        whileInView="animate"
        animate="animateNIV"
        exit="exit"
        viewport={{ amount: threshold, once }}
        transition={{
          duration: disableMotion || !enableAnimation ? 0 : duration,
          delay: disableMotion || !enableAnimation || isMobile ? 0 : delay,
          ease,
          staggerChildren: effect === 'textReveal' ? 0.5 : 0,
        }}
        {...props}
        ref={ref}
      >
        {!!children &&
          (effect === 'textReveal' && typeof children === 'string'
            ? children.split('').map((char, index) => (
                <motion.span variants={variants[effect]} key={index}>
                  {char}
                </motion.span>
              ))
            : children)}
      </MotionElement>
    );
  }
);

Transition.displayName = 'Transition';

export default Transition;
