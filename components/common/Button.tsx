// react
import { useContext } from 'react';

// react-awesome-button
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

// style override
import '@/styles/button.scss';

// icons
import { FaPaperPlane, FaRegFileAlt } from 'react-icons/fa';

// context
import darkModeSetting from '@/context/darkModeSetting';

// types
interface buttonProps {
  text: string;
  href?: string;
  type?: 'contact' | 'resume';
}

const Button = ({ text, href, type = 'contact' }: buttonProps) => {
  const [darkMode] = useContext(darkModeSetting)!;
  const Icon = () => (type === 'contact' ? <FaPaperPlane /> : <FaRegFileAlt />);
  return (
    <AwesomeButton
      type={darkMode ? 'github' : 'primary'}
      before={
        <span key={text} className="mr-3">
          <Icon key={text} />
        </span>
      }
      ripple
      href={href}
    >
      {text.toUpperCase()}
    </AwesomeButton>
  );
};

export default Button;
