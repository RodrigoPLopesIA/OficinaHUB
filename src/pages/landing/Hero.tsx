export default function Hero() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-[1126px] px-6 py-20 grid gap-16 lg:grid-cols-[1.15fr_0.9fr] items-center">
        <div className="space-y-8 text-left">
          <p className="inline-flex rounded-full bg-purple-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Plataforma SaaS para oficinas mecânicas
          </p>
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Controle total da sua oficina em um único lugar
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              OficinaPro junta clientes, veículos, ordens de serviço, estoque,
              agendamentos e financeiro em uma experiência moderna e fácil de usar.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#login"
              className="inline-flex items-center justify-center rounded-2xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
            >
              Começar grátis
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Ver planos
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="max-w-md rounded-[32px] border border-slate-800 bg-slate-900 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">Economia de tempo</p>
            <p className="mt-6 text-3xl font-semibold text-white">+45% menos tarefas manuais</p>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Automatize lembretes, agendamentos e controle de estoque para focar no crescimento da oficina.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
