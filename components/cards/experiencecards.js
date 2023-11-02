import Image from "next/image";

const ExperienceCard = ({ experience }) => {
  return (
    <li className="mb-6 ml-4 experience-card">
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
        <a href={experience.website}>
          <Image
            className="hidden md:inline mt-2 h-10 w-10 rounded-md"
            src={experience.image}
            alt={experience.company}
            width={40}
            height={40}
          />
        </a>
        <div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-200">
            {experience.duration}
          </time>
          <h1 className="text-lg font-semibold text-pf-dark dark:text-white">
            <a href={experience.website}>{experience.company}</a>
          </h1>
          <h2 className="text-md italic font-normal text-wild-blue-600 dark:text-gray-200">
            {experience.role}
          </h2>
          <p className="mt-1 mb-3 text-sm font-normal leading-none text-gray-500 dark:text-pf-light">
            {experience.location}
          </p>
          <p className="mt-2 text-base font-normal text-gray-600 dark:text-gray-200 max-w-2xl">
            {experience.department}
          </p>
          <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-2xl">
            {experience.description}
          </p>
          <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-300">
            <span className="font-gilroybold text-gray-600 dark:text-gray-100">
              Tools:{" "}
            </span>{" "}
            {experience.tools}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ExperienceCard;
