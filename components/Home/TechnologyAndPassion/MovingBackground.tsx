// react
import { useEffect, useState, forwardRef } from 'react';

// types
interface movingBackgroundProps {
  containerElement: HTMLElement | null;
}
type Position = { x: number | undefined; y: number | undefined };

const MovingBackground = forwardRef<HTMLDivElement, movingBackgroundProps>(
  ({ containerElement }: movingBackgroundProps, ref) => {
    // states
    const [previousMousePosition, setPreviousMousePosition] =
      useState<Position>({
        x: undefined,
        y: undefined,
      });
    const [translate, setTranslate] = useState<Position>({
      x: 0,
      y: 0,
    });

    useEffect(() => {
      if (!containerElement) return;

      const handleMouseMove = (e: MouseEvent) => {
        if (
          previousMousePosition.x === undefined ||
          previousMousePosition.y === undefined
        )
          return;

        setTranslate((prev) => {
          if (
            prev.x === undefined ||
            prev.y === undefined ||
            previousMousePosition.x === undefined ||
            previousMousePosition.y === undefined
          )
            return { x: undefined, y: undefined };
          return {
            x: prev.x + (previousMousePosition.x - e.clientX) / 10,
            y: prev.y + (previousMousePosition.y - e.clientY) / 10,
          };
        });

        setPreviousMousePosition({ x: e.clientX, y: e.clientY });
      };
      const handleMouseEnter = (e: MouseEvent) => {
        setPreviousMousePosition({ x: e.clientX, y: e.clientY });
      };
      const handleMouseLeave = () => {
        setPreviousMousePosition({ x: undefined, y: undefined });
      };

      containerElement.addEventListener('mouseenter', handleMouseEnter);
      containerElement.addEventListener('mousemove', handleMouseMove);
      containerElement.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        containerElement.removeEventListener('mouseenter', handleMouseEnter);
        containerElement.removeEventListener('mousemove', handleMouseMove);
        containerElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [containerElement, previousMousePosition.x, previousMousePosition.y]);

    return (
      <div
        ref={ref}
        className="absolute -bottom-[100px] -right-[100px] left-0 top-0 bg-[url('/images/home/tech-bg-mobile.webp')] bg-[length:max(calc(100dvw_+_100px)_,_800px)] bg-center transition-opacity duration-1000 md:bg-[url('/images/home/tech-bg.webp')] md:bg-[length:calc(100dvw_+_100px)]"
        style={{
          backgroundPositionX: String(translate.x) + 'px',
          backgroundPositionY: String(translate.y) + 'px',
        }}
      ></div>
    );
  },
);

MovingBackground.displayName = 'MovingBackground';

export default MovingBackground;
