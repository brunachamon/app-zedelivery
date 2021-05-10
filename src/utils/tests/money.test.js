
import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { formatMoneyWithCurrency } from "../money";

describe("formatMoneyWithCurrency", () => {
  it("should render a component with logoText equals Teste123", async () => {
    const formattedValue = "R$100.00";
    const VALUE = 100;

    expect(formatMoneyWithCurrency(VALUE)).toEqual(formattedValue);
  });
});
