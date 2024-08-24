import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./hamburger-menu.css";

import { navLinks } from "../../constants";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div className="hamburger-icon" onClick={toggleMenu}>
        {!isOpen && (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
      <nav className={`nav-menu ${isOpen ? "show" : "hidden"}`}>
        <ul>
          {navLinks.map((link) => (
            <li
              key={link.label}
              className={link.label === "Home" ? "home-item" : ""}
            >
              <Link to={link.path} onClick={() => setIsOpen(false)}>
                <i className={`fas ${link.icon}`}></i>
                {link.label}
              </Link>
              {link.label === "Home" && (
                <div className="close-icon" onClick={toggleMenu}>
                  <i className="fa-solid fa-xmark"></i>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
