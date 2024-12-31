/* eslint-disable no-unused-vars */
import React from "react";
import DeleteIcon from "../../assets/profile/delete-icon.svg";
import PenIcon from "../../assets/profile/pen-icon.svg";
import PropTypes from "prop-types";

const AddressBookCard = ({ handleClick, path }) => {
  return (
    <div className="bg-gray-100 p-4 rounded p-2 space-y-1">
      <p className="font-bold">Deni Irawan | user@lumoshive.com</p>
      <div className="flex justify-between">
        <p>
          Komp. Ruko Green Garden Blk. Z, Jl. Panjang Arteri Klp. Dua Raya No. 5
        </p>
        <div className="space-x-3 min-w-[80px] flex justify-end">
          <button onClick={() => handleClick("address-book-form", true)}>
            <img
              src={PenIcon}
              alt="Edit Icon"
              className="w-6 h-6 hover:text-yellow-600"
            />
          </button>
          {path === "address-book-list" && (
            <button>
                <img
                src={DeleteIcon}
                alt="Delete Icon"
                className="w-6 h-6 hover:text-[#DB4444]"
                />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

AddressBookCard.propTypes = {
  handleClick: PropTypes.func,
  path: PropTypes.string,
};

export default AddressBookCard;
