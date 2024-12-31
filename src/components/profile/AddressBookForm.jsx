/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import DOMPurify from 'dompurify';
import PropTypes from 'prop-types';

const AddressBookForm = ({ setActiveComponent, isEdit }) => {
  // Initial mock data
  const mockData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    address: '123 Main Street, Apartment 4B, New York, NY 10001',
  };

  // Initial form state
  const [formData, setFormData] = useState(
    isEdit
      ? mockData
      : {
          name: '',
          email: '',
          address: '',
        }
  );

  // Error state for validation
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    address: '',
  });

  // No need for useEffect since we're handling initial data in useState

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
      tempErrors.name = 'Full name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.address.trim()) {
      tempErrors.address = 'Address is required';
      isValid = false;
    } else if (formData.address.trim().length < 10) {
      tempErrors.address = 'Please enter a complete address';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Sanitize all data before submission
      const sanitizedData = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        address: DOMPurify.sanitize(formData.address),
      };

      try {
        // Here you would typically send the sanitizedData to your API
        console.log('Form submitted with:', sanitizedData);

        // Simulate API call success
        setActiveComponent('address-book-list');
      } catch (error) {
        console.error('Error submitting form:', error);
        // Handle error appropriately
      }
    }
  };

  // Handle cancel
  const handleCancel = (e) => {
    e.preventDefault();
    setActiveComponent('address-book-list');
  };

  return (
    <div>
      <h1 className='text-xl font-semibold text-[#DB4444]'>{isEdit ? 'Update' : 'Create'} Your Address</h1>
      <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
        <div className='h-[400px]'>
          <div className='grid md:grid-flow-col justify-stretch gap-x-12'>
            <div className='space-y-3'>
              <label htmlFor='name'>Full Name</label>
              <input type='text' id='name' value={formData.name} onChange={handleChange} className='w-full bg-gray-100 text-gray-500 rounded-md p-2' placeholder='Enter your full name' />
              {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
            </div>
            <div className='space-y-3'>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' value={formData.email} onChange={handleChange} className='w-full bg-gray-100 text-gray-500 rounded-md p-2' placeholder='Enter your email' />
              {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
            </div>
          </div>
          <div className='space-y-3 mt-4'>
            <label htmlFor='address'>Address</label>
            <textarea id='address' value={formData.address} onChange={handleChange} className='w-full h-[100px] bg-gray-100 text-gray-500 rounded-md p-2 resize-none' placeholder='Enter your complete address' />
            {errors.address && <p className='text-red-500 text-sm'>{errors.address}</p>}
          </div>
        </div>
        <div className='flex justify-center md:justify-end gap-4'>
          <button onClick={handleCancel} type='button' className='p-2 hover:text-[#DB4444]'>
            Cancel
          </button>
          <button type='submit' className='bg-[#DB4444] text-white py-3 px-3 md:px-10 rounded-md hover:bg-[#BE3636FF]'>
            {isEdit ? 'Update Address' : 'Save Address'}
          </button>
        </div>
      </form>
    </div>
  );
};

AddressBookForm.propTypes = {
  setActiveComponent: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
}

export default AddressBookForm;
