// hooks
import useNextThemes from '@/hooks/useNextThemes';

// data
import socials from '@/data/socials.json';

function SocialLinks() {
  const darkMode = useNextThemes();

  return (
    <ul className="-mt-4 grid grid-cols-4 gap-2 px-3 text-4xl transform-style-3d translate-z-24 scale-[92%] transform sm:gap-3 sm:text-5xl lg:-mt-2 lg:gap-4 lg:px-10 [&_a]:flex [&_a]:flex-col [&_a]:items-center [&_a]:drop-shadow-[0.1em_0.1em_0.25em_rgba(0,0,0,0.25)] hover:[&_a]:text-accent hover:[&_a]:drop-shadow-[0_0_5px_rgba(0,0,0,0.35)] dark:[&_a]:text-brightBlue/80 dark:hover:[&_a]:text-accent [&_li]:transition-all [&_li]:duration-300 hover:[&_li]:scale-125 [&_p]:mt-[2px] [&_p]:text-xs sm:[&_p]:mt-2 sm:[&_p]:text-sm lg:[&_p]:text-base">
      {socials.map((item, index) => (
        <li key={index}>
          <a href={item.link} target="_blank">
            <div
              className="aspect-square w-12 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${
                  darkMode && item.iconDark ? item.iconDark : item.icon
                }')`,
                backgroundSize: item.size ? item.size * 1 + 'em' : '1em',
              }}
            />
            <p>{item.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
