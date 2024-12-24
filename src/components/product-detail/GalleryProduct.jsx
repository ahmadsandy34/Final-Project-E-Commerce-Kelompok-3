import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const GalleryProduct = () => {
  const images = [
    "https://picsum.photos/730/480",
    "https://picsum.photos/170/130",
    "https://picsum.photos/170/130",
    "https://picsum.photos/170/130",
    "https://picsum.photos/170/130",
  ];

  return (
    <div className="w-full">
      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          pagination={{
            type: "fraction",
            el: ".custom-pagination",
            formatFractionCurrent: (number) => number,
            formatFractionTotal: (number) => number,
            renderFraction: (currentClass, totalClass) => {
              return `<span class="px-3 absolute bottom-4 left-4 z-10 px-2 py-1 text-black bg-white border border-black rounded-md text-sm"><span class="${currentClass}">1</span>/<span class="${totalClass}">${images.length}</span></span>`;
            },
          }}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full relative"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`product ${index + 1}`}
                className="w-full h-[240px] sm:h-[360px] object-cover"
              />
            </SwiperSlide>
          ))}
          <div className="custom-pagination"></div>
        </Swiper>
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block">
        <img
          src={images[0]}
          alt="product"
          className="w-full h-[480px] object-cover"
        />
        <div className="flex space-x-3 mt-4 overflow-x-auto pb-2">
          {images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product thumbnail ${index + 1}`}
              className="w-full h-[130px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryProduct;
