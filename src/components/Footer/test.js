import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "./";

describe("Footer", () => {
  it("should render a component with footerText equals to variable", async () => {
    const footerText = "Todos os direitos reservados.";

    render(<Footer footerText={footerText} />);

    expect(screen.getByText(footerText)).toBeInTheDocument();
  });
});
