import '../styles/globals.css'
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
 
  const toggleDarkMode = () => { 
    setDarkMode(!darkMode);
  }
  
  return <Component { ... pageProps} />;
}

export default MyApp;