import Link from "next/link";
import Aos from "aos";
import Image from "next/image";
import "aos/dist/aos.css";
import { useEffect } from "react";

import bmo from "../../public/img/logos/BMO.jpeg";
import brookfield from "../../public/img/logos/brookfield.jpeg";

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
      <div className="mt-3 flex flex-col justify-center items-start">
        <ul className="relative border-l -pl-0 border-gray-200 dark:border-gray-700 font-gilroy">
          <li className="mb-6 ml-4">
            <div
              data-aos="fade-in"
              data-aos-once
              data-aos-delay="100"
              className="absolute w-3 h-3 bg-wild-blue-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"
            />
            <div
              data-aos="fade-up"
              data-aos-once
              data-aos-delay="100"
              className="flex flex-row gap-3"
            >
              <a href="http://www.bmo.com/">
                <Image
                  className="hidden md:inline mt-2 h-10 w-10 rounded-md"
                  src={bmo}
                />
              </a>
              <div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                  Sep. 2023 – Present
                </time>
                <h1 className="text-lg font-semibold text-pf-dark dark:text-white">
                  <a href="http://www.bmo.com/">BMO Financial Group</a>
                </h1>
                <h2 className="text-md italic font-normal text-wild-blue-600 dark:text-gray-200">
                  Software Engineer Intern
                </h2>
                <p className="mt-1 mb-3 text-sm font-normal leading-none text-gray-500 dark:text-pf-light">
                  Toronto, ON
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 dark:text-gray-200 max-w-2xl">
                  🧠 Digital Core AI
                </p>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
                  Working as a software engineer on the Digital Core AI Team to
                  modernize document processing within retail lending.
                </p>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-300">
                  <span className="font-gilroybold text-gray-600 dark:text-gray-100">
                    Tools:
                  </span>{" "}
                  Python, React.js, Amazon Web Services (AWS), SQL, Flask, Redux
                </p>
              </div>
            </div>
          </li>
          <li className="mb-1 ml-4">
            <div
              data-aos="fade-in"
              data-aos-once
              data-aos-delay="100"
              className="absolute w-3 h-3 bg-wild-blue-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"
            />
            <div
              data-aos="fade-up"
              data-aos-once
              data-aos-delay="400"
              className="flex flex-row gap-3"
            >
              <a href="https://www.brookfieldannuity.com/en/">
                <Image
                  className="hidden md:inline mt-2 h-10 w-10 rounded-md drop-shadow"
                  src={brookfield}
                />
              </a>
              <div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
                  Jan. 2023 - Apr. 2023
                </time>
                <h1 className="text-lg font-semibold text-pf-dark dark:text-white">
                  <a href="https://www.brookfieldannuity.com/en/">
                    Brookfield Annuity
                  </a>
                </h1>
                <h2 className="text-md italic font-normal text-wild-blue-600 dark:text-gray-200">
                  Software Developer Intern
                </h2>
                <p className="mt-1 mb-3 text-sm font-normal leading-none text-gray-500 dark:text-pf-light">
                  Toronto, ON
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 dark:text-gray-200 max-w-2xl">
                  📈 Pension Risk Transfer (PRT) Technology
                </p>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
                  Worked as a software developer on the Business Transformation
                  Team to streamline insurance bidding processes.
                </p>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-300">
                  <span className="font-gilroybold text-gray-600 dark:text-gray-100">
                    Tools:
                  </span>{" "}
                  Python, Pandas, NumPy, Plotly, Jupyter Notebook
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="100"
          className="relative group mt-4 md:mt-7 transition-colors duration-300"
        >
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Link href="/resume.pdf">
            <button className="py-2 relative rounded-lg px-4 inline-flex items-center bg-[##e0e0e0] shadow-light-button text-light-font font-gilroy text-sm dark:hover:bg-none dark:shadow-none active:shadow-inner transition-shadow ease-in-out duration-100 dark:bg-darkmode dark:text-gray-200">
              Resume{" "}
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
