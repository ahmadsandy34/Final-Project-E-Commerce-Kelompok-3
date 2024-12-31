// __tests__/Breadcrumb.test.jsx
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Breadcrumb from '../../../components/about/Breadcrumb';

describe('Breadcrumb Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Breadcrumb />
      </BrowserRouter>
    );

    // Check if "Home" link exists
    const homeLink = getByText('Home');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check if the divider (/) exists
    const divider = getByText('/');
    expect(divider).toBeInTheDocument();

    // Check if "About" text exists
    const aboutText = getByText('About');
    expect(aboutText).toBeInTheDocument();
  });

  it('applies correct classes for styling', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Breadcrumb />
      </BrowserRouter>
    );

    const homeLink = getByText('Home');
    expect(homeLink).toHaveClass('text-gray-600', 'hover:text-black');

    const divider = getByText('/');
    expect(divider).toHaveClass('text-gray-400');

    const aboutText = getByText('About');
    expect(aboutText).toHaveClass('text-gray-900');
  });
});
