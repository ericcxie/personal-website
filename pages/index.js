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
import Header from '../components/navigation/navbar';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
 
  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
    {darkMode ? <BsSunFill/> : <BsMoonFill/> }
  }
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eric Xie</title>
        <meta name="description" content="Eric Xie | Software Developer" />
        <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"}/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {/* Header menu bar */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-[#060813]'>
          {/* Navigation bar */}
        <Header darkMode={darkMode} onClick={toggleDarkMode}/>
        <Landing/>
        <Projects/>
        <About/>
      </main>
    </div>
  );
}
