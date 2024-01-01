// react
import { useState, useEffect } from 'react';

// react-awesome-button
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

// style override
import '@/styles/button.scss';

// icons
import { FaPaperPlane, FaRegFileAlt, FaImage } from 'react-icons/fa';
import { BsLightningFill, BsGithub } from 'react-icons/bs';

// hooks
import useNextThemes from '@/hooks/useNextThemes';

// types
interface buttonProps {
  text: string;
  href?: string;
  type?: 'contact' | 'resume' | 'source' | 'live' | 'design';
  className?: string;
  target?: string;
}

const Button = ({
  text,
  href,
  type = 'contact',
  className = '',
  target = '',
}: buttonProps) => {
  const darkMode = useNextThemes();

  const Icon = () => {
    switch (type) {
      case 'contact':
        return <FaPaperPlane />;
      case 'resume':
        return <FaRegFileAlt />;
      case 'source':
        return <BsGithub />;
      case 'design':
        return <FaImage />;
      case 'live':
      default:
        return <BsLightningFill />;
    }
  };

  return (
    <AwesomeButton
      className={className}
      type={darkMode ? 'github' : 'primary'}
      before={
        <span key={text} className="mr-3">
          <Icon key={text} />
        </span>
      }
      ripple
      href={href}
      containerProps={target ? { target } : undefined}
    >
      {text.toUpperCase()}
    </AwesomeButton>
  );
};

export default Button;
