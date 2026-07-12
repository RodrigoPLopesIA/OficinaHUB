import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import LandingPage from './pages/landing'
import { Dashboard } from './pages/dashboard/Dashboard'
import { Login } from './pages/auth/Login'
import { SignUpPage } from './pages/auth/SignUpPage'
import { OficinaWorkspace } from './pages/oficina/OficinaWorkspace'
import { CriarOficinaPage } from './pages/oficina/CriarOficinaPage'
import {
  BudgetsManagementPage,
  ClientsManagementPage,
  FinancialManagementPage,
  InventoryManagementPage,
  MechanicsManagementPage,
  ReportsManagementPage,
  ScheduleManagementPage,
  ServicesManagementPage,
  SettingsManagementPage,
  VehiclesManagementPage,
  WorkOrdersManagementPage,
} from './pages/management'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/oficina"
          element={
            <PrivateRoute requireOrganization={false}>
              <OficinaWorkspace />
            </PrivateRoute>
          }
        />
        <Route
          path="/oficina/criar"
          element={
            <PrivateRoute requireOrganization={false}>
              <CriarOficinaPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/clientes"
          element={
            <PrivateRoute>
              <ClientsManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/veiculos"
          element={
            <PrivateRoute>
              <VehiclesManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/orcamentos"
          element={
            <PrivateRoute>
              <BudgetsManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/servicos"
          element={
            <PrivateRoute>
              <ServicesManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/mecanicos"
          element={
            <PrivateRoute>
              <MechanicsManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/ordens-servico"
          element={
            <PrivateRoute>
              <WorkOrdersManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/estoque"
          element={
            <PrivateRoute>
              <InventoryManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/agenda"
          element={
            <PrivateRoute>
              <ScheduleManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/financeiro"
          element={
            <PrivateRoute>
              <FinancialManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/relatorios"
          element={
            <PrivateRoute>
              <ReportsManagementPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/configuracoes"
          element={
            <PrivateRoute>
              <SettingsManagementPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
