import Image from 'next/image';
import gradient from '../../public/img/gradient-1.png';

export default function Experiences() {
    return (
        <section id="experiences">
            <h1 className="text-3xl py-5 font-poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue to-dark">
                Experiences
            </h1>
            <div className='flex flex-col justify-center items-start'>
            <ol className="relative border-l -pl-0 border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-blue rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Oct. 2019 - July 2022</time>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">
                        Head of Publicity
                    </h2>
                    <h3 className="text-md italic font-normal text-gray-700 dark:text-white">
                        Bayview Yearbook Committee
                    </h3>
                    <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    Ensured the successful delivery of the yearbook by acting as a liaison between the student body and school administration
                    </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-blue rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Sep. 2021 – Feb. 2022</time>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">
                        Project Researcher
                    </h2>
                    <h3 className="text-md italic font-normal text-gray-700 dark:text-white">
                        DoubleOcean Financial Group Ltd.
                    </h3>
                    <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    Conducted an independent research project on machine learning used in PD-1 related medicine using library databases to explore areas for potential investment opportunities
                    </p>
                </li>
                <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-blue rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan. 2023 - Current</time>
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white cursor-pointer">
                        Software Developer
                    </h2>
                    <h3 className="text-md italic font-normal text-gray-700 dark:text-white">
                        Brookfield Annuity
                    </h3>
                    <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. TBD
                    </p>
                </li>
            </ol>
            <a href="https://drive.google.com/file/d/1OXMh5eZJjOtlf1Q0CsogtOGVadJUs3AY/view?usp=sharing" className="transition ease-in-out delay-100 hover:-translate-y-1 hover:shadow-sm mt-5 py-2 inline-flex items-center px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Receive CV <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></a>
            
            
            
            </div>
            
            
         
            
        </section>
        

    );
}