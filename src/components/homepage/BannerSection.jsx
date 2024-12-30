// BannerSection.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import BannerCard from './BannerCard';
import Hero from '../../assets/home/hero.svg';
import Apple from '../../assets/home/apple.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const BannerSection = () => {
  const bannerData = [
    {
      logo: Apple,
      title: 'iPhone 14 Series',
      desc: 'Up to 10% off Voucher',
      image: Hero,
    },
    {
      logo: Apple,
      title: 'iPhone 14 Series',
      desc: 'Up to 10% off Voucher',
      image: Hero,
    },
    {
      logo: Apple,
      title: 'iPhone 14 Series',
      desc: 'Up to 10% off Voucher',
      image: Hero,
    },
    {
      logo: Apple,
      title: 'iPhone 14 Series',
      desc: 'Up to 10% off Voucher',
      image: Hero,
    },
    {
      logo: Apple,
      title: 'iPhone 14 Series',
      desc: 'Up to 10% off Voucher',
      image: Hero,
    },
  ];

  const swiperParams = {
    modules: [Pagination, Autoplay],
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 0, // Added this line to remove space between slides
    className: 'mySwiper',
  };

  return (
    <>
      <style jsx>{`
      .swiper-pagination-bullet {
        width: 8px !important; /* Ukuran dot dikecilkan */
        height: 8px !important;
        background: #828282 !important;
        opacity: 1 !important;
      }
      
      .swiper-pagination-bullet-active {
        background: #DB4444 !important;
        border: 1.5px solid white !important; /* Border thickness dikurangi */
        width: 10px !important; /* Active dot sedikit lebih besar */
        height: 10px !important;
      }

      .swiper-pagination {
        display: flex !important;
        gap: 8px !important; /* Jarak antar dot dikurangi */
        justify-content: center !important;
        align-items: center !important;
        margin-bottom: 20px !important;
      }
    `}</style>

      {/* Desktop Banner */}
      <div className='relative hidden md:block'>
        <Swiper {...swiperParams}>
          {bannerData.map((banner, index) => (
            <SwiperSlide key={index}>
              <BannerCard {...banner} type={1} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Banner */}
      <div className='relative md:hidden'>
        <Swiper {...swiperParams}>
          {bannerData.map((banner, index) => (
            <SwiperSlide key={index}>
              <BannerCard {...banner} type={2} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BannerSection;
