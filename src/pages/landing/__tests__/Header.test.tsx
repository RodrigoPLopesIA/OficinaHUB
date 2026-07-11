import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../Header'

describe('Header', () => {
  it('renders brand and login links', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByText('OficinaPro')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /cadastrar/i })).toHaveAttribute('href', '/login')
    expect(screen.getByRole('link', { name: /iniciar teste gratuito de 5 dias/i })).toHaveAttribute('href', '/login')
  })
})
