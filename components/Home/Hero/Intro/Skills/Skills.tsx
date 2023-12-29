// components
import SkillIcon from './SkillIcon';

// data
import skills from '@/data/skills.json';

function Skills() {
  return (
    <ul className="mx-[5%] flex flex-wrap items-center justify-center pb-8 text-4xl text-grayishBlue/80 dark:text-brightBlue/80 lg:mx-auto lg:pb-0 [&_li]:flex [&_li]:flex-col [&_li]:items-center [&_li]:transition-all [&_li]:duration-500 hover:[&_li]:scale-125">
      {skills.map((skill, index) => {
        return (
          <li
            key={index}
            className="w-[5.25rem] px-[0.125rem] py-2 ease-skillIcon will-change-transform lg:w-[5.75rem] lg:p-2"
          >
            <SkillIcon
              text={skill.text}
              image={skill.image}
              imageDark={skill.imageDark ?? undefined}
              delay={1 + index * 0.1}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default Skills;
