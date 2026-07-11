import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing'
import Login from './pages/auth/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
