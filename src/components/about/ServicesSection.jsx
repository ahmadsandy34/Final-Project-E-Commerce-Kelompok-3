// components/about/ServicesSection.jsx
import React from "react";
import ServiceCard from "./ServiceCard";
import Delivery from "../../assets/about/delivery.svg";
import Secure from "../../assets/about/secure.svg";
import Service from "../../assets/about/service.svg";

const ServicesSection = () => {
  const services = [
    {
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      image: Delivery,
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      image: Service,
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
      image: Secure,
    },
  ];

  return (
    <div className="bg-gray-50 lg:mt-4">
      <div className="max-w-screen-xl mx-auto px-4 pt-16 lg:py-16">
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="lg:hidden grid grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${
                index === 2 ? "col-span-2 col-start-1 mx-auto" : ""
              }`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
