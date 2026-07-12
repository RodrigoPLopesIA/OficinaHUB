import { ManagementPage } from './ManagementPage'

export function ClientsManagementPage() {
  return (
    <ManagementPage
      title="Clientes"
      countLabel="Total de clientes"
      count={186}
      description="Gerencie cadastro, histórico de atendimentos e status de relacionamento de cada cliente."
    />
  )
}

export function BudgetsManagementPage() {
  return (
    <ManagementPage
      title="Orçamentos"
      countLabel="Orçamentos em aberto"
      count={42}
      description="Acompanhe aprovações pendentes, valores e condições para converter orçamentos em ordens de serviço."
    />
  )
}

export function ServicesManagementPage() {
  return (
    <ManagementPage
      title="Serviços"
      countLabel="Serviços cadastrados"
      count={93}
      description="Mantenha o catálogo de serviços atualizado, com tempo médio e preço de referência por tipo de trabalho."
    />
  )
}

export function MechanicsManagementPage() {
  return (
    <ManagementPage
      title="Mecânicos"
      countLabel="Mecânicos ativos"
      count={12}
      description="Organize a equipe técnica, disponibilidade e especialidades para distribuir melhor as ordens de serviço."
    />
  )
}

export function WorkOrdersManagementPage() {
  return (
    <ManagementPage
      title="Ordens de Serviço"
      countLabel="Ordens em andamento"
      count={57}
      description="Controle prazos, etapas e status de cada ordem para manter previsibilidade e produtividade na oficina."
    />
  )
}

export function InventoryManagementPage() {
  return (
    <ManagementPage
      title="Estoque"
      countLabel="Itens disponíveis"
      count={248}
      description="Monitore peças e insumos, evitando rupturas e mantendo o nível ideal para execução dos serviços."
    />
  )
}

export function VehiclesManagementPage() {
  return (
    <ManagementPage
      title="Veículos"
      countLabel="Veículos cadastrados"
      count={1284}
      description="Centralize histórico de manutenção, quilometragem e dados técnicos para atender cada cliente com precisão."
    />
  )
}

export function ScheduleManagementPage() {
  return (
    <ManagementPage
      title="Agenda"
      countLabel="Agendamentos de hoje"
      count={17}
      description="Organize horários da oficina, distribuição de equipes e capacidade diária com visão clara da operação."
    />
  )
}

export function FinancialManagementPage() {
  return (
    <ManagementPage
      title="Financeiro"
      countLabel="Receita do mês"
      count={218450}
      description="Acompanhe recebimentos, inadimplência, ticket médio e margem para decisões financeiras melhores."
    />
  )
}

export function ReportsManagementPage() {
  return (
    <ManagementPage
      title="Relatórios"
      countLabel="Relatórios gerados"
      count={86}
      description="Consulte relatórios operacionais e estratégicos para monitorar performance e produtividade da oficina."
    />
  )
}

export function SettingsManagementPage() {
  return (
    <ManagementPage
      title="Configurações"
      countLabel="Preferências configuradas"
      count={24}
      description="Gerencie permissões, integrações e parâmetros gerais para manter o sistema alinhado ao seu processo."
    />
  )
}
