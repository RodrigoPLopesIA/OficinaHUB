

export function VerificationCode() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md rounded-[32px] bg-slate-900/95 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white text-center">Código de Verificação</h2>
                <p className="mb-4 text-center text-slate-400">Por favor, insira o código de verificação enviado ao seu email.</p>
                <form>
                    <input
                        type="text"
                        placeholder="Insira o código de verificação"
                        className="w-full p-3 mb-4 border border-slate-800 bg-slate-950 text-slate-100 placeholder:text-slate-500 rounded focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    />
                    <button
                        type="submit"
                        className="w-full rounded-3xl bg-purple-600 px-5 py-4 text-sm font-semibold text-white transition hover:bg-purple-500"
                    >
                        Verificar
                    </button>
                </form>
            </div>
        </div>
    )
}