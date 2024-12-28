// components/about/TeamSection.jsx
import React from 'react';
import TeamMember from './TeamMember';
import Tom from '../../assets/about/Tom.png';
import Emma from '../../assets/about/Emma.png';
import Will from '../../assets/about/Will.png';

const TeamSection = () => {
  const teamMembers = [
    {
      image: Tom,
      name: 'Tom Cruise',
      role: 'Founder & Chairman',
    },
    {
      image: Emma,
      name: 'Emma Watson',
      role: 'Managing Director',
    },
    {
      image: Will,
      name: 'Will Smith',
      role: 'Product Designer',
    },
  ];

  return (
    <div className='max-w-screen-xl mx-auto px-4 py-12'>
      <div className='grid grid-cols-3 gap-8'>
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
      
      <div className='flex justify-center gap-2 mt-6'>
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-[#DB4444]' : 'bg-gray-300'}`} />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
