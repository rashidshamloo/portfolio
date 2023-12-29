/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/*.ts',
  ],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      transitionTimingFunction: {
        cubic: 'cubic-bezier(0.03, 0.98, 0.52, 0.99)',
      },
      screens: {
        xs: '480px',
      },
      fontFamily: {
        mui: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        merriweather: 'var(--merriweather)',
        raleway: 'var(--raleway)',
        alexBrush: 'var(--alexBrush)',
        montserrat: 'var(--montserrat)',
      },
      colors: {
        brightBlue: '#ECF2F8',
        brightBlue2: '#DAE0E5',
        brightBlue3: '#C2C7CC',
        brightBlue4: '#DAE0EA',
        grayishGreen: '#6B7D7D',
        lightGrayishBlue: '#859BCC',
        veryLightGrayishBlue: '#a1bcf7',
        grayishBlue: '#5B6B8D',
        grayishBlue2: '#424e66',
        darkGrayishBlue: '#323a4d',
        veryLightViolet: '#5e4b66',
        veryLightViolet2: '#765e80',
        lightViolet: '#4e3e54',
        mediumViolet: '#3F3244',
        grayishBrown: '#59432D',
        darkViolet: '#2F2235',
        darkGrayishViolet: '#27222e',
        darkBlue: '#0C1D33',
        accent: '#E83151',
        moon: '#586570',
        brightGrayishBlue: '#7B8BaD',
        brightGrayishBlue2: '#9BaBcD',
        brightGrayishBlue3: '#bBcBeD',
      },
      backgroundImage: {
        heroBg: 'url("/images/stars.svg"), url("/images/bg.webp")',
        heroBgDark:
          'url("/images/stars-dark.svg"), url("/images/bg-dark.webp")',
        glowRotate:
          'linear-gradient(transparent 0% 30%, #E83151 30% 70%,transparent 70%)',
      },
      keyframes: {
        float: {
          '0%,100%': {
            transform: 'translateX(1rem) translateY(1rem) translateZ(125px)',
          },
          '50%': {
            transform: 'translateX(-1rem) translateY(-1rem) translateZ(125px)',
          },
        },
        float2: {
          '0%,100%': {
            transform: 'translateX(1rem) translateY(-1rem) translateZ(125px)',
          },
          '50%': {
            transform: 'translateX(-1rem) translateY(1rem) translateZ(125px)',
          },
        },
        balloonFloat: {
          '0%, 100%': {
            translate: '1rem 1rem',
          },
          '50%': {
            translate: '-1rem -1rem',
          },
        },
        balloonFloat2: {
          '0%, 100%': {
            translate: '1rem -1rem',
          },
          '50%': {
            translate: '-1rem 1rem',
          },
        },
        fishFloat: {
          '0%, 100%': {
            translate: '0 -1rem',
          },
          '50%': {
            translate: '0 1rem',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        rotateY: {
          '0%': {
            transform: 'rotateY(0deg) translateZ(125px)',
          },
          '100%': {
            transform: 'rotateY(360deg) translateZ(125px)',
          },
        },
      },
    },
    animation: {
      float: 'float 7s ease-in-out infinite',
      float2: 'float2 7s ease-in-out infinite',
      balloonFloat: 'balloonFloat 7s ease-in-out infinite',
      balloonFloat2: 'balloonFloat2 7s ease-in-out infinite',
      rotate: 'rotate 7s linear infinite',
      rotateY: 'rotateY 7s linear infinite',
      fishFloat: 'fishFloat 5s ease-in-out infinite',
      fishFloat2: 'fishFloat 5s ease-in-out infinite 0.5s',
      bubbleFloat: 'fishFloat 8s ease-in-out infinite',
    },
    transitionTimingFunction: {
      skillIcon: 'cubic-bezier(0.1,0.1,0.25,1)',
    },
  },
  plugins: [require('tailwindcss-3d')],
};
