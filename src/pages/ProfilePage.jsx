import React, { useEffect, useRef } from "react";
import Breadcrumb from "../components/profile/Breadcrumb";
import MenuProfile from "../components/profile/MenuProfile";
import MainComponent from "../components/profile/MainComponent";
import SEO from "../components/SEO";

const ProfilePage = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <SEO
        title="Your Profile - Exclusive"
        description="Manage your Exclusive account, view order history, and update your details all in one place."
        keywords="profile, account, exclusive store, order history"
        robots="noindex, follow"
      />
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto px-4 py-4" ref={ref}>
          <div className="flex justify-between items-center mb-12">
            <Breadcrumb />
            <p>
              Welcome! <span className="text-[#DB4444]">Deni</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-x-16">
            <MenuProfile />
            <MainComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;