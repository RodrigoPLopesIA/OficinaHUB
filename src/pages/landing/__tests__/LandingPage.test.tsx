import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import LandingPage from '../LandingPage'

describe('LandingPage', () => {
  it('renders header, hero, pricing and footer sections', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>,
    )

    expect(screen.getByText(/OficinaPro/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Controle total da sua oficina/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Escolha o plano certo/i })).toBeInTheDocument()
    expect(screen.getByText(/Planos/i)).toBeInTheDocument()
    expect(screen.getByText(/gestão inteligente de oficinas mecânicas/i)).toBeInTheDocument()
  })
})
