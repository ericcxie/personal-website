import Head from 'next/head';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter, AiOutlineClose } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { useState } from "react";
import { RxDividerVertical } from 'react-icons/rx';
import { Transition } from "@headlessui/react";

import Landing from '../components/sections/landing';
import Projects from '../components/sections/projects';
import About from '../components/sections/about';


export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eric Xie</title>
        <meta name="description" content="Eric  | Software Developer" />
        <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"}/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {/* Header menu bar */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-[#060813]'>
          {/* Navigation bar */}
          <nav className="bg-white px-7 py-4 lg:py-5 md:px-20 lg:px-40 dark:bg-[#060813] fixed w-full left-0">
            <div class="container flex flex-wrap items-center justify-between mx-auto">
              <h1 className='text-2xl lg:text-2xl font-poppins font-bold text-blue cursor-pointer'>Eric Xie.</h1>
              <ul className='hidden font-medium lg:flex flex-1 justify-start items-center pl-10 text-blue text-md gap-3 lg:gap-6 xl:gap-12 dark:text-white'>
                    <li className='cursor-pointer font-poppins hover:text-dark'>Projects</li>
                    <li className='cursor-pointer font-poppins hover:text-dark'>Work</li>
                    <li className='cursor-pointer font-poppins hover:text-dark'>About</li>
                    <li className='cursor-pointer font-poppins hover:text-dark'>Resume</li>
                    <li className='cursor-pointer font-poppins hover:text-dark'>Contact</li>
                  </ul>
                  <ul className='hidden lg:flex flex-1 justify-end items-center gap-1 lg:gap-3'>
                    <div className='flex gap-1 text-xl xl:text-2xl dark:text-white'>
                      <a href="https://www.youtube.com/@ericcxie"><AiFillYoutube/></a>
                      <a href="https://www.instagram.com/ericcxie/"><AiOutlineInstagram/></a>
                      <a href="https://www.linkedin.com/in/ericcxie/"><AiFillLinkedin/></a>
                      <a href="https://twitter.com/ericx_3"><AiOutlineTwitter/></a>
                      <a href="https://github.com/ericcxie"><AiFillGithub/></a>
                    </div>
                    <li><RxDividerVertical className='dark:text-white text-lg lg:text-xl'/></li> 
                    <li onClick={() => setDarkMode(!darkMode)} className='cursor-pointer dark:text-white'>
                      {darkMode ? <BsSunFill/> : <BsMoonFill/> }
                    </li>
                  </ul>
                  <ul className='flex lg:hidden flex-1 justify-end gap-4'>
                    {/* <li><BsMoonFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl mt-1 dark:text-white'/></li> */}
                    <li onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl mt-1 dark:text-white'>
                      {darkMode ? <BsSunFill/> : <BsMoonFill/> }
                    </li>
                    {/* mobile button */}
                    <button> 
                      <li onClick={() => setIsOpen(!isOpen)} className='text-3xl text-blue'>
                        {isOpen ? <CgClose/> : <FiMenu/> } 
                      </li>
                    </button>  
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

              <div onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'lg:hidden font-poppins font-normal bg-white mt-3 py-2 text-blue shadow-lg rounded-2xl dark:bg-[#060813] dark:shadow-slate-500 text-center' : 'hidden'}>
                <a href="" className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:bg-blue hover:rounded-lg hover:text-white'>Projects</a>
                <a href="" className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:bg-blue hover:rounded-lg hover:text-white'>Work</a>
                <a href="" className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:bg-blue hover:rounded-lg hover:text-white'>About</a>
                <a href="" className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:bg-blue hover:rounded-lg hover:text-white'>Resume</a>
                <a href="" className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:bg-blue hover:rounded-lg hover:text-white'>Contact</a>
              </div>
            </Transition>
            
          </nav>
        
      

        <Landing/>
        <Projects/>
        <About/>
      </main>
    </div>
  );
}
