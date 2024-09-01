import React, { useState, useEffect, useRef } from "react";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects";
import HamburgerMenu from "./components/HamburgerMenu";
import Experience from "./components/Experience";

import "./app.css";

import "@fortawesome/fontawesome-free/css/all.min.css";

import { navLinks } from "./constants";

const App = () => {
  const [isAboutSectionActive, setIsAboutSectionActive] = useState(false);

  const sectionRefs = useRef({
    home: React.createRef(),
    about: React.createRef(),
    projects: React.createRef(),
    experience: React.createRef(),
    contact: React.createRef(),
  });

  useEffect(() => {
    const { home, about, projects, experience, contact } = sectionRefs.current;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "home") {
          setIsAboutSectionActive(entry.isIntersecting);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    [home, about, projects, experience, contact].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [home, about, projects, experience, contact].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className={`app ${isAboutSectionActive ? "about-active" : ""}`}>
      <nav className="app-nav">
        <ul>
          {navLinks
            .filter((link) => link.id !== "contact")
            .map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`}>
                  <i className={`fas ${link.icon}`}></i>
                  {link.label}
                </a>
              </li>
            ))}
        </ul>
      </nav>
      <HamburgerMenu />
      <div id="home" ref={sectionRefs.current.home}>
        <Home />
      </div>
      <div id="about" ref={sectionRefs.current.about}>
        <About />
      </div>
      <div id="projects" ref={sectionRefs.current.projects}>
        <Projects />
      </div>
      <div id="experience" ref={sectionRefs.current.experience}>
        <Experience />
      </div>
      <div id="contact" ref={sectionRefs.current.contact}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
