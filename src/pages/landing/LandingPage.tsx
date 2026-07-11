import Benefits from './Benefits'
import Comments from './Comments'
import FAQ from './FAQ'
import Hero from './Hero'
import Pricing from './Pricing'

export default function LandingPage() {
  return (
    <main className="bg-[#f7f6fb]">
      <Hero />
      <Benefits />
      <Pricing />
      <Comments />
      <FAQ />
    </main>
  )
}
