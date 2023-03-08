import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineClose,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer>
      <hr className="my-1 h-px bg-gray-200 border-0 dark:bg-gray-700" />
      <div className="container flex flex-col items-center justify-between p-6 mx-auto space-y-3 sm:space-y-0 sm:flex-row">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth", duration: 100 });
          }}
        >
          <h1 className="text-2xl -my-1 font-bold font-gilroybold text-wild-blue-400 transition-colors duration-300 hover:text-dark bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]">
            Eric Xie
          </h1>
        </button>
        <div className="flex flex-col items-center">
          <a href="https://github.com/ericcxie/personal-website">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-300 hover:text-wild-blue-400 dark:hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-blue-500 hover:dark:to-purple-600">
              Designed & Developed by Eric Xie
            </p>
          </a>
          <p className="text-sm font-gilroy text-gray-600 dark:text-gray-300 ">
            © Copyright 2023.
          </p>
        </div>
        <div className="flex -mx-2 text-gray-700 text-2xl gap-2 dark:text-white">
          <a
            className="transition ease-in-out delay-100 md:hover:-translate-y-1 hover:text-[#c13584]"
            href="https://www.instagram.com/ericcxie/"
          >
            <AiOutlineInstagram />
          </a>
          <a
            className="transition ease-in-out delay-100 md:hover:-translate-y-1 hover:text-[#6e5494]"
            href="https://github.com/ericcxie"
          >
            <AiFillGithub />
          </a>
          <a
            className="transition ease-in-out delay-100 md:hover:-translate-y-1 hover:text-[#0077b5]"
            href="https://www.linkedin.com/in/ericcxie/"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
