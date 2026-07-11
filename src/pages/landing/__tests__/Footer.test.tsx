import { render, screen } from '@testing-library/react'
import Footer from '../Footer'

describe('Footer', () => {
  it('renders footer navigation links', () => {
    render(<Footer />)

    expect(screen.getByText(/Benefícios/i)).toBeInTheDocument()
    expect(screen.getByText(/Planos/i)).toBeInTheDocument()
    expect(screen.getByText(/FAQ/i)).toBeInTheDocument()
  })
})
