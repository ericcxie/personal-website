import { FiExternalLink, FiGithub } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  imageSrc,
  projectLink,
  githubLink,
  title,
  description,
  techStack,
  colorFrom,
  colorVia,
  colorTo,
  glowFrom,
  glowTo,
  icons,
  delay,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-once
      data-aos-delay={delay}
      className="relative group cursor-default"
    >
      <div
        className="hidden dark:inline absolute -inset-0.5 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"
        style={{
          backgroundImage: `linear-gradient(to right, ${glowFrom}, ${glowTo})`,
        }}
      ></div>
      <div className="bg-white dark:bg-darkmode min-h-full relative block lg:border lg:dark:border-none overflow-hidden rounded-lg shadow lg:shadow-light-button dark:shadow-none active:shadow-inner hover:border-b-0 hover:shadow-lg transition ease-in-out delay-100 lg:hover:-translate-y-1 dark:text-white">
        <Link href={projectLink} target="_blank" rel="noreferrer noopener">
          <Image
            src={imageSrc}
            className="sm:hidden xl:inline h-44 md:h-48 2xl:h-60 w-full rounded-t-lg object-cover md:scale-105"
            alt="Project Image"
          />
        </Link>
        <div className="px-8 py-6 mb-1">
          <div className="flex gap-3">
            {icons.map((Icon, index) => (
              <Icon key={index} className="text-3xl mb-3" />
            ))}
          </div>
          <div className="text-2xl">
            <Link
              href={projectLink}
              target="_blank"
              rel="noreferrer noopener"
              className="absolute right-6 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
            >
              <FiExternalLink />
            </Link>
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="absolute right-16 top-52 sm:top-5 xl:top-52 2xl:top-64 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1"
            >
              <FiGithub />
            </a>
          </div>
          <span
            className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r"
            style={{
              backgroundImage: `linear-gradient(to right, ${colorFrom}, ${colorVia}, ${colorTo})`,
            }}
          ></span>
          <div className="justify-between sm:flex">
            <div>
              <h3 className="text-xl font-bold text-pf-dark dark:text-white">
                {title}
              </h3>
            </div>
          </div>
          <div className="mt-1 sm:pr-8">
            <p className="text-sm text-gray-500 dark:text-gray-200">
              {description}
            </p>
          </div>
          <div className="mt-3 flex pr-1">
            <div className="flex flex-col-reverse">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-200">
                {techStack}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
