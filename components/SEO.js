import Head from "next/head";
import { useState, useEffect } from "react";

export default function SEO() {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

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
          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="img/favicons/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="img/favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="img/favicons/favicon-16x16.png"/>
          <link rel="manifest" href="img/favicons/site.webmanifest"/>
          <link rel="mask-icon" href="/img/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
        </Head>
      </div>  
    );
}