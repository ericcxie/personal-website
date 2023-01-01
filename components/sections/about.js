import Image from "next/image";
import portrait from "../../public/img/portrait.JPG";

export default function About() {
    return (
        <section className='mb-24 mt-36 dark:text-white'>
          <div className='mt-3 flex flex-col md:flex-row justify-center items-center my-2 gap-2 md:gap-12'>
          <div className="relative group">
              <div className="hidden dark:inline rounded-full absolute -inset-1 bg-gradient-to-r from-[#4c6f35] via-[#2B2F50] to-[#BFA06B] blur opacity-80 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image className="h-52 w-52 md:h-60 md:w-60 relative rounded-full overflow-hidden mx-auto" src={portrait}/>
            </div>
            <div className="mt-8 dark:text-gray-200">
              <p className='mx-auto max-w-lg py-2'>Hello! My name is Eric and I am current a computer engineering student at the University of Waterloo.</p>
              <p className='mx-auto max-w-lg py-2'>In my free time, I enjoy playing badminton, building keyboards, and finding the next picturesque restaurant!</p>
              <p className='mx-auto max-w-lg py-2'>Currently, I am a Software Developer at Brookfield Annuity helping to transform business automation processes.</p>
            </div>
            
            
          </div>
          
          
        </section>
    );
}