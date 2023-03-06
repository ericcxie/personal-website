import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";

import NavBar from "../../components/navigation/navbar";
import Footer from "../../components/navigation/footer";
import SEO from "../../components/SEO.js";
import mockup from "../../public/img/amafind_mockup.png";

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

        <section className="min-h-screen py-40">
          <div className="mt-3 md:-mt-3 flex flex-col md:flex-row justify-center items-center my-2 gap-2 md:gap-12">
            <div className="relative group">
              <div className="hidden dark:inline absolute"></div>
              <Image
                className="h-52 w-52 md:h-72 md:w-72 relative overflow-hidden mx-auto"
                src={mockup}
                alt="portrait"
              />
            </div>
            <div className="mt-8 text-pf-dark dark:text-pf-light font-gilroy">
              <h1 className="mx-auto text-4xl font-bold py-5 font-gilroybold bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#4042b8] dark:to-[#2975a4]">
                AmaFind
              </h1>
              <p className="mx-auto max-w-lg py-2">
                A web scraper application that is built in Python using
                Selenium, BeautifulSoup4, and Pandas that captures item search
                results data from amazon.ca
              </p>
            </div>
          </div>
          <div className="h-0.5 max-w-4xl mx-auto bg-black mt-16"></div>
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              <div>
                <h2 className="text-lg font-bold">Role</h2>
                <p>Test</p>
              </div>
            </div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              <div>
                <h2 className="text-lg font-bold">Timeline</h2>
                <p>Test</p>
              </div>
            </div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              <div>
                <h2 className="text-lg font-bold">Tool</h2>
                <p>Test</p>
              </div>
            </div>
            <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
              <div>
                <h2 className="text-lg font-bold">Type</h2>
                <p>Test</p>
              </div>
            </div>
          </div>
        </section>

        <section className=" transition-colors duration-300">
          <div>
            <h1>Project</h1>
          </div>
        </section>

        <Footer />
      </main>

      {/* Header menu bar */}
      {/* <Cursor /> */}
    </div>
  );
}
