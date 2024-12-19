import React from "react";

const InvoiceProduct = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          src="https://picsum.photos/500/500"
          alt="product"
          className="w-12 h-12 object-cover rounded"
        />
        <p>Product Name</p>
      </div>
      <p>$650</p>
    </div>
  );
};

export default InvoiceProduct;
