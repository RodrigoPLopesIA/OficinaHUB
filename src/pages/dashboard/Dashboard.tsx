import { useEffect, useState } from 'react'
import { UserButton, useUser } from '@clerk/react'
import { Link } from 'react-router-dom'
import {
  AlertTriangle,
  Bell,
  CalendarDays,
  Car,
  Check,
  ChevronRight,
  ClipboardList,
  Crown,
  CreditCard,
  FileText,
  HelpCircle,
  LayoutDashboard,
  Package,
  Search,
  Settings,
  TrendingUp,
  UserPlus,
  Users,
  Wrench,
} from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu'
import { Input } from '../../components/ui/input'
import { Skeleton } from '../../components/ui/skeleton'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/table'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../components/ui/tooltip'
import { pricingPlans } from '../../data/pricingPlans'

const menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, href: '/dashboard' },
  { label: 'Clientes', icon: Users, href: '/dashboard/clientes' },
  { label: 'Veículos', icon: Car, href: '/dashboard/veiculos' },
  { label: 'Mecânicos', icon: Wrench, href: '/dashboard/mecanicos' },
  { label: 'Ordens de Serviço', icon: ClipboardList, href: '/dashboard/ordens-servico' },
  { label: 'Orçamentos', icon: FileText, href: '/dashboard/orcamentos' },
  { label: 'Agenda', icon: CalendarDays, href: '/dashboard/agenda' },
  { label: 'Estoque', icon: Package, href: '/dashboard/estoque' },
  { label: 'Financeiro', icon: CreditCard, href: '/dashboard/financeiro' },
  { label: 'Relatórios', icon: TrendingUp, href: '/dashboard/relatorios' },
  { label: 'Configurações', icon: Settings, href: '/dashboard/configuracoes' },
] as const

type MetricCard = {
  icon: typeof Car
  title: string
  value: string
  delta: string
  deltaType: 'up' | 'down' | 'neutral'
  href: string
}

const metricCards: MetricCard[] = [
  { icon: Car, title: 'Veículos cadastrados', value: '1.284', delta: '+8,3% vs mês anterior', deltaType: 'up', href: '/dashboard/veiculos' },
  { icon: Users, title: 'Clientes', value: '942', delta: '+5,1% vs mês anterior', deltaType: 'up', href: '/dashboard/clientes' },
  { icon: ClipboardList, title: 'Ordens abertas', value: '57', delta: '-4,0% vs mês anterior', deltaType: 'down', href: '/dashboard/ordens-servico' },
  { icon: Wrench, title: 'Mecânicos ativos', value: '12', delta: 'Sem alteração', deltaType: 'neutral', href: '/dashboard/mecanicos' },
  { icon: CreditCard, title: 'Faturamento do mês', value: 'R$ 218.450', delta: '+14,7% vs mês anterior', deltaType: 'up', href: '/dashboard/financeiro' },
  { icon: Package, title: 'Peças em estoque', value: '2.409', delta: '8 itens com baixo nível', deltaType: 'neutral', href: '/dashboard/estoque' },
]

const quickActions = [
  { label: 'Novo Cliente', icon: UserPlus, href: '/dashboard/clientes' },
  { label: 'Novo Veículo', icon: Car, href: '/dashboard/veiculos' },
  { label: 'Nova Ordem de Serviço', icon: ClipboardList, href: '/dashboard/ordens-servico' },
  { label: 'Novo Orçamento', icon: FileText, href: '/dashboard/orcamentos' },
  { label: 'Agendar Serviço', icon: CalendarDays, href: '/dashboard/agenda' },
]

const todaySchedule = [
  { time: '08:00', client: 'Carlos Mendes', vehicle: 'Honda Civic 2019', service: 'Troca de óleo', mechanic: 'Lucas', status: 'Confirmado' },
  { time: '09:30', client: 'Rafaela Costa', vehicle: 'Jeep Renegade 2021', service: 'Alinhamento', mechanic: 'Diego', status: 'Em andamento' },
  { time: '11:00', client: 'Marcos Silva', vehicle: 'Fiat Toro 2022', service: 'Revisão 30 mil', mechanic: 'Renato', status: 'Aguardando peça' },
  { time: '14:00', client: 'Luciana Nunes', vehicle: 'Toyota Corolla 2020', service: 'Freios', mechanic: 'Bruno', status: 'Confirmado' },
  { time: '16:30', client: 'Fernanda Luz', vehicle: 'VW T-Cross 2023', service: 'Diagnóstico elétrico', mechanic: 'Paulo', status: 'Confirmado' },
]

