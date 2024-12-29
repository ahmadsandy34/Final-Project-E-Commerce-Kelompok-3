import React, { useState } from "react";

const ChangeQuantityButton = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex items-center w-1/3">
      <button
        className="border border-black px-4 py-2 text-semibold rounded-tl rounded-bl hover:bg-[#DB4444] hover:text-white hover:border-0"
        onClick={handleDecrease}
        disabled={quantity <= 1}
      >
        -
      </button>
      <p className="px-4 py-2 border border-black w-full text-center">
        {quantity}
      </p>
      <button
        className="border border-black px-4 py-2 text-semibold rounded-tr rounded-br hover:bg-[#DB4444] hover:text-white hover:border-0"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default ChangeQuantityButton;
