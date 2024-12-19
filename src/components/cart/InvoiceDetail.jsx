import React from "react";

const InvoiceDetail = () => {
  return (
    <div>
      <div className="flex justify-between border-b-2 border-gray-400 py-3">
        <p>Subtotal</p>
        <p>$1750</p>
      </div>
      <div className="flex justify-between border-b-2 border-gray-400 py-3">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="flex justify-between py-3">
        <p>Total</p>
        <p className="font-semibold">$1750</p>
      </div>
    </div>
  );
};

export default InvoiceDetail;