const alerts = [
  { text: '12 veículos precisam trocar óleo', priority: 'warning' as const },
  { text: '5 revisões vencem esta semana', priority: 'warning' as const },
  { text: '3 ordens estão atrasadas', priority: 'danger' as const },
  { text: 'Estoque baixo em 8 peças', priority: 'danger' as const },
  { text: '2 orçamentos aguardando aprovação', priority: 'info' as const },
]

const workOrders = [
  { number: '#321', client: 'Carlos Mendes', vehicle: 'Honda Civic', mechanic: 'Lucas', status: 'Em andamento', value: 'R$ 450', date: '12/07/2026' },
  { number: '#322', client: 'Rafaela Costa', vehicle: 'Jeep Renegade', mechanic: 'Diego', status: 'Aguardando peça', value: 'R$ 870', date: '12/07/2026' },
  { number: '#323', client: 'Marcos Silva', vehicle: 'Fiat Toro', mechanic: 'Renato', status: 'Finalizada', value: 'R$ 1.220', date: '11/07/2026' },
  { number: '#324', client: 'Luciana Nunes', vehicle: 'Toyota Corolla', mechanic: 'Bruno', status: 'Cancelada', value: 'R$ 0', date: '10/07/2026' },
  { number: '#325', client: 'Fernanda Luz', vehicle: 'VW T-Cross', mechanic: 'Paulo', status: 'Em andamento', value: 'R$ 690', date: '12/07/2026' },
]

const pendingBudgets = [
  { client: 'André Rocha', vehicle: 'Nissan Kicks', value: 'R$ 980', date: '12/07/2026', status: 'Aguardando cliente' },
  { client: 'Joana Campos', vehicle: 'Chevrolet Onix', value: 'R$ 540', date: '12/07/2026', status: 'Em análise' },
  { client: 'Patrícia Alves', vehicle: 'Ford Ka', value: 'R$ 1.430', date: '11/07/2026', status: 'Aguardando cliente' },
  { client: 'Eduardo Lima', vehicle: 'Hyundai HB20', value: 'R$ 760', date: '11/07/2026', status: 'Em análise' },
  { client: 'Bruna Teixeira', vehicle: 'Renault Kwid', value: 'R$ 620', date: '10/07/2026', status: 'Aguardando cliente' },
]

const monthlyRevenue = [
  { month: 'Jan', value: 110000 },
  { month: 'Fev', value: 125000 },
  { month: 'Mar', value: 132000 },
  { month: 'Abr', value: 148000 },
  { month: 'Mai', value: 154000 },
  { month: 'Jun', value: 165000 },
  { month: 'Jul', value: 171000 },
  { month: 'Ago', value: 182000 },
  { month: 'Set', value: 196000 },
  { month: 'Out', value: 204000 },
  { month: 'Nov', value: 212000 },
  { month: 'Dez', value: 218450 },
]

const ordersByStatus = [
  { name: 'Em andamento', value: 31, color: '#2563eb' },
  { name: 'Aguardando peça', value: 14, color: '#f59e0b' },
  { name: 'Finalizada', value: 88, color: '#16a34a' },
  { name: 'Cancelada', value: 7, color: '#dc2626' },
]

const topServices = [
  { service: 'Troca de óleo', orders: 128 },
  { service: 'Alinhamento', orders: 97 },
  { service: 'Freios', orders: 81 },
  { service: 'Revisão geral', orders: 74 },
  { service: 'Diagnóstico', orders: 63 },
]

