// components/about/ServicesSection.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ServicesSection from "../../../components/about/ServicesSection";

// Mock ServiceCard component
jest.mock("../../../components/about/ServiceCard", () => ({ title, description, image }) => (
  <div data-testid="service-card">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
));

describe("ServicesSection", () => {
  test("renders the correct number of ServiceCard components", () => {
    render(<ServicesSection />);
    const serviceCards = screen.getAllByTestId("service-card");
    expect(serviceCards).toHaveLength(6);
  });

  test("renders correct service details", () => {
    render(<ServicesSection />);
    const titles = screen.getAllByText(/FREE AND FAST DELIVERY|24\/7 CUSTOMER SERVICE|MONEY BACK GUARANTEE/i);
    const descriptions = screen.getAllByText(
      /Free delivery for all orders over \$140|Friendly 24\/7 customer support|We return money within 30 days/i
    );

    expect(titles).toHaveLength(6); // 3 for desktop + 3 for mobile
    expect(descriptions).toHaveLength(6);
  });
});
