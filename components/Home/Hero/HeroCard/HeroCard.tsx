// next
import Image from 'next/image';

// react parallex tilt for tilt effect
import Tilt from 'react-parallax-tilt';

// components
import SocialLinks from './SocialLinks';

// icons
import { FaLaptopCode, FaHeart, FaCoffee } from 'react-icons/fa';

// glass provider
import glassProvider from '@/styles/glassProvider';

function HeroCard() {
  return (
    <Tilt
      perspective={1000}
      glareEnable={false}
      tiltReverse={true}
      gyroscope={true}
      className={
        'inline-flex items-center justify-center text-[0.65rem] sm:text-sm xl:text-base' +
        glassProvider
      }
    >
      <div className="glass relative mt-[2.5em] aspect-[3/4] w-[25em] rounded-xl transform-style-3d">
        <div className="glass relative -top-[2.5em] mx-auto aspect-square w-3/4 select-none rounded-full p-[1em] translate-z-16 transform">
          <span
            className="absolute -inset-[0.1rem] block animate-rotate rounded-full bg-glowRotate blur-md "
            style={{
              maskImage: 'radial-gradient(transparent 0% 70%,black 70.1%)',
              WebkitMaskImage:
                'radial-gradient(transparent 0% 69.5%,#0000dd 70.2%)',
            }}
          ></span>
          <div className="translae-z-16 relative aspect-square w-full overflow-hidden rounded-full">
            <Image
              src="/images/profile.webp"
              alt="Profile Photo"
              fill
              aria-hidden="true"
            />
          </div>
        </div>
        <SocialLinks />
        <div className="glass pointer-events-none absolute -right-[2em] top-[12em] flex aspect-square w-[6em] origin-[50%_50%_125px] animate-rotateY items-center justify-center rounded-full text-accent/80">
          <FaHeart className="text-[4em]" />
        </div>
        <div className="glass pointer-events-none absolute -left-[2em] top-[12em] flex aspect-square w-[6em] animate-float items-center justify-center rounded-full dark:text-gray-400">
          <FaLaptopCode className="text-[4em]" />
        </div>
        <div className="glass pointer-events-none absolute -right-[2em] bottom-[1em] flex aspect-square w-[6em] animate-float2 items-center justify-center rounded-full text-amber-900">
          <FaCoffee className="text-[3.5em]" />
        </div>
      </div>
    </Tilt>
  );
}

export default HeroCard;
