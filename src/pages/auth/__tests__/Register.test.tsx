import { render, screen } from '@testing-library/react'
import { Register } from '../Register'
import { MemoryRouter } from 'react-router-dom'

describe("Register", () => {
  it("renders register form", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    )

    expect(screen.getByPlaceholderText(/Primeiro nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Último nome/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Telefone com DDD/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/CPF ou CNPJ/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Digite seu email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Digite sua senha/i)).toBeInTheDocument()
  })
})