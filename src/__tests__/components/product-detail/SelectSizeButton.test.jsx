import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SelectSizeButton from "../../../components/product-detail/SelectSizeButton";

describe("SelectSizeButton Component", () => {
  test("renders all size buttons", () => {
    render(<SelectSizeButton />);

    const sizes = ["XS", "S", "M", "L", "XL"];
    sizes.forEach((size) => {
      const button = screen.getByText(size);
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass("border border-black px-4 py-2 text-semibold rounded");
    });
  });

  test("applies hover styles when hovered", async () => {
    render(<SelectSizeButton />);
    const user = userEvent.setup();

    const button = screen.getByText("M");

    // Hover over the "M" button
    await user.hover(button);
    expect(button).toHaveClass("hover:bg-[#DB4444] hover:text-white hover:border-0");

    // Unhover the button
    await user.unhover(button);
    expect(button).toHaveClass("border border-black px-4 py-2 text-semibold rounded");
  });

  test("renders the 'Size' label", () => {
    render(<SelectSizeButton />);
    const label = screen.getByText("Size");
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass("test-xl");
  });
});
