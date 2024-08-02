import { describe, expect, it, test } from "vitest";
import { Products } from "../../src/components/Products/Products";
import { screen  } from "@testing-library/react";

const products = [
  {
    id: 1,
    image: "image1",
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
    image: "image2",
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
    image: "image3",
    title: "Product 3",
    description: "Description for product 3",
    price: "50.00",
    rating: {
      rate: "2.0",
      count: 5
    }
  }
]

describe("fetch api correctly", () => {
  it("")
})