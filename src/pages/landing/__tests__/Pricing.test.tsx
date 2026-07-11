import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Pricing from '../Pricing'

describe('Pricing', () => {
  it('renders pricing cards and login action links', () => {
    render(
      <MemoryRouter>
        <Pricing />
      </MemoryRouter>,
    )

    expect(screen.getByText(/Basic/i)).toBeInTheDocument()
    expect(screen.getByText(/Pro/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /Iniciar teste gratuito de 5 dias/i })).toHaveLength(2)
  })
})
