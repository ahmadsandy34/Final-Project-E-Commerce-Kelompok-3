import React from "react";
import PropTypes from "prop-types";

const StatCard = ({ number, text, highlighted = false, image }) => {
  return (
    <div
      className={`text-center p-4 lg:p-6 rounded-lg border-4 transition-shadow ${
        highlighted ? "bg-[#DB4444] text-white" : "bg-white"
      }`}
    >
      <div className="flex justify-center mb-4">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            highlighted ? "bg-white/20" : "bg-gray-300"
          }`}
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center ${
              highlighted ? "bg-white" : "bg-black"
            }`}
          >
            <img src={image} alt={text} className="w-8 h-8 object-cover" />
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{number}</h3>
      <p
        className={`text-sm ${
          highlighted ? "text-white/90" : "text-gray-600"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

StatCard.propTypes = {
  number: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
  image: PropTypes.string.isRequired,
};

export default StatCard;
