import Head from 'next/head';
import { useState } from "react";


import Landing from '../components/sections/landing';
import Projects from '../components/sections/projects';
import About from '../components/sections/about';
import NavBar from '../components/navigation/navbar';
import Contact from '../components/sections/contact';
import Footer from '../components/navigation/footer';
import Work from '../components/sections/work';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
 
  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
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
        <div className='z-2'>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} onClick={toggleDarkMode}/>
        </div>
        <div className='z-1'>
        <Landing/>
        <Projects/>
        <Work/>
        <About/>
        </div>
        
        <Footer/>
      </main>
      
    </div>
  );
}
