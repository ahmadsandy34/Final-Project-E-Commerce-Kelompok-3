import React from "react";
import PropTypes from "prop-types";

const ChangeQuantityButton = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center w-1/3">
      <button
        onClick={onDecrease}
        className="border border-black px-4 py-2 text-semibold rounded-tl rounded-bl hover:bg-[#DB4444] hover:text-white hover:border-0"
        disabled={quantity <= 1}
      >
        -
      </button>
      <p className="px-4 py-2 border border-black w-full text-center">{quantity}</p>
      <button
        onClick={onIncrease}
        className="border border-black px-4 py-2 text-semibold rounded-tr rounded-br hover:bg-[#DB4444] hover:text-white hover:border-0"
      >
        +
      </button>
    </div>
  );
};

ChangeQuantityButton.propTypes = {
  quantity: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
};

export default ChangeQuantityButton;