// components/address/AddressBookCard.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import AddressBookCard from '../../../components/profile/AddressBookCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('AddressBookCard component', () => {
  test('renders user details and address correctly', () => {
    // Render the component with required props
    render(
      <Router>
        <AddressBookCard handleClick={() => {}} path="address-book-list" />
      </Router>
    );

    // Check if name and email are rendered
    expect(screen.getByText('Deni Irawan | user@lumoshive.com')).toBeInTheDocument();

    // Check if the address is rendered
    expect(screen.getByText('Komp. Ruko Green Garden Blk. Z, Jl. Panjang Arteri Klp. Dua Raya No. 5')).toBeInTheDocument();
  });

  test('calls handleClick when edit button is clicked', () => {
    const handleClick = jest.fn();

    // Render the component with a mock handleClick function
    render(
      <Router>
        <AddressBookCard handleClick={handleClick} path="address-book-list" />
      </Router>
    );

    // Find the edit button and click it
    const editButton = screen.getByAltText('Edit Icon');
    fireEvent.click(editButton);

    // Verify that handleClick was called with the correct arguments
    expect(handleClick).toHaveBeenCalledWith('address-book-form', true);
  });

  test('renders delete button when path is "address-book-list"', () => {
    // Render the component with path "address-book-list"
    render(
      <Router>
        <AddressBookCard handleClick={() => {}} path="address-book-list" />
      </Router>
    );

    // Check if the delete button is present
    const deleteButton = screen.getByAltText('Delete Icon');
    expect(deleteButton).toBeInTheDocument();
  });

  test('does not render delete button when path is not "address-book-list"', () => {
    // Render the component with a different path
    render(
      <Router>
        <AddressBookCard handleClick={() => {}} path="other-path" />
      </Router>
    );

    // Check if the delete button is not present
    const deleteButton = screen.queryByAltText('Delete Icon');
    expect(deleteButton).not.toBeInTheDocument();
  });
});
