import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function ContactForm() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, [])

    return (

        <section>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
                <p class="max-w-xl text-3xl dark:text-white">
                Get In Touch
                </p>

                <div class="mt-8">
                <p class="text-2xl font-bold dark:text-white">
                    Have a question or want to have a quick ☕️ chat? Feel free to connect with me!
                </p>
                </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="POST" data-netlify="true" class="space-y-4">
                    <div>
                        <label class="sr-only" for="name">Name</label>
                        <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                        />
                    </div>
                    <div>
                        <label class="sr-only" for="email">Email</label>
                        <input
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        />
                    </div>

                    <div>
                        <label class="sr-only" for="message">Message</label>
                        <textarea
                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        ></textarea>
                    </div>

                    <div class="mt-4">
                        <button
                        type="submit"
                        class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                        >
                        <span class="font-medium"> Send Enquiry </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ml-3 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </section>

    );
}