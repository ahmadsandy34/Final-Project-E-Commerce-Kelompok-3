/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/homepage/ProductCard";
import Product from "../../assets/best_seling/product.png";

const BestSellingSection = () => {
  const BestSellingProducts = [
    {
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      discount: 35,
      image: Product,
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      rating: 4.5,
      reviews: 65,
      image: Product,
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      rating: 4,
      reviews: 65,
      isNew: true,
      image: Product,
    },
    {
      title: "AK-900 Wired Keyboard",
      price: 200,
      rating: 4.5,
      reviews: 65,
      image: Product,
    },
  ];
  return (
    <section className="w-4/5 mx-auto mt-4 lg:mt-20">
      <div className="hidden lg:flex items-center gap-2">
        <div className="w-1 h-6 bg-[#DB4444]"></div>
        <p className="text-[#DB4444] font-semibold">This Month</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm lg:text-4xl font-semibold">
          Best Selling Products
        </h2>
        <Link to="/best-selling">
          <button className="text-[#DB4444] lg:text-white text-xs lg:text-base lg:font-medium lg:py-4 lg:px-12 bg-transparent lg:bg-[#DB4444] rounded-sm">
            View All
          </button>
        </Link>
      </div>
      <div className="mt-6 lg:mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BestSellingProducts.map((product, index) => (
            <ProductCard key={index} {...product} type={1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingSection;
