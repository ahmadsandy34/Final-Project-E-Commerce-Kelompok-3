/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/homepage/ProductCard";
import Coat from "../../assets/best_seling/coat.svg";
import Bag from "../../assets/best_seling/bag.svg";
import Cooler from "../../assets/best_seling/cooler.svg";
import Bookshelf from "../../assets/best_seling/bookshelf.svg";

const BestSellingSection = () => {
  const BestSellingProducts = [
    {
      title: "The north coat",
      price: 260,
      originalPrice: 360,
      rating: 5,
      reviews: 65,
      image: Coat,
    },
    {
      title: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 4.5,
      reviews: 65,
      image: Bag,
    },
    {
      title: "RGB liquid CPU Cooler",
      price: 160,
      originalPrice: 170,
      rating: 4.5,
      reviews: 65,
      image: Cooler,
    },
    {
      title: "Small Bookshelf",
      price: 360,
      rating: 5,
      reviews: 65,
      image: Bookshelf,
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
        <Link to="/best-selling" className="contents">
          <button className="text-[#DB4444] lg:text-white text-xs lg:text-base lg:font-medium lg:py-4 lg:px-12 bg-transparent lg:bg-[#DB4444] rounded-sm">
            View All
          </button>
        </Link>
      </div>
      <div className="mt-6 lg:mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {BestSellingProducts.map((product, index) => (
            <div className="contents" key={index}>
              <ProductCard key={index} {...product} type={1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingSection;
