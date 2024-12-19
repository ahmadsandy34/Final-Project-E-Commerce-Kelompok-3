import React from "react";

const OrderCard = () => {
  return (
    <div className="bg-gray-100 flex items-center space-x-2 py-2 px-4">
      <img
        src="https://picsum.photos/500"
        alt="product"
        className="w-12 h-12 object-cover"
      />
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h2>Order No 12345678</h2>
          <div className="bg-black text-white text-sm p-1 px-2 rounded">
            <p>status</p>
          </div>
        </div>
        <p>Product Name (1 items)</p>
      </div>
    </div>
  );
};

export default OrderCard;
