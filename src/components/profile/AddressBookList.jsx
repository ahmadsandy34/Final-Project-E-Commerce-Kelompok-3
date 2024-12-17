import React from "react";
import DeleteIcon from "../../assets/profile/delete-icon.svg";
import PenIcon from "../../assets/profile/pen-icon.svg";

const AddressBookList = ({ setActiveComponent, setIsEdit }) => {
  const handleClick = (component, isEdit) => {
    setActiveComponent(component);
    setIsEdit(isEdit);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-[#DB4444]">Your Address</h1>
      <div className="mt-4 space-y-4 h-[400px] overflow-y-auto">
        <div className="bg-gray-100 p-4 rounded p-2 space-y-1">
          <p className="font-bold">Deni Irawan | user@lumoshive.com</p>
          <div className="flex justify-between">
            <p>
              Komp. Ruko Green Garden Blk. Z, Jl. Panjang Arteri Klp. Dua Raya
              No. 5
            </p>
            <div className="space-x-3 min-w-[80px] flex justify-end">
              <button onClick={() => handleClick("address-book-form", true)}>
                <img
                  src={PenIcon}
                  alt="Edit Icon"
                  className="w-6 h-6 hover:text-yellow-600"
                />
              </button>
              <button>
                <img
                  src={DeleteIcon}
                  alt="Delete Icon"
                  className="w-6 h-6 hover:text-[#DB4444]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleClick("address-book-form", false)}
          className="bg-[#DB4444] text-white py-3 px-10 rounded hover:bg-[#BE3636FF]"
        >
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default AddressBookList;
