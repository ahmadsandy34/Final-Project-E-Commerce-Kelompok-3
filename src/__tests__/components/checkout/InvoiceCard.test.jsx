import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import InvoiceCard from "../../../components/checkout/InvoiceCard";

const mockCart = [
  { id: 1, title: "Product 1", image: "/product1.jpg", price: 10, quantity: 2 },
  { id: 2, title: "Product 2", image: "/product2.jpg", price: 15, quantity: 1 },
];

const mockTotal = 35; // (10 * 2) + (15 * 1)

describe("InvoiceCard", () => {
  it("renders invoice products correctly", () => {
    render(
      <MemoryRouter>
        <InvoiceCard cart={mockCart} total={mockTotal} />
      </MemoryRouter>
    );

    // Check if product titles are rendered
    mockCart.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });

    // Check if 'Place Order' button is rendered
    const placeOrderButton = screen.getByRole("button", { name: /place order/i });
    expect(placeOrderButton).toBeInTheDocument();
  });

  it("links to the correct checkout status page when 'Place Order' is clicked", () => {
    render(
      <MemoryRouter>
        <InvoiceCard cart={mockCart} total={mockTotal} />
      </MemoryRouter>
    );

    // Check that the button has the correct link
    const placeOrderButton = screen.getByRole("button", { name: /place order/i });
    expect(placeOrderButton.closest('a')).toHaveAttribute('href', '/checkout/status');

    // Check the state passed with the Link
    placeOrderButton.click();
    // You may add additional checks if you need to verify the state passed, e.g., via mocking.
  });
});
