import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StorySection from "../../../components/about/StorySection";

describe("StorySection Component", () => {
  test("renders story content paragraphs", () => {
    render(<StorySection />);
    const firstParagraph = screen.getByText(/Launced in 2015, Exclusive is South Asia's premier/);
    const secondParagraph = screen.getByText(/Exclusive has more than 1 Million products/);
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
  });

  test("renders shopping people image", () => {
    render(<StorySection />);
    const image = screen.getByAltText("Shopping People");
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass("w-full", "rounded-md", "object-cover");
  });

  test("has correct layout structure", () => {
    const { container } = render(<StorySection />);
    const mainContainer = container.firstChild;
    expect(mainContainer).toHaveClass("w-5/6", "mx-auto", "py-12");
  });

  test("renders desktop story title", () => {
    render(<StorySection />);
    const desktopTitle = screen.getAllByText("Our Story")[1];
    expect(desktopTitle).toHaveClass("text-[54px]", "font-bold", "hidden", "md:block");
  });
});
