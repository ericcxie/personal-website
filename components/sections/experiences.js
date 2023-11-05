// Experiences.js
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ExperienceCard from "../cards/experiencecards";
import { experiences } from "../../data/experienceData";

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
      <div className="mt-3 flex flex-col justify-center items-start lg:pl-2">
        <ul className="relative border-l -pl-0 border-gray-200 dark:border-gray-700 font-gilroy">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
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
