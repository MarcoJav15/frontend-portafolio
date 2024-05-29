import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  gitUrl: string; 
  previewUrl: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Reconocimiento de manos",
    description: "Reconocimiento de manos con python",
    image: "/images/projects/Dedos.png",
    gitUrl: "https://github.com/MarcoJav15/Reconocimiento-de-dedos",
    previewUrl: "/"
  },
  {
    id: 2,
    title: "Totito con IA",
    description: "Juego de totito con python",
    image: "/images/projects/totito.png",
    gitUrl: "https://github.com/MarcoJav15/Totito-IA",
    previewUrl: "/"
  },
  {
    id: 3,
    title: "Software para un hotel",
    description: "Backend para el software de un hotel",
    image: "/images/projects/Hotel.png",
    gitUrl: "https://github.com/emilioxmedina/Hotel-App-Backend", 
    previewUrl: "/"
  }
];

function ProjectSection() {
  return (
    <section id="projects">
      <h2 className='text-4xl font-bold mb-4'>Mis Proyectos</h2>
      <div>
        <button></button>
      </div>
      <div>
        {projectsData.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl} 
              previewUrl={project.previewUrl}              
            />
          );
        })}
      </div>
    </section>
  );
}

export default ProjectSection;

