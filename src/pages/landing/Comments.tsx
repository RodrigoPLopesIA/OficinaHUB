const comments = [
  {
    name: 'Oficina do João',
    role: 'Proprietário',
    text: 'O OficinaPro nos ajudou a centralizar o atendimento e reduzir o tempo de resposta para nossos clientes.',
  },
  {
    name: 'Auto Center Brasil',
    role: 'Gerente',
    text: 'Agora temos controle real do estoque e do financeiro, o que facilita muito o planejamento mensal.',
  },
  {
    name: 'Mecânica Rápida',
    role: 'Oficina parceira',
    text: 'A automação de agendamentos e lembretes trouxe mais organização para a equipe.',
  },
]

export default function Comments() {
  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-[1126px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-purple-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Depoimentos
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            O que oficinas reais estão dizendo
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {comments.map((item) => (
            <article key={item.name} className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-sm">
              <p className="text-slate-300 leading-8">{item.text}</p>
              <div className="mt-8 space-y-1">
                <p className="text-base font-semibold text-white">{item.name}</p>
                <p className="text-sm text-slate-400">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
