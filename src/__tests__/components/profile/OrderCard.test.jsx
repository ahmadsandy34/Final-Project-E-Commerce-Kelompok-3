// components/orders/OrderCard.test.js
import { render, screen } from '@testing-library/react';
import OrderCard from '../../../components/profile/OrderCard';

describe('OrderCard component', () => {
  const order = {
    order: "Order No 312312365417",
    status: "Created",
    name: "ASUS FHD Gaming Laptop (1 items)",
    image: "path/to/laptop-image.svg", // You can use a mock image or actual import path for testing
  };

  test('renders order details correctly', () => {
    // Render the component with props
    render(<OrderCard {...order} />);

    // Check if the order number is displayed
    expect(screen.getByText(order.order)).toBeInTheDocument();

    // Check if the product name is displayed
    expect(screen.getByText(order.name)).toBeInTheDocument();

    // Check if the status is displayed correctly
    expect(screen.getByText(order.status)).toBeInTheDocument();

    // Check if the image is displayed with the correct alt text
    const image = screen.getByAltText(order.name);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', order.image);
  });

  test('renders status with correct styling', () => {
    // Render the component with props
    render(<OrderCard {...order} />);

    // Check if the status div has the correct classes (for styling)
    const statusDiv = screen.getByText(order.status).closest('div');
    expect(statusDiv).toHaveClass('bg-black text-white text-sm p-1 px-2 rounded');
  });
});
