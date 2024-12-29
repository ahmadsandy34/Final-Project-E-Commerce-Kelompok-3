/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import ProductSection from "../components/bestselling/ProductSection";
import Laptop from "../assets/home/laptop.svg";
import Monitor from "../assets/best_seling/monitor.svg";
import Gamepad from "../assets/best_seling/gamepad.svg";
import Keyboard from "../assets/best_seling/keyboard.svg";
import Coat from "../assets/best_seling/coat.svg";
import Bag from "../assets/best_seling/bag.svg";
import Cooler from "../assets/best_seling/cooler.svg";
import Bookshelf from "../assets/best_seling/bookshelf.svg";
import SEO from "../components/SEO";

const products = [
  {
    id: 1,
    title: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    rating: 5,
    reviews: 65,
    discount: 35,
    image: Laptop,
  },
  {
    id: 2,
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    reviews: 65,
    image: Monitor,
  },
  {
    id: 3,
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    rating: 5,
    reviews: 65,
    isNew: true,
    category: "Electronics",
    image: Gamepad,
  },
  {
    id: 4,
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    reviews: 65,
    category: "Electronics",
    image: Keyboard,
  },
  {
    id: 5,
    title: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: Coat,
  },
  {
    id: 6,
    title: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: Bag,
  },
  {
    id: 7,
    title: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: Cooler,
  },
  {
    id: 8,
    title: "Small Bookshelf",
    price: 360,
    rating: 5,
    reviews: 65,
    image: Bookshelf,
  },
];

const BestSellingPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <SEO
        title="Best Selling Products - Exclusive"
        description="Browse our top-selling products at Exclusive. Find the best deals on electronics, fashion, and more!"
        keywords="Best selling products, Exclusive, top-selling electronics, fashion, home goods"
        robots="index, follow"
      />
      <main className="w-11/12 lg:w-5/6 mx-auto px-4 py-12">
        <div className="flex gap-8" ref={ref}>
          <ProductSection title="Best Selling Products" products={products} />
        </div>
      </main>
    </>
  );
};

export default BestSellingPage;
