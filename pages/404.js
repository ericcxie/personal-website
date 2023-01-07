import Link from "next/link"
import Image from "next/image";
import darkModeCat from '../public/img/cat_darkmode.png';
import lightModeCat from '../public/img/cat_lightmode.png';
import { useState, useEffect } from "react";
import Head from "next/head";

export default function NotFound404() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
      if (window.localStorage) {
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode === 'enabled') {
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
                    <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"}/>
                    <link rel="icon" href="/favicon.png" />
                </Head>

                <div className="h-screen w-screen bg-white dark:bg-darkmode flex items-center">
                    <div className="container flex flex-col md:flex-row items-center justify-center gap-24 px-5 text-gray-700 mb-20 font-poppins">
                        <div className="max-w-md ml-8 xl:ml-64">
                            <div className="text-6xl font-bold py-5 font-poppins bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#4637e9] dark:to-[#0b6be0]">404</div>
                            <p className="text-2xl md:text-3xl font-light leading-normal dark:text-gray-200" >Sorry we couldn't find this page.</p>
                            <p className="mb-8 dark:text-gray-300">But dont worry, you can find plenty of other things on our homepage.</p>
                            <Link href="/">
                                <div className="relative group mt-4 md:mt-8">
                                    <div className="hidden w-32 dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                        <button className="relative hover:shadow-sm py-2 inline-flex items-center px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-theme-700 dark:bg-darkmode dark:text-gray-100 dark:border-gray-600 dark:focus:ring-gray-700">
                                            Return Home </button>
                                </div>
                            </Link>
                        </div>

                        <div className="max-w-xs">
                            {darkMode ? (
                                <Image src={darkModeCat} alt="dark mode cat" /> ) : (
                                <Image src={lightModeCat} alt="light mode cat" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}