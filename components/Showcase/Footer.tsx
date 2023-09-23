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
        'max-w-[90%] md:max-w-full mx-auto relative mt-[5px] text-center leading-[1.5] text-xs dark:text-slate-300/50 before:absolute before:-top-[5px] before:left-1/2 before:w-[400px] before:max-w-full before:border-t-[1px] dark:before:border-slate-500/30 before:-translate-x-1/2 [&_a]:font-bold [&_a]:transition-all [&_a]:duration-300 hover:[&_a]:text-accent/80 ' +
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
