import { act, fireEvent, render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { vi } from 'vitest'
import { Dashboard } from '../Dashboard'

vi.mock('recharts', () => {
  const Mock = ({ children }: { children?: ReactNode }) => <div>{children}</div>

  return {
    ResponsiveContainer: Mock,
    LineChart: Mock,
    Line: Mock,
    BarChart: Mock,
    Bar: Mock,
    PieChart: Mock,
    Pie: Mock,
    Cell: Mock,
    CartesianGrid: Mock,
    XAxis: Mock,
    YAxis: Mock,
    Tooltip: Mock,
  }
})

describe('Dashboard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    window.history.pushState({}, '', '/dashboard')
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  it('shows loading state before rendering dashboard sections', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>,
    )

    expect(screen.queryByText('Ações rápidas')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('Ações rápidas')).toBeInTheDocument()
  })

  it('renders key dashboard sections and navigation actions', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>,
    )

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('Painel Operacional')).toBeInTheDocument()
    expect(screen.getByText('Veículos cadastrados')).toBeInTheDocument()
    expect(screen.getAllByText('Ordens de Serviço').length).toBeGreaterThan(0)
    expect(screen.getByText('Orçamentos Pendentes')).toBeInTheDocument()
    expect(screen.getByText('Produtividade dos Mecânicos')).toBeInTheDocument()
    expect(screen.getByText('Atividades Recentes')).toBeInTheDocument()
    expect(screen.getByText('Manutenções Preventivas')).toBeInTheDocument()

    const workOrdersLink = screen.getByRole('link', { name: /ver todas as ordens/i })
    expect(workOrdersLink).toHaveAttribute('href', '/dashboard/ordens-servico')

    const newClientAction = screen.getByRole('button', { name: /novo cliente/i })
    expect(newClientAction).toBeInTheDocument()
  })

  it('shows upgrade modal with available plans when subscription is not in good standing', () => {
    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>,
    )

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText(/assinatura necessária/i)).toBeInTheDocument()
    expect(screen.getByText(/faça upgrade para continuar com todos os recursos/i)).toBeInTheDocument()

    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Pro')).toBeInTheDocument()

    expect(screen.getAllByRole('button', { name: /iniciar teste gratuito de 5 dias/i })).toHaveLength(2)
  })

  it('renders error state when query param is set and allows retry', () => {
    window.history.pushState({}, '', '/dashboard?dashboardError=1')

    render(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>,
    )

    expect(screen.getByText(/não foi possível carregar o dashboard/i)).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: /tentar novamente/i }))

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    expect(screen.getByText('Ações rápidas')).toBeInTheDocument()
  })
})
