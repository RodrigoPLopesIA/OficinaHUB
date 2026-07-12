export type PricingPlan = {
  name: 'Basic' | 'Pro'
  price: string
  description: string
  features: string[]
  ctaLabel: string
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: 'R$ 99,99 / mês',
    description: 'Essencial para controlar sua oficina com eficiência.',
    features: [
      'Cadastro de clientes e veículos',
      'Ordens de serviço e histórico',
      'Controle de estoque',
      'Gestão financeira básica',
    ],
    ctaLabel: 'Iniciar teste gratuito de 5 dias',
  },
  {
    name: 'Pro',
    price: 'R$ 119,99 / mês',
    description: 'Para oficinas que querem automação, integrações e crescimento.',
    features: [
      'Tudo do Basic +',
      'Relatórios avançados',
      'Integração com Stripe',
      'Comunicação via WhatsApp',
      'Automação e multi-tenant',
    ],
    ctaLabel: 'Iniciar teste gratuito de 5 dias',
    highlighted: true,
  },
]
