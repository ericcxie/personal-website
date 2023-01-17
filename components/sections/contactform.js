import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import handleSubmit from '../../utils/submitForm.js';

export default function Contact() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, [])
        
        return (
            <section id='contact' >
                <div className="mx-auto max-w-screen-xl py-16">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div data-aos='fade-up' data-aos-once className="lg:col-span-2 lg:py-12">
                        <h1 className="text-center md:text-start text-4xl md:text-5xl font-bold py-5 font-poppins bg-clip-text dark:text-transparent text-theme dark:bg-gradient-to-r dark:from-[#4637e9] dark:to-[#0b6be0]">
                            Get In Touch
                        </h1>

                        <div className="md:mt-2">
                        <p className="text-md md:text-lg text-center md:text-start font-bold text-gray-600 dark:text-gray-200">
                            Have a question or want to have a quick ☕️ chat? Feel free to connect with me!
                        </p>
                        </div>
                    </div>
                
                    <div data-aos='fade-up' data-aos-once className="relative group rounded-lg -mt-6 lg:mt-0 p-2 md:p-8 bg-white dark:bg-darkmode lg:col-span-3 lg:p-12">
                        <ContactForm/>
                    </div>
                    </div>
                </div>
        </section>
          );
        }


        const validate = (values) => {
            const errors = {};
        
            if (!values.name) {
            errors.name = 'Please enter a name.';
            }
        
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Please enter a valid email.';
            }
        
            if (!values.message) {
            errors.message = 'Please enter a message.';
            }
        
            return errors;
        };

        function ContactForm() {
            const [submitted, setSubmitted] = useState(false);
        
            const formik = useFormik({
            initialValues: { name: '', email: '', message: '' },
            validate,
            onSubmit: (values, actions) => {
                handleSubmit('contact', values);
                actions.resetForm();
                setSubmitted(true);
            },
            }); 

        return (
            <form name="contact" onSubmit={formik.handleSubmit} data-netlify="true" className="space-y-4">
                    <div>
                        <label className="sr-only" for="name">Name</label>
                        <input
                        className="w-full dark:text-white rounded-lg border dark:bg-darkmode dark:border-gray-500 border-gray-200 p-3 text-sm focus:outline-none"
                        placeholder="Name"
                        type="text"
                        id="name"
                        name="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setSubmitted(false)}
                        value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name && (
                            <p className="text-sm text-theme lg:text-base">
                                {formik.errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label className="sr-only" for="email">Email</label>
                        <input
                        className="w-full dark:text-white rounded-lg border dark:bg-darkmode dark:border-gray-500 border-gray-200 p-3 text-sm focus:outline-none"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setSubmitted(false)}
                        value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-sm text-theme lg:text-base">
                            {formik.errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="sr-only" for="message">Message</label>
                        <textarea
                        className="w-full dark:text-white rounded-lg border dark:bg-darkmode dark:border-gray-500 border-gray-200 p-3 text-sm focus:outline-none"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        name="message"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setSubmitted(false)}
                        value={formik.values.message}
                        />
                        {formik.errors.message && formik.touched.message && (
                            <p className="text-sm text-theme lg:text-base">
                            {formik.errors.message}
                            </p>
                        )}
                        {submitted && (
                            <p className="text-sm text-theme dark:text-theme lg:text-base">
                                Success! I will get back to you soon.
                            </p>
                        )}
                    </div>

                    <div className="mt-2">
                        
                        <div className="relative group mt-2">
                            <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button
                        type="submit"

                        className="relative text-sm lg:text-md inline-flex w-full items-center justify-center rounded-xl shadow-light-button dark:shadow-none bg-white dark:bg-darkmode px-5 py-3 text-gray-600 dark:text-gray-200"
                        >
                        <span> Say Hello</span>
                        </button>
                        </div>
                    </div>
                </form>
        );
}