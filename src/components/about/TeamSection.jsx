// components/about/TeamSection.jsx
import React from 'react';
import teams from '../../assets/about/teams.png';

const TeamMember = ({ image, name, role }) => {
  return (
    <div className='text-center'>
      <img src={image} alt={name} className='w-full aspect-square object-cover rounded-lg mb-4' />
      <h3 className='text-xl font-semibold mb-1'>{name}</h3>
      <p className='text-gray-600 mb-4'>{role}</p>
      <div className='flex justify-center gap-4'>
        <a href='#' className='text-gray-600 hover:text-black'>
          X
        </a>
        <a href='#' className='text-gray-600 hover:text-black'>
          IG
        </a>
        <a href='#' className='text-gray-600 hover:text-black'>
          in
        </a>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const teamMembers = [
    {
      image: teams,
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
    },
    {
      image: teams,
      name: 'Emma Watson',
      role: 'Managing Director',
    },
    {
      image: teams,
      name: 'Will Smith',
      role: 'Product Designer',
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      {/* Slider dots for mobile */}
      <div className='flex justify-center gap-2 mt-6 md:hidden'>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-[#DB4444]' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
