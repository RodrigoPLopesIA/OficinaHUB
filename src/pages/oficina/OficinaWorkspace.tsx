import { useOrganizationList } from '@clerk/react'
import { Link, useNavigate } from 'react-router-dom'

export function OficinaWorkspace() {
	const navigate = useNavigate()
	const { isLoaded, setActive, userMemberships } = useOrganizationList({
		userMemberships: {
			infinite: true,
		},
	})
	const memberships = userMemberships.data ?? []

	const handleSelectOrganization = async (organizationId: string) => {
		if (!setActive) return
		await setActive({ organization: organizationId })
		navigate('/dashboard')
	}

	if (!isLoaded) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-slate-950">
				<div className="text-center">
					<div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-purple-600 border-t-transparent" />
					<p className="text-slate-300">Carregando oficinas...</p>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-slate-950 text-slate-100 px-6 py-12">
			<div className="mx-auto max-w-6xl">
				<div className="text-center">
					<p className="inline-flex rounded-full bg-purple-600/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-purple-300">
						Espaço da oficina
					</p>
					<h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
						Escolha a oficina para entrar
					</h1>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
						Cada card representa uma oficina. Clique para acessar o dashboard do tenant selecionado.
					</p>
				</div>

				{memberships.length > 0 ? (
					<div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{memberships.map((membership) => {
							const organization = membership.organization
							const roleLabel = membership.role ? membership.role.replace('org:', '') : 'member'

							return (
								<button
									key={organization.id}
									type="button"
									onClick={() => handleSelectOrganization(organization.id)}
									className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-left transition hover:-translate-y-1 hover:border-purple-500 hover:bg-slate-900"
								>
									<div className="flex items-start justify-between gap-3">
										<h2 className="text-lg font-semibold text-white">{organization.name}</h2>
										<span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs uppercase tracking-wider text-slate-300">
											{roleLabel}
										</span>
									</div>

									<p className="mt-3 text-sm text-slate-400">Entrar no dashboard desta oficina</p>

									<span className="mt-5 inline-flex text-sm font-semibold text-purple-300 transition group-hover:text-purple-200">
										Acessar agora {'->'}
									</span>
								</button>
							)
						})}

						<Link
							to="/oficina/criar"
							className="group flex min-h-[176px] flex-col items-center justify-center rounded-3xl border border-dashed border-purple-500/60 bg-slate-900/40 p-6 text-center transition hover:-translate-y-1 hover:border-purple-400 hover:bg-slate-900"
						>
							<span className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/70 bg-purple-600/10 text-3xl font-semibold text-purple-300">
								+
							</span>
							<p className="mt-4 text-base font-semibold text-white">Criar nova oficina</p>
							<p className="mt-1 text-sm text-slate-400">Adicionar uma nova organização</p>
						</Link>
					</div>
				) : (
					<div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center">
						<h2 className="text-xl font-semibold text-white">Voce ainda nao tem oficina</h2>
						<p className="mt-2 text-sm text-slate-300">Crie sua primeira oficina para começar.</p>
						<Link
							to="/oficina/criar"
							className="mt-6 inline-flex rounded-2xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-500"
						>
							Criar minha oficina
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}
