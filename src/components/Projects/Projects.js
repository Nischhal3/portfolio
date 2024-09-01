import React from "react";

import "./projects.css";

import { projects } from "../../constants";

const Projects = () => {
  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            className="project-card"
            key={index}
            onClick={() => handleCardClick(project.link)}
          >
            <h3 className="project-title">{project.name}</h3>
            <img
              src={project.url}
              alt={project.name}
              className="project-image"
            />
            <p className="description">{project.description}</p>

            <div className="stack">
              {project.stacks.map((stack, index) => (
                <div key={index}>{stack}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
