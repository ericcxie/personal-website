import Head from 'next/head'
import { BsMoonFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import arrow from '../public/components/Arrow 2.svg'
import amafind from '../public/img/amafind.png'
import { FiMenu } from 'react-icons/fi';
import favicon from '../public/img/favicon.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Eric Xie</title>
        <meta name="description" content="Eric Xie | Software Developer" />
        <link rel="icon" href="/favicon.png" />
      </Head>
       
      <main className='bg-white px-10 md:px-20'>
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-2xl font-poppins font-bold text-blue'>Eric Xie.</h1>
            <ul className='flex items-center'>
              <li>
                <BsMoonFill className='cursor-pointer text-2xl'/>
              </li> 
              <li className='pl-3 pt-1'>
                <button>
                  <FiMenu className='text-4xl text-blue'/>
                </button>
              </li>
            </ul>
          </nav>
          <div className='pl-1'>
            <h2 className='text-7xl py-2 font-poppins font-thin'>Hi,</h2>
            <h1 className='text-6xl font-poppins font-bold underline decoration-blue tracking-tight'>I'm Eric Xie</h1>
            <h3 className='text-3xl font-poppins font-light py-2'>Software Developer</h3>
          </div>
          <div className='py-2 px-1 flex justify-start gap-4'>
            <button className="font-poppins text-small bg-blue hover:bg-[#537399] text-white font-medium py-1.5 px-12 rounded-md pt-2 pb-2">Projects</button>
            <button className='font-poppins font-medium text-blue'>Resume</button>
          </div>
          <div className='text-2xl flex justify-start gap-1 pl-1 py-2'>
            <a class href="https://www.linkedin.com/in/ericcxie/"><AiFillLinkedin/></a>
            <a href="https://github.com/ericcxie"><AiFillGithub/></a>
            <a href="https://www.instagram.com/ericcxie/"><AiOutlineInstagram/></a>
            <a href="https://www.youtube.com/@ericcxie"><AiFillYoutube/></a>
          </div>
          <div className='relative mx-auto py-20'>
            
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl font-poppins font-semibold'>Projects</h3>
          </div>
          <div>
            <div className='shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-xl font-medium'>AmaFind - Amazon Webscraper in Python</h3>
              <p className='italic pb-5'>Python, pandas, BeautifulSoup4</p>
              <Image src={amafind}/>
            </div>
            <div className='shadow-lg p-10 rounded-xl my-10'>
              <h3 className='text-xl font-medium'>AmaFind - Amazon Webscraper in Python</h3>
              <p className='italic pb-5'>Python, pandas, BeautifulSoup4</p>
              <Image src={amafind}/>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl font-poppins font-semibold'>About</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
