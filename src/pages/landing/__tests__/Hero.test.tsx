import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Hero from '../Hero'

describe('Hero', () => {
  it('shows the hero title and login CTA', () => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>,
    )

    expect(screen.getByRole('heading', { name: /Controle total da sua oficina/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Começar grátis/i })).toHaveAttribute('href', '/login')
  })
})
