export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl rounded-[32px] border border-slate-800 bg-slate-900/95 p-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-sm">
        <div className="mb-10 flex flex-col items-center gap-3 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-purple-600 text-2xl font-bold text-white">OP</div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-purple-300">OficinaPro</p>
            <h1 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
              Acesse sua oficina em segundos
            </h1>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-800 bg-slate-950 p-8 shadow-sm">
          <div className="mb-7 space-y-2 text-center">
            <p className="text-lg font-semibold text-white">Entre com celular, email, CPF ou CNPJ</p>
            <p className="text-sm text-slate-400">
              Use o mesmo login que você usa na plataforma. Caso não tenha conta, crie uma agora.
            </p>
          </div>

          <form className="space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Celular, email, CPF ou CNPJ</span>
              <input
                type="text"
                placeholder="Digite seu celular, email, CPF ou CNPJ"
                className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">Senha</span>
              <input
                type="password"
                placeholder="Digite sua senha"
                className="mt-2 w-full rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-purple-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-purple-500 sm:w-auto"
              >
                Entrar
              </button>
              <a href="#" className="text-sm text-purple-300 transition hover:text-purple-100">
                Esqueci a senha
              </a>
            </div>
          </form>

          <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
            Ainda não tem conta?
            <a href="#" className="ml-2 font-semibold text-white transition hover:text-purple-300">
              Cadastrar-se agora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
