import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WishlistCard from "../components/wishlist/WishlistCard";
import ProductCard from "../components/homepage/ProductCard";
import Bag from "../assets/best_seling/bag.svg";
import Cooler from "../assets/best_seling/cooler.svg";
import Controller from "../assets/home/controller.svg";
import Jacket from "../assets/home/jacket.svg";
import Laptop from "../assets/home/laptop.svg";
import Monitor from "../assets/best_seling/monitor.svg";
import Gamepad from "../assets/best_seling/gamepad.svg";
import Keyboard from "../assets/best_seling/keyboard.svg";
import SEO from "../components/SEO";

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
      discount: 35,
      image: Bag,
    },
    {
      title: "RGB liquid CPU Cooler",
      price: 160,
      image: Cooler,
    },
    {
      title: "GP11 Shooter USB Gamepad",
      price: 660,
      image: Controller,
    },
    {
      title: "Quilted Satin Jacket",
      price: 660,
      image: Jacket,
      outOfStock: true,
    },
  ];

  const justForYouItems = [
    {
      title: "ASUS FHD Gaming Laptop",
      price: 960,
      originalPrice: 1160,
      rating: 5,
      reviews: 65,
      discount: 35,
      image: Laptop,
    },
    {
      title: "IPS LCD Gaming Monitor",
      price: 1160,
      rating: 5,
      reviews: 65,
      image: Monitor,
    },
    {
      title: "HAVIT HV-G92 Gamepad",
      price: 560,
      rating: 5,
      reviews: 65,
      isNew: true,
      category: "Electronics",
      image: Gamepad,
    },
    {
      title: "AK-900 Wired Keyboard",
      price: 200,
      rating: 5,
      reviews: 65,
      category: "Electronics",
      image: Keyboard,
    },
  ];

  return (
    <>
      <SEO
        title="Your Wishlist - Exclusive"
        description="Keep track of your favorite items in your wishlist and shop for them anytime at Exclusive."
        keywords="wishlist, favorite items, shopping, exclusive store"
        robots="index, follow"
      />
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
            {justForYouItems.map((item, index) => (
              <Link to={`/product/detail`} key={index} className="contents">
                <ProductCard key={index} {...item} type={1} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WishlistPage;
