import { FaPython, FaReact } from 'react-icons/fa';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiSelenium } from 'react-icons/si';

export default function Projects_draft() {
    return (
        <section className='py-10 mb-10'>
            <h1 className="text-3xl py-5 font-poppins font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue to-dark">
                Projects
            </h1>
            {/* first card */}
            <div class="mt-3 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 dark:border-none dark:shadow-blue p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
                    <div className='flex gap-3'>
                        <FaPython className='text-4xl mb-3'/>
                        <SiSelenium className='text-4xl mb-3'/>
                    </div>
                    <div className='text-2xl'>
                        <a href='https://youtu.be/7JiUlha6u1A' class="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                            <FiExternalLink/>
                        </a>
                        <a href='https://github.com/ericcxie/AmaFind' class="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                            <FiGithub/>
                        </a>
                    </div>
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue via-blue-500 to-purple-600"></span>
                    <div class="justify-between sm:flex">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                                AmaFind - Amazon Web Scraper
                            </h3>
                        </div>
                    </div>
                    <div class="mt-4 sm:pr-8">
                        <p class="text-sm text-gray-500 dark:text-gray-100">
                            A web scraper application that is built in Python using Selenium, BeautifulSoup4, and Pandas that captures item search results data from  
                            <a href="https://www.amazon.ca/"> amazon.ca</a>
                        </p>
                    </div>

                    <div class="mt-6 flex">
                        <div class="flex flex-col-reverse">
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-200">Python // Selenium // BeautifulSoup4</p>
                        </div>
                    </div>
                </a>
                {/* second card */}
                <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 dark:border-none dark:shadow-blue p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
                    <FaReact className='text-4xl mb-3'/>
                    <div className='text-2xl'>
                        <a href='https://budget-expense-tracker-react.netlify.app/' class="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                            <FiExternalLink/>
                        </a>
                        <a href='https://github.com/ericcxie/react-budget-expense-tracker' class="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                            <FiGithub/>
                        </a>
                    </div>
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue via-blue-500 to-purple-600"></span>
                    <div class="justify-between sm:flex">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                                Budget Expense Tracker
                            </h3>
                        </div>
                    </div>
                    <div class="mt-4 sm:pr-8">
                        <p class="text-sm text-gray-500 dark:text-gray-100">
                            A simple expense tracker built using ReactJS to manage income and expenses. Learning project to familiarize with Context API with Hooks.
                        </p>
                    </div>

                    <div class="mt-6 flex">
                        <div class="flex flex-col-reverse">
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-200">ReactJS // JavaScript // Context API</p>
                        </div>
                    </div>
                </a>
                {/* third card */}
                <a href="#" class="relative block overflow-hidden rounded-lg border border-gray-100 dark:border-none dark:shadow-blue p-8 hover:shadow-lg transition ease-in-out delay-100 hover:-translate-y-1 dark:text-white">
                    <div className='flex gap-3'>
                        <TbBrandNextjs className='text-4xl mb-3'/>
                        <SiTailwindcss className='text-4xl mb-3'/>
                    </div>
                    <div className='text-2xl'>
                        <a href='https://ericxie.dev/' class="absolute right-6 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                            <FiExternalLink/>
                        </a>
                        <a href='https://github.com/ericcxie/personal-website' class="absolute right-16 top-8 hover:drop-shadow-xl transition ease-in-out delay-100 hover:-translate-y-1">
                            <FiGithub/>
                        </a>
                    </div>
                    <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue via-blue-500 to-purple-600"></span>
                    <div class="justify-between sm:flex">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                                Personal Website
                            </h3>
                        </div>
                    </div>
                    <div class="mt-4 sm:pr-8">
                        <p class="text-sm text-gray-500 dark:text-gray-100">
                            A personal website designed in Figma and developed using NextJS and Tailwind CSS. Website aims towards showcasing personal projects and work experiences.
                        </p>
                    </div>

                    <div class="mt-6 flex">
                        <div class="flex flex-col-reverse">
                            <p class="text-sm font-medium text-gray-500 dark:text-gray-200">ReactJS // NextJS // Tailwind CSS // Figma</p>
                        </div>
                    </div>
                </a>
        </div>
    </section>

        
        
    );
}