/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import BannerSection from "../components/homepage/BannerSection";
import BannerCategoriesSection from "../components/homepage/BannerCategoriesSection";
import CategoriesSection from "../components/homepage/CategoriesSection";
import BestSellingSection from "../components/homepage/BestSellingSection";
import AllProductSection from "../components/homepage/AllProductSection";
import RecommendedSection from "../components/homepage/RecommendedSection";
import ServicesSection from "../components/homepage/ServicesSection";
import SEO from "../components/SEO";

const Homepage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <>
      <SEO
        title="Exclusive - Exclusive Deals, Everyday"
        description="Welcome to Exclusive! Explore our best-selling products, recommended items, and the latest categories."
        keywords="Exclusive, e-commerce, best-selling products, categories, recommended items"
      />
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
