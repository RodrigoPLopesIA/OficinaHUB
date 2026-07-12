import { UserButton } from '@clerk/react'
import { Link } from 'react-router-dom'

type ManagementPageProps = {
  title: string
  countLabel: string
  count: number
  description: string
}

export function ManagementPage({ title, countLabel, count, description }: ManagementPageProps) {
  return (
    <div className="min-h-screen bg-slate-950 px-6 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-purple-300">Painel de Gestão</p>
            <h1 className="mt-2 text-3xl font-bold text-white">{title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/dashboard"
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-purple-500"
            >
              Voltar ao dashboard
            </Link>
            <UserButton />
          </div>
        </div>

        <section className="rounded-xl border border-slate-700 bg-slate-900 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-purple-300">{countLabel}</p>
          <p className="mt-3 text-4xl font-bold text-white">{count}</p>
          <p className="mt-4 text-slate-300">{description}</p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-700 bg-slate-900 p-6">
          <h2 className="text-xl font-semibold text-white">Ações rápidas</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <button className="rounded-lg bg-purple-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-purple-500">
              Novo registro
            </button>
            <button className="rounded-lg border border-slate-700 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-purple-500">
              Exportar relatório
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
