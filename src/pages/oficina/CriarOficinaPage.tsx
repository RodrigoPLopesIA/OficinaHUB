import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useOrganizationList } from '@clerk/react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function CriarOficinaPage() {
  const navigate = useNavigate()
  const { createOrganization, setActive, isLoaded } = useOrganizationList()
  const [name, setName] = useState('')
  const [slug, setSlug] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sanitizedSlug = useMemo(() => {
    return slug
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/-{2,}/g, '-')
      .replace(/^-|-$/g, '')
  }, [slug])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!isLoaded || !createOrganization || !setActive) return

    const orgName = name.trim()
    if (!orgName) {
      setError('Informe o nome da oficina.')
      return
    }

    setError(null)
    setIsSubmitting(true)

    try {
      const organization = await createOrganization({
        name: orgName
        // ,
        // slug: sanitizedSlug || undefined,
      })

      await setActive({ organization: organization.id })
      navigate('/dashboard')
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : 'Nao foi possivel criar a oficina.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="inline-flex rounded-full border border-purple-400/40 bg-purple-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-purple-200">
            Onboarding da oficina
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Configure sua nova oficina no OficinaPro
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Cada oficina criada vira um tenant isolado, com equipe, permissões e dados separados.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">O que voce configura agora</h2>
            <p className="mt-2 text-sm text-slate-300">
              Defina o nome da oficina e, na etapa seguinte, convide sua equipe para começar mais rapido.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-white">Tenant isolado por oficina</p>
                <p className="mt-1 text-sm text-slate-400">Separacao de dados e acesso por organizacao.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-white">Permissoes por membro</p>
                <p className="mt-1 text-sm text-slate-400">Defina funcoes como owner, admin e membro.</p>
              </div>
              <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="text-sm font-semibold text-white">Pronto para escalar</p>
                <p className="mt-1 text-sm text-slate-400">Troca de oficina rapida e dashboard contextual.</p>
              </div>
            </div>

            <Link
              to="/oficina"
              className="mt-6 inline-flex items-center rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Voltar para minhas oficinas
            </Link>
          </section>

          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">Criar oficina</h2>
              <p className="mt-1 text-sm text-slate-400">Preencha os dados para criar sua nova organizacao.</p>

              <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="organization-name" className="text-sm font-medium text-slate-200">
                    Nome da oficina
                  </label>
                  <input
                    id="organization-name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Ex.: Oficina Motor Forte"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    disabled={isSubmitting}
                    required
                  />
                </div>

                {/* <div>
                  <label htmlFor="organization-slug" className="text-sm font-medium text-slate-200">
                    Identificador da oficina (opcional)
                  </label>
                  <input
                    id="organization-slug"
                    type="text"
                    value={slug}
                    onChange={(event) => setSlug(event.target.value)}
                    placeholder="oficina-motor-forte"
                    className="mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
                    disabled={isSubmitting}
                  />
                  {slug && (
                    <p className="mt-2 text-xs text-slate-400">
                      URL sugerida: <span className="font-semibold text-slate-200">{sanitizedSlug || 'invalida'}</span>
                    </p>
                  )}
                </div> */}

                {error && (
                  <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || !isLoaded}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? 'Criando oficina...' : 'Criar oficina e acessar dashboard'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
