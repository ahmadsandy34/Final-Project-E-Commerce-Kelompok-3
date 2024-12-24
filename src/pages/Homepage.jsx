/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import BannerSection from "../components/homepage/BannerSection";
import BannerCategoriesSection from "../components/homepage/BannerCategoriesSection";
import CategoriesSection from "../components/homepage/CategoriesSection";
import BestSellingSection from "../components/homepage/BestSellingSection";
import AllProductSection from "../components/homepage/AllProductSection";
import RecommendedSection from "../components/homepage/RecommendedSection";
import ServicesSection from "../components/homepage/ServicesSection";

const Homepage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <main ref={ref}>
        <BannerSection />
        <CategoriesSection />
        <BestSellingSection />
        <BannerCategoriesSection />
        <AllProductSection />
        <RecommendedSection />
        <ServicesSection />
      </main>
    </>
  );
};

export default Homepage;
