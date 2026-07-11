type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Quais recursos o plano Basic oferece?',
    answer:
      'O plano Basic inclui cadastro de clientes, veículos, ordens de serviço, controle de estoque e financeiro básico para sua oficina.',
  },
  {
    question: 'O plano Pro tem integrações adicionais?',
    answer:
      'Sim. O plano Pro traz integrações com Stripe para pagamentos e suporte para comunicação com WhatsApp em fluxo de atendimento.',
  },
  {
    question: 'Posso migrar do Basic para o Pro depois?',
    answer:
      'Sim, você pode ampliar o plano sempre que quiser e manter todos os dados e configurações da sua oficina.',
  },
]

export default function FAQ() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-[1126px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-purple-100 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-700">
            Perguntas frequentes
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Dúvidas sobre os planos e o serviço
          </h2>
        </div>

        <div className="mt-16 grid gap-6">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-[24px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-950">{item.question}</h3>
              <p className="mt-4 text-slate-600 leading-7">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
