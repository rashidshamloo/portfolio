// next-intl
import { useLocale } from 'next-intl';

// budoux
import { loadDefaultJapaneseParser } from 'budoux';
const parser = loadDefaultJapaneseParser();

const WordBreak = ({ children }: React.PropsWithChildren) => {
  const locale = useLocale();
  return (
    <>
      {typeof children === 'string' && locale === 'ja' && !!parser
        ? parser.parse(children).map((word, index) => (
            <span className="inline-block" key={index}>
              {word}
            </span>
          ))
        : children}
    </>
  );
};

export default WordBreak;
