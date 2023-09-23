// react
import { useState, useEffect } from 'react';

// next-themes
import { useTheme } from 'next-themes';

// data
import socials from '@/data/socials.json';

function FooterSocialLinks() {
  // next-themes
  const { theme } = useTheme();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (theme === undefined) return;
    setDarkMode(theme === 'dark' ? true : false);
  }, [theme]);

  return (
    <ul className="[&_a]:flex [&_a]:items-center [&_a]:justify-start [&_a]:gap-x-2">
      {socials.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank">
            <div
              className="aspect-square w-4 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${
                  darkMode && item.iconDark ? item.iconDark : item.icon
                }')`,
                backgroundSize: item.size ? item.size + 'em' : 'contain',
              }}
            />
            <p>{item.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterSocialLinks;
