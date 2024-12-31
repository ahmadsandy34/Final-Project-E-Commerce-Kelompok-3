// ServiceCard.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ServiceCard from '../../../components/about/ServiceCard';

describe('ServiceCard Component', () => {
  const mockProps = {
    title: 'Test Service',
    description: 'This is a test description.',
    image: 'test-image.jpg',
  };

  test('renders the ServiceCard component', () => {
    render(<ServiceCard {...mockProps} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Check if the image is rendered with the correct alt attribute
    const imageElement = screen.getByAltText(mockProps.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.image);
  });

  test('displays the image inside nested divs with correct classes', () => {
    const { container } = render(<ServiceCard {...mockProps} />);

    // Verify the nested div structure and classes
    const outerDiv = container.querySelector('.w-16.h-16.bg-gray-300.rounded-full');
    expect(outerDiv).toBeInTheDocument();

    const innerDiv = outerDiv.querySelector('.w-12.h-12.rounded-full.bg-black');
    expect(innerDiv).toBeInTheDocument();

    const imageElement = innerDiv.querySelector('img');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockProps.image);
  });
});
