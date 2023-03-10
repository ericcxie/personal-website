import Image from "next/image";
import portrait from "../../public/img/profilepic.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="mb-24 mt-36 transition-colors duration-300">
      <div className="flex text-center mx-auto">
        <h1
          data-aos="fade-up"
          data-aos-once
          className="mx-auto text-5xl font-bold py-5 font-gilroybold bg-clip-text dark:text-transparent text-wild-blue-400 dark:bg-gradient-to-r dark:from-[#4042b8] dark:to-[#2975a4]"
        >
          About Me!
        </h1>
      </div>

      <div className="mt-3 md:-mt-3 flex flex-col md:flex-row justify-center items-center my-2 gap-2 md:gap-12">
        <div data-aos="fade-up" data-aos-once className="relative group">
          <div className="absolute top-5 -left-8 w-48 h-48 lg:w-52 lg:h-52 bg-wild-blue-400 dark:bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-12 -right-1 w-48 h-48 lg:w-52 lg:h-52 bg-wild-blue-500 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-2 w-48 h-48 lg:w-52 lg:h-52 bg-wild-blue-300 dark:bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          <Image
            className="h-52 w-52 md:h-60 md:w-60 relative rounded-full overflow-hidden mx-auto border-2 border-[#21243a] dark:border-[#1b1206]"
            src={portrait}
            alt="portrait"
          />
        </div>

        <div
          data-aos="fade-up"
          data-aos-once
          className="mt-8 text-pf-dark dark:text-pf-light font-gilroy"
        >
          <p className="mx-auto max-w-lg py-2">
            Hello! 👋 My name is Eric and I am a Computer Engineering student at
            the University of Waterloo.
          </p>
          <p className="mx-auto max-w-lg py-2">
            Currently, I am a Software Developer at
            <a
              href="https://www.brookfieldannuity.com/en/"
              className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-wild-blue-400 dark:text-pf-light transition duration-500"
            >
              {" "}
              Brookfield Annuity
            </a>{" "}
            helping to develop business automation processes.
          </p>

          <p className="mx-auto max-w-lg py-2">
            In my free time, I enjoy playing badminton, building keyboards, and
            keeping up with the latest Apple products! 🎧
          </p>

          <p className="mx-auto max-w-lg py-2">
            Here are a few technologies I've been working with recently:
          </p>

          <div className="flex flex-row justify-start items-start gap-5 sm:gap-8 md:gap-14 lg:gap-24">
            <ul className="flex flex-col">
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Python
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                SQL
              </li>
            </ul>
            <ul className="flex flex-col">
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                React.js
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Node.js
              </li>
            </ul>
            <ul className="flex flex-col">
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                MongoDB
              </li>
              <li className="inline-flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  {" "}
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
