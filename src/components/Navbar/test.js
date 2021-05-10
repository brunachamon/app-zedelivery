import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Navbar from "./";

describe("Navbar", () => {
  it("should render a component with logoText equals Teste123", async () => {
    render(<Navbar logoText="Teste123" />);

    expect(screen.getByText("Teste123")).toBeInTheDocument();
  });
});
