import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ForgotPassword } from "../ForgotPassword";

describe("ForgotPassword", () => {
  it("renders the forgot password page", () => {
    render(
    <MemoryRouter>
      <ForgotPassword />
    </MemoryRouter>
    );


    expect(screen.getByText("Redefina sua senha")).toBeInTheDocument();
  });
});