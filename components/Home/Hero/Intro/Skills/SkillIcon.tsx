// next
import Image from 'next/image';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// components
import Transition from '@/components/Common/Transition';

// types
interface SkillIconProps {
  text: string;
  image: string;
  imageDark?: string;
  delay: number;
}

const SkillIcon = ({ text, image, imageDark, delay }: SkillIconProps) => {
  const darkMode = useNextThemes();

  return (
    <Transition
      className="will-change-transform flex flex-col items-center justify-center"
      duration={0.5}
      delay={delay}
      effect="scaleUp"
    >
      <Image
        src={'/images/icons/' + (darkMode && imageDark ? imageDark : image)}
        alt={text}
        width="48"
        height="48"
        className="w-[48px] h-[48px]"
      />
      <p className="mt-2 text-sm font-semibold">{text}</p>
    </Transition>
  );
};

export default SkillIcon;
