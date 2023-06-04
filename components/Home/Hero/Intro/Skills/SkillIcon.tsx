// next
import Image from 'next/image';

// components
import Transition from '@/components/common/Transition';

// types
interface SkillIconProps {
  text: string;
  image: string;
  delay: number;
}

const SkillIcon = ({ text, image, delay }: SkillIconProps) => {
  return (
    <Transition
      className="flex flex-col items-center justify-center"
      duration={0.5}
      delay={delay}
      effect="scaleUp"
    >
      <Image src={'/images/icons/' + image} alt={text} width="48" height="48" />
      <p className="mt-2 text-sm font-semibold">{text}</p>
    </Transition>
  );
};

export default SkillIcon;
