// BannerCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ArrowRight from "../../assets/home/arrowright.svg";

const BannerCard = ({ logo, title, desc, image, type }) => {
  return (
    <>
      {type === 1 && (
        <section className="hidden lg:block w-4/5 mx-auto mt-20 bg-black text-white relative h-[250px] lg:h-[350px] overflow-hidden">
          <div className="absolute top-4 left-4 pl-6 pt-6 z-10">
            <div className="flex flex-row gap-4 items-center">
              <img src={logo} alt="Apple" />
              <p className="">{title}</p>
            </div>
            <div className="w-3/5 mt-4">
              <p className="text-5xl font-semibold">{desc}</p>
            </div>
            <div className="mt-12">
              <Link to="/product/detail" className="contents">
                <button className="flex flex-row gap-2 items-center font-medium hover:underline underline-offset-8">
                  Shop Now <img src={ArrowRight} alt="Arrow Right" />
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute inset-0 flex justify-center items-center z-0">
            <img 
              src={image} 
              alt="Hero" 
              className="max-w-full max-h-full transform transition-transform duration-500 ease-in-out"
              style={{
                animation: 'fadeInOut 500ms ease-in-out'
              }}
            />
          </div>
        </section>
      )}

      {type === 2 && (
        <section className="lg:hidden bg-black text-white relative h-[250px] flex flex-col justify-center overflow-hidden">
          <div className="flex flex-row gap-4 items-center justify-center my-4">
            <img src={logo} alt="Apple" />
            <p className="font-medium">{title}</p>
          </div>
          <div className="grid grid-cols-2 items-start h-full pt-2">
            <div className="flex flex-col justify-center items-start pl-6">
              <p className="font-semibold mb-4">{desc}</p>
              <Link to="/product/detail" className="contents">
                <button className="flex flex-row gap-2 items-center font-medium text-xs hover:underline underline-offset-8">
                  Shop Now <img src={ArrowRight} alt="Arrow Right" />
                </button>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={image}
                alt="Hero"
                className="max-w-full max-h-full object-contain transform transition-transform duration-500 ease-in-out"
                style={{
                  animation: 'fadeInOut 500ms ease-in-out'
                }}
              />
            </div>
          </div>
        </section>
      )}

      <style>
        {`
          @keyframes fadeInOut {
            0% {
              opacity: 0;
              transform: scale(0.95);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
};

BannerCard.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
};

export default BannerCard;