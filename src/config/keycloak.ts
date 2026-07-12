import Keycloak from 'keycloak-js'

const keycloakConfig = {
  url: import.meta.env.VITE_KEYCLOAK_URL || 'http://localhost:8080',
  realm: import.meta.env.VITE_KEYCLOAK_REALM || 'oficinahub-realm',
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENT_ID || 'oficinahub-client',
}

export const keycloak = new Keycloak(keycloakConfig)

export const keycloakInitOptions = {
  onLoad: 'check-sso' as const,
  silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  pkceMethod: 'S256' as const,
}
