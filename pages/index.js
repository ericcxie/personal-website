import Head from 'next/head';
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

import Landing from '../components/sections/landing';
import Projects from '../components/sections/projects';
import About from '../components/sections/about';
import NavBar from '../components/navigation/navbar';
import Footer from '../components/navigation/footer';
import Experiences from '../components/sections/experiences';
import SEO from '../components/SEO.js';
import Contact from '../components/sections/contact';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 2000);
}, []);
 
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
      <SEO darkMode={darkMode}/>
      {
        loading ? (
          <div className='flex items-center justify-center h-screen w-screen bg-white dark:bg-darkmode'>
            <HashLoader color="#7491B3" size={100} loading={loading} className='text-center'/>
          </div>
        ) : (
          <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-darkmode transition-colors duration-300'>
            <NavBar darkMode={darkMode} setDarkMode={setDarkMode} onClick={toggleDarkMode}/>
            <Landing/>
            <Projects/>
            <Experiences/>
            <About/>
            <Contact/>
            <Footer/>
        </main> 
        )
      }
      
      {/* Header menu bar */}  
    </div>
  );
}