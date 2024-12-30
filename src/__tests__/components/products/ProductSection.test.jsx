import { render, screen, fireEvent } from "@testing-library/react";
import { ProductSection } from "../../../components/products/ProductSection";

jest.mock("../../../components/products/ProductCard", () => ({
  ProductCard: jest.fn(() => <div data-testid="product-card" />),
}));

describe("ProductSection Component", () => {
  const mockProducts = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    { id: 4, name: "Product 4" },
    { id: 5, name: "Product 5" },
    { id: 6, name: "Product 6" },
    { id: 7, name: "Product 7" },
    { id: 8, name: "Product 8" },
  ];

  test("renders the correct number of products based on screen size", () => {
    // Set initial window size to mimic small screen
    global.innerWidth = 500;
    global.dispatchEvent(new Event("resize"));
    
    render(<ProductSection title="Products" products={mockProducts} />);

    // Check initial visible products for small screen (4 items)
    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(4);

    // Simulate resizing to a large screen
    global.innerWidth = 1024;
    global.dispatchEvent(new Event("resize"));
    
    render(<ProductSection title="Products" products={mockProducts} />);

  });

  test("displays 'Show More' button when there are more products", () => {
    global.innerWidth = 1024; // Simulate large screen
    global.dispatchEvent(new Event("resize"));
    
    render(<ProductSection title="Products" products={mockProducts} />);

    const showMoreButton = screen.getByText(/Show More/i);
    expect(showMoreButton).toBeInTheDocument();
  });

  test("hides 'Show More' button when all products are displayed", () => {
    const products = mockProducts.slice(0, 6); // Only 6 products, no extra ones to show
    global.innerWidth = 1024; // Simulate large screen
    global.dispatchEvent(new Event("resize"));
    
    render(<ProductSection title="Products" products={products} />);

    const showMoreButton = screen.queryByText(/Show More/i);
    expect(showMoreButton).toBeNull(); // No button should appear
  });

  test("loads more products when 'Show More' is clicked", () => {
    global.innerWidth = 1024; // Simulate large screen
    global.dispatchEvent(new Event("resize"));
    
    render(<ProductSection title="Products" products={mockProducts} />);

    const showMoreButton = screen.getByText(/Show More/i);
    fireEvent.click(showMoreButton);

    const productCards = screen.getAllByTestId("product-card");
    expect(productCards).toHaveLength(8); // 8 products should be displayed after clicking "Show More"
  });

  test("disables 'Show More' button when all products are visible", () => {
    global.innerWidth = 1024; // Simulate large screen
    global.dispatchEvent(new Event("resize"));
    
    render(<ProductSection title="Products" products={mockProducts} />);

    const showMoreButton = screen.getByText(/Show More/i);
    fireEvent.click(showMoreButton);

    // After clicking "Show More", all products should be shown, so the button should be hidden
    expect(showMoreButton).not.toBeInTheDocument();
  });
});
