// components/about/Breadcrumb.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Wrap the component in a Router
import Breadcrumb from '../../../components/cart/Breadcrumb';

describe('Breadcrumb', () => {
  test('renders breadcrumb with Home and Cart', () => {
    render(
      <Router>
        <Breadcrumb />
      </Router>
    );

    // Check if the "Home" link is rendered
    const homeLink = screen.getByText(/home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check if the "Cart" text is rendered
    const cartText = screen.getByText(/cart/i);
    expect(cartText).toBeInTheDocument();
    
    // Check if the separator '/' is rendered
    const separator = screen.getByText('/');
    expect(separator).toBeInTheDocument();
  });
});
