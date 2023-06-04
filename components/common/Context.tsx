'use client';

// react
import { useEffect, useState } from 'react';

// context
import AnimationSetting from '@/context/animationSetting';
import darkModeSetting from '@/context/darkModeSetting';

const Context = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>();
  const [enableAnimation, setEnableAnimation] = useState<boolean>(true);
  // set darkMode from localStorage
  useEffect(() => {
    const darkMode =
      localStorage.getItem('darkMode') === 'true' ||
      (!localStorage.getItem('darkMode') &&
        matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(darkMode);
    darkMode
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark');
  }, []);
  return (
    <AnimationSetting.Provider value={enableAnimation}>
      <darkModeSetting.Provider value={[darkMode, setDarkMode]}>
        {children}
      </darkModeSetting.Provider>
    </AnimationSetting.Provider>
  );
};

export default Context;
