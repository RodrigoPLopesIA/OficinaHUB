const basicFeatures = [
  'Cadastro de clientes e veículos',
  'Ordens de serviço e histórico',
  'Controle de estoque',
  'Gestão financeira básica',
]
const proFeatures = [
  ...basicFeatures,
  'Relatórios avançados',
  'Integração com Stripe',
  'Comunicação via WhatsApp',
  'Automação e multi-tenant',
]

export default function Pricing() {
  return (
    <section className="bg-slate-50" id="pricing">
      <div className="mx-auto max-w-[1126px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Planos
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Escolha o plano certo para sua oficina
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex h-full flex-col rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              Basic
            </span>
            <p className="mt-8 text-4xl font-semibold text-slate-950">R$ 99,99 / mês</p>
            <p className="mt-4 text-slate-600 leading-7">
              Essencial para controlar sua oficina com eficiência.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              {basicFeatures.map((feature) => (
                <li key={feature} className="list-disc pl-5 leading-7">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800">
                Iniciar teste gratuito de 5 dias
              </button>
            </div>
          </div>

          <div className="rounded-[32px] border border-transparent bg-gradient-to-b from-purple-50 to-white p-1 shadow-[0_24px_90px_rgba(125,76,255,0.14)]">
            <div className="flex h-full flex-col rounded-[30px] bg-white p-8">
              <span className="inline-flex rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-700">
                Pro
              </span>
              <p className="mt-8 text-4xl font-semibold text-slate-950">R$ 119,99 / mês</p>
              <p className="mt-4 text-slate-600 leading-7">
                Para oficinas que querem automação, integrações e crescimento.
              </p>
              <ul className="mt-8 mb-4 space-y-3 text-slate-700">
                {proFeatures.map((feature) => (
                  <li key={feature} className="list-disc pl-5 leading-7">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800">
                  Iniciar teste gratuito de 5 dias
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
