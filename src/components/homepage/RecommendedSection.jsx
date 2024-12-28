/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import PS5 from "../../assets/home/ps5.svg";
import Woman from "../../assets/home/woman.svg";
import Speaker from "../../assets/home/speaker.svg";
import Perfume from "../../assets/home/perfume.svg";
import RecommendedCard from "./RecommendedCard";

const RecommendedSection = () => {
  const recommended = [
    {
      title: "PlayStation 5",
      description: "Black and White version of the PS5 coming out on sale.",
      image: PS5,
    },
    {
      title: "Women’s Collections",
      description: "Featured woman collections that give you another vibe.",
      image: Woman,
    },
    {
      title: "Speakers",
      description: "Amazon wireless speakers",
      image: Speaker,
    },
    {
      title: "Perfume",
      description: "GUCCI INTENSE OUD EDP",
      image: Perfume,
    },
  ];
  return (
    <section className="w-4/5 mx-auto mt-4 lg:mt-20">
      <div className="hidden lg:flex items-center gap-2">
        <div className="w-1 h-6 bg-[#DB4444]"></div>
        <p className="text-[#DB4444] font-semibold">Featured</p>
      </div>
      <div className="flex items-center mt-2">
        <h2 className="text-sm lg:text-4xl font-semibold">Recommended</h2>
      </div>

      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-8 lg:h-[600px]">
        <Link to="/product/detail" className="contents">
          <div className="bg-black w-full h-full flex justify-center items-end relative">
            <img src={PS5} alt="PS5" />
            <div className="absolute bottom-3 left-3 pl-4 pb-4 text-white">
              <p className="text-2xl font-semibold mb-2">PlayStation 5</p>
              <p className="w-3/4 text-sm mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="hover:underline underline-offset-4">Shop Now</button>
            </div>
          </div>
        </Link>
        <div className="grid grid-rows-2 gap-8">
          <Link to="/product/detail" className="contents">
            <div className="bg-black w-full h-full flex justify-end items-center relative">
              <img src={Woman} alt="Woman" />
              <div className="absolute bottom-3 left-3 pl-4 pb-4 text-white">
                <p className="text-2xl font-semibold mb-2">
                  Women’s Collections
                </p>
                <p className="w-3/4 text-sm mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="hover:underline underline-offset-4">
                  Shop Now
                </button>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-2 gap-8">
            <Link to="/product/detail" className="contents">
              <div className="bg-black w-full h-full flex justify-center items-center relative">
                <img src={Speaker} alt="Speaker" />
                <div className="absolute bottom-3 left-3 pl-4 pb-4 text-white">
                  <p className="text-2xl font-semibold mb-2">Speakers</p>
                  <p className="text-sm mb-4">Amazon wireless speakers</p>
                  <button className="hover:underline underline-offset-4">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
            <Link to="/product/detail" className="contents">
              <div className="bg-black w-full h-full flex justify-center items-center relative">
                <img src={Perfume} alt="Perfume" />
                <div className="absolute bottom-3 left-3 pl-4 pb-4 text-white">
                  <p className="text-2xl font-semibold mb-2">Perfume</p>
                  <p className="text-sm mb-4">GUCCI INTENSE OUD EDP</p>
                  <button className="hover:underline underline-offset-4">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:hidden grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
        {recommended.map((product, index) => (
          <Link to="/product/detail" key={index} className="contents">
            <RecommendedCard key={index} {...product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecommendedSection;
