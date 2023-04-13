import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Experiences() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="experiences" className="max-w-screen-2xl mx-auto">
      <h1
        data-aos="fade-up"
        data-aos-once
        className="text-3xl py-5 font-gilroybold font-extrabold bg-clip-text dark:text-transparent text-wild-blue-400 dark:bg-gradient-to-r dark:from-[#753bf1] dark:to-[#b92727]"
      >
        Experiences
      </h1>
      <div
        data-aos="fade-up"
        data-aos-once
        className="mt-3 flex flex-col justify-center items-start"
      >
        <ul className="relative border-l -pl-0 border-gray-200 dark:border-gray-700 font-gilroy">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-wild-blue-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
              Jan. 2023 - Present
            </time>

            <h1 className="text-lg font-semibold text-pf-dark dark:text-white">
              <a href="https://www.brookfieldannuity.com/en/">
                Brookfield Annuity
              </a>
            </h1>
            <h2 className="text-md italic font-normal text-wild-blue-600 dark:text-pf-light">
              Software Developer
            </h2>
            <p className="mt-1 mb-3 text-sm font-normal leading-none text-gray-500 dark:text-white">
              <a href="https://goo.gl/maps/sMYHx5fzwKS4pMzGA">Toronto, ON</a>
            </p>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
              Worked as a software developer on the Transformation Team to help
              automate insurance bidding processes. Built financial tools to
              generate pricing models/memo reports.
            </p>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-300">
              <span className="font-gilroybold text-gray-600 dark:text-gray-100">
                Tools:
              </span>{" "}
              Python, pandas, NumPy, Plotly, Jupyter notebook, Tkinter
            </p>
          </li>
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-wild-blue-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
              Sep. 2021 – Feb. 2022
            </time>
            <h1 className="text-lg font-semibold text-pf-dark dark:text-white">
              DoubleOcean Financial Group
            </h1>
            <h2 className="text-md italic font-normal text-wild-blue-600 dark:text-pf-light">
              Market Research
            </h2>
            <p className="mt-1 mb-3 text-sm font-normal leading-none text-gray-500 dark:text-white">
              Toronto, ON (Remote)
            </p>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
              Conducted an independent research project on machine learning used
              in PD-1 related medicine using library databases to explore areas
              for potential investment opportunities
            </p>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-300">
              <span className="font-gilroybold text-gray-600 dark:text-gray-100">
                Tools:
              </span>{" "}
              Microsoft Excel, Microsoft Word
            </p>
          </li>
          <li className="ml-4">
            <div className="absolute w-3 h-3 bg-wild-blue-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 " />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
              Oct. 2019 - July 2022
            </time>
            <h1 className="text-lg font-semibold text-pf-dark dark:text-white">
              Bayview Yearbook Committee
            </h1>
            <h2 className="text-md italic font-normal text-wild-blue-600 dark:text-pf-light">
              Head of Publicity
            </h2>
            <p className="mt-1 mb-3 text-sm font-normal leading-none text-gray-500 dark:text-white">
              Richmond Hill, ON
            </p>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
              Ensured the successful delivery of the yearbook by acting as a
              liaison between the student body and school administration
            </p>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-300">
              <span className="font-gilroybold text-gray-600 dark:text-gray-200">
                Tools:
              </span>{" "}
              Adobe Photoshop, Adobe Illustrator, Final Cut Pro
            </p>
          </li>
        </ul>

        <div className="relative group mt-6 md:mt-10 transition-colors duration-300">
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
