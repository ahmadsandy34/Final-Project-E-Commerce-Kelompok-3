import React from "react";

const ChangeQuantityButton = () => {
  return (
    <div className="flex items-center w-1/3">
      <button className="border border-black px-4 py-2 text-semibold rounded-tl rounded-bl hover:bg-[#DB4444] hover:text-white hover:border-0">
        -
      </button>
      <p className="px-4 py-2 border border-black w-full text-center">1</p>
      <button className="border border-black px-4 py-2 text-semibold rounded-tr rounded-br hover:bg-[#DB4444] hover:text-white hover:border-0">
        +
      </button>
    </div>
  );
};

export default ChangeQuantityButton;
