import React from "react";

import "./experience.css";

import { experiences } from "../../constants";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="info"
            onClick={() =>
              window.open(exp.url, "_blank", "noopener noreferrer")
            }
          >
            <div className="duration">{exp.duration}</div>
            <div className="detail">
              <div>
                <h3>
                  {exp.role} ({exp.company})
                </h3>
                <h4>{exp.location}</h4>
              </div>
              <p>{exp.responsibility}</p>
              <div className="technology">
                {exp.technologies.map((technology) => (
                  <div key={technology}>{technology}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
