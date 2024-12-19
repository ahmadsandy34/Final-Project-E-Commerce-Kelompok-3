import React from "react";

const ShippingCard = () => {
  return (
    <div className="bg-gray-100 p-4 rounded p-2 space-y-1">
      <p className="font-medium">Reguler Shipping</p>
      <div className="flex justify-between">
        <p className="text-sm text-gray-500">
            Get voucher if your order doesn't arrive by 19 Nov 2024
        </p>
      </div>
    </div>
  );
};

export default ShippingCard;
