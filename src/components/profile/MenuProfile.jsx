// MenuProfile.jsx
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MenuProfile = () => {
  const location = useLocation();
  const path = location.pathname.split('/').pop();

  return (
    <>
      <div className='block md:hidden'>
        <div className='flex gap-4'>
          <NavLink to='/my-account/profile' className={({ isActive }) => `${isActive ? 'bg-[#DB4444] border-[#DB4444] text-white' : ''} border border-gray-500 py-2 px-3 rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white`}>
            <p className='text-sm font-medium'>My Profile</p>
          </NavLink>
          <NavLink to='/my-account/address' className={({ isActive }) => `${isActive ? 'bg-[#DB4444] border-[#DB4444] text-white' : ''} border border-gray-500 py-2 px-3 rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white`}>
            <p className='text-sm font-medium'>Address Book</p>
          </NavLink>
          <NavLink to='/my-account/orders' className={({ isActive }) => `${isActive ? 'bg-[#DB4444] border-[#DB4444] text-white' : ''} border border-gray-500 py-2 px-3 rounded hover:border-[#DB4444] hover:bg-[#DB4444] hover:text-white`}>
            <p className='text-sm font-medium'>My Orders</p>
          </NavLink>
        </div>
      </div>
      <div className='hidden md:block'>
        <nav className='space-y-3 p-4'>
          <p className='font-medium'>Manage My Account</p>
          <ul className='md:pl-8 space-y-2'>
            <li className='text-gray-500 hover:text-[#DB4444]'>
              <NavLink to='/my-account/profile' className={({ isActive }) => (isActive ? 'text-[#DB4444]' : '')}>
                My Profile
              </NavLink>
            </li>
            <li className='text-gray-500 hover:text-[#DB4444]'>
              <NavLink to='/my-account/address' className={({ isActive }) => (isActive ? 'text-[#DB4444]' : '')}>
                Address Book
              </NavLink>
            </li>
          </ul>
          <p className='font-medium'>Manage Orders</p>
          <ul className='md:pl-8'>
            <li className='text-gray-500 hover:text-[#DB4444]'>
              <NavLink to='/my-account/orders' className={({ isActive }) => (isActive ? 'text-[#DB4444]' : '')}>
                My Orders
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MenuProfile;
