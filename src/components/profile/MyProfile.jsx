/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const MyProfile = () => {
  // Initial form state
  const [formData, setFormData] = useState({
    name: 'Deni Irawan',
    email: 'deni@lumoshive.com',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Error state for validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  // Handle input changes with sanitization
  const handleChange = (e) => {
    const { id, value } = e.target;
    // Sanitize input
    const sanitizedValue = DOMPurify.sanitize(value);
    setFormData((prev) => ({
      ...prev,
      [id]: sanitizedValue,
    }));

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => ({
        ...prev,
        [id]: '',
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (formData.newPassword) {
      if (!formData.currentPassword) {
        tempErrors.currentPassword = 'Current password is required';
        isValid = false;
      }
      if (formData.newPassword.length < 8) {
        tempErrors.newPassword = 'Password must be at least 8 characters';
        isValid = false;
      }
      if (formData.newPassword !== formData.confirmNewPassword) {
        tempErrors.confirmNewPassword = 'Passwords do not match';
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Sanitize all data before submission
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
        confirmNewPassword: formData.confirmNewPassword,
      };

      // Here you would typically send the sanitizedData to your API
      console.log('Form submitted with:', sanitizedData);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    // Reset form to initial values
    setFormData({
      name: 'Deni Irawan',
      email: 'deni@lumoshive.com',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
    setErrors({});
  };

  return (
    <div>
      <h1 className='text-xl font-semibold text-[#DB4444]'>Edit Your Profile</h1>
      <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
        <div className='grid md:grid-flow-col justify-stretch gap-x-12'>
          <div className='space-y-3'>
            <label htmlFor='name'>Full Name</label>
            <input type='text' id='name' value={formData.name} onChange={handleChange} className='w-full bg-gray-100 text-gray-500 rounded-md p-2' />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>
          <div className='space-y-3'>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={formData.email} onChange={handleChange} className='w-full bg-gray-100 text-gray-500 rounded-md p-2' />
            {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
          </div>
        </div>
        <div className='space-y-3'>
          <h2>Password Changes</h2>
          <div>
            <input type='password' id='currentPassword' value={formData.currentPassword} onChange={handleChange} placeholder='Current Password' className='w-full bg-gray-100 text-gray-500 rounded-md p-2' />
            {errors.currentPassword && <p className='text-red-500 text-sm'>{errors.currentPassword}</p>}
          </div>
          <div>
            <input type='password' id='newPassword' value={formData.newPassword} onChange={handleChange} placeholder='New Password' className='w-full bg-gray-100 text-gray-500 rounded-md p-2' />
            {errors.newPassword && <p className='text-red-500 text-sm'>{errors.newPassword}</p>}
          </div>
          <div>
            <input type='password' id='confirmNewPassword' value={formData.confirmNewPassword} onChange={handleChange} placeholder='Confirm New Password' className='w-full bg-gray-100 text-gray-500 rounded-md p-2' />
            {errors.confirmNewPassword && <p className='text-red-500 text-sm'>{errors.confirmNewPassword}</p>}
          </div>
        </div>
        <div className='flex justify-end gap-4 pt-24'>
          <button type='button' onClick={handleCancel} className='p-2 hover:text-[#DB4444]'>
            Cancel
          </button>
          <button type='submit' className='bg-[#DB4444] text-white py-3 px-10 rounded-md hover:bg-[#BE3636FF]'>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
