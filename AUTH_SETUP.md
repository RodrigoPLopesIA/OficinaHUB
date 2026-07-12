# Sistema de Autenticação com Keycloak

Este projeto utiliza Keycloak para autenticação e autorização. O sistema inclui um hook `useAuth` completo e um contexto de autenticação.

## 📦 Dependências Instaladas

- `keycloak-js`: ^26.2.4
- `@react-keycloak/web`: ^3.4.0

## 🔧 Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env` baseado em `.env.example`:

```bash
cp .env.example .env
```

Configure as variáveis do Keycloak:

```env
VITE_KEYCLOAK_URL=http://localhost:8080
VITE_KEYCLOAK_REALM=seu-realm
VITE_KEYCLOAK_CLIENT_ID=seu-client-id
```

### 2. Estrutura do Projeto

```
src/
├── config/
│   └── keycloak.ts          # Configuração centralizada do Keycloak
├── contexts/
│   └── AuthContext.tsx      # Contexto de autenticação
├── hooks/
│   └── useAuth.ts           # Hook para usar a autenticação
├── components/
│   └── PrivateRoute.tsx     # Componente para rotas protegidas
└── pages/
    └── auth/
        └── Login.tsx        # Página de login
```

## 🎯 Como Usar

### Hook `useAuth()`

O hook `useAuth()` fornece acesso a todas as funções de autenticação:

```tsx
import { useAuth } from '../hooks/useAuth'

function MyComponent() {
  const {
    user,                    // Usuário atual (User | null)
    isAuthenticated,         // Se o usuário está autenticado (boolean)
    isLoading,              // Se está carregando (boolean)
    error,                  // Mensagem de erro (string | null)
    login,                  // Função de login
    logout,                 // Função de logout
    register,               // Função de registro
    refreshToken,           // Função para renovar token
    hasRole,                // Função para verificar role
    hasRealmRole,           // Função para verificar realm role
  } = useAuth()

  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Bem-vindo, {user?.username}!</p>
          <button onClick={() => logout()}>Sair</button>
        </>
      ) : (
        <p>Faça login para continuar</p>
      )}
    </div>
  )
}
```

### Verificar Roles

```tsx
function AdminPanel() {
  const { hasRole } = useAuth()

  if (!hasRole('admin')) {
    return <div>Acesso Negado</div>
  }

  return <div>Painel do Admin</div>
}
```

### Rotas Protegidas

```tsx
import { PrivateRoute } from './components/PrivateRoute'
import Dashboard from './pages/Dashboard'

<Routes>
  <Route
    path="/dashboard"
    element={
      <PrivateRoute requiredRoles={['user']}>
        <Dashboard />
      </PrivateRoute>
    }
  />
</Routes>
```

### Acessar Dados do Usuário

```tsx
function Profile() {
  const { user } = useAuth()

  return (
    <div>
      <h1>{user?.firstName} {user?.lastName}</h1>
      <p>Email: {user?.email}</p>
      <p>Roles: {user?.roles.join(', ')}</p>
    </div>
  )
}
```

## 📋 Interface `User`

```typescript
interface User {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  roles: string[]              // Client roles
  realmRoles?: string[]        // Realm roles
}
```

## 🔐 Funções de Autenticação

### `login(username: string, password: string): Promise<void>`

Realiza o login do usuário via Keycloak.

```tsx
const { login } = useAuth()
await login('username', 'password')
```

### `logout(): Promise<void>`

Faz logout do usuário.

```tsx
const { logout } = useAuth()
await logout()
```

### `register(...): Promise<void>`

Abre o formulário de registro do Keycloak.

```tsx
const { register } = useAuth()
await register('username', 'email@example.com', 'password', 'First', 'Last')
```

### `refreshToken(): Promise<void>`

Renova o token de autenticação.

```tsx
const { refreshToken } = useAuth()
await refreshToken()
```

### `hasRole(role: string): boolean`

Verifica se o usuário tem uma role específica.

```tsx
const { hasRole } = useAuth()
if (hasRole('admin')) {
  // ...
}
```

### `hasRealmRole(role: string): boolean`

Verifica se o usuário tem uma realm role específica.

```tsx
const { hasRealmRole } = useAuth()
if (hasRealmRole('user')) {
  // ...
}
```

## 🚀 Setup do Keycloak Localmente

### Com Docker

```bash
docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:latest \
  start-dev
```

Acesse em: `http://localhost:8080/admin`

### Criar Realm e Client

1. Crie um novo realm chamado `officinahub-realm`
2. Crie um novo client chamado `officinahub-client`
3. Configure as URLs de callback:
   - Valid Redirect URIs: `http://localhost:5173/*`
   - Valid post logout redirect URIs: `http://localhost:5173`
   - Web Origins: `http://localhost:5173`

## 📖 Referências

- [Keycloak Documentation](https://www.keycloak.org/documentation)
- [React Keycloak](https://react-keycloak.github.io/)
- [Keycloak JavaScript Adapter](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter)
