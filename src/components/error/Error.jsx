/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

const Error = ({ nav, title, desc }) => {
  return (
    <section className="w-4/5 mx-auto">

      <div className="text-sm text-black mt-12">
        <p className="opacity-50 inline">Home / </p>
        <p className="opacity-100 inline">{nav}</p>
      </div>

      <div className="text-center mt-12">
        <h1 className="text-[110px] font-medium">{title}</h1>
        <p className="mt-4">{desc}</p>
      </div>

      <div className="text-center mt-20">
        <button className="font-medium text-[#FAFAFA] bg-[#DB4444] py-4 px-12 rounded-sm">
          Back to home page
        </button>
      </div>
      
    </section>
  );
};

Error.propTypes = {
  nav: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Error;
