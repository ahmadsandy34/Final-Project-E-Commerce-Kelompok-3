import React from "react";
import TeamMember from "./TeamMember";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './TeamSection.css';
import { Pagination, Autoplay } from "swiper/modules";
import Tom from "../../assets/about/Tom.png";
import Emma from "../../assets/about/Emma.png";
import Will from "../../assets/about/Will.png";

const TeamSection = () => {
  const teamMembers = [
    { image: Tom, name: "Tom Cruise", role: "Founder & Chairman" },
    { image: Emma, name: "Emma Watson", role: "Managing Director" },
    { image: Will, name: "Will Smith", role: "Product Designer" },
    { image: Tom, name: "Tom Cruise", role: "Founder & Chairman" },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="mb-16">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true} // Enable loop
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <TeamMember {...member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamSection;