/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import ArrowRight from "../../assets/home/arrowright.svg";

const BannerCategoriesCard = ({ title, image }) => {
  return (
    <section className="lg:w-4/5 lg:mx-auto mt-4 lg:mt-20 bg-black text-white relative h-[200px] lg:h-[500px] flex items-center">
    <div className="flex-1 pl-6 lg:pl-12">
      <p className="text-xs lg:text-base font-semibold lg:text-[#00FF66] mb-4 lg:mb-16">
        Categories
      </p>
      <h2 className="w-full lg:w-8/12 lg:text-5xl font-semibold mb-2 lg:mb-20">
        {title}
      </h2>
      <Link to="/products/category/electronics" className="contents">
      <button className="lg:bg-[#00FF66] text-xs lg:text-base lg:py-4 lg:px-12 lg:rounded-md hover:underline underline-offset-8 lg:no-underline items-center flex gap-2 lg:gap-0">
        Buy Now<span className="hidden lg:inline">!</span>{" "}
        <img
          src={ArrowRight}
          alt="Arrow Right"
          className="lg:hidden inline"
        />
      </button>
      </Link>
    </div>
    <div className="flex-1 flex justify-start">
      <img src={image} alt="Hero" className="max-w-full max-h-full" />
    </div>
  </section>
  )
}

BannerCategoriesCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default BannerCategoriesCard