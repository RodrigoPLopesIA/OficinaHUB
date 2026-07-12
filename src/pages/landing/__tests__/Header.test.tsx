import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header'

describe('Header', () => {
  it('renders brand and auth controls', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByText('OficinaPro')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cadastrar/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /iniciar teste gratuito de 5 dias/i })).toBeInTheDocument()
  })
})
