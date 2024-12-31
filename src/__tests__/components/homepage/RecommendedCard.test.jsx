import { render, screen } from "@testing-library/react";
import RecommendedCard from "../../../components/homepage/RecommendedCard";

describe("RecommendedCard Component", () => {
  const mockProps = {
    image: "mockImage.jpg",
    title: "Product Title",
    description: "This is a sample product description.",
  };

  test("renders the component with the correct props", () => {
    render(<RecommendedCard {...mockProps} />);

    // Check if the image is rendered with the correct source and alt
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  test("renders the 'Shop Now' button", () => {
    render(<RecommendedCard {...mockProps} />);

    // Check if the "Shop Now" button is rendered
    const button = screen.getByRole("button", { name: /Shop Now/i });
    expect(button).toBeInTheDocument();
  });

  test("applies correct styles", () => {
    render(<RecommendedCard {...mockProps} />);

    // Check if the container has the correct class
    const container = screen.getByRole("img", { hidden: true }).parentElement;
    expect(container).toHaveClass("h-[173px] w-full bg-black");

    // Check if the title has the correct class
    const title = screen.getByText(mockProps.title);
    expect(title).toHaveClass("text-xs font-semibold mb-2");

    // Check if the description has the correct class
    const description = screen.getByText(mockProps.description);
    expect(description).toHaveClass("text-[8px] mb-3");
  });
});
