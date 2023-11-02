// Projects.js
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectCard from "../cards/projectcards";
import { projects } from "../../data/projectsData";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="py-10 mb-10 transition-colors duration-300 max-w-screen-2xl mx-auto"
    >
      <h1
        data-aos="fade-up"
        data-aos-once
        className="text-3xl py-5 font-gilroybold font-extrabold bg-clip-text dark:text-transparent text-wild-blue-400 dark:bg-gradient-to-r dark:from-[#007CF0] dark:to-[#6df8f3]"
      >
        Projects
      </h1>

      <div className="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 font-gilroy">
        {projects?.map((project, index) => (
          <ProjectCard key={index} {...project} delay={200 + index * 100} />
        ))}
      </div>
    </section>
  );
}
