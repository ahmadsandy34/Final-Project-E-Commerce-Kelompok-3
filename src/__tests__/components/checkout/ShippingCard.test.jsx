import { render, screen } from "@testing-library/react";
import ShippingCard from "../../../components/checkout/ShippingCard";

describe("ShippingCard", () => {
  it("renders the correct shipping method and message", () => {
    render(<ShippingCard />);

    // Check if "Regular Shipping" is displayed as the shipping method
    const shippingMethod = screen.getByText(/Reguler Shipping/i);
    expect(shippingMethod).toBeInTheDocument();

    // Check if the voucher message is displayed
    const voucherMessage = screen.getByText(/Get voucher if your order doesn't arrive by 19 Nov 2024/i);
    expect(voucherMessage).toBeInTheDocument();

    // Check if the text color and styles are correctly applied
    expect(voucherMessage).toHaveClass("text-sm text-gray-500");
  });
});
