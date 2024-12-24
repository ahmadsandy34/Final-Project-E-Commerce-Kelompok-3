// ProductCard.jsx
import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { CategorySidebar } from "../components/products/CategorySidebar";
import { ProductSection } from "../components/products/ProductSection";
import product_img from '../assets/best_seling/product.png';

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
   // Electronics
   {
     id: 1,
     title: "ASUS FHD Gaming Laptop",
     price: 960,
     originalPrice: 1160,
     rating: 5,
     reviews: 65,
     isNew: false,
     discount: 35,
     category: "Electronics",
     image: product_img
   },
   {
     id: 2,
     title: "IPS LCD Gaming Monitor",
     price: 1160,
     rating: 5,
     reviews: 75,
     category: "Electronics",
     image: product_img
   },
   {
     id: 3,
     title: "HAVIT HV-G92 Gamepad",
     price: 560,
     rating: 5,
     reviews: 45,
     isNew: true,
     category: "Electronics",
     image: product_img
   },
   {
     id: 4,
     title: "Samsung Galaxy S22 Ultra",
     price: 1299,
     originalPrice: 1499,
     rating: 5,
     reviews: 120,
     discount: 15,
     category: "Electronics",
     image: product_img
   },
 
   // Woman's Fashion
   {
     id: 5,
     title: "Elegant Evening Dress",
     price: 299,
     originalPrice: 399,
     rating: 5,
     reviews: 28,
     discount: 25,
     category: "Woman's Fashion",
     image: product_img
   },
   {
     id: 6,
     title: "Designer Handbag",
     price: 899,
     rating: 5,
     reviews: 55,
     isNew: true,
     category: "Woman's Fashion",
     image: product_img
   },
   {
     id: 7,
     title: "Summer Collection Blouse",
     price: 89,
     originalPrice: 129,
     rating: 4,
     reviews: 42,
     discount: 30,
     category: "Woman's Fashion",
     image: product_img
   },
 
   // Men's Fashion
   {
     id: 8,
     title: "Classic Fit Suit",
     price: 599,
     originalPrice: 799,
     rating: 5,
     reviews: 35,
     discount: 25,
     category: "Men's Fashion",
     image: product_img
   },
   {
     id: 9,
     title: "Leather Business Shoes",
     price: 189,
     rating: 4,
     reviews: 28,
     isNew: true,
     category: "Men's Fashion",
     image: product_img
   },
   {
     id: 10,
     title: "Premium Cotton Shirt",
     price: 79,
     originalPrice: 99,
     rating: 5,
     reviews: 48,
     discount: 20,
     category: "Men's Fashion",
     image: product_img
   },
 
   // Sports & Outdoor
   {
     id: 11,
     title: "Nike Sports Shoes",
     price: 960,
     originalPrice: 1160,
     rating: 5,
     reviews: 65,
     discount: 35,
     category: "Sports & Outdoor",
     image: product_img
   },
   {
     id: 12,
     title: "Professional Tennis Racket",
     price: 199,
     rating: 5,
     reviews: 32,
     isNew: true,
     category: "Sports & Outdoor",
     image: product_img
   },
   {
     id: 13,
     title: "Camping Tent 4-Person",
     price: 349,
     originalPrice: 399,
     rating: 4,
     reviews: 55,
     discount: 15,
     category: "Sports & Outdoor",
     image: product_img
   },
 
   // Baby's & Toys
   {
     id: 14,
     title: "Baby Stroller",
     price: 560,
     rating: 5,
     reviews: 65,
     isNew: true,
     category: "Baby's & Toys",
     image: product_img
   },
   {
     id: 15,
     title: "Educational Building Blocks",
     price: 49,
     originalPrice: 69,
     rating: 5,
     reviews: 42,
     discount: 30,
     category: "Baby's & Toys",
     image: product_img
   },
   {
     id: 16,
     title: "Baby Care Set",
     price: 129,
     rating: 4,
     reviews: 38,
     isNew: true,
     category: "Baby's & Toys",
     image: product_img
   },
 
   // Home & Lifestyle
   {
     id: 17,
     title: "Modern Coffee Table",
     price: 399,
     originalPrice: 499,
     rating: 5,
     reviews: 48,
     discount: 20,
     category: "Home & Lifestyle",
     image: product_img
   },
   {
     id: 18,
     title: 'Smart LED TV 55"',
     price: 899,
     rating: 5,
     reviews: 75,
     isNew: true,
     category: "Home & Lifestyle",
     image: product_img
   },
   {
     id: 19,
     title: "Automatic Coffee Maker",
     price: 199,
     originalPrice: 249,
     rating: 4,
     reviews: 52,
     discount: 20,
     category: "Home & Lifestyle",
     image: product_img
   },
 
   // Health & Beauty
   {
     id: 20,
     title: "Skincare Gift Set",
     price: 149,
     originalPrice: 199,
     rating: 5,
     reviews: 68,
     discount: 25,
     category: "Health & Beauty",
     image: product_img
   },
   {
     id: 21,
     title: "Electric Hair Dryer",
     price: 89,
     rating: 4,
     reviews: 45,
     isNew: true,
     category: "Health & Beauty",
     image: product_img
   },
   {
     id: 22,
     title: "Premium Makeup Kit",
     price: 299,
     originalPrice: 399,
     rating: 5,
     reviews: 58,
     discount: 25,
     category: "Health & Beauty",
     image: product_img
   },
 
   // Medicine
   {
     id: 23,
     title: "First Aid Kit",
     price: 45,
     rating: 5,
     reviews: 72,
     isNew: true,
     category: "Medicine",
     image: product_img
   },
   {
     id: 24,
     title: "Digital Blood Pressure Monitor",
     price: 89,
     originalPrice: 119,
     rating: 4,
     reviews: 48,
     discount: 25,
     category: "Medicine",
     image: product_img
   },
 
   // Groceries & Pets
   {
     id: 25,
     title: "Premium Pet Food Set",
     price: 79,
     originalPrice: 99,
     rating: 5,
     reviews: 45,
     discount: 20,
     category: "Groceries & Pets",
     image: product_img
   },
   {
     id: 26,
     title: "Organic Food Bundle",
     price: 159,
     rating: 4,
     reviews: 38,
     isNew: true,
     category: "Groceries & Pets",
     image: product_img
   },
   // ... rest of the products
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
  );
};

export default ProductPage;
