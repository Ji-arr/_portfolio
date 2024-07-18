import React from "react";
import "../assets/styles/ProjectTemplate.css";
import { projects } from "../constant/project";

function Projects() {
  return (
    <section id="projects_container">
      {projects.map((project, index) => (
        <a href={project.link}>
          <div className="project_box">
            <img src={project.image} alt="proj" />
            <h3>{project.title}</h3>
            <div className="details_box">
              <h3>{project.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, officia? Praesentium adipisci excepturi dolor minus?
                Accusantium voluptas eaque commodi perspiciatis asperiores
                consequatur est quasi, natus, laboriosam rem accusamus impedit.
                Voluptas.
              </p>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;
