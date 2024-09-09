import React from "react";

import "./about.css";

import { skills } from "../../constants";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="my-detail">
        <div className="text-section">
          <p className="justified-text">
            I am a dedicated mobile application and web developer with a strong
            background in software testing, front-end & backend development. I
            started my career in Nokia on June 2022, initially working as a Test
            Engineer in 5G Control Plane, where I was responsible for testing
            software related to base station and user equipments(mobile
            devices). After a year in this role, I transitioned to software
            development at the same company in August 2023 and have been
            continuously contributing to the team since.
          </p>
          <p className="justified-text">
            My work is characterized by high problem-solving skills, effective
            communication, and the ability to thrive in collaborative team
            environments. I excel in clean coding practices and am proficient in
            a range of technologies and tools, including:
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item" style={{ "--i": index }}>
              <img src={skill.url} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
