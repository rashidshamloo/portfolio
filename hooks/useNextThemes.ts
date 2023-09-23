// my custom hook for using the next-themes package

// react
import { useState, useEffect } from 'react';

// next-themes
import { useTheme } from 'next-themes';

const useNextThemes = () => {
  const { resolvedTheme } = useTheme();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return darkMode;
};

export default useNextThemes;
