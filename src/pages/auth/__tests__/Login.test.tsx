import { render, screen } from '@testing-library/react'
import Login from '../Login'
import { MemoryRouter } from 'react-router-dom'

describe("Login", () => {
  it("renders login form", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText(/Celular, email, CPF ou CNPJ/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Digite sua senha/i)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: /Entrar/i })).toBeInTheDocument()
  })
})