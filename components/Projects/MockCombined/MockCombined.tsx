'use client';

// react
import { useState, useEffect } from 'react';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// components
import MockDesktop from './MockDesktop';
import MockMobile from './MockMobile';

// types
interface mockCombinedProps {
  imageDesktop: string;
  imageDesktopDark?: string;
  imageMobile: string;
  imageMobileDark?: string;
}

const MockCombined = ({
  imageDesktop,
  imageDesktopDark,
  imageMobile,
  imageMobileDark,
}: mockCombinedProps) => {
  const darkMode = useNextThemes();

  const [imageDarkMode, setImageDarkMode] = useState(false);

  useEffect(() => {
    if (imageDesktopDark && imageMobileDark && darkMode) setImageDarkMode(true);
    else setImageDarkMode(false);
  }, [darkMode, imageDesktopDark, imageMobileDark]);

  return (
    <div className="relative" style={{ containerType: 'inline-size' }}>
      <div className="w-[93%]">
        <MockDesktop image={imageDarkMode ? imageDesktopDark! : imageDesktop} />
      </div>
      <div className="absolute -bottom-[5%] right-[0] w-[23%]">
        <MockMobile image={imageDarkMode ? imageMobileDark! : imageMobile} />
      </div>
      {!!imageDesktopDark && !!imageMobileDark && (
        <div className="absolute bottom-[15%] left-[2%] flex flex-col gap-y-[2em] font-mui text-[2cqw] md:left-[3.5%] md:gap-y-[1em] [&_button]:relative [&_button]:aspect-square [&_button]:w-[max(2em,1.25rem)] [&_button]:rounded-full [&_button]:border-[1px] [&_button]:transition-all [&_button]:duration-300 [&_button]:before:absolute [&_button]:before:-inset-2 hover:[&_button]:border-accent/80 hover:[&_button]:brightness-90 md:[&_button]:before:hidden">
          <button
            title="Light"
            className={
              'bg-brightBlue/90 shadow-[inset_0_0_4px_0_rgb(0,0,0,0.3)] ' +
              (!imageDarkMode
                ? 'border-accent/50 '
                : 'border-darkGrayishViolet/50 dark:border-brightBlue/50')
            }
            onClick={() => setImageDarkMode(false)}
          />
          <button
            title="Dark"
            className={
              'bg-darkGrayishViolet/90 shadow-[inset_0_0_4px_0_rgb(0,0,0,0.3)] ' +
              (imageDarkMode
                ? 'border-accent/50'
                : 'border-darkGrayishViolet/50 dark:border-brightBlue/50')
            }
            onClick={() => setImageDarkMode(true)}
          />
        </div>
      )}
    </div>
  );
};

export default MockCombined;
