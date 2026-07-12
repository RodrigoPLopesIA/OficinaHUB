import type React from 'react'
import { useAuth } from '@clerk/react'
import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  children: React.ReactNode
  requiredRoles?: string[]
}

export function PrivateRoute({ children, requiredRoles }: PrivateRouteProps) {
  const { isLoaded, isSignedIn, sessionClaims } = useAuth()

  const roles = Array.isArray((sessionClaims as Record<string, unknown> | undefined)?.roles)
    ? ((sessionClaims as Record<string, unknown>).roles as string[])
    : []
  const hasRole = (role: string) => roles.includes(role)

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-center">
          <div className="mb-4 w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-slate-300">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!isSignedIn) {
    return <Navigate to="/login" replace />
  }

  if (requiredRoles && !requiredRoles.some((role) => hasRole(role))) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950">
        <div className="text-center">
          <p className="text-red-400 text-lg font-semibold">Acesso Negado</p>
          <p className="text-slate-400 mt-2">Você não tem permissão para acessar esta página.</p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
