import React from "react";
import PropTypes from "prop-types";

const InvoiceDetail = ({ total }) => {
  return (
    <div>
      <div className="flex justify-between border-b-2 border-gray-400 py-3">
        <p>Subtotal</p>
        <p>${total}</p>
      </div>
      <div className="flex justify-between border-b-2 border-gray-400 py-3">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between py-3">
        <p>Total</p>
        <p className="font-semibold">${total}</p>
      </div>
    </div>
  );
};

InvoiceDetail.propTypes = {
  total: PropTypes.number.isRequired,
};

export default InvoiceDetail;
