import React from "react";
import ReturnIcon from "../../assets/product-detail/ReturnIcon";
import DeliveryIcon from "../../assets/product-detail/DeliveryIcon";

const ServiceCard = () => {
  return (
    <div className="flex flex-row space-x-2 md:flex-col md:border-2 border-gray-400 rounded-md">
      <div className="flex items-center space-x-4 md:p-4 md:border-b-2 border-gray-400 w-1/2 md:w-full">
        <DeliveryIcon className="w-8 h-8" />
        <div>
          <h1 className="text-sm text-semibold md:text-xl">Free Delivery</h1>
          <p className="text-[8px] text-semibold md:text-sm">
            Enter your postal code for Delivery Availability
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4 md:e:\Download\Icon-return.svgp-4 md:border-b-2 border-gray-400 w-1/2 md:w-full">
        <ReturnIcon className="w-8 h-8"/>
        <div>
          <h1 className="text-sm text-semibold md:text-xl">Return Delivery</h1>
          <p className="text-[8px] text-semibold md:text-sm">Free 30 Days Delivery Returns. Details</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
