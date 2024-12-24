import React from "react";
import StarIcon from "../../assets/product-detail/StarIcon";
import ServiceCard from "./ServiceCard";
import AddToCartButton from "./AddToCartButton";

const ProductInformation = () => {
  return (
    <div className="space-y-4 py-6 px-4 md:px-0 ">
      <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, index) =>
          index < 4 ? (
            <StarIcon key={index} color="#FFAD33" />
          ) : (
            <StarIcon key={index} />
          )
        )}
        <p className="text-sm text-gray-500">
          (150 reviews) <span className="mx-3">|</span>
          <span className="text-[#00FF66]"> In Stock</span>
        </p>
      </div>
      <p className="text-2xl">$192.00</p>
      <p className="text-sm md:border-b-2 border-black pb-4">
        PlayStation 5 Controller Skin High quality vinyl with air channel
        adhesive for easy bubble free install & mess free removal Pressure
        sensitive.
      </p>
      <AddToCartButton />
      <ServiceCard />
    </div>
  );
};

export default ProductInformation;
