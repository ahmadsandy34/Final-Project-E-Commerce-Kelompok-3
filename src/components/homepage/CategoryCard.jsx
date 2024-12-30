/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const CategoryCard = ({ title, image }) => {
    return (
      <button className='w-full aspect-square flex flex-col items-center justify-center rounded-md border-2 border-gray-200 p-4 active:bg-gray-100'>
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] flex items-center justify-center">
          <img src={image} alt={title} className='w-8 h-8 lg:w-10 lg:h-10 object-contain' />
        </div>
        <p className='text-[10px] lg:text-base text-center mt-2 text-gray-600'>{title}</p>
      </button>
    )
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

export default CategoryCard