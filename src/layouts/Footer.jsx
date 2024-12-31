/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Copyright from "../assets/footer/copyright.svg";
import Send from "../assets/footer/send.svg";
import QR from "../assets/footer/qr.svg";
import AppStore from "../assets/footer/appstore.svg";
import GooglePlay from "../assets/footer/googleplay.svg";
import Facebook from "../assets/footer/facebook.svg";
import Twitter from "../assets/footer/twitter.svg";
import Instagram from "../assets/footer/instagram.svg";
import Linkedin from "../assets/footer/linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000] text-[#FAFAFA] mt-32">
        <div className="w-5/6 lg:w-4/5 mx-auto grid grid-cols-2 lg:flex lg:flex-row gap-6 lg:gap-20 pt-12">
          <div className="basis-1/2 order-1 lg:order-none mb-4 lg:mb-0">
            <p className="text-2xl font-bold mb-4">Exclusive</p>
            <p className="text-xl font-medium mb-4">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <form className="relative w-[217px]">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="py-3 ps-4 pe-12 bg-transparent text-white border border-white rounded-md w-full"
              />
              <button
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <img src={Send} alt="Send" className="w-5 h-5" />
              </button>
            </form>
          </div>

          <div className="grid grid-cols-1 gap-4 order-2 lg:hidden justify-items-end">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Facebook} alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>

          <div className="basis-1/3 order-4 lg:order-none">
            <p className="text-xl font-medium mb-5">Support</p>
            <p className="mb-4">Jl. Gatot Subroto Jakarta, 12930, Indonesia.</p>
            <p className="mb-4">exclusive@gmail.com</p>
            <p className="mb-4">+62815-8888-9999</p>
          </div>

          <div className="basis-2/3 order-5 lg:order-none">
            <p className="text-xl font-medium mb-5">Account</p>
            <Link to="/my-account" className="contents">
              <p className="mb-4 hover:text-gray-400">My Account</p>
            </Link>
            <Link to="/auth/login" className="contents">
              <p className="mb-4 hover:text-gray-400">Login / Register</p>
            </Link>
            <Link to="/cart" className="contents">
              <p className="mb-4 hover:text-gray-400">Cart</p>
            </Link>
            <Link to="/wishlist" className="contents">
              <p className="mb-4 hover:text-gray-400">Wishlist</p>
            </Link>
            <Link to="/products" className="contents">
              <p className="mb-4 hover:text-gray-400">Shop</p>
            </Link>
          </div>

          <div className="basis-1/2 order-3 lg:order-none">
            <p className="text-xl font-medium mb-5 ">Quick Link</p>
            <p className="mb-4">Privacy Policy</p>
            <p className="mb-4">Terms Of Use</p>
            <p className="mb-4">FAQ</p>
            <p className="mb-4">Contact</p>
          </div>

          <div className="basis-2/3 order-6 lg:order-none">
            <p className="text-xl font-medium mb-8 lg:mb-5">Download App</p>
            <p className="text-xs font-medium opacity-70 mb-4">
              Save $3 with App New User Only
            </p>
            <div className="flex flex-row lg:grid lg:grid-cols-2 gap-2 mb-6">
              <div>
                <img src={QR} alt="QR" className="lg:w-full lg:h-full" />
              </div>
              <div className="flex flex-col gap-1 lg:grid lg:grid-rows-2">
                <div>
                  <a
                    href="https://www.apple.com/id/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={AppStore}
                      alt="App Store"
                      className="lg:w-full lg:h-full"
                    />
                  </a>
                </div>
                <div>
                  <a
                    href="https://play.google.com/store/apps?hl=id"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={GooglePlay}
                      alt="Google Play"
                      className="lg:w-full lg:h-full"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-4 gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Twitter} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </div>
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
