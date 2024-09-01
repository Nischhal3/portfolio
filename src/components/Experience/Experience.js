import React from "react";

import "./experience.css";

import { experiences } from "../../constants";

const Experience = () => {
  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="experience">
        {experiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.role}</h3>
            <p>Location: {exp.location}</p>
            <p>Duration: {exp.duration}</p>
            <p>Company: {exp.company}</p>
            <ul>
              {exp.responsibilities.map((task, i) => (
                <li key={i}>
                  <i className="fa-solid fa-caret-right" /> {task}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
