import { render, screen } from "@testing-library/react";
import StatCard from "../../../components/about/StatCard";

// Mocking the props for the StatCard component
const mockProps = {
  number: "100",
  text: "Happy Customers",
  image: "https://example.com/image.jpg",
};

describe("StatCard Component", () => {
  it("renders correctly with given props", () => {
    render(<StatCard {...mockProps} />);

    // Check if number is displayed
    expect(screen.getByText(mockProps.number)).toBeInTheDocument();

    // Check if text is displayed
    expect(screen.getByText(mockProps.text)).toBeInTheDocument();

    // Check if image is rendered with correct src
    const img = screen.getByAltText(mockProps.text);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", mockProps.image);
  });

  it("applies hover styles correctly", () => {
    render(<StatCard {...mockProps} />);

    // Select the text or image and navigate to the parent container
    const numberElement = screen.getByText(mockProps.number);

    // Navigate to the parent container
    const card = numberElement.closest("div");

    // Simulate hover by triggering mouse over
    card.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));

    // Check if styles change on hover
    expect(card).toHaveClass("hover:scale-105");
    expect(card).toHaveClass("hover:bg-[#DB4444]");
    expect(card).toHaveClass("hover:text-white");
  });
});
