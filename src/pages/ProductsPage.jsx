// ProductCard.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CategorySidebar } from "../components/products/CategorySidebar";
import { ProductSection } from "../components/products/ProductSection";
import Laptop from "../assets/home/laptop.svg";
import Monitor from "../assets/best_seling/monitor.svg";
import Gamepad from "../assets/best_seling/gamepad.svg";
import Coat from "../assets/best_seling/coat.svg";
import Bag from "../assets/best_seling/bag.svg";
import Cooler from "../assets/best_seling/cooler.svg";
import Bookshelf from "../assets/best_seling/bookshelf.svg";
import DogFood from "../assets/home/dogfood.svg";
import Cameras from "../assets/home/cameras.svg";
import Curology from "../assets/home/curology.svg";
import Car from "../assets/home/car.svg";
import Shoes from "../assets/home/shoes.svg";
import Controller from "../assets/home/controller.svg";
import Jacket from "../assets/home/jacket.svg";
import Keyboard from "../assets/best_seling/keyboard.svg";
import SEO from "../components/SEO";

// data/productData.js
const categories = [
  "Woman's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty",
];

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
    category: "Electronics",
  },
  {
    id: 2,
    title: "IPS LCD Gaming Monitor",
    price: 1160,
    rating: 5,
    reviews: 65,
    image: Monitor,
    category: "Electronics",
  },
  {
    id: 3,
    title: "HAVIT HV-G92 Gamepad",
    price: 560,
    rating: 5,
    reviews: 65,
    isNew: true,
    image: Gamepad,
    category: "Electronics",
  },
  {
    id: 4,
    title: "The north coat",
    price: 260,
    originalPrice: 360,
    rating: 5,
    reviews: 65,
    image: Coat,
    category: "Men's Fashion",
  },
  {
    id: 5,
    title: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    rating: 4.5,
    reviews: 65,
    image: Bag,
    category: "Woman's Fashion",
  },
  {
    id: 6,
    title: "RGB liquid CPU Cooler",
    price: 160,
    originalPrice: 170,
    rating: 4.5,
    reviews: 65,
    image: Cooler,
    category: "Electronics",
  },
  {
    id: 7,
    title: "Small Bookshelf",
    price: 360,
    rating: 5,
    reviews: 65,
    image: Bookshelf,
    category: "Home & Lifestyle",
  },
  {
    id: 8,
    title: "Breed Dry Dog Food",
    price: 100,
    rating: 3,
    reviews: 35,
    image: DogFood,
    category: "Groceries & Pets",
  },
  {
    id: 9,
    title: "CANON EOS DSLR Camera",
    price: 360,
    rating: 4,
    reviews: 95,
    image: Cameras,
    category: "Electronics",
  },
  {
    id: 10,
    title: "Curology Product Set ",
    price: 500,
    rating: 4,
    reviews: 145,
    image: Curology,
    category: "Health & Beauty",
  },
  {
    id: 11,
    title: "Kids Electric Car",
    price: 960,
    rating: 5,
    reviews: 65,
    image: Car,
    category: "Baby's & Toys",
  },
  {
    id: 12,
    title: "Jr. Zoom Soccer Cleats",
    price: 1160,
    rating: 5,
    reviews: 35,
    image: Shoes,
    category: "Sports & Outdoor",
  },
  {
    id: 13,
    title: "GP11 Shooter USB Gamepad",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: Controller,
    category: "Electronics",
  },
  {
    id: 14,
    title: "Quilted Satin Jacket",
    price: 660,
    rating: 4.5,
    reviews: 55,
    image: Jacket,
    category: "Men's Fashion",
  },
  {
    id: 15,
    title: "AK-900 Wired Keyboard",
    price: 200,
    rating: 5,
    reviews: 65,
    image: Keyboard,
    category: "Electronics",
  },
];

// pages/ProductPage.jsx
const ProductPage = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState("all");

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [category]);

  useEffect(() => {
    if (category) {
      const foundCategory = categories.find(
        (cat) => cat.toLowerCase().replace(/['&\s]+/g, "-") === category
      );
      setActiveCategory(foundCategory || "all");
    } else {
      setActiveCategory("all");
    }
  }, [category]);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <SEO
        title={`${
          activeCategory === "all" ? "All Products" : activeCategory
        } - Exclusive`}
        description={`Browse ${
          activeCategory === "all"
            ? "our wide range of products"
            : activeCategory
        } at Exclusive. Find great deals on high-quality items.`}
        keywords={`${activeCategory}, online shopping, exclusive products`}
        robots="index, follow"
      />
      <main className="container mx-auto px-4 py-12">
        <div className="flex gap-8" ref={ref}>
          <CategorySidebar
            categories={categories}
            activeCategory={activeCategory}
          />
          <ProductSection
            title={activeCategory === "all" ? "All Products" : activeCategory}
            products={filteredProducts}
          />
        </div>
      </main>
    </>
  );
};

export default ProductPage;
