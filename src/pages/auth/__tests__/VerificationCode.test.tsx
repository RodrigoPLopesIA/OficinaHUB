import { render, screen, fireEvent } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, it, expect, vi } from "vitest"
import { ForgotPassword } from "../ForgotPassword"

const navigateMock = vi.fn()

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom")

  return {
    ...actual,
    useNavigate: () => navigateMock,
  }
})

describe("ForgotPassword", () => {
  it("renders the forgot password page", () => {
    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    )

    expect(screen.getByText("Redefina sua senha")).toBeInTheDocument()
  })

  it("navigates to verification code page on form submission", () => {
    render(
      <MemoryRouter>
        <ForgotPassword />
      </MemoryRouter>
    )

    fireEvent.submit(screen.getByRole("form", { name: /Redefinir senha/i }))

    expect(navigateMock).toHaveBeenCalledWith("/verification-code")
  })
})