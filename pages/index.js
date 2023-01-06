import Head from 'next/head';
import { useState, useEffect } from "react";

import Landing from '../components/sections/landing';
import Projects from '../components/sections/projects';
import About from '../components/sections/about';
import NavBar from '../components/navigation/navbar';
import Contact from '../components/sections/contact';
import Footer from '../components/navigation/footer';
import Experiences from '../components/sections/experiences';


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
 
  const toggleDarkMode = () => { 
    if (window.localStorage) {
      localStorage.setItem('darkMode', darkMode ? 'disabled' : 'enabled');
    }
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (window.localStorage) {
      const storedDarkMode = localStorage.getItem('darkMode');
      if (storedDarkMode === 'enabled') {
        setDarkMode(true);
      }
    }
  }, []);
  
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Eric Xie</title>
        <meta name="description" content="Eric Xie | Software Developer" />
        <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"}/>
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      {/* Header menu bar */}
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-darkmode'>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} onClick={toggleDarkMode}/>
        <Landing/>
        <Projects/>
        <Experiences/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
      
    </div>
  );
}
