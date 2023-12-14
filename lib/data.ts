import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import starWarsBuild from "@/public/star-wars-api-build.jpg";
import cryptoTracker from "@/public/crypto-tracker-react.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Instructional Specialist",
    company: "edX",
    location: "Los Angeles, CA",
    description:
      "Empower aspiring developers by leading full-stack web development courses with a focus on the MERN stack, enhancing both the curriculum and student success rates in a real-world coding environment.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  {
    title: "Associate Technical Project Manager",
    company: "Internet Brands",
    location: "Los Angeles, CA",
    description:
      "Led cross-functional teams through major tech initiatives, including a significant website upgrade using React and the integration of agile project management tools.",
    icon: React.createElement(AiOutlineFundProjectionScreen),
    date: "2022 - 2023",
  },
  {
    title: "Front End Engineer Intern",
    company: "GameStar+",
    location: "Los Angeles, CA",
    description:
      "Collaborated in a dynamic tech team to integrate APIs and implement responsive designs, significantly boosting user engagement across diverse platforms and contributing to the front-end development process with innovative solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
 
] as const;

export const projectsData = [
  {
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency tracker featuring Redux for state management and Ant Design for UI components. ",
    tags: ["React", "Redux", "Ant Design", "Chart.js"],
    imageUrl: cryptoTracker,
    projectLink: "https://cryptotracker-live.netlify.app/",
  },
  {
    title: "Star Wars API Build",
    description:
      "A NextJS application utilizing the Star Wars API, featuring advanced styling with styled-components and server-side rendering.",
    tags: ["React", "Next.js", "Tailwind", "REST API"],
    imageUrl: starWarsBuild,
    projectLink: "https://star-wars-api-build.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "numPy",
  "Pandas",
  "Matplotlib",
  "Tableau",
  "SQL",
  "Jira",
  "Linux",
  "AWS",
  "Kubernetes",
  "Docker",
] as const;
