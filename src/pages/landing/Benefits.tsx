export default function Benefits() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-[1126px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-purple-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Benefícios
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            O que sua oficina ganha com OficinaPro
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-white">Gestão completa</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Clientes, veículos, ordens, estoque e financeiro integrados em um só painel.
            </p>
          </article>
          <article className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-white">Menos retrabalho</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Automatize lembretes, agendamentos e histórico de manutenção com poucos cliques.
            </p>
          </article>
          <article className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-white">Controle financeiro</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Monitore faturamento, despesas e serviços com dados claros para decisões rápidas.
            </p>
          </article>
          <article className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-white">Atendimento melhor</h3>
            <p className="mt-4 text-slate-300 leading-7">
              Centralize a comunicação com clientes e cuide do histórico do veículo de forma profissional.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
