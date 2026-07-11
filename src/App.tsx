import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing'
import Login from './pages/auth/Login'
import { Register } from './pages/auth/Register'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
