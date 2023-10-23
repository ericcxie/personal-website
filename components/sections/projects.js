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
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import pomoduo from "../../public/img/projects/pomoduo.jpg";
import collaboracart from "../../public/img/projects/collaboracart.jpg";
import optiwealth from "../../public/img/projects/optiwealth.jpg";

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
        {/* first card */}
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="200"
          className="relative group"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#103CB6] to-[#156CC3] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>

          <div className="dark:bg-darkmode min-h-full relative block border dark:border-none overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <Link href="https://github.com/ericcxie/OptiWealth">
              <Image
                src={optiwealth}
                className="sm:hidden xl:inline h-44 md:h-48 2xl:h-60 w-full rounded-t-lg object-cover md:scale-105"
              />
            </Link>
            <div className="px-8 pr-2 py-6 mb-1">
              <div className="flex gap-3">
                <SiTypescript className="text-3xl mb-3" />
                <SiPostgresql className="text-3xl mb-3" />
              </div>

              <div className="text-2xl">
                <Link
                  href="https://github.com/ericcxie/OptiWealth"
                  className="absolute right-6 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiExternalLink />
                </Link>
                <a
                  href="https://github.com/ericcxie/OptiWealth"
                  className="absolute right-16 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiGithub />
                </a>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#100E5E] via-[#103CB6] to-[#156CC3]"></span>
              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                    OptiWealth
                  </h3>
                </div>
              </div>
              <div className="mt-1 sm:pr-8">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  An all-in-one investment management platform that allows users
                  to monitor, analyze and rebalance their portfolios
                </p>
              </div>

              <div className="mt-3 flex">
                <div className="flex flex-col-reverse">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                    Typescript // React.js // Python // Flask // PostgreSQL //
                    Tailwind CSS
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
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#c897ff] to-[#D49BAA] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>

          <div className="dark:bg-darkmode min-h-full relative block border dark:border-none overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <Link href="https://github.com/ericcxie/CollaboraCart">
              <Image
                src={collaboracart}
                className="sm:hidden xl:inline h-44 md:h-48 2xl:h-60 w-full rounded-t-lg object-cover md:scale-105"
              />
            </Link>
            <div className="px-8 py-6 mb-1">
              <div className="flex gap-3">
                <FaPython className="text-3xl mb-3" />
                <SiSqlite className="text-3xl mb-3" />
              </div>

              <div className="text-2xl">
                <Link
                  href="https://devpost.com/software/collaboracart"
                  className="absolute right-6 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiExternalLink />
                </Link>
                <a
                  href="https://github.com/ericcxie/CollaboraCart"
                  className="absolute right-16 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiGithub />
                </a>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#c897ff] via-[#cc9cf4] to-[#D49BAA]"></span>
              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                    CollaboraCart
                  </h3>
                </div>
              </div>
              <div className="mt-1 sm:pr-3 xl:pr-8">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  A supply ordering app that helps small businesses cut costs by
                  consolidating orders for bulk purchases
                </p>
              </div>

              <div className="mt-3 flex">
                <div className="flex flex-col-reverse">
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                    React.js // Python // Flask // SQLite // Tailwind CSS
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
          className="relative group cursor-default"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#6d8b61] to-[#558c50] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>

          <div className="dark:bg-darkmode min-h-full relative block border dark:border-none overflow-hidden rounded-lg shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
            <Link href="/demo/pomoduo-timer.mp4">
              <Image
                src={pomoduo}
                className="sm:hidden xl:inline h-44 md:h-48 2xl:h-60 w-full rounded-t-lg object-cover md:scale-105"
              />
            </Link>
            <div className="px-8 py-6 mb-1">
              <div className="flex gap-3">
                <FaNodeJs className="text-3xl mb-3" />
                <SiFirebase className="text-3xl mb-3" />
              </div>

              <div className="text-2xl">
                <Link
                  href="/demo/pomoduo-timer.mp4"
                  className="absolute right-6 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiExternalLink />
                </Link>
                <a
                  href="https://github.com/ericcxie/pomoduo-timer"
                  className="absolute right-16 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
                >
                  <FiGithub />
                </a>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#6d8b61] via-[#608464] to-[#6aa764]"></span>
              <div className="justify-between sm:flex">
                <div>
                  <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                    PomoDuo Timer
                  </h3>
                </div>
              </div>
              <div className="mt-1 sm:pr-8">
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  A real time study room app. Study together with your friends
                  using the Pomodoro Technique
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
      </div>
    </section>
  );
}
