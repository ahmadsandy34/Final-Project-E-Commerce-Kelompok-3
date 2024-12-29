import React from "react";
import PropTypes from "prop-types";
import ChangeQuantityButton from "./ChangeQuantityButton";

const ProductCard = ({ title, price, image, quantity, onQuantityChange }) => {
  const subtotal = price * quantity;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4 gap-y-6 sm:shadow-md p-4 px-4 sm:px-8">
      <div className="flex justify-between items-center">
        <p className="block sm:hidden">Product</p>
        <div className="flex items-center gap-2">
          <img
            src={image}
            alt="product"
            className="w-12 h-12 object-cover"
          />
          <p>{title}</p>
        </div>
      </div>
      <div className="flex justify-between sm:justify-center items-center">
        <p className="block sm:hidden">Price</p>
        <p className="text-[#DB4444] sm:text-black">${price}</p>
      </div>
      <div className="flex justify-between sm:justify-center items-center">
        <p className="block sm:hidden">Quantity</p>
        <ChangeQuantityButton
          quantity={quantity}
          onIncrease={() => onQuantityChange(quantity + 1)}
          onDecrease={() => onQuantityChange(quantity - 1)}
        />
      </div>
      <div className="flex justify-between sm:justify-end items-center border-b-2 sm:border-none pb-2">
        <p className="block sm:hidden">Total</p>
        <p className="text-[#DB4444] sm:text-black">${subtotal}</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default ProductCard;