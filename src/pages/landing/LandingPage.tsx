import Benefits from './Benefits'
import Comments from './Comments'
import FAQ from './FAQ'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Pricing from './Pricing'

export default function LandingPage() {
  return (
    <main className="bg-[#f7f6fb] text-slate-950">
      <Header />
      <Hero />
      <Benefits />
      <Pricing />
      <Comments />
      <FAQ />
      <Footer />
    </main>
  )
}