const mechanicsProductivity = [
  { name: 'Lucas', completed: 28, hours: 162, avgTime: '2h 40m', efficiency: '94%' },
  { name: 'Diego', completed: 24, hours: 158, avgTime: '2h 55m', efficiency: '91%' },
  { name: 'Renato', completed: 21, hours: 149, avgTime: '3h 05m', efficiency: '88%' },
  { name: 'Bruno', completed: 19, hours: 143, avgTime: '3h 10m', efficiency: '86%' },
  { name: 'Paulo', completed: 18, hours: 138, avgTime: '3h 20m', efficiency: '84%' },
]

const recentActivities = [
  { name: 'Carlos', action: 'iniciou a Ordem #321', time: 'há 5 min' },
  { name: 'João', action: 'concluiu uma manutenção', time: 'há 14 min' },
  { name: 'Maria', action: 'cadastrou um cliente', time: 'há 21 min' },
  { name: 'Pedro', action: 'adicionou um veículo', time: 'há 32 min' },
  { name: 'Ana', action: 'atualizou o estoque', time: 'há 47 min' },
]

const preventiveMaintenance = [
  { vehicle: 'Honda Civic - ABC1D23', service: 'Troca de óleo', dueIn: '3 dias' },
  { vehicle: 'Jeep Renegade - EFG4H56', service: 'Troca da correia', dueIn: '7 dias' },
  { vehicle: 'Toyota Corolla - IJK7L89', service: 'Revisão anual', dueIn: '9 dias' },
  { vehicle: 'VW T-Cross - MNO0P12', service: 'Troca de filtros', dueIn: '12 dias' },
  { vehicle: 'Fiat Toro - QRS3T45', service: 'Troca de pneus', dueIn: '15 dias' },
]

function statusBadgeVariant(status: string): 'info' | 'warning' | 'success' | 'danger' {
  if (status === 'Em andamento') return 'info'
  if (status === 'Aguardando peça') return 'warning'
  if (status === 'Finalizada') return 'success'
  return 'danger'
}

function alertBadgeVariant(priority: 'warning' | 'danger' | 'info'): 'warning' | 'danger' | 'info' {
  if (priority === 'danger') return 'danger'
  if (priority === 'info') return 'info'
  return 'warning'
}

function cardDeltaClass(deltaType: MetricCard['deltaType']) {
  if (deltaType === 'up') return 'text-emerald-600'
  if (deltaType === 'down') return 'text-amber-600'
  return 'text-slate-400'
}

function DashboardLoading() {
  return (
    <div className="space-y-6 p-4 md:p-6 lg:p-8">
      <Skeleton className="h-14 w-full rounded-2xl" />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={`metric-${i}`} className="h-36 rounded-2xl" />
        ))}
      </div>
      <Skeleton className="h-80 rounded-2xl" />
      <Skeleton className="h-80 rounded-2xl" />
    </div>
  )
}

function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex min-h-[180px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-900 text-center">
      <p className="text-sm font-semibold text-slate-200">{title}</p>
      <p className="mt-1 max-w-sm text-sm text-slate-400">{description}</p>
    </div>
  )
}

function ErrorState({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center p-6">
      <Card className="max-w-lg p-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h2 className="text-lg font-semibold text-white">Não foi possível carregar o dashboard</h2>
        <p className="mt-2 text-sm text-slate-400">
          Verifique sua conexão e tente novamente. Se o problema persistir, acione o suporte.
        </p>
        <Button className="mt-5" onClick={onRetry}>
          Tentar novamente
        </Button>
      </Card>
    </div>
  )
}

type FinancialMetricProps = {
  label: string
  value: string
  tone: 'success' | 'warning' | 'danger' | 'info'
}

function FinancialMetric({ label, value, tone }: FinancialMetricProps) {
  const toneClass =
    tone === 'success'
      ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
      : tone === 'warning'
        ? 'border-amber-200 bg-amber-50 text-amber-700'
        : tone === 'danger'
          ? 'border-red-200 bg-red-50 text-red-700'
          : 'border-blue-200 bg-purple-600/10 text-purple-200'

  return (
    <div className={`rounded-xl border p-3 ${toneClass}`}>
      <p className="text-xs font-medium uppercase tracking-wide">{label}</p>
      <p className="mt-2 text-lg font-bold">{value}</p>
    </div>
  )
}

