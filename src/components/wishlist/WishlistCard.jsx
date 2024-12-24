import React from "react";
import PropTypes from "prop-types";

const WishlistCard = ({
  title,
  price,
  originalPrice,
  rating,
  reviews,
  isNew,
  discount,
  image,
  outOfStock,
  type,
}) => {
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
        <div className="relative h-32 lg:h-64 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain bg-gray-100"
          />
          {discount && (
            <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-2 py-0.5 rounded">
              -{discount}%
            </span>
          )}
          {isNew && (
            <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-xs px-2 py-0.5 rounded">
              NEW
            </span>
          )}

          {/* Trash icon */}
          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.25 5.25L3.75 5.25001"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.75 9.75V15.75"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.25 9.75V15.75"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.75 5.25V19.5C18.75 19.6989 18.671 19.8897 18.5303 20.0303C18.3897 20.171 18.1989 20.25 18 20.25H6C5.80109 20.25 5.61032 20.171 5.46967 20.0303C5.32902 19.8897 5.25 19.6989 5.25 19.5V5.25"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 5.25V3.75C15.75 3.35218 15.592 2.97064 15.3107 2.68934C15.0294 2.40804 14.6478 2.25 14.25 2.25H9.75C9.35218 2.25 8.97064 2.40804 8.68934 2.68934C8.40804 2.97064 8.25 3.35218 8.25 3.75V5.25"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Add to cart overlay */}
        {!outOfStock && (
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
        )}
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

WishlistCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  originalPrice: PropTypes.number,
  rating: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  isNew: PropTypes.bool,
  discount: PropTypes.number,
  image: PropTypes.string.isRequired,
  outOfStock: PropTypes.bool,
  type: PropTypes.number.isRequired,
};

export default WishlistCard;
