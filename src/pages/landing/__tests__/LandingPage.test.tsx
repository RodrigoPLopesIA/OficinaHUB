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

    expect(screen.getByText(/gestão inteligente de oficinas mecânicas/i)).toBeInTheDocument()
  })
})
