import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter, AiOutlineClose } from 'react-icons/ai';
import { CgClose } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import { useState, useRef, useEffect } from "react";
import { RxDividerVertical } from 'react-icons/rx';
import { Transition } from "@headlessui/react";
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';



export default function NavBar(props) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
      function handleClickOutside(event) {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
  
    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
    // Unsubscribe from the event listener on cleanup
      document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [menuRef]);

    return (
      <nav className="bg-white py-2 z-20 px-7 pt-4 lg:py-5 md:px-20 lg:px-40 dark:bg-[#060813] fixed w-full left-0">
      <div className="container flex flex-wrap items-center justify-between mx-auto pb-2">
        <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth', duration: 100})}}>
          <h1 className='text-2xl lg:text-2xl font-poppins font-bold text-theme cursor-pointer bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]'>Eric Xie.</h1>
        </button>
        
        <ul className='hidden font-medium pt-1 lg:flex flex-1 justify-start items-center pl-10 text-gray-500 text-md gap-3 lg:gap-6 xl:gap-12 dark:text-gray-200'>
              <li className='cursor-pointer font-jakarta-sans hover:text-theme dark:hover:text-[#7aace5] border-b-2 border-transparent hover:border-current hover:border-theme dark:hover:border-[#7aace5]'>
                <ScrollLink to="home" spy={true} smooth={true} offset={-20} duration={700}>Home</ScrollLink></li>
              <li className='cursor-pointer font-jakarta-sans hover:text-theme  dark:hover:text-[#7aace5] border-b-2 border-transparent hover:border-current hover:border-theme dark:hover:border-[#7aace5]'>
                <ScrollLink to="projects" spy={true} smooth={true} offset={-20} duration={700}>Projects</ScrollLink></li>
              <li className='cursor-pointer font-jakarta-sans hover:text-theme dark:hover:text-[#7aace5] border-b-2 border-transparent hover:border-current hover:border-theme dark:hover:border-[#7aace5]'>
                <ScrollLink to="experiences" spy={true} smooth={true} offset={-60} duration={700}>Experiences</ScrollLink></li>
              <li className='cursor-pointer font-jakarta-sans hover:text-theme dark:hover:text-[#7aace5] border-b-2 border-transparent hover:border-current hover:border-theme dark:hover:border-[#7aace5]'>
                <ScrollLink to="about" spy={true} smooth={true} offset={-60} duration={700}>About</ScrollLink> </li>
              <li className='cursor-pointer font-jakarta-sans hover:text-theme dark:hover:text-[#7aace5] border-b-2 border-transparent hover:border-current hover:border-theme dark:hover:border-[#7aace5]'>
                <ScrollLink to="contact" spy={true} smooth={true} offset={-60} duration={700}>Contact</ScrollLink> </li>
            </ul>
            <ul className='hidden lg:flex flex-1 justify-end items-center gap-1 lg:gap-3'>
              <div className='flex gap-1 text-xl xl:text-2xl dark:text-white'>
                <a className='hover:text-[#b31217]' href="https://www.youtube.com/@ericcxie"><AiFillYoutube/></a>
                <a className='hover:text-[#c13584]' href="https://www.instagram.com/ericcxie/"><AiOutlineInstagram/></a>
                <a className='hover:text-[#0077b5]' href="https://www.linkedin.com/in/ericcxie/"><AiFillLinkedin/></a>
                <a className='hover:text-[#00acee]' href="https://twitter.com/ericx_3"><AiOutlineTwitter/></a>
                <a className='hover:text-[#6e5494]' href="https://github.com/ericcxie"><AiFillGithub/></a>
              </div>
              <li><RxDividerVertical className='dark:text-white text-lg lg:text-xl'/></li> 
              <li onClick={props.onClick} className='cursor-pointer dark:text-white'>
                {props.darkMode ? <BsSunFill className='md:hover:text-[#FFE87C]'/> : <BsMoonFill className='md:hover:text-[#D8D6CB]'/> }
              </li>
            </ul>
            <ul className='flex lg:hidden flex-1 justify-end gap-4'>
              {/* <li><BsMoonFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl mt-1 dark:text-white'/></li> */}
              <li onClick={(props.onClick)} className='cursor-pointer text-2xl mt-1 dark:text-white'>
                {props.darkMode ? <BsSunFill className='md:hover:text-[#FFE87C]'/> : <BsMoonFill className='md:hover:text-[#D8D6CB]'/> }
              </li>
              {/* mobile button */}
              <button> 
                <li onClick={() => setIsOpen(!isOpen)} className='text-3xl text-theme dark:text-[#7aace5]'>
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
        <div className="relative">
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-purple-700 via-blue-blue-500 to-blue-600 rounded-lg blur"></div>
          <div ref={menuRef} onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'relative lg:hidden ring-1 ring-zinc-900/5  font-poppins font-normal bg-white mt-3 py-2 text-theme dark:text-gray-200 shadow-lg shadow-zinc-800/5 rounded-2xl dark:bg-[#060813] text-center' : 'hidden'}>
          <ul>
            <li><ScrollLink onClick={() => setIsOpen(false)} to="home" spy={true} smooth={true} offset={-5} duration={700} className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:text-dark dark:hover:text-gray-400'>Home</ScrollLink></li>
            <li><ScrollLink onClick={() => setIsOpen(false)} to="projects" spy={true} smooth={true} offset={-5} duration={700} className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:text-dark dark:hover:text-gray-400'>Projects</ScrollLink></li>
            <li><ScrollLink onClick={() => setIsOpen(false)} to="experiences" spy={true} smooth={true} offset={-50} duration={700} className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:text-dark dark:hover:text-gray-400'>Experiences</ScrollLink></li>
            <li><ScrollLink onClick={() => setIsOpen(false)} to="about" spy={true} smooth={true} offset={-40} duration={700} className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:text-dark dark:hover:text-gray-400'>About</ScrollLink></li>
            <li><ScrollLink onClick={() => setIsOpen(false)} to="contact" spy={true} smooth={true} offset={-20} duration={700} className='block py-2 px-4 text-sm font-poppins cursor-pointer hover:text-dark dark:hover:text-gray-400'>Contact</ScrollLink></li>
          </ul>
        </div>
      </div>
        
      </Transition>
    </nav>
    
    );
}