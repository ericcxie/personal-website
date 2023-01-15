import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, [])

    return (
        <section data-aos='fade-up' data-aos-once id="contact" className="my-24">
            <div className='mt-3 flex flex-col justify-center items-center text-center'>
                <h1 className="text-5xl font-bold py-5 font-poppins bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#4637e9] dark:to-[#0b6be0]">
                    Get In Touch
                </h1>
                <p className="text-black dark:text-gray-200 max-w-md">Have a question or want to have a quick ☕️ chat? Feel free to connect with me!</p>
                <div  className="relative group mt-6">
                    <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <a href="mailto:ex.ericxie@gmail.com"><button className="py-2 relative rounded-lg px-6 bg-[##e0e0e0] shadow-light-button text-light-font font-poppins text-sm dark:hover:bg-none dark:shadow-none active:shadow-inner transition-shadow ease-in-out duration-100 dark:bg-darkmode dark:text-gray-200">Say Hello</button></a>
                </div>
            </div>
        </section>
    );
}