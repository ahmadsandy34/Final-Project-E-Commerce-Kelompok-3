/* eslint-disable no-unused-vars */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // To handle `Link` component
import BannerCategoriesCard from "../../../components/homepage/BannerCategoriesCard";

describe("BannerCategoriesCard Component", () => {
  const mockProps = {
    title: "Electronics",
    image: "mockImage.jpg",
  };

  test("renders the component with the correct title and image", () => {
    render(
      <MemoryRouter>
        <BannerCategoriesCard {...mockProps} />
      </MemoryRouter>
    );

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the image is rendered with the correct source
    const image = screen.getByAltText("Hero");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
  });

  test("renders the button and link correctly", () => {
    render(
      <MemoryRouter>
        <BannerCategoriesCard {...mockProps} />
      </MemoryRouter>
    );

    // Check if the button is rendered
    const button = screen.getByRole("button", { name: /Buy Now/i });
    expect(button).toBeInTheDocument();

    // Check if the link navigates to the correct route
    const link = screen.getByRole("link", { name: /Buy Now/i });
    expect(link).toHaveAttribute("href", "/products/category/electronics");
  });

  test("applies correct styles and content", () => {
    render(
      <MemoryRouter>
        <BannerCategoriesCard {...mockProps} />
      </MemoryRouter>
    );

    // Check for the categories label
    expect(screen.getByText(/Categories/i)).toBeInTheDocument();

    // Check if the title has correct class for styles
    const title = screen.getByText(mockProps.title);
    expect(title).toHaveClass("lg:text-5xl");
  });
});
