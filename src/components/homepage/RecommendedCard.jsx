/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const RecommendedCard = ({image, title, description}) => {
  return (
    <div className="h-[173px] w-full bg-black flex justify-center items-center relative">
      <img src={image} alt={title} className="w-[100px] h-[100px]" />
      <div className="absolute bottom-1 left-1 pl-2 pb-2 text-white">
        <p className="text-xs font-semibold mb-2">{title}</p>
        <p className="text-[8px] mb-3">
          {description}
        </p>
        <button className="text-[8px] underline underline-offset-4">
          Shop Now
        </button>
      </div>
    </div>
  );
};

RecommendedCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default RecommendedCard;
