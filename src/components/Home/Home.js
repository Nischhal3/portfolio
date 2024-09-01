import React from "react";

import "./home.css";

import Pdf from "../../assets/resume.pdf";
import luffyImage from "../../assets/coding-guy.jpeg";

const Home = () => {
  return (
    <div className="home-container">
      <img className="my-image" src={luffyImage} alt="profile" />
      <div className="typewriter-text">
        <p className="name">
          Hello,<span>I'm Nischhal Shrestha!</span>
        </p>
        <p className="profession">Mobile Application & Web Developer !</p>
        <a href={Pdf} without rel="noopener noreferrer" target="_blank">
          <button
            trailingIcon="picture_as_pdf"
            label="Resume"
            title="View resume"
          >
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
