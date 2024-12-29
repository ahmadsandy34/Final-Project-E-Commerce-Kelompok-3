/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import Phone from "../assets/contact/phone.svg";
import Mail from "../assets/contact/mail.svg";
import SEO from "../components/SEO";

const ContactPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <SEO
        title="Contact Us - Exclusive"
        description="Get in touch with Exclusive. We're here to help with any questions or support you need."
        keywords="contact, support, exclusive, customer service, contact us"
        robots="index, follow"
      />
      <section className="lg:w-4/5 mx-auto">
        <div
          className="w-4/5 mx-auto lg:w-full text-sm text-black mt-12"
          ref={ref}
        >
          <p className="opacity-50 inline">Home / </p>
          <p className="opacity-100 inline">Contact</p>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <div className="flex flex-col basis-1/4 p-4 rounded-sm shadow-custom-light w-5/6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <img src={Phone} alt="Phone" />
              <p className="font-medium">Call To Us</p>
            </div>
            <div className="border-b border-black/50 mb-5">
              <p className="text-sm my-5">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-sm mb-5">Phone: +8801611112222</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <img src={Mail} alt="Mail" />
              <p className="font-medium">Write To Us</p>
            </div>
            <p className="text-sm my-5">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm mb-5">Emails: customer@exclusive.com</p>
            <p className="text-sm mb-5">Emails: support@exclusive.com</p>
          </div>

          <div className="flex flex-col basis-3/4 p-4 rounded-sm shadow-custom-light w-5/6 mx-auto">
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 mt-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  placeholder="Your Phone *"
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md "
                  required
                />
              </div>
              <div className="grid grid-cols-1 items-center gap-4 mt-8">
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md resize-none"
                />
              </div>
              <div className="flex justify-center lg:justify-end mt-8">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white py-4 px-12 rounded-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
