import React from "react";
import PropTypes from "prop-types";
import Twitter from "../../assets/about/twitter.png";
import Instagram from "../../assets/about/instagram.png";
import LinkedIn from "../../assets/about/linkedin.png";

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="h-32 lg:h-auto w-full aspect-square object-cover rounded-lg mb-4"
      />
      <h3 className="text-sm lg:text-xl font-semibold mb-1">{name}</h3>
      <p className="text-[8px] lg:text-base mb-4">{role}</p>
      <div className="flex justify-center gap-4">
        <a href="#">
          <img src={Twitter} alt="Twitter" className="w-3 lg:w-full" />
        </a>
        <a href="#">
          <img src={Instagram} alt="Instagram" className="w-3 lg:w-full" />
        </a>
        <a href="#">
          <img src={LinkedIn} alt="LinkedIn" className="w-3 lg:w-full" />
        </a>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default TeamMember;
