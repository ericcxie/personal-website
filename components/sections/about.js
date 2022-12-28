import Image from "next/image";
import profile from '../../public/img/profilepic.jpg';
import { useState } from "react";

export default function About() {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    return (
        <section className='py-10 dark:text-white'>
          <div>
            <h3 className='text-3xl font-poppins font-semibold dark:text-white'>About</h3>
          </div>
          <div>
            <div className='relative w-80 h-80 pt-16 mx-auto'>
              <Image src={profile} className='rounded-full'/>
            </div>
            <p className='py-24 mx-auto text-center max-w-lg'>Hi! I'm currently a computer engineering student at the University of Waterloo. Feel free to connect with me!</p>
          </div>
        </section>
    );
}