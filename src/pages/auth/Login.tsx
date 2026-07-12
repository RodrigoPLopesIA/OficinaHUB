import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export function Login() {
  const { login, isLoading, error, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard')
    }
  }, [isAuthenticated, navigate])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await login()
    } catch (err) {
      console.error('Erro ao fazer login:', err)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-[32px] bg-slate-900/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-3xl bg-purple-600 text-xl font-bold text-white">
            OP
          </div>
          <p className="text-sm uppercase tracking-[0.35em] text-purple-300">OficinaPro</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            Acesse sua conta
          </h1>
          <p className="mt-3 text-sm text-slate-400">
            Autentique-se com o Keycloak para acessar seu dashboard
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleLogin}>
          {error && (
            <div className="rounded-lg bg-red-500/10 border border-red-500/50 p-4">
              <p className="text-sm text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-3xl bg-purple-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Entrando...' : 'Entrar com Keycloak'}
          </button>

          <div className="flex items-center justify-between text-sm text-slate-400">
            <a href="#" className="transition hover:text-purple-300">
              Criar conta
            </a>
            <a href="/" className="font-semibold text-white transition hover:text-purple-300">
              Voltar
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
