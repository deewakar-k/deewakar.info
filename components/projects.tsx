import { PROJECTS } from "@/data/project";
import { Arrow } from "./svg";

export const Projects = () => {
  return (
    <>
      {PROJECTS.map((project, index) => (
        <div key={index} className="mt-4 text-xs">
          <div className="flex items-center text-[#db2777]">
            <a
              href={project.link}
              target="_blank"
              className="flex items-center"
            >
              <h1>{project.name}</h1>
              <span className="pb-1">
                <Arrow />
              </span>
            </a>
          </div>
          <h5>
            {project.created}
            <span className="italic"> {project.description}</span>
          </h5>
        </div>
      ))}
    </>
  );
};
