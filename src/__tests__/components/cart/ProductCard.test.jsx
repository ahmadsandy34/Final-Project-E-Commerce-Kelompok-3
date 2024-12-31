import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../../../components/cart/ProductCard";

// Mock data for the product
const mockProps = {
  title: "Product Name",
  price: 29.99,
  image: "https://via.placeholder.com/150",
  quantity: 2,
  onQuantityChange: jest.fn(),
};

describe("ProductCard", () => {
  it("renders product title, price, and initial quantity correctly", () => {
    render(<ProductCard {...mockProps} />);
    
    // Check if product title is rendered
    expect(screen.getByText("Product Name")).toBeInTheDocument();
    
    // Check if price is rendered
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    
    // Check if quantity is rendered correctly
    expect(screen.getByText("2")).toBeInTheDocument();
    
    // Check if the total price is rendered (quantity * price)
    expect(screen.getByText("$59.98")).toBeInTheDocument();
  });

  it("calls onQuantityChange when increase button is clicked", () => {
    render(<ProductCard {...mockProps} />);
    
    // Get the increase button
    const increaseButton = screen.getByText("+");
    
    // Simulate click on the increase button
    fireEvent.click(increaseButton);
    
    // Check if the onQuantityChange function is called with correct arguments
    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(3);
  });

  it("calls onQuantityChange when decrease button is clicked", () => {
    render(<ProductCard {...mockProps} />);
    
    // Get the decrease button
    const decreaseButton = screen.getByText("-");
    
    // Simulate click on the decrease button
    fireEvent.click(decreaseButton);
    
    // Check if the onQuantityChange function is called with correct arguments
    expect(mockProps.onQuantityChange).toHaveBeenCalledWith(1);
  });

  it("disables the decrease button when quantity is 1", () => {
    render(<ProductCard {...{ ...mockProps, quantity: 1 }} />);
    
    // Get the decrease button
    const decreaseButton = screen.getByText("-");
    
    // The decrease button should be disabled when quantity is 1
    expect(decreaseButton).toBeDisabled();
  });
});
