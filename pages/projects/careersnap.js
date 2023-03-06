import Head from "next/head";
import { useState, useEffect } from "react";

import NavBar from "../../components/navigation/navbar";
import Footer from "../../components/navigation/footer";
import SEO from "../../components/SEO.js";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (window.localStorage) {
      localStorage.setItem("darkMode", darkMode ? "disabled" : "enabled");
    }
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (window.localStorage) {
      const storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode === "enabled") {
        setDarkMode(true);
      }
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <SEO darkMode={darkMode} />
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-darkmode transition-colors duration-300">
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          onClick={toggleDarkMode}
        />

        <section className="flex mb-64 md:mb-24 items-center md:justify-between py-24 md:px-90 min-h-screen">
          <div className="pb-28 md:pb-20 ">
            <h1>Career</h1>
          </div>
        </section>

        <Footer />
      </main>

      {/* Header menu bar */}
      {/* <Cursor /> */}
    </div>
  );
}
