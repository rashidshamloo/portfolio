// components
import WordBreak from '../Common/WordBreak';

// types
interface FooterProps {
  lines: string[];
  className?: string;
}
const Footer = ({ lines, className = '' }: FooterProps) => {
  return (
    <footer
      className={
        'relative mx-auto mt-[5px] max-w-[90%] text-center text-xs leading-[1.5] before:absolute before:-top-[5px] before:left-1/2 before:w-[400px] before:max-w-full before:border-t-[1px] before:-translate-x-1/2 dark:text-slate-300/50 dark:before:border-slate-500/30 md:max-w-full [&_a]:font-bold [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:text-accent/80 ' +
        className
      }
    >
      {lines.map((line, i) => (
        <WordBreak key={i} markdown={true}>
          {line}
        </WordBreak>
      ))}
    </footer>
  );
};

export default Footer;
