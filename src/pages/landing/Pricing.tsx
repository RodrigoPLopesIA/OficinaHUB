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
    <section className="bg-slate-950" id="pricing">
      <div className="mx-auto max-w-[1126px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-purple-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Planos
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Escolha o plano certo para sua oficina
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="flex h-full flex-col rounded-[32px] border border-slate-800 bg-slate-900 p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
              Basic
            </span>
            <p className="mt-8 text-4xl font-semibold text-white">R$ 99,99 / mês</p>
            <p className="mt-4 text-slate-400 leading-7">
              Essencial para controlar sua oficina com eficiência.
            </p>
            <ul className="mt-8 space-y-3 text-slate-300">
              {basicFeatures.map((feature) => (
                <li key={feature} className="list-disc pl-5 leading-7">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="#login"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
              >
                Iniciar teste gratuito de 5 dias
              </a>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-1 shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
            <div className="flex h-full flex-col rounded-[30px] bg-slate-950 p-8">
              <span className="inline-flex rounded-full bg-purple-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-300">
                Pro
              </span>
              <p className="mt-8 text-4xl font-semibold text-white">R$ 119,99 / mês</p>
              <p className="mt-4 text-slate-400 leading-7">
                Para oficinas que querem automação, integrações e crescimento.
              </p>
              <ul className="mt-8 mb-4 space-y-3 text-slate-300">
                {proFeatures.map((feature) => (
                  <li key={feature} className="list-disc pl-5 leading-7">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <a
                  href="#login"
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
                >
                  Iniciar teste gratuito de 5 dias
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
