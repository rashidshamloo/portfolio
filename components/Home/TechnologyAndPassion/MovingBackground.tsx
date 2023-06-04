// react
import { useEffect, useState, RefObject } from 'react';

// react-device-detect
import { isDesktop } from 'react-device-detect';

// types
interface movingBackgroundProps {
  containerRef: RefObject<HTMLElement>;
  movingBackgroundRef: RefObject<HTMLDivElement>;
}
type mousePosition = { x: number; y: number };

const MovingBackground = ({
  containerRef,
  movingBackgroundRef,
}: movingBackgroundProps) => {
  // states
  const [mousePosition, setMousePosition] = useState<mousePosition>({
    x: -50,
    y: -50,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.x / window.innerWidth) * 100 * -1;
      const y = (e.y / window.innerHeight) * 100 * -1;
      setMousePosition({ x, y });
    };

    const tempEle = containerRef.current;

    // only add mousemove event listener on desktop
    if (isDesktop && tempEle) {
      tempEle.addEventListener('mousemove', handleMouseMove, {
        passive: true,
      });
    }
    return () => {
      if (tempEle) tempEle?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef]);

  return (
    <div
      ref={movingBackgroundRef}
      className="absolute -bottom-[100px] -right-[100px] left-0 top-0 bg-[url('/images/tech-bg.webp')] bg-[length:max(calc(100dvw_+_100px)_,_1000px)] bg-center transition-opacity duration-1000"
      style={{
        transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
      }}
    ></div>
  );
};

export default MovingBackground;
