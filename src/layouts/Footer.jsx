/* eslint-disable no-unused-vars */
import React from "react";
import Copyright from "../assets/footer/copyright.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000] text-[#FAFAFA] mt-32">
        <div className="w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8 lg:pt-12">
          <div className="">
            <p className="text-2xl font-bold mb-4">Exclusive</p>
            <p className="text-xl font-medium mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            
          </div>
          <div className="">
            <p className="text-lg font-medium mb-4">Top Features</p>
            <p className="mb-4">Ticketing System</p>
            <p className="mb-4">Knowledge Base</p>
            <p className="mb-4">Community Forums</p>
            <p className="mb-4">Help Desk Software</p>
          </div>
          <div className="">
            <p className="text-lg font-medium mb-4">Resources</p>
            <p className="mb-4">Product Support</p>
            <p className="mb-4">Request Demo</p>
            <p className="mb-4">Library</p>
            <p className="mb-4">Peoplepower Blog</p>
          </div>
          <div className="">
            <p className="text-lg font-medium mb-4">Company</p>
            <p className="mb-4">About Us</p>
            <p className="mb-4">Press</p>
            <p className="mb-4">Investors</p>
            <p className="mb-4">Events</p>
          </div>
          <div className="">
            <p className="text-lg font-medium mb-4">Favourite Things</p>
            <p className="mb-4">For Enterprise</p>
            <p className="mb-4">For Startups</p>
            <p className="mb-4">For Benchmark</p>
            <p className="mb-4">For Small Business</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-auto py-4 mt-12 opacity-40 border-t border-gray-400/40">
          <img src={Copyright} alt="Copyright" className="me-1" />
          <p>Copyright Lumoshive. All right reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
