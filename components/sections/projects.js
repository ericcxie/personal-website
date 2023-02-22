import { FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiSelenium,
  SiFlask,
  SiTypescript,
  SiMongodb,
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="projects"
      className="py-10 mb-10 transition-colors duration-300"
    >
      <h1
        data-aos="fade-up"
        data-aos-once
        className="text-3xl py-5 font-gilroybold font-extrabold bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#007CF0] dark:to-[#6df8f3]"
      >
        Projects
      </h1>
      {/* first card */}
      <div className="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 font-gilroy">
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="200"
          className="relative group"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#4B8BBE] to-[#FFD43B] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
          <div className="dark:bg-darkmode min-h-full relative block overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <div className="flex gap-3">
              <FaPython className="text-4xl mb-3" />
              <SiSelenium className="text-4xl mb-3" />
            </div>
            <div className="text-2xl">
              <a
                href="https://youtu.be/7JiUlha6u1A"
                className="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/ericcxie/AmaFind"
                className="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
              >
                <FiGithub />
              </a>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#306998] via-[#4B8BBE] to-[#FFD43B]"></span>
            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                  AmaFind - Amazon Web Scraper
                </h3>
              </div>
            </div>
            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500 dark:text-gray-100">
                A web scraper application that is built in Python using
                Selenium, BeautifulSoup4, and Pandas that captures item search
                results data from
                <a href="https://www.amazon.ca/"> amazon.ca</a>
              </p>
            </div>

            <div className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                  Python // pandas // Selenium // BeautifulSoup4
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* second card */}
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="300"
          className="relative group"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#4B8BBE] to-[#88dded] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
          <div className="dark:bg-darkmode min-h-full relative block overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <div className="flex gap-3">
              <FaReact className="text-4xl mb-3" />
              <SiTypescript className="text-4xl mb-3" />
              <SiFlask className="text-4xl mb-3" />
            </div>
            <div className="text-2xl">
              <a
                href="https://devpost.com/software/build-a-buddy-vmu7iq?ref_content=my-projects-tab&ref_feature=my_projects"
                className="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/Nikola-Milekic/McHacks10"
                className="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
              >
                <FiGithub />
              </a>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#1c2c4c] via-[#4B8BBE] to-[#88dded]"></span>
            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                  Build-a-Buddy
                </h3>
              </div>
            </div>
            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500 dark:text-gray-100">
                A specialized conversational chat bot powered by Cohere API for
                NLP built for McHacks10 2023. Users generate a personalized
                "buddy" chat bot that responds based on persona prompt
              </p>
            </div>

            <div className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                  React.js // Typescript // Python // Flask // Tailwind CSS //
                  Figma
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* third card */}
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="400"
          className="relative group"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-theme to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
          <div className="dark:bg-darkmode min-h-full relative block overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <div className="flex gap-3">
              <FaNodeJs className="text-4xl mb-3" />
              <SiMongodb className="text-4xl mb-3" />
            </div>
            <div className="text-2xl">
              <a
                href="https://github.com/ericcxie/career-snap"
                className="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
              >
                <FiExternalLink />
              </a>
              <a
                href="https://github.com/ericcxie/career-snap"
                className="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
              >
                <FiGithub />
              </a>
            </div>
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-theme to-purple-600"></span>
            <div className="justify-between sm:flex">
              <div>
                <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                  Career Snap
                </h3>
              </div>
            </div>
            <div className="mt-4 sm:pr-8">
              <p className="text-sm text-gray-500 dark:text-gray-100">
                An internship tracker developed using the MERN stack. It
                features a login authentication system and a dashboard to show
                relevant application data. Currently a work in progress...
              </p>
            </div>

            <div className="mt-6 flex">
              <div className="flex flex-col-reverse">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                  React.js // Express.js // Node.js // MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
