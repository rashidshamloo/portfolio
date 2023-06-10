/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/*.ts',
  ],
  darkMode: 'class',
  // future: {
  //   hoverOnlyWhenSupported: true,
  // },
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        // montserrat: ['Montserrat', 'sans-serif'],
        // merriweather: ['Merriweather', 'serif'],
        // raleway: ['Raleway', 'sans-serif'],
        // alexBrush: ['Alex Brush', 'cursive'],
        mui: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        merriweather: 'var(--merriweather)',
        raleway: 'var(--raleway)',
        alexBrush: 'var(--alexBrush)',
      },
      colors: {
        brightBlue: '#ECF2F8',
        brightBlue2: '#DAE0E5',
        brightBlue3: '#C2C7CC',
        brightBlue4: '#DAE0EA',
        grayishGreen: '#6B7D7D',
        grayishBlue: '#5B6B8D',
        grayishBlue2: '#424e66',
        darkGrayishBlue: '#323a4d',
        veryLightViolet: '#5e4b66',
        lightViolet: '#4e3e54',
        mediumViolet: '#3F3244',
        grayishBrown: '#59432D',
        darkViolet: '#2F2235',
        darkGrayishViolet: '#27222e',
        darkBlue: '#0C1D33',
        accent: '#E83151',
        moon: '#586570',
      },
      backgroundImage: {
        heroBg: 'url("/images/bg.webp")',
        heroBgDark: 'url("/images/bg-dark.webp")',
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
      rotate: 'rotate 7s linear infinite',
      rotateY: 'rotateY 7s linear infinite',
    },
    transitionTimingFunction: {
      skillIcon: 'cubic-bezier(0.1,0.1,0.25,1)',
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms')],
};
