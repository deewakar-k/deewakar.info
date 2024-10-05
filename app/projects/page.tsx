import { PROJECTS } from "../lib/data/project";

export default function Projects() {
  return (
    <main>
      {PROJECTS.map((project, index) => (
        <ul key={index} className="max-w-sm">
          <li className="mb-8 hover-bg">
            <a href={project.link}>
              <h1>{project.name}</h1>
              <span className="text-details">{project.created} {project.description}</span>
            </a>
          </li>
        </ul>
      ))}
    </main>
  )

}
