
// components/about/StatsSection.jsx
import React from 'react';

const StatCard = ({ number, text, highlighted = false }) => {
  return (
    <div 
      className={`p-6 rounded-lg flex flex-col items-center border-4 justify-center transition-shadow
        ${highlighted ? 'bg-[#DB4444] text-white' : 'bg-white'}`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 
        ${highlighted ? 'bg-white/20' : 'bg-gray-100'}`}>
        <div className="w-6 h-6 rounded-full bg-current" />
      </div>
      <h3 className="text-2xl font-bold mb-2">{number}</h3>
      <p className={`text-sm text-center ${highlighted ? 'text-white/90' : 'text-gray-600'}`}>
        {text}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      number: '10.5k',
      text: 'Sellers active our site'
    },
    {
      number: '33k',
      text: 'Monthly Product Sale',
      highlighted: true
    },
    {
      number: '45.5k',
      text: 'Customer active in our site'
    },
    {
      number: '25k',
      text: 'Annual gross sale in our site'
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            text={stat.text}
            highlighted={stat.highlighted}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;