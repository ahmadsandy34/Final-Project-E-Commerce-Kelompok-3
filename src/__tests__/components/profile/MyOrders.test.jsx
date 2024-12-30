// components/orders/MyOrders.test.js
import { render, screen } from '@testing-library/react';
import MyOrders from '../../../components/profile/MyOrders';
import { BrowserRouter as Router } from 'react-router-dom'; // If your OrderCard uses React Router

describe('MyOrders component', () => {
  test('renders My Orders header', () => {
    // Render the component
    render(
      <Router>
        <MyOrders />
      </Router>
    );

    // Check if the "My Orders" header is rendered
    expect(screen.getByText('My Orders')).toBeInTheDocument();
  });

  test('displays correct order details', () => {
    // Render the component
    render(
      <Router>
        <MyOrders />
      </Router>
    );

    // Check if the order details are displayed correctly
    expect(screen.getByText('Order No 312312365417')).toBeInTheDocument();
    expect(screen.getByText('ASUS FHD Gaming Laptop (1 items)')).toBeInTheDocument();

    expect(screen.getByText('Order No 312012762402')).toBeInTheDocument();
    expect(screen.getByText('IPS LCD Gaming Monitor (1 items)')).toBeInTheDocument();
    
    expect(screen.getByText('Order No 329912163478')).toBeInTheDocument();
    expect(screen.getByText('HAVIT HV-G92 Gamepad (1 items)')).toBeInTheDocument();
  });
});
