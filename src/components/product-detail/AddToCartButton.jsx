import React, { useState } from "react";
import LoveIcon from "../../assets/product-detail/LoveIcon";
import SelectSizeButton from "./SelectSizeButton";
import ChangeQuantityButton from "./ChangeQuantityButton";

const AddToCartButton = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="md:py-4 md:py-0">
      {/* Dekstop Layout */}
      <div className="hidden md:block">
        <SelectSizeButton />
        <div className="flex items-center w-full gap-4 mt-8">
          <ChangeQuantityButton />
          <div className="flex space-x-0.5 w-2/3">
            <button className="w-full bg-[#DB4444] hover:bg-[#CA3434FF] text-white px-4 py-2 rounded">
              Add to Cart
            </button>
            <button className="border border-black px-3 py-2 rounded">
              <LoveIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden fixed bottom-0 left-0 right-0 z-10 pb-[env(safe-area-inset-bottom)]">
        <div className={`bg-white border-t-2 shadow-md p-4 ${openMenu ? "rounded-tl-[24px] rounded-tr-[24px]" : ""}`}>
          {openMenu && (
            <div className="space-y-6 pb-6">
              <div className="flex justify-between items-center border-b-2 py-3">
                <h2 className="w-full font-bold text-center">Varian Product</h2>
                <button onClick={() => setOpenMenu(false)}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.54512 13.4556C2.21038 13.1209 2.21038 12.5782 2.54512 12.2434L12.2426 2.54597C12.5773 2.21124 13.12 2.21124 13.4548 2.54597C13.7895 2.88071 13.7895 3.42342 13.4548 3.75816L3.7573 13.4556C3.42257 13.7904 2.87985 13.7904 2.54512 13.4556Z"
                      fill="#222222"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.54512 2.54597C2.87985 2.21124 3.42257 2.21124 3.7573 2.54597L13.4548 12.2434C13.7895 12.5782 13.7895 13.1209 13.4548 13.4556C13.12 13.7904 12.5773 13.7904 12.2426 13.4556L2.54512 3.75816C2.21038 3.42342 2.21038 2.88071 2.54512 2.54597Z"
                      fill="#222222"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex gap-6">
                <img src="https://picsum.photos/170/130" alt="product" className="w-[100px] h[75px] bg-gray-100 object-cover" />
                <div>
                  <p className="font-medium">$192.00</p>
                  <p className="text-sm">In Stock</p>
                </div>
              </div>
              <SelectSizeButton />
              <ChangeQuantityButton />
            </div>
          )}
          <div className="flex space-x-2 w-full">
            {openMenu ? (
              <button onClick={() => setOpenMenu(false)} className="bg-gray-100 hover:bg-gray-300 text-black px-4 py-2 rounded w-1/2">
                Cancel
              </button>
            ) : (
              <button className="border border-black px-3 py-2 rounded flex items-center justify-center">
                <LoveIcon />
              </button>
            )}
            <button
              onClick={() => setOpenMenu(true)}
              className={`${openMenu ? "w-1/2" : "w-full"} bg-[#DB4444] hover:bg-[#CA3434FF] text-white px-4 py-2 rounded`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCartButton;
