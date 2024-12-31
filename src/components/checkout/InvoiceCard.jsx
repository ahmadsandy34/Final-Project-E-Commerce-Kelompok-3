import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import InvoiceProduct from "./InvoiceProduct";
import InvoiceDetail from "../cart/InvoiceDetail";

const InvoiceCard = ({ cart, total }) => {
  return (
    <div className="space-y-4">
      {cart.map((item) => (
        <InvoiceProduct
          key={item.id}
          title={item.title}
          image={item.image}
          total={item.price * item.quantity}
        />
      ))}
      <InvoiceDetail total={total} />
      <div>
        <form className="space-y-3">
          <div>
            <Link
              to="/checkout/status"
              state={{ cart, total }}
              className="contents"
            >
              <button className="bg-[#DB4444] text-white font-medium py-3 px-8 w-full sm:w-64 rounded">
                Place Order
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

InvoiceCard.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  total: PropTypes.number.isRequired,
};

export default InvoiceCard;
