import { useEffect } from "react";
import Image from "next/image";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink } from "react-scroll";

import dots from "../../public/SVG/dots.svg";
import dotsgradient from "../../public/SVG/dots_gradient.svg";

export default function Landing(props) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section
      id="home"
      className="flex mb-64 md:mb-24 items-center md:justify-between py-24 md:px-90 max-w-screen-2xl mx-auto"
    >
      <div className="pb-28 md:pb-20">
        <div className="pl-1 cursor-default">
          <h2
            data-aos="fade-up"
            data-aos-once
            data-aos-delay="1700"
            className="py-2 ml-1 font-mono font-thin text-pf-dark dark:text-pf-light text-md lg:text-lg"
          >
            &gt; Hi, my name is
          </h2>
          <div className="flex gap-2 justify-start text-6xl xl:text-7xl">
            <h1
              data-aos="fade-up"
              data-aos-delay="1900"
              className="text-pf-dark dark:text-[#F2F2F2] font-gilroybold tracking-tight"
            >
              <span className="bg-[length:100%_7px] bg-no-repeat bg-[center_bottom_0.2rem] bg-gradient-to-tr from-wild-blue-400 to-wild-blue-400 dark:from-blue-800 dark:to-purple-800">
                Eric Xie.
              </span>
            </h1>
          </div>
          <div
            data-aos="fade-up"
            data-aos-once
            data-aos-delay="2000"
            className="ml-1 mt-3 font-gilroylight md:mt-4 text-pf-dark dark:text-pf-light text-2xl md:text-3xl"
          >
            <TypeAnimation
              sequence={[
                2400,
                "I'm a Software Engineer",
                1200,
                "I'm a UWaterloo Student",
                1000,
              ]}
              speed={35}
              style={{ fontSize: "1em" }}
              wrapper="div"
              repeat={Infinity}
            />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="2100"
          className="py-1 px-1 flex justify-start gap-4 mt-5 mb-2"
        >
          <div className="relative group">
            <div className=" hidden blur dark:inline absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-60 md:opacity-70 md:group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
            >
              <button className="relative font-poppins text-small bg-wild-blue-400 hover:bg-dark active:shadow-inner dark:bg-[#0d122b] text-white dark:text-gray-100 font-medium py-1.5 px-12 rounded-lg pt-2 pb-2">
                Connect
              </button>
            </ScrollLink>
          </div>

          <button className="font-gilroy font-medium text-wild-blue-400 hover:text-gray-600 dark:text-pf-light hover:bg-clip-text hover:dark:text-transparent hover:dark:bg-gradient-to-r hover:dark:from-blue-500 hover:dark:to-purple-600">
            <Link href="/resume.pdf" target="_blank" rel="noreferrer noopener">
              Resume
            </Link>
          </button>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once
          data-aos-delay="2200"
          className="text-2xl flex justify-start gap-1 pl-1 py-2 md:text-3xl dark:text-white md:hidden lg:hidde"
        >
          <a href="mailto:pexie@uwaterloo.ca">
            <MdEmail />
          </a>
          <a href="https://www.instagram.com/ericcxie/">
            <AiOutlineInstagram />
          </a>
          <a href="https://www.linkedin.com/in/ericcxie/">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/ericcxie">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-once
        data-aos-delay="2100"
        className="hidden md:w-1/2 md:inline"
      >
        {props.darkMode ? (
          <Image src={dotsgradient} alt="main-dots" />
        ) : (
          <Image src={dots} alt="main-dots" />
        )}
      </div>
    </section>
  );
}
