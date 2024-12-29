import React from "react";
import PropTypes from "prop-types";

const InvoiceProduct = ({ title, image, total }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src={image}
          alt="product"
          className="w-12 h-12 object-cover rounded"
        />
        <p>{title}</p>
      </div>
      <p>${total}</p>
    </div>
  );
};

InvoiceProduct.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default InvoiceProduct;
