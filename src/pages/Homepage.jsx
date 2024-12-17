/* eslint-disable no-unused-vars */
import React from "react";
import ServiceCard from "../components/homepage/ServiceCard";

const Homepage = () => {
  const services = [
    {
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];
  return (
    <>
      <main className="w-4/5 mx-auto">

        <section className="mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </section>
        
      </main>
    </>
  );
};

export default Homepage;
