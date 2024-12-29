import React from "react";

const OrderCard = ({order, status, name, image }) => {
  return (
    <div className="bg-gray-100 flex items-center space-x-3 lg:space-x-8 py-2 px-4">
      <img
        src={image}
        alt={name}
        className="w-12 h-12 object-cover"
      />
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-semibold">{order}</h2>
          <div className="bg-black text-white text-sm p-1 px-2 rounded">
            <p>{status}</p>
          </div>
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default OrderCard;
