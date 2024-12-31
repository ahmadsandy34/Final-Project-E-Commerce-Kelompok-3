import { render, screen } from "@testing-library/react";
import InvoiceProduct from "../../../components/checkout/InvoiceProduct";

describe("InvoiceProduct", () => {
  it("renders product title, image, and total correctly", () => {
    const mockProduct = {
      title: "Product 1",
      image: "/product1.jpg",
      total: 20,
    };

    render(<InvoiceProduct {...mockProduct} />);

    // Check if the product title is rendered
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Check if the product image is rendered with correct src and alt attributes
    const productImage = screen.getByAltText("product");
    expect(productImage).toHaveAttribute("src", mockProduct.image);
    expect(productImage).toHaveAttribute("alt", "product");

    // Check if the total is displayed correctly
    expect(screen.getByText(`$${mockProduct.total}`)).toBeInTheDocument();
  });
});
