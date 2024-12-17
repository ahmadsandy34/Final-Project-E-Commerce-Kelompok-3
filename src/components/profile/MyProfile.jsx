import React from "react";

const MyProfile = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold text-[#DB4444]">
        Edit Your Profile
      </h1>
      <form className="mt-4 space-y-4">
        <div className="grid grid-flow-col justify-stretch gap-12">
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
          <h2>Password Changes</h2>
          <input
            type="password"
            id="current_password"
            placeholder="Current Password"
            className="w-full bg-gray-100 text-gray-500 rounded-md p-2"
          />
          <input
            type="password"
            id="new_password"
            placeholder="New Password"
            className="w-full bg-gray-100 text-gray-500 rounded-md p-2"
          />
          <input
            type="password"
            id="confirm_new_password"
            placeholder="Confirm New Password"
            className="w-full bg-gray-100 text-gray-500 rounded-md p-2"
          />
        </div>
        <div className="flex justify-end gap-4 pt-24">
          <button className="p-2 hover:text-[#DB4444]">Cancel</button>
          <button className="bg-[#DB4444] text-white py-3 px-10 rounded-md hover:bg-[#BE3636FF]">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
