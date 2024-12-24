/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/homepage/ProductCard";
import Product from "../../assets/best_seling/product.png";
import Right from "../../assets/home/right.svg";
import Left from "../../assets/home/left.svg";

const AllProductSection = () => {
  const AllProducts = [
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
        <p className="text-[#DB4444] font-semibold">Our Product</p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-sm lg:text-4xl font-semibold">
          Explore Our Products
        </h2>
        <div className="hidden lg:flex gap-2">
          <button className="rounded-full bg-gray-100 p-2">
            <img src={Left} alt="Left" />
          </button>
          <button className="rounded-full bg-gray-100 p-2">
            <img src={Right} alt="Right" />
          </button>
        </div>
        <Link to="/products" className="contents">
          <button className="lg:hidden text-[#DB4444] lg:text-white text-xs lg:text-base lg:font-medium lg:py-4 lg:px-12 bg-transparent lg:bg-[#DB4444] rounded-sm">
            View All
          </button>
        </Link>
      </div>
      <div className="mt-6 lg:mt-12">
        <div className="hidden lg:grid grid-cols-4 gap-4">
          {AllProducts.map((product, index) => (
            <Link to="/product/detail" className="contents" key={index}>
              <ProductCard key={index} {...product} type={2} />
            </Link>
          ))}
        </div>
        <div className="lg:hidden grid grid-cols-2 gap-4">
          {AllProducts.slice(0, 4).map((product, index) => (
            <Link to="/product/detail" className="contents" key={index}>
              <ProductCard key={index} {...product} type={1} />
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex justify-center mt-12">
        <Link to="/products" className="contents">
          <button className="bg-[#DB4444] text-white py-4 px-12 rounded-md">
            View All Products
          </button>
        </Link>
      </div>
    </section>
  );
};

export default AllProductSection;