function BillingUpgradeModal({ isOpen }: { isOpen: boolean }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="billing-upgrade-title"
    >
      <Card className="max-h-[92vh] w-full max-w-5xl overflow-y-auto border-purple-500/40 bg-slate-900">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div>
              <Badge variant="warning" className="mb-3">
                Assinatura necessária
              </Badge>
              <h2 id="billing-upgrade-title" className="text-2xl font-bold text-white">
                Faça upgrade para continuar com todos os recursos
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300">
                Seu plano atual nao cobre esta operacao ou o pagamento esta pendente. Escolha um plano abaixo para
                regularizar sua assinatura e manter o sistema ativo.
              </p>
            </div>

            <div className="rounded-xl bg-purple-600/10 p-3 text-purple-300">
              <Crown className="h-6 w-6" />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl border p-4 ${
                  plan.highlighted
                    ? 'border-purple-500 bg-purple-600/10 shadow-[0_0_0_1px_rgba(168,85,247,0.25)]'
                    : 'border-slate-800 bg-slate-950/60'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-semibold text-white">{plan.name}</p>
                  {plan.highlighted ? <Badge variant="info">Mais recomendado</Badge> : null}
                </div>
                <p className="mt-3 text-xl font-bold text-white">{plan.price}</p>
                <p className="mt-2 text-sm text-slate-300">{plan.description}</p>

                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/dashboard/configuracoes" className="mt-5 block">
                  <Button className="w-full" variant={plan.highlighted ? 'default' : 'outline'}>
                    {plan.ctaLabel}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function Dashboard() {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(() => {
    if (typeof window === 'undefined') return false
    return new URLSearchParams(window.location.search).get('dashboardError') === '1'
  })

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 900)
    return () => clearTimeout(timeout)
  }, [])

  const metadataPlan = user?.publicMetadata?.['plan']
  const metadataPaymentStatus = user?.publicMetadata?.['paymentStatus']

  const userPlan = typeof metadataPlan === 'string' ? metadataPlan.toLowerCase() : 'free'
  const paymentStatus = typeof metadataPaymentStatus === 'string' ? metadataPaymentStatus.toLowerCase() : 'unpaid'

  const hasPaidPlan = userPlan !== 'free' && userPlan !== 'gratuito'
  const hasPaymentInGoodStanding = paymentStatus === 'active' || paymentStatus === 'paid'
  const showUpgradeModal = !hasPaidPlan || !hasPaymentInGoodStanding

  const bestMechanic = mechanicsProductivity[0]

  if (hasError) {
    return <ErrorState onRetry={() => setHasError(false)} />
  }

  if (isLoading) {
    return <DashboardLoading />
  }

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-slate-950 text-white">
        <aside className="hidden w-[272px] border-r border-slate-800 bg-slate-900 lg:fixed lg:inset-y-0 lg:flex lg:flex-col">
          <div className="border-b border-slate-800 px-5 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-purple-300">OficinaPro</p>
            <h1 className="mt-2 text-xl font-bold text-white">Painel Operacional</h1>
          </div>

          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = item.href === '/dashboard'
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${active
                      ? 'bg-purple-600/10 text-purple-200'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="border-t border-slate-800 p-4">
            <Card className="border-blue-100 bg-purple-600/10 p-4">
              <p className="text-sm font-semibold text-white">Oficina Central Auto</p>
              <p className="mt-1 text-xs text-slate-300">Plano atual: Pro</p>
              <Button variant="default" size="sm" className="mt-3 w-full">
                Upgrade de Plano
              </Button>
            </Card>
          </div>
        </aside>

        <main className="lg:pl-[272px]">
          <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/95 backdrop-blur">
            <div className="flex flex-wrap items-center gap-3 px-4 py-3 md:px-6 lg:px-8">
              <div className="flex-1 min-w-[260px]">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input
                    className="pl-9"
                    placeholder="Pesquisar cliente, veículo, placa, ordem de serviço..."
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:bg-slate-800">
                      <Bell className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Notificações</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:bg-slate-800">
                      <HelpCircle className="h-4 w-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Ajuda</TooltipContent>
                </Tooltip>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 transition hover:bg-slate-900">
                      <div className="hidden text-left sm:block">
                        <p className="text-sm font-semibold text-white">
                          {user?.fullName || user?.firstName || 'Usuário'}
                        </p>
                        <p className="text-xs text-slate-400">Administrador</p>
                      </div>
                      <UserButton />
                    </button>
                  </DropdownMenuTrigger>
                </DropdownMenu>
              </div>
            </div>
          </header>

          <BillingUpgradeModal isOpen={showUpgradeModal} />

          <div className="space-y-6 px-4 py-5 md:px-6 lg:px-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {metricCards.map((card) => {
                const Icon = card.icon
                return (
                  <Link to={card.href} key={card.title} className="group">
                    <Card className="h-full border-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-purple-500/60 hover:shadow-md">
                      <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle>{card.title}</CardTitle>
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-600/10 text-purple-300">
                          <Icon className="h-4 w-4" />
                        </span>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-bold text-white">{card.value}</p>
                        <p className={`mt-2 text-xs font-medium ${cardDeltaClass(card.deltaType)}`}>{card.delta}</p>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Ações rápidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                    {quickActions.map((action) => {
                      const Icon = action.icon
                      return (
                        <Link key={action.label} to={action.href}>
                          <Button
                            className="h-12 w-full justify-start rounded-xl border border-slate-800 bg-slate-900 text-slate-100 hover:bg-slate-900"
                            variant="outline"
                          >
                            <Icon className="h-4 w-4 text-purple-300" />
                            {action.label}
                          </Button>
                        </Link>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Agenda de Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  {todaySchedule.length === 0 ? (
                    <EmptyState
                      title="Nenhum agendamento para hoje"
                      description="Adicione compromissos para organizar a operação da oficina."
                    />
                  ) : (
                    <div className="space-y-3">
                      {todaySchedule.map((item) => (
                        <div key={`${item.time}-${item.client}`} className="rounded-xl border border-slate-800 p-3">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="text-sm font-semibold text-white">{item.time}</p>
                            <Badge variant={statusBadgeVariant(item.status)}>{item.status}</Badge>
                          </div>
                          <p className="mt-2 text-sm text-slate-200">
                            {item.client} · {item.vehicle}
                          </p>
                          <p className="text-sm text-slate-400">
                            {item.service} · Mecânico: {item.mechanic}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alertas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {alerts.map((alert) => (
                      <div
                        key={alert.text}
                        className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 p-3"
                      >
                        <p className="text-sm text-slate-200">{alert.text}</p>
                        <Badge variant={alertBadgeVariant(alert.priority)}>{alert.priority}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Ordens de Serviço</CardTitle>
                  <Link
                    to="/dashboard/ordens-servico"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-purple-300 hover:text-purple-200"
                  >
                    Ver todas as ordens
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Número</TableHead>
                        <TableHead>Cliente</TableHead>
                        <TableHead>Veículo</TableHead>
                        <TableHead>Mecânico</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Data</TableHead>
                        <TableHead>Ações</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {workOrders.map((order) => (
                        <TableRow key={order.number}>
                          <TableCell className="font-semibold text-white">{order.number}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.vehicle}</TableCell>
                          <TableCell>{order.mechanic}</TableCell>
                          <TableCell>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <span>
                                  <Badge variant={statusBadgeVariant(order.status)}>{order.status}</Badge>
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>Atualizado agora</TooltipContent>
                            </Tooltip>
                          </TableCell>
                          <TableCell>{order.value}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="sm" className="h-8 px-2 text-purple-300">
                              Abrir
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Orçamentos Pendentes</CardTitle>
                </CardHeader>
                <CardContent>
                  {pendingBudgets.length === 0 ? (
                    <EmptyState
                      title="Nenhum orçamento pendente"
                      description="Novos orçamentos aparecerão aqui automaticamente."
                    />
                  ) : (
                    <div className="space-y-3">
                      {pendingBudgets.map((budget) => (
                        <div
                          key={`${budget.client}-${budget.vehicle}`}
                          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 p-3"
                        >
                          <div>
                            <p className="text-sm font-semibold text-white">{budget.client}</p>
                            <p className="text-sm text-slate-300">{budget.vehicle}</p>
                          </div>
                          <div className="text-sm text-slate-200">
                            <p>{budget.value}</p>
                            <p className="text-slate-400">{budget.date}</p>
                          </div>
                          <Badge variant="warning">{budget.status}</Badge>
                          <Button size="sm" variant="outline">
                            Abrir orçamento
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-6 xl:grid-cols-3">
              <Card className="xl:col-span-2">
                <CardHeader>
                  <CardTitle>Faturamento dos últimos 12 meses</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={monthlyRevenue}>
                      <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                      <XAxis dataKey="month" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <RechartsTooltip
                        formatter={(value) => {
                          const numeric = typeof value === 'number' ? value : Number(value ?? 0)
                          return [`R$ ${numeric.toLocaleString('pt-BR')}`, 'Faturamento']
                        }}
                      />
                      <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ordens por Status</CardTitle>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={ordersByStatus} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90}>
                        {ordersByStatus.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>
                      <RechartsTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>

            <section>
              <Card>
                <CardHeader>
                  <CardTitle>Serviços Mais Executados</CardTitle>
                </CardHeader>
                <CardContent className="h-[280px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topServices}>
                      <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" />
                      <XAxis dataKey="service" stroke="#64748b" />
                      <YAxis stroke="#64748b" />
                      <RechartsTooltip />
                      <Bar dataKey="orders" fill="#2563eb" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Produtividade dos Mecânicos</CardTitle>
                  <Badge variant="success">Destaque: {bestMechanic.name}</Badge>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Nome</TableHead>
                        <TableHead>Ordens concluídas</TableHead>
                        <TableHead>Horas trabalhadas</TableHead>
                        <TableHead>Tempo médio</TableHead>
                        <TableHead>Eficiência</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mechanicsProductivity.map((mechanic) => (
                        <TableRow key={mechanic.name}>
                          <TableCell className="font-semibold text-white">{mechanic.name}</TableCell>
                          <TableCell>{mechanic.completed}</TableCell>
                          <TableCell>{mechanic.hours}h</TableCell>
                          <TableCell>{mechanic.avgTime}</TableCell>
                          <TableCell>
                            <Badge variant={mechanic.name === bestMechanic.name ? 'success' : 'info'}>
                              {mechanic.efficiency}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                </CardHeader>
                <CardContent>
                  {recentActivities.length === 0 ? (
                    <EmptyState
                      title="Sem atividades recentes"
                      description="As atualizações da equipe aparecerão aqui em tempo real."
                    />
                  ) : (
                    <div className="space-y-3">
                      {recentActivities.map((activity) => (
                        <div
                          key={`${activity.name}-${activity.time}`}
                          className="flex items-center gap-3 rounded-xl border border-slate-800 p-3"
                        >
                          <img
                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(activity.name)}`}
                            alt={activity.name}
                            className="h-9 w-9 rounded-full"
                          />
                          <div className="flex-1">
                            <p className="text-sm text-slate-100">
                              <span className="font-semibold">{activity.name}</span> {activity.action}
                            </p>
                            <p className="text-xs text-slate-400">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </section>

            <section className="grid gap-6 xl:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Resumo Financeiro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <FinancialMetric label="Receita do dia" value="R$ 7.920" tone="success" />
                    <FinancialMetric label="Receita do mês" value="R$ 218.450" tone="info" />
                    <FinancialMetric label="Contas a receber" value="R$ 46.120" tone="warning" />
                    <FinancialMetric label="Contas vencidas" value="R$ 8.340" tone="danger" />
                    <FinancialMetric label="Ticket médio" value="R$ 482" tone="info" />
                    <FinancialMetric label="Lucro estimado" value="R$ 69.800" tone="success" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Manutenções Preventivas</CardTitle>
                  <Button size="sm" variant="default">
                    Enviar lembrete
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {preventiveMaintenance.map((item) => (
                      <div
                        key={`${item.vehicle}-${item.service}`}
                        className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-800 p-3"
                      >
                        <div>
                          <p className="text-sm font-semibold text-white">{item.vehicle}</p>
                          <p className="text-sm text-slate-300">{item.service}</p>
                        </div>
                        <Badge variant="warning">Vence em {item.dueIn}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </TooltipProvider>
  )
}