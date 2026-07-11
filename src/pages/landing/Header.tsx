export default function Header() {
  return (
    <header className="bg-white/90 sticky top-0 z-20 border-b border-slate-200 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1126px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-700 text-sm font-bold text-white">
            OP
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">OficinaHUB</p>
            <p className="text-xs text-slate-500">Gestão para oficinas</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#pricing"
            className="rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400"
          >
            Cadastrar
          </a>
          <a
            href="#pricing"
            className="rounded-2xl bg-purple-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
          >
            Iniciar teste gratuito de 5 dias
          </a>
        </div>
      </div>
    </header>
  )
}
