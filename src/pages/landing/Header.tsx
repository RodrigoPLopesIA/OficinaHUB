import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-slate-950/95 sticky top-0 z-20 border-b border-slate-800 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1126px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-600 text-sm font-bold text-white">
            OP
          </div>
          <div>
            <p className="text-sm font-semibold text-white">OficinaPro</p>
            <p className="text-xs text-slate-400">Gestão para oficinas</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-600 hover:bg-slate-800"
          >
            Cadastrar
          </Link>
          <Link
            to="/login"
            className="rounded-2xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            Iniciar teste gratuito de 5 dias
          </Link>
        </div>
      </div>
    </header>
  )
}
