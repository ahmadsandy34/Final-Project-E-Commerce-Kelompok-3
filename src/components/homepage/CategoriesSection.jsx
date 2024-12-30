import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Right from "../../assets/home/right.svg";
import Left from "../../assets/home/left.svg";
import CategoryCard from "../../components/homepage/CategoryCard";
import Phone from "../../assets/home/phone.svg";
import Computer from "../../assets/home/computer.svg";
import SmartWatch from "../../assets/home/smartwatch.svg";
import Camera from "../../assets/home/camera.svg";
import Headphones from "../../assets/home/headphone.svg";
import Gaming from "../../assets/home/gamepad.svg";
import Mouse from "../../assets/home/mouse.svg";
import Keyboard from "../../assets/home/keyboard.svg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CategoriesSection = () => {
  const categories = [
    { title: "Phones", image: Phone },
    { title: "Computers", image: Computer },
    { title: "SmartWatch", image: SmartWatch },
    { title: "Camera", image: Camera },
    { title: "Headphones", image: Headphones },
    { title: "Gaming", image: Gaming },
    { title: "Mouse", image: Mouse },
    { title: "Keyboard", image: Keyboard },
  ];

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
            className="custom-prev-button rounded-full bg-gray-100 p-2 disabled:opacity-30"
          >
            <img src={Left} alt="Left" />
          </button>
          <button
            className="custom-next-button rounded-full bg-gray-100 p-2 disabled:opacity-30"
          >
            <img src={Right} alt="Right" />
          </button>
        </div>
      </div>
      
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={16}
        navigation={{
          prevEl: '.custom-prev-button',
          nextEl: '.custom-next-button',
        }}
        breakpoints={{
          1024: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        className="mt-4 lg:mt-8"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <Link to="/products/category/electronics" className="contents">
              <CategoryCard {...category} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CategoriesSection;