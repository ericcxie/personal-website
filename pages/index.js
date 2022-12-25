import Head from 'next/head';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import Image from 'next/image';
import arrow from '../public/components/Arrow 2.svg';
import amafind from '../public/img/amafind.png';
import { FiMenu } from 'react-icons/fi';
import favicon from '../public/img/favicon.png';
import { useState } from "react";
import dots from '../public/components/dots.svg';
import { RxDividerVertical } from 'react-icons/rx';
import profile from '../public/img/profilepic.jpg';


export default function Home() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
        <section className="min-h-screen"> 
          <header>
            <nav className="container flex item-start py-4 sm:py-12">
              <h1 className='text-2xl lg:text-2xl font-poppins font-bold text-blue cursor-pointer'>Eric Xie.</h1>
              <ul className='hidden font-medium lg:flex flex-1 justify-start items-center pl-10 text-blue text-md xl:text-lg gap-3 lg:gap-6 xl:gap-12 dark:text-white'>
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
                <li className='text-3xl text-blue'><FiMenu/></li>
              </ul>
            </nav>
          </header>
          
          <section className='flex items-center md:justify-between py-3 md:px-90'>
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
        </section>

        <section>
          <div>
            <h3 className='text-3xl font-poppins font-semibold dark:text-white'>Projects</h3>
          </div>
          <div className='lg:flex gap-10 lg:grid-cols-3 dark:text-white'> {/* Project cards */}
            <div className='shadow-lg p-10 rounded-xl my-10 dark:border dark:shadow-slate-500'>
              <h3 className='text-xl font-medium'>AmaFind - Amazon Webscraper in Python</h3>
              <p className='italic pb-5'>Python, pandas, BeautifulSoup4</p>
              <Image src={amafind}/>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10 dark:border dark:shadow-slate-500'>
              <h3 className='text-xl font-medium'>AmaFind - Amazon Webscraper in Python</h3>
              <p className='italic pb-5'>Python, pandas, BeautifulSoup4</p>
              <Image src={amafind}/>
            </div>
          </div>
        </section>

        <section className='py-10 dark:text-white'>
          <div>
            <h3 className='text-3xl font-poppins font-semibold dark:text-white'>About</h3>
          </div>
          <div>
            <div className='relative w-80 h-80 pt-16 mx-auto'>
              <Image src={profile} className='rounded-full'/>
            </div>
            <p className='py-24 mx-auto text-center max-w-lg'>Hi! I'm currently a computer engineering student at the University of Waterloo. Feel free to connect with me!</p>
          </div>
        </section>
      </main>
    </div>
  );
}
