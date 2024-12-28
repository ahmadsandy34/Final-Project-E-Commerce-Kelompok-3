import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WishlistCard from "../components/wishlist/WishlistCard";
import ProductCard from "../components/homepage/ProductCard";
import product_img from "../assets/best_seling/product.png";

// Main WishlistPage component
const WishlistPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const wishlistItems = [
    {
      title: "Gucci duffle bag",
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      discount: 35,
      image: product_img,
    },
    {
      title: "RGB liquid CPU Cooler",
      price: 1960,
      rating: 5,
      reviews: 65,
      image: product_img,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      price: 550,
      rating: 5,
      reviews: 65,
      image: product_img,
    },
    {
      title: "Quilted Satin Jacket",
      price: 100,
      rating: 5,
      reviews: 65,
      image: product_img,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-medium" ref={ref}>
          Wishlist <span className="text-gray-500">(4)</span>
        </h1>
        <button className="px-6 py-2 border border-gray-300 rounded-sm hover:bg-gray-50 transition-colors">
          Move All to Bag
        </button>
      </div>

      {/* Updated grid classes for 2 columns on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {wishlistItems.map((item, index) => (
          <div key={index} className="contents">
            <WishlistCard key={index} {...item} type={1} />
          </div>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-6 bg-[#DB4444]"></div>
            <h2 className="text-lg font-medium">Just For You</h2>
          </div>
          <button className="text-gray-500 hover:text-gray-700 px-6 py-2 border border-gray-300 rounded-sm">
            See All
          </button>
        </div>

        {/* Updated grid classes for 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {wishlistItems.map((item, index) => (
            <Link to={`/product/detail`} key={index} className="contents">
              <ProductCard key={index} {...item} type={1} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
