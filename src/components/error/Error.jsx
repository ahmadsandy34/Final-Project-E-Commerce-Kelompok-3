/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Error = ({ nav, title, desc }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return (
    <section className="w-4/5 mx-auto" ref={ref}>
      <div className="text-xs lg:text-sm text-black mt-4 lg:mt-12">
        <p className="lg:opacity-50 inline">Home / </p>
        <p className="font-semibold lg:font-normal lg:opacity-100 inline">
          {nav}
        </p>
      </div>

      <div className="text-center mt-20 lg:mt-12">
        <h1 className="text-2xl lg:text-[110px] lg:leading-tight font-medium">
          {title}
        </h1>
        <p className="text-[8px] lg:text-base mt-4">{desc}</p>
      </div>

      <div className="text-center mt-6 lg:mt-12">
        <Link to="/" className="contents">
          <button className="font-medium text-[#FAFAFA] bg-[#DB4444] py-3 px-6 lg:py-4 lg:px-12 rounded-sm">
            Back to home page
          </button>
        </Link>
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
