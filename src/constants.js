import nodeArtive from "./assets/nodeArtive.png";
import preOwned from "./assets/preOwned.png";
import news from "./assets/news.png";
import event from "./assets/event.png";

import express from "./assets/express.png";
import js from "./assets/js.png";
import mysql from "./assets/mysql.png";
import postgres from "./assets/postgers.png";
import python from "./assets/python.png";
import react from "./assets/react-native.png";
import node from "./assets/node-js.png";
import redux from "./assets/redux.png";
import tailwind from "./assets/tailwind.png";
import ts from "./assets/ts.png";
import kotlin from "./assets/kotlin.jpg";
import android from "./assets/android.jpg";
import robot from "./assets/robot.png";
import swift from "./assets/swift.png";
import java from "./assets/java.jpg";
import cPlus from "./assets/c-plus.png";
import noPreview from "./assets/noPreview.png";

export const navLinks = [
  { id: "home", label: "Home", icon: "fa-home" },
  { id: "about", label: "About", icon: "fa-user" },
  { id: "projects", label: "Projects", icon: "fa-diagram-project" },
  { id: "experience", label: "Experience", icon: "fa-briefcase" },
  { id: "contact", label: "Contact", icon: "fa-address-card" },
];

export const skills = [
  { name: "TypeScript", url: ts },
  { name: "Node.js", url: node },
  { name: "Tailwind CSS", url: tailwind },
  { name: "Redux", url: redux },
  { name: "React Native", url: react },
  { name: "Postgres", url: postgres },
  { name: "JavaScript", url: js },
  { name: "Android", url: android },
  { name: "Kotlin", url: kotlin },
  { name: "Swift", url: swift },
  { name: "Express", url: express },
  { name: "MySQL", url: mysql },
  { name: "Python", url: python },
  { name: "Java", url: java },
  { name: "C++", url: cPlus },
  // { name: "Robot Framework", url: robot },
];

export const projects = [
  {
    name: "Node Artive",
    url: nodeArtive,
    description: "Website where artists can share or view eachother artworks.",
    link: "https://github.com/Nischhal3/NodeArtive",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Pre Owned",
    url: preOwned,
    description: "Marketplace application to buy & sell second hand items.",
    link: "https://www.youtube.com/watch?v=WAEtMJG0uO4",
    stacks: ["React Native", "CSS", "JavaScript"],
  },
  {
    name: "My Campus News",
    url: news,
    description: "A news sharing application.",
    link: "https://github.com/Nischhal3/myCampusNews-client",
    stacks: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Event Manager",
    url: event,
    description: "Mobile application to manage day to day event.",
    link: "https://www.youtube.com/watch?v=TUALvP9fnSs",
    stacks: ["Android", "Kotlin"],
  },
  {
    name: "Resturant Finder",
    url: noPreview,
    description: "Mobile application to find Resturant around you.",
    link: "https://github.com/miksunGitHub/RestaurantFinder",
    stacks: ["IOS", "Swift"],
  },
  {
    name: "Cart Price Calculator",
    url: noPreview,
    description:
      "Web application to calculate total price of the selected food items.",
    link: "https://github.com/Nischhal3/cart-price-calculator",
    stacks: ["TypeScript", "CSS"],
  },
];

export const experiences = [
  {
    role: "Web Developer",
    company: "Nokia",
    location: "Espoo, Finland",
    duration: "August 2023 – Present",
    responsibilities: [
      "Implementing new features to enhance functionality and user experience.",
      "Resolving bugs in existing projects to ensure smooth and reliable performance.",
      "Creating comprehensive documentation for newly implemented features to provide clear and useful information.",
      "Handling fault reports from customers and ensuring timely and effective resolutions.",
      "Updating the codebase from React to TypeScript to improve code quality and maintainability.",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Postgres",
      "Python",
      "Git",
      "Robot Framework",
    ],
    url: "https://www.nokia.com/",
    responsibility: `
    Enhancing functionality and improving user experience by
    implementing new features. Resolving bugs in existing projects
    to ensure smooth and reliable performance. Creating
    comprehensive documentation for newly implemented features,
    providing clear and useful information for users and developers.
    Handling fault reports from customers, ensuring timely and
    effective resolutions. Updating the codebase from
    React to TypeScript to improve code quality, maintainability,
    and overall project stability. Working closely with team members, 
    the product owner, and the manager to ensure alignment and 
    efficient project execution. Additionally, collaborating with 
    colleagues on feature development, contributing to the successful 
    implementation of new functionalities.
    `,
  },
  {
    role: "Test Engineer Trainee in 5G Control Plane",
    company: "Nokia",
    location: "Espoo, Finland",
    duration: "June 2022 – July 2023",
    responsibilities: [
      "Ensured high software quality through rigorous testing protocols.",
      "Created and executed comprehensive test cases to evaluate new features.",
      "Automated testing for 4G & 5G softwares, significantly reducing manual effort.",
      "Managed CRT (Continuous Regression Testing) and CIT (Continuous Integration Testing).",
    ],
    technologies: ["Python", "Git", "Robot Framework"],
    url: "https://www.nokia.com/",
    responsibility: `
    Ensured high software quality through rigorous testing
    protocols. Created and executed comprehensive test cases to
    evaluate new features. Automated testing for 4G and 5G
    software, significantly reducing manual effort. Additionally,
    managed Continuous Regression Testing (CRT) and Continuous
    Integration Testing (CIT) to maintain software reliability and
    performance.
    `,
  },
];
