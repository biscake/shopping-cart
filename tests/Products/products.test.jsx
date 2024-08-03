import { describe, expect, it, test, vi } from "vitest";
import { Products } from "../../src/components/Products/Products";
import { render, screen, waitFor  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useOutletContext } from "react-router-dom";
import { useProductsHandler } from "../../src/components/Products/ProductsHelper";

const mockProducts = [
  {
    id: 1,
    image: "url1",
    title: "Product 1",
    description: "Description for product 1",
    price: "1.05",
    rating: {
      rate: "4.0",
      count: 143
    }
  },
  {
    id: 2,
    image: "url2",
    title: "Product 2",
    description: "Description for product 2",
    price: "4.00",
    rating: {
      rate: "3.0",
      count: 75
    }
  },
  {
    id: 3,
    image: "url3",
    title: "Product 3",
    description: "Description for product 3",
    price: "50.00",
    rating: {
      rate: "2.0",
      count: 5
    }
  }
]

const mockAddToCart = vi.fn();


vi.mock("../../src/components/Products/ProductsHelper", () => {
  return {
    useProducts: () => mockProducts,
    useProductsHandler: () => {
      return {
        addToCart: mockAddToCart
      }
    }
  };
})

vi.mock("react-router-dom", async (importOriginal) => {
  return {
      ...await importOriginal(),
      useOutletContext: () => [{id:1, price: "5.0"}],
    }
})


describe("Products page", () => {
  it("Should load products correctly", () => {
    render(<Products/>);
    mockProducts.forEach((product) => {
      expect(screen.getByText(product.description)).toBeInTheDocument();
      expect(screen.getByAltText(`Product ${product.id}`).src).toContain(`url${product.id}`);
      expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
      expect(screen.getByText("Rating: " + product.rating.rate)).toBeInTheDocument();
      expect(screen.getByText("Count: " + product.rating.count)).toBeInTheDocument();
    })
  })

  it("Add to cart button should be called when clicked", async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();
      render(<Products />);

      const buttons = screen.getAllByRole("button", { name: "Add to cart" });

      buttons.forEach(async (button) => {
        await user.click(button);
      })
      await waitFor(() => expect(mockAddToCart).toHaveBeenCalled(buttons.length));
    }
  )
})