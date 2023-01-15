import Head from 'next/head';
import { useState, useEffect } from "react";
import { HashLoader } from 'react-spinners';

import Landing from '../components/sections/landing';
import Projects from '../components/sections/projects';
import About from '../components/sections/about';
import NavBar from '../components/navigation/navbar';
import Contact from '../components/sections/contact';
import Footer from '../components/navigation/footer';
import Experiences from '../components/sections/experiences';


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
      <Head>
          <title>Eric Xie</title>
          <meta name="description" content="Eric  | Software Developer" />
          <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"}/>
          <link rel="manifest" href="img/favicons/site.webmanifest"/>
          <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <link rel="apple-touch-icon" sizes="57x57" href="/img/favicons/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/img/favicons/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/img/favicons/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/img/favicons/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/img/favicons/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/img/favicons/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/img/favicons/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/img/favicons/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/img/favicons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="img/favicons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="img/favicons/manifest.json"></link>
          <meta name="msapplication-TileColor" content="#da532c"/>
        </Head>
      {
        loading ? (
          <div className='flex items-center justify-center h-screen w-screen bg-white dark:bg-darkmode'>
            <HashLoader color="#7491B3" size={100} loading={loading} className='text-center'/>
          </div>
        ) : (
          <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-darkmode'>
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