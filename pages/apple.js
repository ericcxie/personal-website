import apple_logo from "../public/SVG/Apple_logo_grey.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Apple() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.localStorage) {
      const storedDarkMode = localStorage.getItem("darkMode");
      if (storedDarkMode === "enabled") {
        setDarkMode(true);
      }
    }
  }, []);

  return (
    <section>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Eric Xie</title>
          <meta name="description" content="Eric Xie | Software Developer" />
          <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"} />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <div className="bg-white dark:bg-darkmode h-screen w-screen">
          <Link href="/">
            <button className="px-4 py-2 text-2xl lg:text-2xl font-poppins font-bold text-theme cursor-pointer bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-[#3a7bd5] dark:to-[#2997c5]">
              Eric Xie.
            </button>
          </Link>
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <Image src={apple_logo} className="w-14 mx-auto py-4" />
              <h1 className="text-[#BDBDBD] dark:text-white text-3xl font-extrabold text-transparent md:text-5xl">
                {" "}
                My Apple Gear
              </h1>
              <ul className="text-gray-500 text-center text-poppins mt-8 dark:text-white">
                <li>MacBook Pro 14 inch 2022</li>
                <li>iPhone 14 Pro</li>
                <li>M1 iPad Pro 11 inch 2021</li>
                <li>Apple Watch Series 5</li>
                <li>Airpods Pro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
