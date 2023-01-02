import Image from "next/image";
import portrait from "../../public/img/portrait.jpg";

export default function About() {
    return (
        <section id="about" className='mb-24 mt-36 dark:text-white'>
          <div className="flex text-center mx-auto">
            <h1 className="mx-auto text-5xl font-bold py-5 font-poppins bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#363795] dark:to-[#005C97]">
                      About Me!
                  </h1>
          </div>
          
          <div className='mt-3 md:-mt-3 flex flex-col md:flex-row justify-center items-center my-2 gap-2 md:gap-12'>
          <div className="relative group">
              <div className="hidden dark:inline rounded-full absolute -inset-1 bg-gradient-to-r from-[#4c6f35] via-[#2B2F50] to-[#BFA06B] blur opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image className="h-52 w-52 md:h-60 md:w-60 relative rounded-full overflow-hidden mx-auto" src={portrait}/>
            </div>
            <div className="mt-8 dark:text-gray-300 font-poppins">
              <p className='mx-auto max-w-lg py-2'>Hello! 👋 My name is Eric and I am a computer engineering student at the University of Waterloo.</p>
              <p className='mx-auto max-w-lg py-2'>Currently, I am a Software Developer at Brookfield Annuity helping to transform business automation processes.</p>
              <p className='mx-auto max-w-lg py-2'>In my free time, I enjoy playing badminton, building keyboards, and finding the next picturesque restaurant!</p>
              <p className='mx-auto max-w-lg py-2'>Here are a few technologies I've been working with recently:</p>
              <div className="flex flex-row justify-start items-start gap-12 md:gap-24 pl-5">
                <ul className="list-disc">
                  <li>Python</li>
                  <li>React</li>
                </ul>
                <ul className="list-disc">
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
                <ul className="list-disc">
                  <li>C++</li>
                  <li>Figma</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    );
}