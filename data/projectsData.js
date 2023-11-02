import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiSelenium,
  SiFlask,
  SiTypescript,
  SiMongodb,
  SiFirebase,
  SiPandas,
  SiPostgresql,
  SiSqlite,
  SiReact,
} from "react-icons/si";
import pomoduo from "../public/img/projects/pomoduo.jpg";
import collaboracart from "../public/img/projects/collaboracart.jpg";
import optiwealth from "../public/img/projects/optiwealth.jpg";

export const projects = [
  {
    imageSrc: optiwealth,
    projectLink: "https://github.com/ericcxie/OptiWealth",
    githubLink: "https://github.com/ericcxie/OptiWealth",
    title: "OptiWealth",
    description:
      "An all-in-one investment management platform that allows users to monitor, analyze and rebalance their portfolios",
    techStack:
      "Typescript // React.js // Python // Flask // PostgreSQL // Firebase",
    colorFrom: "#100E5E",
    colorVia: "#103CB6",
    colorTo: "#156CC3",
    glowFrom: "#103CB6",
    glowTo: "#156CC3",
    icons: [SiTypescript, SiPostgresql],
  },
  {
    imageSrc: collaboracart,
    projectLink: "https://devpost.com/software/collaboracart",
    githubLink: "https://github.com/ericcxie/CollaboraCart",
    title: "CollaboraCart",
    description:
      "A supply ordering app that helps small businesses cut costs by consolidating orders for bulk purchases",
    techStack: "React.js // Python // Flask // SQLite // Tailwind CSS",
    colorFrom: "#c897ff",
    colorVia: "#cc9cf4",
    colorTo: "#D49BAA",
    glowFrom: "#c897ff",
    glowTo: "#D49BAA",
    icons: [FaPython, SiSqlite],
  },
  {
    imageSrc: pomoduo,
    projectLink: "/demo/pomoduo-timer.mp4",
    githubLink: "https://github.com/ericcxie/pomoduo-timer",
    title: "PomoDuo Timer",
    description:
      "A real time study room app. Study together with your friends using the Pomodoro Technique",
    techStack:
      "React.js // Node.js // Express.js // Firebase // Socket.io // Tailwind CSS",
    colorFrom: "#6d8b61",
    colorVia: "#608464",
    colorTo: "#6aa764",
    glowFrom: "#6d8b61",
    glowTo: "#558c50",
    icons: [FaNodeJs, SiFirebase],
  },
];
