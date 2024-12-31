import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Breadcrumb from "../../../components/checkout/Breadcrumb";

describe("Breadcrumb", () => {
  it("renders breadcrumb links correctly", () => {
    render(
      <Router>
        <Breadcrumb />
      </Router>
    );

    // Check if the "Home" link is rendered and has correct path
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.closest("a")).toHaveAttribute("href", "/");

    // Check if the "Cart" link is rendered and has correct path
    const cartLink = screen.getByText("Cart");
    expect(cartLink).toBeInTheDocument();
    expect(cartLink.closest("a")).toHaveAttribute("href", "/cart");

    // Check if the text "Checkout" is rendered correctly
    const checkoutText = screen.getByText("Checkout");
    expect(checkoutText).toBeInTheDocument();
    expect(checkoutText).toHaveClass("text-gray-900");

    // Check the separators "/"
    const separators = screen.getAllByText("/");
    expect(separators).toHaveLength(2); // Ensure there are two separators
  });
});
