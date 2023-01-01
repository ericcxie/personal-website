import { FaPython, FaReact } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiSelenium } from 'react-icons/si';

export default function Projects() {
    return (
        <section className='py-10 mb-10'>
            <h1 className="text-3xl py-5 font-poppins font-extrabold bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-blue-700 dark:to-[#4A00E0]">
                Projects
            </h1>
            {/* first card */}
            <div class="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="relative group">
                    <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#4B8BBE] to-[#FFD43B] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
                    <a href="#" className="dark:bg-darkmode relative block overflow-hidden rounded-lg border border-gray-100 hover:border-b-0 dark:border-none p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
                        <div className='flex gap-3'>
                            <FaPython className='text-4xl mb-3'/>
                            <SiSelenium className='text-4xl mb-3'/>
                        </div>
                        <div className='text-2xl'>
                            <a href='https://youtu.be/7JiUlha6u1A' className="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                                <FiExternalLink/>
                            </a>
                            <a href='https://github.com/ericcxie/AmaFind' className="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                                <FiGithub/>
                            </a>
                        </div>
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#306998] via-[#4B8BBE] to-[#FFD43B]"></span>
                        <div className="justify-between sm:flex">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    AmaFind - Amazon Web Scraper
                                </h3>
                            </div>
                        </div>
                        <div className="mt-4 sm:pr-8">
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                A web scraper application that is built in Python using Selenium, BeautifulSoup4, and Pandas that captures item search results data from  
                                <a href="https://www.amazon.ca/"> amazon.ca</a>
                            </p>
                        </div>

                        <div className="mt-6 flex">
                            <div className="flex flex-col-reverse">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-200">Python // pandas // Selenium // BeautifulSoup4</p>
                            </div>
                        </div>
                    </a>
                </div>
                {/* second card */}
                <div className="relative group">
                    <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#4B8BBE] to-[#88dded] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
                    <a href="#" className="dark:bg-darkmode relative block overflow-hidden rounded-lg border border-gray-100 hover:border-b-0 dark:border-none p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
                        <FaReact className='text-4xl mb-3'/>
                        <div className='text-2xl'>
                            <a href='https://budget-expense-tracker-react.netlify.app/' className="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                                <FiExternalLink/>
                            </a>
                            <a href='https://github.com/ericcxie/react-budget-expense-tracker' className="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                                <FiGithub/>
                            </a>
                        </div>
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-[#1c2c4c] via-[#4B8BBE] to-[#88dded]"></span>
                        <div className="justify-between sm:flex">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Budget Expense Tracker
                                </h3>
                            </div>
                        </div>
                        <div className="mt-4 sm:pr-8">
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                A simple expense tracker built using ReactJS to manage income and expenses. Learning project to familiarize with Context API with Hooks.
                            </p>
                        </div>

                        <div className="mt-6 flex">
                            <div className="flex flex-col-reverse">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-200">ReactJS // JavaScript // Context API</p>
                            </div>
                        </div>
                    </a>
                </div>
                {/* third card */}
                <div className="relative group">
                    <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-theme to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
                    <a href="#" className="relative dark:bg-darkmode block overflow-hidden rounded-lg border border-gray-100 hover:border-b-0 hover:shadow-lg dark:border-none p-8 transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
                        <div className='flex gap-3'>
                            <TbBrandNextjs className='text-4xl mb-3'/>
                            <SiTailwindcss className='text-4xl mb-3'/>
                        </div>
                        <div className='text-2xl'>
                            <a href='https://ericxie.dev/' className="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                                <FiExternalLink/>
                            </a>
                            <a href='https://github.com/ericcxie/personal-website' className="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                                <FiGithub/>
                            </a>
                        </div>
                        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-theme to-purple-600"></span>
                        <div className="justify-between sm:flex">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Personal Website
                                </h3>
                            </div>
                        </div>
                        <div className="mt-4 sm:pr-8">
                            <p className="text-sm text-gray-500 dark:text-gray-100">
                                A personal website designed in Figma and developed using NextJS and Tailwind CSS. Website aims towards showcasing personal projects and work experiences.
                            </p>
                        </div>

                        <div className="mt-6 flex">
                            <div className="flex flex-col-reverse">
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-200">ReactJS // NextJS // Tailwind CSS // Figma</p>
                            </div>
                        </div>
                    </a>
                </div>
                
        </div>
    </section>
    );
}