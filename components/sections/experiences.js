import Image from 'next/image';
import gradient from '../../public/img/gradient-1.png';

export default function Experiences() {
    return (
        <section id="experiences">
            <h1 className="text-3xl py-5 font-poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-theme to-dark">
                Experiences
            </h1>
            <div className='mt-3 flex flex-col justify-center items-start'>
            <ol className="relative border-l -pl-0 border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-theme rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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
                    <div className="absolute w-3 h-3 bg-theme rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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
                    <div className="absolute w-3 h-3 bg-theme rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
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
            
            <div className="relative group mt-5">
                <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <button className="relative hover:shadow-sm py-2 inline-flex items-center px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-theme-700 dark:bg-darkmode dark:text-gray-100 dark:border-gray-600 dark:focus:ring-gray-700">
                    Receive CV <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            </div>
            
            
            </div>
            
            
         
            
        </section>
        

    );
}