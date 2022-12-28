import Head from "next/head";
import { useState } from "react";

export default function SEO() {
    const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
    return (
        
        <Head>
        <title>Eric Xie</title>
        <meta name="description" content="Eric  | Software Developer" />
        <meta name="theme-color" content={darkMode ? "#060813" : "#FFFFFF"}/>
        <link rel="icon" href="/favicon.png" />
      </Head>
    );
}