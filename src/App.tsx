import { ReactKeycloakProvider } from '@react-keycloak/web'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { keycloak, keycloakInitOptions } from './config/keycloak'
import { AuthProvider } from './contexts/AuthContext'
import { PrivateRoute } from './components/PrivateRoute'
import LandingPage from './pages/landing'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Login } from './pages/auth/Login'

function App() {
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={keycloakInitOptions}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ReactKeycloakProvider>
  )
}

export default App
