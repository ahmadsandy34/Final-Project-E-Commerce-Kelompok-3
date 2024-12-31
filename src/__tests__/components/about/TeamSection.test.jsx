import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TeamSection from "../../../components/about/TeamSection";

describe("TeamSection Component", () => {

  test("renders correct team member names", () => {
    render(<TeamSection />);
    expect(screen.getByText("Tom Cruise")).toBeInTheDocument();
    expect(screen.getByText("Emma Watson")).toBeInTheDocument();
    expect(screen.getByText("Will Smith")).toBeInTheDocument();
  });

  test("renders correct team member roles", () => {
    render(<TeamSection />);
    expect(screen.getByText("Founder & Chairman")).toBeInTheDocument();
    expect(screen.getByText("Managing Director")).toBeInTheDocument();
    expect(screen.getByText("Product Designer")).toBeInTheDocument();
  });

  test("renders pagination dots", () => {
    render(<TeamSection />);
    const dots = screen.getAllByRole("generic").filter(element => 
      element.className.includes("w-2 h-2 rounded-full")
    );
    expect(dots).toHaveLength(5);
  });

  test("third pagination dot is active", () => {
    render(<TeamSection />);
    const dots = screen.getAllByRole("generic").filter(element => 
      element.className.includes("w-2 h-2 rounded-full")
    );
    expect(dots[2]).toHaveClass("bg-[#DB4444]");
  });
});
