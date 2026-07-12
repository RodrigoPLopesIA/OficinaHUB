import React, { createContext, useCallback, useEffect, useState } from 'react'
import { useKeycloak } from '@react-keycloak/web'
import type Keycloak from 'keycloak-js'
import type { User, AuthContextType } from '../types/auth'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { keycloak, initialized } = useKeycloak()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const extractUserFromKeycloak = useCallback((kc: Keycloak) => {
    if (!kc.authenticated || !kc.tokenParsed) {
      return null
    }

    const tokenParsed = kc.tokenParsed as any
    const realmAccess = tokenParsed.realm_access?.roles || []
    const clientRoles = (kc.clientId && tokenParsed.resource_access?.[kc.clientId]?.roles) || []

    return {
      id: tokenParsed.sub || '',
      username: tokenParsed.preferred_username || '',
      email: tokenParsed.email || '',
      firstName: tokenParsed.given_name || '',
      lastName: tokenParsed.family_name || '',
      roles: clientRoles,
      realmRoles: realmAccess,
    } as User
  }, [])

  useEffect(() => {
    if (!initialized || !keycloak) {
      setIsLoading(false)
      return
    }

    try {
      if (keycloak.authenticated) {
        const userData = extractUserFromKeycloak(keycloak)
        setUser(userData)
        setError(null)
      } else {
        setUser(null)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar usuário')
      setUser(null)
    } finally {
      setIsLoading(false)
    }
  }, [initialized, keycloak, extractUserFromKeycloak])

  const login = useCallback(async () => {
    if (!keycloak) throw new Error('Keycloak não inicializado')

    try {
      setIsLoading(true)
      setError(null)

      await keycloak.login({
        redirectUri: `${window.location.origin}/dashboard`,
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro ao fazer login'
      setError(errorMsg)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [keycloak])

  const logout = useCallback(async () => {
    if (!keycloak) throw new Error('Keycloak não inicializado')

    try {
      setIsLoading(true)
      setUser(null)

      await keycloak.logout({
        redirectUri: window.location.origin,
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro ao fazer logout'
      setError(errorMsg)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [keycloak])

  const register = useCallback(async () => {
    if (!keycloak) throw new Error('Keycloak não inicializado')

    try {
      setIsLoading(true)
      setError(null)

      // Redirecionar para o formulário de registro do Keycloak
      const registerUrl = new URL(keycloak.authServerUrl!)
      registerUrl.pathname = `${keycloak.authServerUrl!.split('/auth')[1] || ''}/realms/${keycloak.realm}/protocol/openid-connect/registrations`
      registerUrl.searchParams.append('client_id', keycloak.clientId!)
      registerUrl.searchParams.append('response_type', 'code')
      registerUrl.searchParams.append('scope', 'openid profile email')
      registerUrl.searchParams.append('redirect_uri', `${window.location.origin}/dashboard`)

      window.location.href = registerUrl.toString()
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro ao registrar'
      setError(errorMsg)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [keycloak])

  const refreshToken = useCallback(async () => {
    if (!keycloak) throw new Error('Keycloak não inicializado')

    try {
      setIsLoading(true)
      setError(null)

      const refreshed = await keycloak.updateToken(30)

      if (refreshed && keycloak.authenticated) {
        const userData = extractUserFromKeycloak(keycloak)
        setUser(userData)
      }
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro ao renovar token'
      setError(errorMsg)
      setUser(null)
      throw err
    } finally {
      setIsLoading(false)
    }
  }, [keycloak, extractUserFromKeycloak])

  const hasRole = useCallback((role: string): boolean => {
    return user?.roles.includes(role) || false
  }, [user])

  const hasRealmRole = useCallback((role: string): boolean => {
    return user?.realmRoles?.includes(role) || false
  }, [user])

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    login,
    logout,
    register,
    refreshToken,
    hasRole,
    hasRealmRole,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
