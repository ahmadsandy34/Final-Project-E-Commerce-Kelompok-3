import React from "react";
import ChangeQuantityButton from "../../components/product-detail/ChangeQuantityButton";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4 gap-y-6 sm:shadow-md p-4 px-4 sm:px-8">
      <div className="flex justify-between items-center">
        <p className="block sm:hidden">Product</p>
        <div className="flex items-center gap-2">
          <img
            src="https://picsum.photos/200"
            alt="product"
            className="w-12 h-12 object-cover"
          />
          <p>LCD Monitor</p>
        </div>
      </div>
      <div className="flex justify-between sm:justify-center items-center">
        <p className="block sm:hidden">Price</p>
        <p className="text-[#DB4444] sm:text-black">$650</p>
      </div>
      <div className="flex justify-between sm:justify-center items-center">
        <p className="block sm:hidden">Quantity</p>
        <ChangeQuantityButton />
      </div>
      <div className="flex justify-between sm:justify-end items-center border-b-2 sm:border-none pb-2">
        <p className="block sm:hidden">Total</p>
        <p className="text-[#DB4444] sm:text-black">$650</p>
      </div>
    </div>
  );
};

export default ProductCard;
