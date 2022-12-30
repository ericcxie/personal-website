import Image from 'next/image';
import amafind_mockup from '../../public/img/amafind_mockup.png';
import gradient from '../../public/img/gradient-1.png';


export default function Projects() {
    return (
        <section className='mb-20'>
          <h1 className="text-3xl py-5 font-poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue to-dark">
                Projects
          </h1>
          <div className='text-center shadow-lg rounded-xl  my-10 sm:p-0 sm:my-0 last:md:shadow-none md:rounded-none md:text-left mx-auto md:flex md:justify-center '>
            <Image className="max-w-xs md:p-1 relative drop-shadow-xl hover:drop-shadow-2xl mx-auto cursor-pointer transition ease-in-out delay-100 hover:-translate-y-2" src={amafind_mockup} alt="image description"/>
            <div className='flex-1 py-5 md:pl-20'>
                <h2 className="text-lg font-semibold text-dark dark:text-white cursor-pointer">
                    AmaFind - Amazon Web Scraper
                </h2>
                <time className="mb-1 text-md font-normal leading-none text-gray-400 dark:text-gray-500">Sep. 2021 – Feb. 2022</time>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400 max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <h3 className='italic pt-2 text-gray-600'>Python // Selenium // BeautifulSoup4</h3>
            </div>
          </div>
          
        </section>
    );
}