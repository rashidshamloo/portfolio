// react
import { useEffect, useRef } from 'react';

// typed.js
import { default as T } from 'typed.js';

// types
interface typedProps {
  strings: string[];
  className?: string;
}
const Typed = ({ strings, className = '' }: typedProps) => {
  const typedElement = useRef(null);
  useEffect(() => {
    const typed = new T(typedElement.current, {
      strings,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 700,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
    });
    return () => {
      typed.destroy();
    };
  });
  return <span ref={typedElement} className={className}></span>;
};

export default Typed;
