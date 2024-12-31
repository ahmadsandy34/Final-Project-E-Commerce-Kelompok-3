import { render, screen } from "@testing-library/react";
import CategoryCard from "../../../components/homepage/CategoryCard";

describe("CategoryCard Component", () => {
  const mockProps = {
    title: "Category Title",
    image: "mockImage.jpg",
  };

  test("renders the component with the correct props", () => {
    render(<CategoryCard {...mockProps} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the image is rendered with the correct attributes
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
  });

  test("renders the button with the correct structure and styles", () => {
    render(<CategoryCard {...mockProps} />);

    // Check if the outer button element is present
    const button = screen.getByRole("button");
    expect(button).toHaveClass(
      "flex flex-col items-center justify-center rounded-md border-2 border-gray-200 p-4 active:bg-gray-100"
    );

    // Check if the title has the correct class
    const title = screen.getByText(mockProps.title);
    expect(title).toHaveClass("text-[8px] lg:text-base text-center mt-2");

    // Check if the image has the correct class
    const image = screen.getByAltText(mockProps.title);
    expect(image).toHaveClass("w-15 h-15 object-contain");
  });
});
