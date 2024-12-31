import { render, screen } from "@testing-library/react";
import ServiceCard from "../../../components/product-detail/ServiceCard";

jest.mock("../../../assets/product-detail/ReturnIcon", () => (props) => (
  <svg data-testid="return-icon" {...props}></svg>
));

jest.mock("../../../assets/product-detail/DeliveryIcon", () => (props) => (
  <svg data-testid="delivery-icon" {...props}></svg>
));

describe("ServiceCard Component", () => {
  test("renders the Free Delivery section correctly", () => {
    render(<ServiceCard />);

    const deliveryIcon = screen.getByTestId("delivery-icon");
    const deliveryTitle = screen.getByText(/Free Delivery/i);
    const deliveryDescription = screen.getByText(
      /Enter your postal code for Delivery Availability/i
    );

    expect(deliveryIcon).toBeInTheDocument();
    expect(deliveryTitle).toBeInTheDocument();
    expect(deliveryDescription).toBeInTheDocument();
  });

  test("renders the Return Delivery section correctly", () => {
    render(<ServiceCard />);

    const returnIcon = screen.getByTestId("return-icon");
    const returnTitle = screen.getByText(/Return Delivery/i);
    const returnDescription = screen.getByText(
      /Free 30 Days Delivery Returns. Details/i
    );

    expect(returnIcon).toBeInTheDocument();
    expect(returnTitle).toBeInTheDocument();
    expect(returnDescription).toBeInTheDocument();
  });

});
