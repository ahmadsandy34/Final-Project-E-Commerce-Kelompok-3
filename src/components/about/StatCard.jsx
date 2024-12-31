import React from "react";
import PropTypes from "prop-types";

const StatCard = ({ number, text, image }) => {
  return (
    <div
      className="group text-center p-4 lg:p-6 rounded-lg border-4 transition-transform transform hover:scale-105 bg-white hover:bg-[#DB4444] hover:text-white"
    >
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gray-300 group-hover:bg-white/20 transition-colors">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-black group-hover:bg-white transition-colors">
            <img
              src={image}
              alt={text}
              className="w-8 h-8 object-cover brightness-100 group-hover:brightness-0 duration-200"
            />
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{number}</h3>
      <p className="text-sm text-gray-600 group-hover:text-white transition-colors">
        {text}
      </p>
    </div>
  );
};

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default StatCard;
