import Image from 'next/image';
import amafind from '../../public/img/amafind.png'
import { useState } from "react";

export default function Projects() {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    return (
        <section>
          <div>
            <h3 className='text-3xl font-poppins font-semibold dark:text-white'>Projects</h3>
          </div>
          <div className='lg:flex gap-10 lg:grid-cols-3 dark:text-white'> {/* Project cards */}
            <div className='shadow-lg p-10 rounded-xl my-10 dark:border dark:shadow-slate-500'>
              <h3 className='text-xl font-medium'>AmaFind - Amazon Webscraper in Python</h3>
              <p className='italic pb-5'>Python, pandas, BeautifulSoup4</p>
              <Image src={amafind}/>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10 dark:border dark:shadow-slate-500'>
              <h3 className='text-xl font-medium'>AmaFind - Amazon Webscraper in Python</h3>
              <p className='italic pb-5'>Python, pandas, BeautifulSoup4</p>
              <Image src={amafind}/>
            </div>
          </div>
        </section>
    );
}