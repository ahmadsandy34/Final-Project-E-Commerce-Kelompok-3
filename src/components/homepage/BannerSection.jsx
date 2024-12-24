/* eslint-disable no-unused-vars */
import React from "react";
import BannerCard from "./BannerCard";
import Hero from "../../assets/home/hero.svg";
import Apple from "../../assets/home/apple.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const BannerSection = () => {
  const bannerData = [
    {
      logo: Apple,
      title: "iPhone 14 Series",
      desc: "Up to 10% off Voucher",
      image: Hero,
    },
    {
      logo: Apple,
      title: "iPhone 14 Series",
      desc: "Up to 10% off Voucher",
      image: Hero,
    },
    {
      logo: Apple,
      title: "iPhone 14 Series",
      desc: "Up to 10% off Voucher",
      image: Hero,
    },
  ];
  return (
    <>
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
            <BannerCard {...item} type={1} />
          </SwiperSlide>
        ))}
      </Swiper>

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
            <BannerCard {...item} type={2} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSection;
