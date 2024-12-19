import React from "react";

const AddressBookForm = ({ setActiveComponent, isEdit }) => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-[#DB4444]">
        {isEdit ? "Update" : "Create"} Your Address
      </h1>
      <form className="mt-4 space-y-4">
        <div className="h-[400px]">
          <div className="grid md:grid-flow-col justify-stretch gap-x-12">
            <div className="space-y-3">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-100 text-gray-500 rounded-md p-2"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full bg-gray-100 text-gray-500 rounded-md p-2"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              className="w-full h-[100px] bg-gray-100 text-gray-500 rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-end gap-4">
          <button
            onClick={() => setActiveComponent("address-book-list")}
            className="p-2 hover:text-[#DB4444]"
          >
            Cancel
          </button>
          <button className="bg-[#DB4444] text-white py-3 px-3 md:px-10 rounded-md hover:bg-[#BE3636FF]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddressBookForm;
