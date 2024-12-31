import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { CategorySidebar } from "../../../components/products/CategorySidebar";

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("CategorySidebar Component", () => {
  const categories = ["Electronics", "Men's Clothing", "Women's Clothing", "Books"];
  
  test("renders all categories and 'All Products' link", () => {
    renderWithRouter(<CategorySidebar categories={categories} activeCategory="all" />);

    const allProductsLink = screen.getByText(/All Products/i);
    expect(allProductsLink).toBeInTheDocument();

    categories.forEach((category) => {
      const categoryLink = screen.getByText(category);
      expect(categoryLink).toBeInTheDocument();
    });
  });

  test("applies active class to the correct category", () => {
    renderWithRouter(<CategorySidebar categories={categories} activeCategory="Men's Clothing" />);

    const activeLink = screen.getByText("Men's Clothing");
    expect(activeLink).toHaveClass("text-[#DB4444]");
  });

  test("formats category URLs correctly", () => {
    renderWithRouter(<CategorySidebar categories={categories} activeCategory="all" />);

    const electronicsLink = screen.getByText("Electronics").closest("a");
    const mensClothingLink = screen.getByText("Men's Clothing").closest("a");
    const womensClothingLink = screen.getByText("Women's Clothing").closest("a");
    const booksLink = screen.getByText("Books").closest("a");

    expect(electronicsLink).toHaveAttribute("href", "/products/category/electronics");
    expect(mensClothingLink).toHaveAttribute("href", "/products/category/men-s-clothing");
    expect(womensClothingLink).toHaveAttribute("href", "/products/category/women-s-clothing");
    expect(booksLink).toHaveAttribute("href", "/products/category/books");
  });

  test("highlights 'All Products' when activeCategory is 'all'", () => {
    renderWithRouter(<CategorySidebar categories={categories} activeCategory="all" />);

    const allProductsLink = screen.getByText(/All Products/i);
    expect(allProductsLink).toHaveClass("text-[#DB4444]");
  });
});
