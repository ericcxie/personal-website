import { BsMoonFill, BsSunFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineClose,
} from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { FiMenu } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { RxDividerVertical } from "react-icons/rx";
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { sendStatusCode } from "next/dist/server/api-utils";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import logo_black from "../../public/SVG/logo_black.svg";
import logo_gradient from "../../public/SVG/logo_white.svg";

export default function NavBarPage(props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [navbar, setNavbar] = useState(false);

  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  useEffect(() => {
    setPrevIsOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unsubscribe from the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const changeNavbar = () => {
    if (window.scrollY >= 64) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbar);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <nav
      data-aos="fade-in"
      data-aos-delay="300"
      className={
        navbar
          ? "mt-2 rounded-3xl bg-white xl:py-2 z-10 px-7 pt-4 lg:pt-4 lg:py-3 md:px-20 lg:px-40 dark:bg-[#070a18] fixed w-full left-0 bg-opacity-70 dark:bg-opacity-50 dark:backdrop-blur-sm backdrop-blur-md xl:shadow-light-button dark:shadow-none transition-colors duration-1000"
          : "mt-1 py-2 z-20 px-7 pt-4 lg:py-5 md:px-20 lg:px-40 transition-colors duration-1000 fixed w-full left-0"
      }
    >
      <div className="relative container flex flex-wrap items-center justify-between mx-auto pb-2 ">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth", duration: 100 });
          }}
        >
          <h1 className="text-2xl mb-1 xl:-mb-1 font-gilroybold lg:text-xl 2xl:text-2xl text-theme cursor-pointer bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]">
            Eric Xie
          </h1>
          {/* {props.darkMode ? (
            <Image width={50} src={logo_gradient}></Image>
          ) : (
            <Image width={50} src={logo_black}></Image>
          )} */}
        </button>

        <ul className="hidden font-gilroy pt-1 lg:flex flex-1 justify-start items-center pl-10 text-md lg:gap-5 xl:gap-12 dark:text-gray-200">
          <li
            data-aos="fade-down"
            data-aos-delay="400"
            className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-theme group text-gray-text dark:text-gray-200 transition duration-300 cursor-pointer"
          >
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-20}
              duration={700}
            >
              Home
            </ScrollLink>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]"></span>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="500"
            className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-theme group text-gray-text dark:text-gray-200 transition duration-300 cursor-pointer"
          >
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-30}
              duration={700}
            >
              Projects
            </ScrollLink>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#567b8b]"></span>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="600"
            className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-theme group text-gray-text dark:text-gray-200 transition duration-300 cursor-pointer"
          >
            <ScrollLink
              to="experiences"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              Experiences
            </ScrollLink>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#8bafbe]"></span>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="700"
            className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-theme group text-gray-text dark:text-gray-200 transition duration-300 cursor-pointer"
          >
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={700}
            >
              About
            </ScrollLink>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]"></span>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="800"
            className="hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-[#3a7bd5] hover:dark:to-[#2997c5] hover:text-theme group text-gray-text dark:text-gray-200 transition duration-300 cursor-pointer"
          >
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={20}
              duration={700}
            >
              Contact
            </ScrollLink>
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-theme dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]"></span>
          </li>
        </ul>
        <ul
          data-aos="fade-down"
          data-aos-delay="900"
          className="hidden lg:flex flex-1 justify-end items-center gap-1 lg:gap-0 xl:gap-3"
        >
          <div className="flex gap-1 text-xl xl:text-2xl dark:text-white">
            <a
              className="hover:text-[#b31217]"
              href="https://www.youtube.com/@ericcxie"
            >
              <AiFillYoutube />
            </a>
            <a
              className="hover:text-[#c13584]"
              href="https://www.instagram.com/ericcxie/"
            >
              <AiOutlineInstagram />
            </a>
            <a
              className="hover:text-[#0077b5]"
              href="https://www.linkedin.com/in/ericcxie/"
            >
              <AiFillLinkedin />
            </a>
            <a
              className="hover:text-[#00acee]"
              href="https://twitter.com/ericx_3"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="hover:text-[#6e5494]"
              href="https://github.com/ericcxie"
            >
              <AiFillGithub />
            </a>
          </div>
          <li>
            <RxDividerVertical className="dark:text-white text-lg lg:text-xl" />
          </li>
          <li
            onClick={props.onClick}
            className="cursor-pointer dark:text-white"
          >
            {props.darkMode ? <BsSunFill /> : <BsMoonFill />}
          </li>
        </ul>
        <ul className="flex lg:hidden flex-1 justify-end gap-4">
          {/* <li><BsMoonFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl mt-1 dark:text-white'/></li> */}
          <li
            data-aos="fade-in"
            data-aos-delay="700"
            onClick={props.onClick}
            className="cursor-pointer text-2xl mt-1 dark:text-white"
          >
            {props.darkMode ? <BsSunFill /> : <BsMoonFill />}
          </li>
          {/* mobile button */}
          <button data-aos="fade-in" data-aos-delay="900">
            <li
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-theme dark:text-[#7aace5]"
            >
              {isOpen ? <CgClose /> : <FiMenu />}
            </li>
          </button>

          {/* <li>
            <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              className="bg-white"
              direction="left"
              size={25}
              color="black"
            />
          </li> */}
        </ul>
      </div>
      {/* mobile menu */}

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="relative">
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-purple-700 via-blue-blue-500 to-blue-600 rounded-lg blur"></div>
          <div
            ref={menuRef}
            onClick={() => setIsOpen(!isOpen)}
            className={
              isOpen
                ? "relative xl:hidden ring-1 ring-zinc-900/5  font-inter font-normal bg-white mt-3 py-2 text-theme dark:text-gray-200 shadow-lg shadow-zinc-800/5 rounded-2xl dark:bg-[#060813] text-center"
                : "hidden"
            }
          >
            <ul>
              <li>
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-5}
                  duration={700}
                  className="block py-2 px-4 text-sm font-gilroy cursor-pointer hover:text-dark dark:hover:text-gray-400"
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={700}
                  className="block py-2 px-4 text-sm font-gilroy cursor-pointer hover:text-dark dark:hover:text-gray-400"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to="experiences"
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={700}
                  className="block py-2 px-4 text-sm font-gilroy cursor-pointer hover:text-dark dark:hover:text-gray-400"
                >
                  Experiences
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={700}
                  className="block py-2 px-4 text-sm font-gilroy cursor-pointer hover:text-dark dark:hover:text-gray-400"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  onClick={() => setIsOpen(false)}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={700}
                  className="block py-2 px-4 text-sm font-gilroy cursor-pointer hover:text-dark dark:hover:text-gray-400"
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </nav>
  );
}
