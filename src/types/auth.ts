export interface User {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  roles: string[]
  realmRoles?: string[]
}

export interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  login: () => Promise<void>
  logout: () => Promise<void>
  register: () => Promise<void>
  refreshToken: () => Promise<void>
  hasRole: (role: string) => boolean
  hasRealmRole: (role: string) => boolean
}
