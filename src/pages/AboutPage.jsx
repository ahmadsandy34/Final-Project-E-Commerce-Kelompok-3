import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../components/about/Breadcrumb";
import StorySection from "../components/about/StorySection";
import StatsSection from "../components/about/StatsSection";
import TeamSection from "../components/about/TeamSection";
import ServicesSection from "../components/about/ServicesSection";
import SEO from "../components/SEO";

const AboutPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <SEO
        title="About Us - Exclusive"
        description="Learn more about Exclusive, our story, and our team. Discover how we bring the best products to you."
        keywords="Exclusive, about us, our story, company mission, meet the team"
      />
      <div className="min-h-screen bg-white" ref={ref}>
        <Breadcrumb />
        <StorySection />
        <StatsSection />
        <TeamSection />
        <ServicesSection />
      </div>
    </>
  );
};

export default AboutPage;
