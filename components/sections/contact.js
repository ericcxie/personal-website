

export default function Contact() {
    return (
        <section id="contact" className="my-24">
            <div className='mt-3 flex flex-col justify-center items-center text-center'>
                <h1 className="text-5xl font-bold py-5 font-poppins bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#7826c1] dark:to-[#4A00E0]">
                    Get In Touch
                </h1>
                <p className="text-black dark:text-white max-w-md">Have a question or want to have a quick coffee chat? Feel free to connect with me!</p>
                <div className="relative group mt-6">
                    <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <a href="mailto:ex.ericxie@gmail.com" className="relative hover:shadow-sm py-2 inline-flex items-center px-6 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-theme-700 dark:bg-darkmode dark:text-gray-200 dark:border-gray-600 dark:focus:ring-gray-700">
                        Say Hello </a>
                </div>
            </div>
        </section>
    );
}