import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/landing'
import Login from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { ForgotPassword } from './pages/auth/ForgotPassword'
import { VerificationCode } from './pages/auth/VerificationCode'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verification-code" element={<VerificationCode />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
