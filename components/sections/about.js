import Image from "next/image";
import profile from '../../public/img/profilepic.jpg';
import { useState } from "react";

export default function About() {
    const [toggle, setToggle] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    return (
        <section className='py-10 dark:text-white'>
          <div>
            <div className='relative z-0 order-0 w-80 h-80 pt-16 mx-auto'>
              <Image src={profile} className='rounded-full z-0'/>
            </div>
            <p className='py-24 mx-auto text-center max-w-lg'>Hi! I'm currently a computer engineering student at the University of Waterloo. Feel free to connect with me!</p>
          </div>
          
        </section>
    );
}