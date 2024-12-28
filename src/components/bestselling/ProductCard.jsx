/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ProductCard = ({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  isNew,
  discount,
  image,
  type,
}) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i
          key={`full-${i}`}
          className="bi bi-star-fill text-yellow-400 me-1"
        ></i>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <i key="half" className="bi bi-star-half text-yellow-400 me-1"></i>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="bi bi-star text-yellow-400 me-1"></i>
      );
    }

    return stars;
  };

  return (
    <div className="group rounded-sm">
      <div className="relative">
        <Link
          to={`/product/detail`}
          className="relative h-32 lg:h-64 overflow-hidden block"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain bg-gray-100"
          />{" "}
          {isNew && (
            <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded">
              {" "}
              NEW{" "}
            </span>
          )}{" "}
          {discount && (
            <span className="absolute top-3 right-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded">
              {" "}
              -{discount}%{" "}
            </span>
          )}{" "}
        </Link>

        <div className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
          <button className="flex items-center justify-center w-full gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            Add To Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium mb-2">{title}</h3>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[#DB4444] font-medium">${price}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through">${originalPrice}</span>
          )}
          {type === 2 && (
            <div className="flex items-center gap-2">
              <div className="flex">{renderStars(rating)}</div>
              <span className="text-gray-500 text-sm">({reviews})</span>
            </div>
          )}
        </div>
        {type === 1 && (
          <div className="flex items-center gap-2">
            <div className="flex">{renderStars(rating)}</div>
            <span className="text-gray-500 text-sm">({reviews})</span>
          </div>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  isNew: PropTypes.bool,
  discount: PropTypes.number,
  image: PropTypes.string.isRequired,
  type: PropTypes.number.isRequired,
};
