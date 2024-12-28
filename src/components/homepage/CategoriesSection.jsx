import React, { useState } from "react";
import { Link } from "react-router-dom";
import Right from "../../assets/home/right.svg";
import Left from "../../assets/home/left.svg";
import CategoryCard from "../../components/homepage/CategoryCard";
import Phone from "../../assets/home/phone.svg";

const CategoriesSection = () => {
  const categories = [
    { title: "Phones", image: Phone },
    { title: "Laptops", image: Phone },
    { title: "Tablets", image: Phone },
    { title: "Smart Watches", image: Phone },
    { title: "Headphones", image: Phone },
    { title: "Accessories", image: Phone },
    { title: "Cameras", image: Phone },
    { title: "Gaming Consoles", image: Phone },
    { title: "Speakers", image: Phone },
    { title: "Monitors", image: Phone },
  ];

  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 6;

  const handleNext = () => {
    if (currentPage < Math.ceil(categories.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedCategories = categories.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  return (
    <section className="w-4/5 mx-auto mt-4 lg:mt-20">
      <div className="hidden lg:flex items-center gap-2">
        <div className="w-1 h-6 bg-[#DB4444]"></div>
        <p className="text-[#DB4444] font-semibold">Categories</p>
      </div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm lg:text-4xl font-semibold">
          Browse By Category
        </h2>
        <div className="hidden lg:flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1} 
            className="rounded-full bg-gray-100 p-2 disabled:opacity-30"
          >
            <img src={Left} alt="Left" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage === Math.ceil(categories.length / itemsPerPage)} 
            className="rounded-full bg-gray-100 p-2 disabled:opacity-30"
          >
            <img src={Right} alt="Right" />
          </button>
        </div>
      </div>
      <div className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-6 gap-4 mt-4 lg:mt-8">
        {displayedCategories.map((category, index) => (
          <Link to="/products/category/:category" key={index} className="contents">
            <CategoryCard {...category} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
