import { useState } from 'react'

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
      'Sim. O plano Pro traz integrações com Stripe para pagamentos, comunicação via WhatsApp e automações mais avançadas.',
  },
  {
    question: 'Como funciona o teste gratuito de 5 dias?',
    answer:
      'Você poderá testar todos os recursos principais sem custo por 5 dias. Ao final do período, escolha entre Basic ou Pro para continuar usando a plataforma.',
  },
  {
    question: 'Preciso de cartão de crédito para iniciar o teste?',
    answer:
      'Não, o teste gratuito de 5 dias pode ser iniciado sem cadastro de cartão, para que você possa conhecer a plataforma primeiro.',
  },
  {
    question: 'Posso cancelar a qualquer momento?',
    answer:
      'Sim. Você pode cancelar a assinatura a qualquer momento sem penalidades e manter o acesso até o final do período já pago.',
  },
  {
    question: 'O Basic pode ser atualizado para o Pro depois?',
    answer:
      'Sim. A migração do Basic para o Pro é simples e mantém todos os dados da sua oficina intactos.',
  },
  {
    question: 'A plataforma oferece suporte e treinamento?',
    answer:
      'Sim, oferecemos suporte inicial e documentação para ajudar a sua equipe a começar rápido.',
  },
  {
    question: 'Como funciona o controle de multi-tenant?',
    answer:
      'Cada oficina opera em um ambiente separado com dados isolados, garantindo privacidade e segurança.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-slate-950">
      <div className="mx-auto max-w-[1126px] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full bg-purple-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.3em] text-purple-300">
            Perguntas frequentes
          </p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Dúvidas sobre os planos e o serviço
          </h2>
        </div>

        <div className="mt-16 grid gap-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <button
                key={item.question}
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="group w-full rounded-[24px] border border-slate-800 bg-slate-900 p-6 text-left shadow-sm transition hover:border-slate-700"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                  <span className={`text-xl text-purple-300 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
                    {isOpen ? '−' : '+'}
                  </span>
                </div>
                {isOpen && <p className="mt-4 text-slate-300 leading-7">{item.answer}</p>}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
