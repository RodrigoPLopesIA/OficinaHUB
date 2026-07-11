export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-[1126px] px-6 py-12 text-sm sm:flex sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="font-semibold text-white">OficinaPro</p>
          <p>Plataforma SaaS para gestão inteligente de oficinas mecânicas.</p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-slate-400 sm:mt-0">
          <a href="#benefits" className="hover:text-white">
            Benefícios
          </a>
          <a href="#pricing" className="hover:text-white">
            Planos
          </a>
          <a href="#faq" className="hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  )
}
