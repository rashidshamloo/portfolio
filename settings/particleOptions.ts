import type { ISourceOptions } from 'tsparticles-engine';

const particleOptions: ISourceOptions = {
  fullScreen: false,
  fpsLimit: 60,
  pauseOnOutsideViewport: true,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#ffffff',
    },
    links: {
      color: '#ffffff',
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1.25,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: false,
};

const particleDarkOptions: ISourceOptions = JSON.parse(
  JSON.stringify(particleOptions)
);
particleDarkOptions.particles!.color!.value = '#555';
(particleDarkOptions.particles!.links! as any).color = '#555';

export { particleOptions, particleDarkOptions };

export default particleOptions;
