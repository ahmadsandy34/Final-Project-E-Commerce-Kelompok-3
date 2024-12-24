import React, { useState, useEffect, useRef } from "react";
import Breadcrumb from "../components/profile/Breadcrumb";
import MenuProfile from "../components/profile/MenuProfile";
import MainComponent from "../components/profile/MainComponent";

const ProfilePage = () => {
  const [activeMenu, setActiveMenu] = useState("my-profile");
  const handleActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4" ref={ref}>
        <div className="flex justify-between items-center mb-12">
          <Breadcrumb />
          <p>
            Welcome! <span className="text-[#DB4444]">Deni</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-16">
          <MenuProfile
            activeMenu={activeMenu}
            setActiveMenu={handleActiveMenu}
          />
          <MainComponent activeMenu={activeMenu} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
