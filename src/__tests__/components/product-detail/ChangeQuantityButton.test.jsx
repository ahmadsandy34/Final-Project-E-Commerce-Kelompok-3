import { render, screen, fireEvent } from "@testing-library/react";
import ChangeQuantityButton from "../../../components/product-detail/ChangeQuantityButton";

describe("ChangeQuantityButton Component", () => {
  test("renders the quantity and buttons", () => {
    render(<ChangeQuantityButton />);

    const decreaseButton = screen.getByText("-");
    const increaseButton = screen.getByText("+");
    const quantity = screen.getByText("1");

    expect(decreaseButton).toBeInTheDocument();
    expect(increaseButton).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
  });

  test("increases quantity when '+' button is clicked", () => {
    render(<ChangeQuantityButton />);

    const increaseButton = screen.getByText("+");
    const quantity = screen.getByText("1");

    fireEvent.click(increaseButton);

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  test("decreases quantity when '-' button is clicked", () => {
    render(<ChangeQuantityButton />);

    const increaseButton = screen.getByText("+");
    const decreaseButton = screen.getByText("-");

    // Increase to 2 first
    fireEvent.click(increaseButton);

    // Decrease back to 1
    fireEvent.click(decreaseButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("does not decrease below 1", () => {
    render(<ChangeQuantityButton />);

    const decreaseButton = screen.getByText("-");
    fireEvent.click(decreaseButton);

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("disables '-' button when quantity is 1", () => {
    render(<ChangeQuantityButton />);

    const decreaseButton = screen.getByText("-");
    expect(decreaseButton).toBeDisabled();
  });

  test("does not disable '+' button", () => {
    render(<ChangeQuantityButton />);

    const increaseButton = screen.getByText("+");
    expect(increaseButton).not.toBeDisabled();
  });
});
