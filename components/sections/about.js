import Image from "next/image";
import portrait from "../../public/img/profilepic.jpg";
import Link from "next/link";
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
          className="mx-auto text-5xl font-bold py-5 font-gilroybold bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#4042b8] dark:to-[#2975a4]"
        >
          About Me!
        </h1>
      </div>

      <div className="mt-3 md:-mt-3 flex flex-col md:flex-row justify-center items-center my-2 gap-2 md:gap-12">
        <div data-aos="fade-up" data-aos-once className="relative group">
          <div className="hidden dark:inline rounded-full absolute -inset-1 bg-gradient-to-r from-[#4c6f35] via-[#2B2F50] to-[#BFA06B] blur opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Image
            className="h-52 w-52 md:h-60 md:w-60 relative rounded-full overflow-hidden mx-auto border-2 border-[#21243a] dark:border-[#1b1206] shadow-light-card dark:drop-shadow-none"
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
            Hello! 👋 My name is Eric and I am a computer engineering student at
            the University of Waterloo.
          </p>
          <p className="mx-auto max-w-lg py-2">
            Currently, I am a Software Developer at
            <a
              href="https://www.brookfieldannuity.com/en/"
              className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-theme dark:text-pf-light transition duration-500"
            >
              {" "}
              Brookfield Annuity
            </a>{" "}
            helping to transform business automation processes.
          </p>

          <p className="mx-auto max-w-lg py-2">
            In my free time, I enjoy playing badminton, building keyboards, and
            keeping up with the{" "}
            <Link href="/apple">latest Apple products! 🎧</Link>
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
                Tailwind CSS
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
                Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
