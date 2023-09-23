// next
import dynamic from 'next/dynamic';

// components
import ProjectsTop from '@/components/Projects/ProjectsTop';
const MoreProjects = dynamic(
  () => import('@/components/Projects/MoreProjects/MoreProjects')
);

const Projects = () => {
  return (
    <>
      <ProjectsTop />
      <MoreProjects />
    </>
  );
};

export default Projects;
