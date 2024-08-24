import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import HamburgerMenu from "./components/Hamburger";

import "./app.css";

import { navLinks } from "./constants";

const App = () => {
  return (
    <div className="app">
      <HamburgerMenu />
      <nav className="app-nav">
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.path}>
                <i className={`fas ${link.icon}`}></i>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/experience" element={<Experience />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
