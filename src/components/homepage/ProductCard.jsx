/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({
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
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain bg-gray-100"
          />
          {isNew && (
            <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded">
              NEW
            </span>
          )}
          {discount && (
            <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded">
              -{discount}%
            </span>
          )}
        </div>

        <button className="absolute bottom-0 left-0 right-0 bg-black text-white py-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-full group-hover:translate-y-0">
          Add To Cart
        </button>
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

export default ProductCard;
