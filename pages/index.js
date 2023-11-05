import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import ReactGa from "react-ga4";

import Landing from "../components/sections/landing";
import Projects from "../components/sections/projects";
import About from "../components/sections/about";
import NavBar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import Experiences from "../components/sections/experiences";
import SEO from "../components/SEO.js";
import Contact from "../components/sections/contact";

ReactGa.initialize("G-Q53PM84TNW");

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1610);
  }, []);

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
      {loading ? (
        <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-darkmode">
          <div className="loader__container">
            <div
              className="loader__dot"
              style={{ animationDelay: "0.1s", backgroundColor: "#01539D" }}
            ></div>
            <div
              className="loader__dot"
              style={{ animationDelay: "0.2s", backgroundColor: "#3D5F83" }}
            ></div>
            <div
              className="loader__dot"
              style={{ animationDelay: "0.3s", backgroundColor: "#786B6A" }}
            ></div>
            <div
              className="loader__dot"
              style={{ animationDelay: "0.4s", backgroundColor: "#B47750" }}
            ></div>
            <div
              className="loader__dot"
              style={{ animationDelay: "0.5s", backgroundColor: "#EF8336" }}
            ></div>
          </div>
        </div>
      ) : (
        <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-darkmode transition-colors duration-300">
          <NavBar
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            onClick={toggleDarkMode}
          />
          <Landing />
          <Projects />
          <Experiences />
          <About />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
