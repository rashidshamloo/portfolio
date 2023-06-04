'use client';

// react
import { useCallback, useContext } from 'react';

// context
import darkModeSetting from '@/context/darkModeSetting';

// react-particles
import { Particles as P } from 'react-particles';
import { loadFull } from 'tsparticles';
import {
  particleOptions,
  particleDarkOptions,
} from '@/settings/particleOptions';
import { Engine } from 'tsparticles-engine';

const Particles = () => {
  const [darkMode] = useContext(darkModeSetting)!;
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  return (
    <P
      init={particlesInit}
      options={darkMode ? particleDarkOptions : particleOptions}
      className="absolute inset-0 -z-[1]"
    />
  );
};

export default Particles;
