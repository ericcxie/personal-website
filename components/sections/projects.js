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
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import amafind from "../../public/img/amafind.png";
import pomoduo from "../../public/img/pomoduo.png";
import buildabuddy from "../../public/img/buildabuddy.png";

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

      <div className="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 font-gilroy">
        {/* first card */}
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="200"
          className="relative group cursor-default"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#7A8974] to-[#c6881c] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>

          <div className="dark:bg-darkmode min-h-full relative block border dark:border-none overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <Link href="/video/pomoduo-timer.mp4">
              <Image
                src={pomoduo}
                className="h-48 2xl:h-60 w-full rounded-t-lg object-cover"
              />
            </Link>
            <div className="px-8 py-6 mb-1">
              <div className="flex gap-3">
                <FaNodeJs className="text-3xl mb-3" />
                <SiFirebase className="text-3xl mb-3" />
              </div>

              <div className="text-2xl">
                <Link
                  href="/video/pomoduo-timer.mp4"
                  className="absolute right-6 top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiExternalLink />
                </Link>
                <a
                  href="https://github.com/ericcxie/pomoduo-timer"
                  className="absolute right-16 top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiGithub />
                </a>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#4b5a47] via-[#61725a] to-[#7f5204]"></span>
              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                    PomoDuo Timer
                  </h3>
                </div>
              </div>
              <div className="mt-1 sm:pr-8">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  A real time study room app based on the pomodoro technique.
                  Study together with your friends using the Pomodoro technique
                </p>
              </div>

              <div className="mt-3 flex">
                <div className="flex flex-col-reverse">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                    React.js // Node.js // Express.js // Firebase // Socket.io
                    // Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* second card */}
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="300"
          className="relative group cursor-default"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#565198] to-[#C76271] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>

          <div className="dark:bg-darkmode min-h-full relative block border dark:border-none overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <Link href="/video/amafind.mp4">
              <Image
                src={amafind}
                className="h-48 2xl:h-60 w-full rounded-t-lg object-cover"
              />
            </Link>
            <div className="px-8 py-6 mb-1">
              <div className="flex gap-3">
                <FaPython className="text-3xl mb-3" />
                <SiPandas className="text-3xl mb-3" />
              </div>

              <div className="text-2xl">
                <Link
                  href="/video/amafind.mp4"
                  className="absolute right-6 top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiExternalLink />
                </Link>
                <a
                  href="https://github.com/ericcxie/AmaFind"
                  className="absolute right-16 top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiGithub />
                </a>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#565198] via-[#7B477D] to-[#C76271]"></span>
              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                    AmaFind - Amazon Web Scraper
                  </h3>
                </div>
              </div>
              <div className="mt-1 sm:pr-8">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  A web scraper application that is built in Python using
                  Selenium, BeautifulSoup4, and Pandas that captures item search
                  results data from
                  <a href="https://www.amazon.ca/"> amazon.ca</a>
                </p>
              </div>

              <div className="mt-3 flex">
                <div className="flex flex-col-reverse">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                    Python // pandas // Selenium // BeautifulSoup4
                  </p>
                </div>
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
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#6964F4] to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>

          <div className="dark:bg-darkmode min-h-full relative block border dark:border-none overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <Link href="/video/buildabuddy.mp4">
              <Image
                src={buildabuddy}
                className="h-48 2xl:h-60 w-full rounded-t-lg object-cover"
              />
            </Link>
            <div className="px-8 pr-2 py-6 mb-1">
              <div className="flex gap-3">
                <SiTypescript className="text-3xl mb-3" />
                <SiTailwindcss className="text-3xl mb-3" />
              </div>

              <div className="text-2xl">
                <Link
                  href="/video/buildabuddy.mp4"
                  className="absolute right-6 top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiExternalLink />
                </Link>
                <a
                  href="https://github.com/ericcxie/Build-a-Buddy"
                  className="absolute right-16 top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiGithub />
                </a>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#6964F4] via-[#6965e6] to-purple-600"></span>
              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                    Build-a-Buddy
                  </h3>
                </div>
              </div>
              <div className="mt-1 sm:pr-8">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  A specialized conversational chat bot powered by Cohere API
                  for NLP built for McHacks10 2023.
                </p>
              </div>

              <div className="mt-3 flex">
                <div className="flex flex-col-reverse">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                    Typescript // Python // Flask // Tailwind CSS // Figma
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
