// react
import { useContext } from 'react';

// context
import darkModeSetting from '@/context/darkModeSetting';

// data
import socials from '@/data/socials.json';

function FooterSocialLinks() {
  const [darkMode] = useContext(darkModeSetting)!;
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
