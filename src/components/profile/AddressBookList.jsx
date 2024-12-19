import React from "react";
import AddressBookCard from "./AddressBookCard";

const AddressBookList = ({ setActiveComponent, setIsEdit }) => {
  const handleClick = (component, isEdit) => {
    setActiveComponent(component);
    setIsEdit(isEdit);
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-[#DB4444]">Your Address</h1>
      <div className="mt-4 space-y-4 h-[400px] overflow-y-auto">
        <AddressBookCard handleClick={handleClick} path="address-book-list"/>
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
