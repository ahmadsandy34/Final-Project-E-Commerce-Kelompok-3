/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "../../assets/home/hero.svg";
import Apple from "../../assets/home/apple.svg";
import ArrowRight from "../../assets/home/arrowright.svg";

const BannerSection = () => {
  return (
    <>
      <section className="hidden lg:block w-4/5 mx-auto mt-20 bg-black text-white relative h-[250px] lg:h-[350px]">
        <div className="absolute top-4 left-4 pl-6 pt-6 z-10">
          <div className="flex flex-row gap-4 items-center">
            <img src={Apple} alt="Apple" />
            <p className="">iPhone 14 Series</p>
          </div>
          <div className="w-3/5 mt-4">
            <p className="text-5xl font-semibold">Up to 10% off Voucher</p>
          </div>
          <div className="mt-12">
            <button className="flex flex-row gap-2 items-center font-medium">
              Shop Now <img src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <img src={Hero} alt="Hero" className="max-w-full max-h-full" />
        </div>
      </section>

      <section className="lg:hidden mt-20 bg-black text-white relative h-[250px] flex flex-col justify-center">
        <div className="flex flex-row gap-4 items-center justify-center my-4">
          <img src={Apple} alt="Apple" />
          <p className="font-medium">iPhone 14 Series</p>
        </div>
        <div className="grid grid-cols-2 items-start h-full pt-2">
          <div className="flex flex-col justify-center items-start pl-6">
            <p className="font-semibold mb-4">Up to 10% off Voucher</p>
            <button className="flex flex-row gap-2 items-center font-medium text-xs underline underline-offset-8">
              Shop Now <img src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Hero}
              alt="Hero"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerSection;
