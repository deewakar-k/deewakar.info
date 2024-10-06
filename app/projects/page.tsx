import { PROJECTS } from "../lib/data/project";

export default function Projects() {
  return (
    <main>
      {PROJECTS.map((project, index) => (
        <ul key={index} className="max-w-sm">
          <li className="mb-8 hover-bg">
            <a href={project.link}>
              <p>{project.name}</p>
              <span className="text-details">{project.created} {project.description}</span>
            </a>
          </li>
        </ul>
      ))}
    </main>
  )

}
