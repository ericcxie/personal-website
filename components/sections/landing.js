import Head from 'next/head';
import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import dots from '../../public/components/dots.svg';
import { useState } from "react";
import Link from 'next/link';


export default function Landing() {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    return (
        <section className='flex items-center md:justify-between py-24 md:px-90'>
            <div className='pb-20'>
              <div className='pl-1 dark:text-white'> {/* Home page */}
                <h2 className='py-2 font-poppins font-thin text-5xl md:text-6xl lg:text-7xl'>Hi,</h2>
                <div className='flex gap-2 justify-start text-5xl lg:text-6xl xl:text-7xl'>
                  <h1 className='font-poppins font-bold tracking-tight'>I'm</h1>
                  <h1 className='font-poppins font-bold underline underline-offset-3 decoration-blue decoration-7 tracking-tight md:decoration-8'>Eric Xie</h1>
                </div>
                <h3 className='font-poppins font-light py-2 text-2xl md:text-3xl'>Software Developer</h3>
              </div>
              <div className='py-2 px-1 flex justify-start gap-4'>
                <button className="font-poppins text-small bg-blue hover:bg-[#537399] text-white font-medium py-1.5 px-12 rounded-md pt-2 pb-2">Projects</button>
                <button className='font-poppins font-medium text-blue hover:text-dark'>
                  Resume
                </button>
              </div>
              <div className='text-2xl flex justify-start gap-1 pl-1 py-2 md:text-3xl dark:text-white md:hidden lg:hidden'>
                <a href="https://www.youtube.com/@ericcxie"><AiFillYoutube/></a>
                <a href="https://www.instagram.com/ericcxie/"><AiOutlineInstagram/></a>
                <a href="https://www.linkedin.com/in/ericcxie/"><AiFillLinkedin/></a>      
                <a href="https://twitter.com/ericx_3"><AiOutlineTwitter/></a>
                <a href="https://github.com/ericcxie"><AiFillGithub/></a>
              </div>
            </div>
            <div className='hidden md:w-1/2 md:inline'><Image src={dots}/></div>
          </section>
    );
}

