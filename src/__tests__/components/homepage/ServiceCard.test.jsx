import { render, screen } from "@testing-library/react";
import ServiceCard from "../../../components/homepage/ServiceCard";

describe("ServiceCard Component", () => {
  const mockProps = {
    title: "Service Title",
    description: "This is a sample service description.",
    image: "mockImage.jpg",
  };

  test("renders the component with the correct props", () => {
    render(<ServiceCard {...mockProps} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    // Check if the image is rendered with correct src and alt
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.image);
  });

  test("renders with the correct structure and styles", () => {
    render(<ServiceCard {...mockProps} />);

    // Check if the outer div has the correct class
    const container = screen.getByText(mockProps.title).parentElement;
    expect(container).toHaveClass("text-center");

    // Check if the image container has the correct styles
    const imageContainer = screen.getByAltText(mockProps.title).parentElement.parentElement;
    expect(imageContainer).toHaveClass("w-16 h-16 bg-gray-300 rounded-full");

    // Check if the title has the correct class
    const title = screen.getByText(mockProps.title);
    expect(title).toHaveClass("text-lg font-semibold mb-2");

    // Check if the description has the correct class
    const description = screen.getByText(mockProps.description);
    expect(description).toHaveClass("text-gray-600");
  });
});
