export default function Hero() {
  return (
    <section className="bg-[#f7f6fb]">
      <div className="mx-auto max-w-[1126px] px-6 py-20 grid gap-16 lg:grid-cols-[1.15fr_0.9fr] items-center">
        <div className="space-y-8 text-left">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Plataforma SaaS para oficinas mecânicas
          </p>
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
              Controle total da sua oficina em um único lugar
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              OficinaPro junta clientes, veículos, ordens de serviço, estoque,
              agendamentos e financeiro em uma experiência moderna e fácil de usar.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="inline-flex items-center justify-center rounded-2xl bg-purple-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800">
              Começar grátis
            </button>
            <button className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400">
              Ver planos
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="max-w-md rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_24px_80px_rgba(15,12,39,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-700">Economia de tempo</p>
            <p className="mt-6 text-3xl font-semibold text-slate-950">+45% menos tarefas manuais</p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Automatize lembretes, agendamentos e controle de estoque para focar no crescimento da oficina.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
