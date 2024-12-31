// components/about/ChangeQuantityButton.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChangeQuantityButton from '../../../components/cart/ChangeQuantityButton';

describe('ChangeQuantityButton', () => {
  test('renders quantity and buttons', () => {
    render(<ChangeQuantityButton quantity={1} onIncrease={() => {}} onDecrease={() => {}} />);

    // Check if the quantity is displayed correctly
    const quantityDisplay = screen.getByText('1');
    expect(quantityDisplay).toBeInTheDocument();

    // Check if the "+" and "-" buttons are rendered
    const increaseButton = screen.getByText('+');
    const decreaseButton = screen.getByText('-');
    expect(increaseButton).toBeInTheDocument();
    expect(decreaseButton).toBeInTheDocument();
  });

  test('calls onIncrease when "+" is clicked', () => {
    const mockOnIncrease = jest.fn();
    render(<ChangeQuantityButton quantity={1} onIncrease={mockOnIncrease} onDecrease={() => {}} />);

    // Click the "+" button
    const increaseButton = screen.getByText('+');
    fireEvent.click(increaseButton);

    // Check if onIncrease was called
    expect(mockOnIncrease).toHaveBeenCalledTimes(1);
  });

  test('calls onDecrease when "-" is clicked', () => {
    const mockOnDecrease = jest.fn();
    render(<ChangeQuantityButton quantity={2} onIncrease={() => {}} onDecrease={mockOnDecrease} />);

    // Click the "-" button
    const decreaseButton = screen.getByText('-');
    fireEvent.click(decreaseButton);

    // Check if onDecrease was called
    expect(mockOnDecrease).toHaveBeenCalledTimes(1);
  });

  test('disables "-" button when quantity is 1', () => {
    const { container } = render(<ChangeQuantityButton quantity={1} onIncrease={() => {}} onDecrease={() => {}} />);

    // Check if the "-" button is disabled
    const decreaseButton = screen.getByText('-');
    expect(decreaseButton).toBeDisabled();
  });

  test('enables "-" button when quantity is greater than 1', () => {
    const { container } = render(<ChangeQuantityButton quantity={2} onIncrease={() => {}} onDecrease={() => {}} />);

    // Check if the "-" button is enabled
    const decreaseButton = screen.getByText('-');
    expect(decreaseButton).not.toBeDisabled();
  });
});
