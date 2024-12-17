import React, { useState } from "react";

const MenuProfile = ({ activeMenu, setActiveMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button (visible only on small screens) */}
      <button
        className="lg:hidden block text-gray-700 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full bg-white md:bg-none shadow-lg md:shadow-none transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 lg:static lg:translate-x-0 lg:w-1/4`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="space-y-3 p-4 pt-20 md:pt-0">
          <p className="font-medium">Manage My Account</p>
          <ul className="md:pl-8 space-y-2">
            <li className="text-gray-500 hover:text-[#DB4444]">
              <button
                onClick={() => {
                  setActiveMenu("my-profile");
                  setIsOpen(false);
                }}
                className={`${activeMenu === "my-profile" && "text-[#DB4444]"}`}
              >
                My Profile
              </button>
            </li>
            <li className="text-gray-500 hover:text-[#DB4444]">
              <button
                onClick={() => {
                  setActiveMenu("address-book");
                  setIsOpen(false);
                }}
                className={`${
                  activeMenu === "address-book" && "text-[#DB4444]"
                }`}
              >
                Address Book
              </button>
            </li>
          </ul>
          <p className="font-medium">Manage Orders</p>
          <ul className="md:pl-8">
            <li className="text-gray-500 hover:text-[#DB4444]">
              <button
                onClick={() => {
                  setActiveMenu("my-orders");
                  setIsOpen(false);
                }}
                className={`${activeMenu === "my-orders" && "text-[#DB4444]"}`}
              >
                My Orders
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuProfile;
