import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InvoiceDetail from "../../../components/cart/InvoiceDetail";

describe("InvoiceDetail Component", () => {
  test("renders shipping as Free", () => {
    render(<InvoiceDetail total={50} />);
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Shipping")).toBeInTheDocument();
  });

  test("renders total with correct amount", () => {
    render(<InvoiceDetail total={75} />);
    const totalElements = screen.getAllByText("$75");
    expect(totalElements).toHaveLength(2);
    expect(screen.getByText("Total")).toBeInTheDocument();
  });

  test("renders with zero total", () => {
    render(<InvoiceDetail total={0} />);
    const zeroElements = screen.getAllByText("$0");
    expect(zeroElements).toHaveLength(2);
  });

  test("matches snapshot", () => {
    const { container } = render(<InvoiceDetail total={150} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
