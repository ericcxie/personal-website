import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import handleSubmit from '../utils/submitForm';

export default function Contact() {
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
                    <div className="relative group">
                        <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#4B8BBE] to-[#88dded] rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 delay-100 hover:-translate-y-1"></div>
                        <div class="relative rounded-lg bg-white dark:bg-darkmode p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <ContactForm/>
                        </div>
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
                        <label class="sr-only" for="name">Name</label>
                        <input
                        class="w-full rounded-lg border dark:bg-darkmode dark:border-theme border-gray-200 p-3 text-sm"
                        placeholder="Name"
                        type="text"
                        id="name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setSubmitted(false)}
                        value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name && (
                            <p className="text-sm text-red-600 lg:text-base">
                                {formik.errors.name}
                            </p>
                        )}
                    </div>
                    <div>
                        <label class="sr-only" for="email">Email</label>
                        <input
                        class="w-full rounded-lg border dark:bg-darkmode dark:border-theme border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setSubmitted(false)}
                        value={formik.values.email}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p className="text-sm text-red-600 lg:text-base">
                            {formik.errors.email}
                            </p>
                        )}
                    </div>

                    <div>
                        <label class="sr-only" for="message">Message</label>
                        <textarea
                        class="w-full rounded-lg border dark:bg-darkmode dark:border-theme border-gray-200 p-3 text-sm"
                        placeholder="Message"
                        rows="8"
                        id="message"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        onFocus={() => setSubmitted(false)}
                        value={formik.values.message}
                        />
                        {formik.errors.message && formik.touched.message && (
                            <p className="text-sm text-red-600 lg:text-base">
                            {formik.errors.message}
                            </p>
                        )}
                        {submitted && (
                            <p className="text-sm text-theme dark:text-theme lg:text-base">
                            Success! I will get back to you ASAP!
                            </p>
                        )}
                    </div>

                    <div class="mt-4">
                        
                        <div className="relative group mt-6">
                            <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button
                        type="submit"

                        class="relative inline-flex w-full items-center justify-center rounded-xl bg-black px-5 py-3 text-white sm:w-auto"
                        >
                        <span class="font-sm"> Say Hello </span>
                        </button>
                        </div>
                    </div>
                </form>
        );
}