// react
import { useEffect, useRef } from 'react';

// typed.js
import { default as T } from 'typed.js';

// types
interface typedProps {
  strings: string[];
  className?: string;
  initialString: string;
}

const Typed = ({ strings, className = '', initialString }: typedProps) => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let typed: T;
    const timeoutId = setTimeout(() => {
      if (!typedElement.current) return;
      typed = new T(typedElement.current, {
        strings,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 700,
        smartBackspace: true,
        loop: true,
        loopCount: Infinity,
        onLastStringBackspaced: () => {
          typed.destroy();
        },
      });
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
      typed && typed.destroy();
    };
  }, [strings]);
  return (
    <span ref={typedElement} className={className}>
      {initialString}
    </span>
  );
};

export default Typed;
