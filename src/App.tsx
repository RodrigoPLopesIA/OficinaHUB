import { useEffect, useState } from 'react'
import LandingPage from './pages/landing'
import Login from './pages/auth/Login'

function App() {
  const [view, setView] = useState<'landing' | 'login'>(() =>
    window.location.hash === '#login' ? 'login' : 'landing',
  )

  useEffect(() => {
    const handleHashChange = () => {
      setView(window.location.hash === '#login' ? 'login' : 'landing')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return view === 'login' ? <Login /> : <LandingPage />
}

export default App
