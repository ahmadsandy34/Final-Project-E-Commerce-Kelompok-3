// components/about/StatsSection.jsx
import React from 'react';
import StatCard from './StatCard';
import Money from '../../assets/about/money.svg';
import Sale from '../../assets/about/sale.svg';
import Shop from '../../assets/about/shop.svg';
import Shopping from '../../assets/about/shopping.svg';

const StatsSection = () => {
  const stats = [
    {
      number: '10.5k',
      text: 'Sellers active our site',
      image: Shop
    },
    {
      number: '33k',
      text: 'Monthly Product Sale',
      highlighted: true,
      image: Sale
    },
    {
      number: '45.5k',
      text: 'Customer active in our site',
      image: Shopping
    },
    {
      number: '25k',
      text: 'Annual gross sale in our site',
      image: Money
    }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-2 lg:py-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            number={stat.number}
            text={stat.text}
            highlighted={stat.highlighted}
            image={stat.image}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsSection;