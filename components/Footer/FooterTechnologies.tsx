import technologies from '@/data/technologies.json';

// types
interface technologyItem {
  title: string;
  link: string;
  icon: string;
}

const FooterTechnologies = () => {
  return (
    <ul>
      {(technologies as technologyItem[]).map((item, index) => (
        <li key={index}>
          <a
            href={item.link}
            target="_blank"
            className="items-center justify-start gap-x-2"
          >
            <div
              className="aspect-square w-4 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${item.icon}')`,
              }}
            />
            <p>{item.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default FooterTechnologies;
