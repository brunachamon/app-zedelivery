import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import CardProduct from "./";
import { formatMoneyWithCurrency } from "../../utils/money";

describe("CardProduct", () => {
  const props = {
    title: "Produto 1",
    productVariants: [{
      price: 100,
      subTitle: "Cerveja teste",
      description: "Cerveja de trigo"
    }]
  };

  it("should render a component with props", async () => {
    render(<CardProduct {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
  });

  it("should render a component with formatted value in price", async () => {
    render(<CardProduct {...props} />);

    expect(screen.getByText(formatMoneyWithCurrency(props.productVariants[0].price))).toBeInTheDocument();
  });

  it("should render a component with description showed instead subtitle", async () => {
    render(<CardProduct {...props} />);

    expect(screen.getByText(props.productVariants[0].description)).toBeInTheDocument();
  });

  it("should render a component without image", async () => {
    render(<CardProduct {...props} />);

    const imageElements = screen.queryByRole("img");

    expect(imageElements).not.toBeInTheDocument();
  });

  it("should render a component with 2 buttons: one to increase quantity, one for decrease", async () => {
    render(<CardProduct {...props} />);

    const buttons = screen.queryAllByRole("button");

    expect(buttons).toHaveLength(2);

    const increase = screen.getByText("+");
    const decrease = screen.getByText("-");

    expect(increase).toHaveClass("card-product-content-buttons--positive");
    expect(decrease).toHaveClass("card-product-content-buttons--negative");
  });

  it("should render a component with action to increase and decrease buttons", async () => {
    const handleIncrease = jest.fn();
    const handleDecrease = jest.fn();

    render(<CardProduct {...props} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />);

    const increase = screen.getByText("+");
    const decrease = screen.getByText("-");

    userEvent.click(increase);
    expect(handleIncrease).toHaveBeenCalled();

    userEvent.click(decrease);
    expect(handleDecrease).toHaveBeenCalled();
  });
});
