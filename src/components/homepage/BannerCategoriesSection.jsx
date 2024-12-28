/* eslint-disable no-unused-vars */
import React from "react";
import BannerCategoriesCard from "./BannerCategoriesCard";
import Hero from "../../assets/home/hero.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerCategoriesSection = () => {
  const bannerData = [
    {
      title: "Enhance Your Music Experience",
      image: Hero,
    },
    {
      title: "Enhance Your Music Experience",
      image: Hero,
    },
    {
      title: "Enhance Your Music Experience",
      image: Hero,
    },
  ];
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
    >
      {bannerData.map((item, index) => (
        <SwiperSlide key={index}>
          <BannerCategoriesCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerCategoriesSection;
