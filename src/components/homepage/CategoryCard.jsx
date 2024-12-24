/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const CategoryCard = ({ title, image }) => {
    return (
      <button className='flex flex-col items-center justify-center rounded-md border-2 border-gray-200 p-4 active:bg-gray-100'>
        <img src={image} alt={title} className='w-15 h-15 object-contain' />
        <p className='text-[8px] lg:text-base text-center mt-2'>{title}</p>
      </button>
    )
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CategoryCard