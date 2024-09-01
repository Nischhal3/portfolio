import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-sidebar">
      <div className="contact-links">
        <a
          href="https://github.com/Nischhal3"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="GitHub"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="mailto:nischhal3@gmail.com"
          className="contact-link"
          title="Email"
        >
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/nischhal-shrestha/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/nischhas"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="Facebook"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/nischhal_s/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          title="Instagram"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
