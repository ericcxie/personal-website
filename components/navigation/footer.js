import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter, AiOutlineClose } from 'react-icons/ai';

export default function Footer() {
    return (
        <footer>
            <hr class="my-1 h-px bg-gray-200 border-0 dark:bg-gray-700"/>
            <div class="container flex flex-col items-center justify-between p-6 mx-auto space-y-3 sm:space-y-0 sm:flex-row">
            <button onClick={() => {window.scrollTo({top: 0, behavior: 'smooth', duration: 100})}}>
                <h1 class="text-2xl font-bold font-poppins text-blue transition-colors duration-300 hover:text-blue-500 dark:hover:text-blue-400">
                        Eric Xie</h1>
            </button>
                

                <p class="text-sm text-gray-600 dark:text-gray-300">© Copyright 2022. All Rights Reserved.</p>

                <div class="flex -mx-2 text-gray-700 text-2xl gap-2 dark:text-white">
                    <a className='transition ease-in-out delay-100 hover:-translate-y-1' href="https://www.instagram.com/ericcxie/"><AiOutlineInstagram/></a>
                    <a className='transition ease-in-out delay-100 hover:-translate-y-1' href="https://github.com/ericcxie"><AiFillGithub/></a>
                    <a className='transition ease-in-out delay-100 hover:-translate-y-1' href="https://www.linkedin.com/in/ericcxie/"><AiFillLinkedin/></a>
                </div>
            </div>
        </footer>   
    );
}