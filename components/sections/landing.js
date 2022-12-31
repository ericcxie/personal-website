import Image from 'next/image';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import dots from '../../public/SVG/dots.svg';
import SlideUp from '../transitions/slideup';

export default function Landing() {

    return (
        <section className='flex items-center md:justify-between py-24 md:px-90'>
            <div className='pb-20'>
              <div className='pl-1 dark:text-white'> {/* Home page */}
                <h2 className='py-2 font-poppins font-thin text-5xl md:text-6xl lg:text-7xl'>Hi,</h2>
                <div className='flex gap-2 justify-start text-5xl lg:text-6xl xl:text-7xl'>
                  <h1 className='font-poppins font-bold tracking-tight'>I'm</h1>
                  <h1 className='font-poppins font-bold underline underline-offset-3 decoration-theme decoration-7 tracking-tight md:decoration-8'>Eric Xie</h1>
                </div>
                <h3 className='font-poppins font-light py-2 text-2xl md:text-3xl'>Software Developer</h3>
              </div>
              <div className='py-2 px-1 flex justify-start gap-4'>
                <div className="relative group">
                  <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <button className="relative ont-poppins text-small bg-theme hover:bg-dark dark:bg-[#0d122b] text-white dark:text-gray-100 font-medium py-1.5 px-12 rounded-md pt-2 pb-2">Projects</button>
                </div>
                
                <button className='font-poppins font-medium text-theme hover:text-dark '>
                  <a href="https://drive.google.com/file/d/1OXMh5eZJjOtlf1Q0CsogtOGVadJUs3AY/view?usp=sharing">Resume</a>
                </button>
              </div>
              <div className='text-2xl flex justify-start gap-1 pl-1 py-2 md:text-3xl dark:text-white md:hidden lg:hidde'>
                <a className='hover:text-dark' href="https://www.youtube.com/@ericcxie"><AiFillYoutube/></a>
                <a className='hover:text-dark' href="https://www.instagram.com/ericcxie/"><AiOutlineInstagram/></a>
                <a className='hover:text-dark' href="https://www.linkedin.com/in/ericcxie/"><AiFillLinkedin/></a>      
                <a className='hover:text-dark' href="https://twitter.com/ericx_3"><AiOutlineTwitter/></a>
                <a className='hover:text-dark' href="https://github.com/ericcxie"><AiFillGithub/></a>
              </div>
            </div>
            <div className='hidden md:w-1/2 md:inline'><Image src={dots}/></div>
          </section>
    );
}

