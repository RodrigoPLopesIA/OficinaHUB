export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-[32px] bg-slate-900/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-3xl bg-purple-600 text-xl font-bold text-white">
            OP
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">OficinaPro</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Acesse sua oficina
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Use celular, email, CPF ou CNPJ para entrar de forma rápida e segura.
          </p>
        </div>

        <form className="space-y-5">
            <input
              type="text"
              placeholder="Celular, email, CPF ou CNPJ"
              className=" w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />

            <input
              type="password"
              placeholder="Digite sua senha"
              className=" w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />

          <button
            type="submit"
            className="w-full rounded-3xl bg-purple-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-purple-500"
          >
            Entrar
          </button>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <a href="#" className="transition hover:text-purple-300">
              Esqueci a senha
            </a>
            <a href="#" className="font-semibold text-white transition hover:text-purple-300">
              Cadastrar-se
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
