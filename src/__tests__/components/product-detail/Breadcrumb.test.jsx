import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from "../../../components/product-detail/Breadcrumb";

const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Breadcrumb Component", () => {
  test("renders the breadcrumb structure correctly", () => {
    renderWithRouter(<Breadcrumb />);

    // Check if the Home link is rendered
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");

    // Check if the Products link is rendered
    const productsLink = screen.getByText("Products");
    expect(productsLink).toBeInTheDocument();
    expect(productsLink).toHaveAttribute("href", "/products");

    // Check if the current page text is rendered
    const currentPage = screen.getByText("Havic HV G-92 Gamepad");
    expect(currentPage).toBeInTheDocument();

    // Check for separators
    const separators = screen.getAllByText("/");
    expect(separators).toHaveLength(2);
    separators.forEach((separator) =>
      expect(separator).toHaveClass("text-gray-400")
    );
  });

  test("applies the correct styling to breadcrumb links", () => {
    renderWithRouter(<Breadcrumb />);

    // Check if links have the correct styles
    const links = screen.getAllByRole("link");
    links.forEach((link) => {
      expect(link).toHaveClass("text-gray-400 hover:text-black");
    });

    // Check if the current page text doesn't have link attributes
    const currentPage = screen.getByText("Havic HV G-92 Gamepad");
    expect(currentPage).not.toHaveAttribute("href");
  });
});
