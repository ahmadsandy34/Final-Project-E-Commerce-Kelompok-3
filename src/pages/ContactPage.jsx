/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import DOMPurify from 'dompurify';
import Phone from "../assets/contact/phone.svg";
import Mail from "../assets/contact/mail.svg";
import SEO from "../components/SEO";
import { useSelector } from "react-redux";
import { selectLanguage } from "../redux/slice/languageSlice";

const ContactPage = () => {
  const language = useSelector(selectLanguage);
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Sanitize input value using DOMPurify
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sanitize all form data before submission
    const sanitizedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      phone: DOMPurify.sanitize(formData.phone),
      message: DOMPurify.sanitize(formData.message)
    };

    // Here you can handle the form submission with sanitized data
    console.log('Sanitized form data:', sanitizedData);
    // Add your form submission logic here
  };

  return (
    <>
      <SEO
        title={language === 'id' ? "Hubungi Kami - Exclusive" : "Contact Us - Exclusive"}
        description={language === 'id' ? "Hubungi Exclusive. Kami siap membantu dengan pertanyaan atau dukungan apa pun yang Anda butuhkan." : "Get in touch with Exclusive. We're here to help with any questions or support you need."}
        keywords={language === 'id' ? "kontak, dukungan, exclusive, layanan pelanggan, hubungi kami" : "contact, support, exclusive, customer service, contact us"}
        robots="index, follow"
      />
      <section className="lg:w-4/5 mx-auto">
        <div
          className="w-4/5 mx-auto lg:w-full text-sm text-black mt-12"
          ref={ref}
        >
          <p className="opacity-50 inline">{language === 'id' ? "Beranda / " : "Home / "}</p>
          <p className="opacity-100 inline">{language === 'id' ? "Kontak" : "Contact"}</p>
        </div>

        <div className="flex flex-col lg:flex-row mt-12 gap-8">
          <div className="flex flex-col basis-1/4 p-4 rounded-sm shadow-custom-light w-5/6 mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <img src={Phone} alt="Phone" />
              <p className="font-medium">{language === 'id' ? "Hubungi Kami" : "Call To Us"}</p>
            </div>
            <div className="border-b border-black/50 mb-5">
              <p className="text-sm my-5">
                {language === 'id' ? "Kami tersedia 24/7, 7 hari seminggu." : "We are available 24/7, 7 days a week."}
              </p>
              <p className="text-sm mb-5">{language === 'id' ? "Telepon: +8801611112222" : "Phone: +8801611112222"}</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-2">
              <img src={Mail} alt="Mail" />
              <p className="font-medium">{language === 'id' ? "Tulis Kepada Kami" : "Write To Us"}</p>
            </div>
            <p className="text-sm my-5">
              {language === 'id' ? "Isi formulir kami dan kami akan menghubungi Anda dalam 24 jam." : "Fill out our form and we will contact you within 24 hours."}
            </p>
            <p className="text-sm mb-5">Emails: customer@exclusive.com</p>
            <p className="text-sm mb-5">Emails: support@exclusive.com</p>
          </div>

          <div className="flex flex-col basis-3/4 p-4 rounded-sm shadow-custom-light w-5/6 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 mt-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={language === 'id' ? "Nama Anda *" : "Your Name *"}
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={language === 'id' ? "Email Anda *" : "Your Email *"}
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md"
                  required
                />
                <input
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={language === 'id' ? "Nomor Telepon Anda *" : "Your Phone *"}
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md"
                  required
                />
              </div>
              <div className="grid grid-cols-1 items-center gap-4 mt-8">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder={language === 'id' ? "Pesan Anda" : "Your Message"}
                  className="bg-[#F5F5F5] py-3 px-4 rounded-md resize-none"
                />
              </div>
              <div className="flex justify-center lg:justify-end mt-8">
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white py-4 px-12 rounded-md"
                >
                  {language === 'id' ? "Kirim Pesan" : "Send Message"}
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
