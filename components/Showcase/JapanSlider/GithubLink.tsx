// react
import { forwardRef } from 'react';

const GithubLink = forwardRef<HTMLAnchorElement>((_, ref) => {
  return (
    <a
      ref={ref}
      className="absolute -right-[7em] top-[5.75em] z-20 text-[max(1.5em,12px)] text-brightBlue/10 transition-all duration-300 -rotate-90 hover:text-accent/80 dark:hover:text-accent/50"
      href="https://github.com/rashidshamloo/japan-slider"
      target="_blank"
      rel="noopener"
    >
      github.com/rashidshamloo
    </a>
  );
});

GithubLink.displayName = 'GithubLink';

export default GithubLink;
