import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import handleSubmit from "../../utils/submitForm.js";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section id="contact">
      <div className="mx-auto max-w-screen-xl py-16">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div
            data-aos="fade-up"
            data-aos-once
            className="lg:col-span-2 lg:py-12"
          >
            <h1 className="text-center md:text-start text-4xl md:text-5xl py-5 font-gilroybold bg-clip-text dark:text-transparent text-wild-blue-400 dark:bg-gradient-to-r dark:from-[#7600ec] dark:to-[#ff00d9]">
              Get In Touch.
            </h1>

            <div className="md:mt-2">
              <p className="text-md md:text-lg text-center font-gilroy md:text-start text-pf-dark dark:text-pf-light">
                Have a question or want to have a quick ☕️ chat? Feel free to
                connect with me!
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-once
            className="transition-colors duration-300 relative group rounded-lg -mt-6 lg:mt-0 p-2 md:p-8 lg:col-span-3 lg:p-12"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Please enter a name.";
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!values.message) {
    errors.message = "Please enter a message.";
  }

  return errors;
};

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validate,
    onSubmit: (values, actions) => {
      handleSubmit("contact", values);
      actions.resetForm();
      setSubmitted(true);
    },
  });

  return (
    <form
      name="contact"
      onSubmit={formik.handleSubmit}
      data-netlify="true"
      className="space-y-4 bg-white dark:bg-darkmode p-6 rounded-lg relative"
    >
      <div>
        <label className="font-gilroy text-pf-dark dark:text-pf-light">
          Name
        </label>
        <input
          className="font-gilroy w-full dark:text-white transition-colors duration-300 rounded-lg border dark:bg-darkmode dark:border-gray-500 border-gray-200 p-3 text-sm focus:outline-none"
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
          <p className="text-sm text-wild-blue-400 lg:text-base">
            {formik.errors.name}
          </p>
        )}
      </div>
      <div>
        <label className="font-gilroy text-pf-dark dark:text-pf-light">
          Email
        </label>
        <input
          className="font-gilroy w-full dark:text-white transition-colors duration-300 rounded-lg border dark:bg-darkmode dark:border-gray-500 border-gray-200 p-3 text-sm focus:outline-none"
          placeholder="Email address"
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          onFocus={() => setSubmitted(false)}
          value={formik.values.email}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-sm text-wild-blue-400 lg:text-base">
            {formik.errors.email}
          </p>
        )}
      </div>

      <div>
        <label className="font-gilroy text-pf-dark dark:text-pf-light">
          Message
        </label>
        <textarea
          className="font-gilroy w-full dark:text-white transition-colors duration-300 rounded-lg border dark:bg-darkmode dark:border-gray-500 border-gray-200 p-3 text-sm focus:outline-none"
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
          <p className="text-sm text-wild-blue-400 lg:text-base">
            {formik.errors.message}
          </p>
        )}
        {submitted && (
          <p className="text-sm text-wild-blue-400 dark:text-wild-blue-400 lg:text-base">
            Success! I will get back to you soon.
          </p>
        )}
      </div>

      <div className="mt-2">
        <div className="relative group mt-2">
          <div className="hidden dark:inline absolute -inset-0.5 bg-gradient-to-r from-[#7928CA] to-[#FF0080] rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <button
            type="submit"
            className="transition-colors duration-300 relative text-sm lg:text-md inline-flex w-full items-center justify-center rounded-xl shadow-light-button dark:shadow-none active:shadow-inner bg-white dark:bg-darkmode px-5 py-3 text-gray-600 dark:text-gray-200"
          >
            <span className="text-light-font font-gilroy dark:text-pf-light">
              Say hi.
            </span>
          </button>
        </div>
      </div>
      <div className="-z-40 absolute invisible md:visible top-5 -left-8 w-96 h-96 bg-wild-blue-400 dark:bg-[#FF0080] rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-30 animate-blob"></div>
      <div className="-z-40 absolute invisible md:visible top-0 -right-1 w-96 h-96 bg-wild-blue-500 dark:bg-[#9425BD] rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-30 animate-blob animation-delay-2000"></div>
      <div className="-z-40 absolute invisible md:visible -bottom-12 -right-12 w-96 h-96 bg-wild-blue-300 dark:bg-[#C51AA3] rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-30 animate-blob animation-delay-4000"></div>
      <div className="-z-40 absolute invisible md:visible -bottom-16 right-56 w-96 h-96 bg-wild-blue-500 dark:bg-[#7928CA] rounded-full mix-blend-multiply filter blur-2xl opacity-30 dark:opacity-30 animate-blob animation-delay-6000"></div>
    </form>
  );
}
