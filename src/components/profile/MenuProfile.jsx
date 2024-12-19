import React, { useState } from "react";

const MenuProfile = ({ activeMenu, setActiveMenu }) => {
  return (
    <>
      <div className="block md:hidden">
        <div className="flex gap-4">
          <button
            onClick={() => {
              setActiveMenu("my-profile");
            }}
            className={`${
              activeMenu === "my-profile" &&
              "bg-[#DB4444] border-[#DB4444] text-white"
            } border border-gray-500 py-2 px-3 rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white`}
          >
            <p className="text-sm font-medium">My Pofile</p>
          </button>
          <button
            onClick={() => {
              setActiveMenu("address-book");
            }}
            className={`${
              activeMenu === "address-book" &&
              "bg-[#DB4444] border-[#DB4444] text-white"
            } border border-gray-500 py-2 px-3 rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white`}
          >
            <p className="text-sm font-medium">Address Book</p>
          </button>
          <button
            onClick={() => {
              setActiveMenu("my-orders");
            }}
            className={`${
              activeMenu === "my-orders" &&
              "bg-[#DB4444] border-[#DB4444] text-white"
            } border border-gray-500 py-2 px-3 rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white`}
          >
            <p className="text-sm font-medium">My Orders</p>
          </button>
        </div>
      </div>
      <div className="hidden md:block">
        <nav className="space-y-3 p-4">
          <p className="font-medium">Manage My Account</p>
          <ul className="md:pl-8 space-y-2">
            <li className="text-gray-500 hover:text-[#DB4444]">
              <button
                onClick={() => {
                  setActiveMenu("my-profile");
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
