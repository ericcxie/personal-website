import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="about"
      className="mb-24 mt-36 transition-colors duration-300 max-w-screen-2xl mx-auto"
    >
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
        <div
          data-aos="fade-up"
          data-aos-once
          className="relative group cursor-default"
        >
          <div className="absolute hidden dark:inline top-5 -left-8 w-48 h-48 lg:w-52 lg:h-52 bg-wild-blue-400 dark:bg-[#522d93] rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-blob"></div>
          <div className="absolute hidden dark:inline top-12 -right-1 w-48 h-48 lg:w-52 lg:h-52 bg-wild-blue-500 dark:bg-[#027ac0] rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-blob animation-delay-2000"></div>
          <div className="absolute hidden dark:inline -bottom-2 w-48 h-48 lg:w-52 lg:h-52 bg-wild-blue-300 dark:bg-[#734dbd] rounded-full mix-blend-multiply filter blur-xl opacity-30 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-blob animation-delay-4000"></div>
          <div className="h-52 w-52 rounded-full relative dark:bg-[url('/img/profilepic_dark.jpg')] hover:dark:bg-[url('/img/profilepic_hover_dark.jpg')] bg-[url('/img/profilepic.jpg')] hover:bg-[url('/img/profilepic_hover.jpg')] bg-cover hover:duration-500 duration-200" />
        </div>

        <div
          data-aos="fade-up"
          data-aos-once
          className="mt-8 text-pf-dark dark:text-pf-light font-gilroy"
        >
          <p className="mx-auto max-w-lg py-2">
            Hello! 👋 My name is Eric and I'm a{" "}
            <a
              href="https://uwaterloo.ca/future-students/programs/computer-engineering"
              target="_blank"
              rel="noreferrer noopener"
              className="font-gilroybold bg-wild-blue-100 hover:bg-wild-blue-200 dark:bg-transparent hover:dark:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] dark:text-pf-light transition duration-500"
            >
              {" "}
              Computer Engineering
            </a>{" "}
            student at the{" "}
            <a
              href="https://uwaterloo.ca/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-gilroybold bg-wild-blue-100 hover:bg-wild-blue-200 dark:bg-transparent hover:dark:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] dark:text-pf-light transition duration-500"
            >
              University of Waterloo
            </a>{" "}
            with a growing passion for the intersection of finance and
            technology. I aim to create meaningful and user-centric experiences
            through my work.
          </p>
          <p className="mx-auto max-w-lg py-2">
            Previously, I was a Software Developer Intern at{" "}
            <a
              href="https://www.brookfieldannuity.com/en/"
              target="_blank"
              rel="noreferrer noopener"
              className="font-gilroybold bg-wild-blue-100 hover:bg-wild-blue-200 dark:bg-transparent hover:dark:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] dark:text-pf-light transition duration-500"
            >
              Brookfield Annuity
            </a>{" "}
            helping to develop and automate insurance bidding tools. I am
            currently seeking{" "}
            <span className="font-gilroybold bg-wild-blue-100 dark:bg-transparent">
              Spring 2024
            </span>{" "}
            Software Engineering internships!
          </p>

          <p className="mx-auto max-w-lg py-2">
            When I'm not at my desk, I enjoy listening to{" "}
            <a
              href="https://bit.ly/MyPodcastRotation"
              target="_blank"
              rel="noreferrer noopener"
            >
              podcasts
            </a>
            , playing badminton, and keeping up with the latest news in
            tech/finance!
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
                Flask
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
                Firebase
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
                PostgreSQL
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
