import { Variants } from 'framer-motion';

export interface variantsType {
  fadeIn: Variants;
  scaleUp: Variants;
  scaleUpS: Variants;
  fadeLTR: Variants;
  fadeLTRS: Variants;
  fadeLTRPN: Variants;
  fadeRTL: Variants;
  fadeTTB: Variants;
  fadeTTBP: Variants;
  fadeTTBPN: Variants;
  fadeBTT: Variants;
  fadeBTTS: Variants;
  fadeBTTSScale: Variants;
  fadeBTTSScaleR: Variants;
  fadeTTBSScaleR: Variants;
  heightUp: Variants;
  textReveal: Variants;
}

export const variants: variantsType = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  },
  scaleUp: {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  },
  scaleUpS: {
    initial: {
      opacity: 0,
      scale: 0.85,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.85,
    },
  },
  fadeLTR: {
    initial: {
      opacity: 0,
      x: -50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -50,
    },
  },
  fadeLTRS: {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -20,
    },
  },
  fadeLTRPN: {
    initial: {
      opacity: 0,
      x: '-100%',
    },
    animateNIV: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: '-100%',
    },
  },
  fadeRTL: {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: 50,
    },
  },
  fadeTTB: {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -50,
    },
  },
  fadeTTBP: {
    initial: {
      opacity: 0,
      y: '-100%',
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: '-100%',
    },
  },
  fadeTTBPN: {
    initial: {
      opacity: 0,
      y: '-100%',
    },
    animateNIV: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: '-100%',
    },
  },
  fadeBTT: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  },
  fadeBTTS: {
    initial: {
      opacity: 0,
      y: 10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 10,
    },
  },
  fadeBTTSScale: {
    initial: {
      opacity: 0,
      y: 10,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 0.95,
    },
  },
  fadeBTTSScaleR: {
    initial: {
      opacity: 0,
      y: 10,
      scale: 1.05,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: 10,
      scale: 1.05,
    },
  },
  fadeTTBSScaleR: {
    initial: {
      opacity: 0,
      y: -10,
      scale: 1.05,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 1.05,
    },
  },
  heightUp: {
    initial: {
      opacity: 0,
      height: 0,
    },
    animate: {
      opacity: 1,
      height: 'unset',
    },
    exit: {
      opacity: 0,
      height: 0,
    },
  },
  textReveal: {
    initial: {
      opacity: 0,
      y: -10,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  },
};
