import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Experiences() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="experiences">
      <h1
        data-aos="fade-up"
        data-aos-once
        className="text-3xl py-5 font-gilroybold font-extrabold bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#753bf1] dark:to-[#b92727]"
      >
        Experiences
      </h1>
      <div className="mt-3 flex flex-col justify-center items-start">
        <ul
          data-aos="fade-up"
          data-aos-once
          className="relative border-l -pl-0 border-gray-200 dark:border-gray-700 font-gilroy"
        >
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-theme rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Jan. 2023 - Current
            </time>
            <h2 className="text-lg font-semibold text-pf-dark dark:text-white cursor-pointer">
              Software Developer
            </h2>
            <h3 className="text-md italic font-normal text-gray-700 dark:text-pf-light">
              Brookfield Annuity
            </h3>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Designing and developing RPA softwares to automate business
              processes
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-theme rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Sep. 2021 – Feb. 2022
            </time>
            <h2 className="text-lg font-semibold text-pf-dark dark:text-white cursor-pointer">
              Project Researcher
            </h2>
            <h3 className="text-md italic font-normal text-gray-700 dark:text-pf-light">
              DoubleOcean Financial Group Ltd.
            </h3>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Conducted an independent research project on machine learning used
              in PD-1 related medicine using library databases to explore areas
              for potential investment opportunities
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-theme rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Oct. 2019 - July 2022
            </time>
            <h2 className="text-lg font-semibold text-pf-dark dark:text-white cursor-pointer">
              Head of Publicity
            </h2>
            <h3 className="text-md italic font-normal text-gray-700 dark:text-pf-light">
              Bayview Yearbook Committee
            </h3>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
              Ensured the successful delivery of the yearbook by acting as a
              liaison between the student body and school administration
            </p>
          </li>
        </ul>

        <div
          data-aos="fade-up"
          data-aos-once
          className="relative group mt-6 md:mt-10 transition-colors duration-300"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Link href="/resume.pdf">
            <button className="py-2 relative rounded-lg px-4 inline-flex items-center bg-[##e0e0e0] shadow-light-button text-light-font font-gilroy text-sm dark:hover:bg-none dark:shadow-none active:shadow-inner transition-shadow ease-in-out duration-100 dark:bg-darkmode dark:text-gray-200">
              Receive CV{" "}
              <svg
                className="ml-2 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
