import { describe, expect, it, test, vi } from "vitest";
import { Products } from "../../src/components/Products/Products";
import { render, screen, waitFor  } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

vi.mock("../../src/components/Products/ProductsHelper", () => {
  const useProducts = () => mockProducts;
  return {useProducts};
})

describe("Products page", () => {
  it("Should load products correctly", () => {
    render(<Products onClick={vi.fn()} />);
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
      render (<Products onClick={onClick} />);

      const buttons = screen.getAllByRole("button", { name: "Add to cart" });
      await user.click(buttons[0]);
      expect(onClick).toHaveBeenCalled();
    }
  )
})