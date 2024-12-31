// components/about/Breadcrumb.test.js
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumb from '../../../components/profile/Breadcrumb';

describe('Breadcrumb component', () => {
  test('renders breadcrumb links correctly', () => {
    // Render the component wrapped in Router to use Link
    render(
      <Router>
        <Breadcrumb />
      </Router>
    );

    // Assert the breadcrumb text
    const homeLink = screen.getByText('Home');
    const accountText = screen.getByText('My Account');
    
    // Check if 'Home' is a link and leads to the correct route
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check if 'My Account' text is present
    expect(accountText).toBeInTheDocument();

    // Ensure '/' is present between links
    const separator = screen.getByText('/');
    expect(separator).toBeInTheDocument();
  });
});
