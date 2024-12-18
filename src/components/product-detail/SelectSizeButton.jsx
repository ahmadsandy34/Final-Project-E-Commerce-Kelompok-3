import React from "react";

const SelectSizeButton = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
      <p className="test-xl">Size</p>
      <div className="flex gap-2">
        <button className="border border-black px-4 py-2 text-semibold rounded hover:bg-[#DB4444] hover:text-white hover:border-0">
          XS
        </button>
        <button className="border border-black px-4 py-2 text-semibold rounded hover:bg-[#DB4444] hover:text-white hover:border-0">
          S
        </button>
        <button className="border border-black px-4 py-2 text-semibold rounded hover:bg-[#DB4444] hover:text-white hover:border-0">
          M
        </button>
        <button className="border border-black px-4 py-2 text-semibold rounded hover:bg-[#DB4444] hover:text-white hover:border-0">
          L
        </button>
        <button className="border border-black px-4 py-2 text-semibold rounded hover:bg-[#DB4444] hover:text-white hover:border-0">
          XL
        </button>
      </div>
    </div>
  );
};

export default SelectSizeButton;
