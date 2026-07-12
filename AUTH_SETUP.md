# Sistema de Autenticacao com Clerk

Este projeto usa Clerk para autenticacao e autorizacao da aplicacao React (Vite).

## Dependencia principal

- @clerk/react

## Variaveis de ambiente necessarias

Defina em `.env.local`:

- VITE_CLERK_PUBLISHABLE_KEY

Importante:

- Nao exponha `CLERK_SECRET_KEY` em codigo cliente.
- Em frontend Vite, use apenas `VITE_` para variaveis acessadas no browser.

## Estrutura principal de autenticacao

- `src/main.tsx`: inicializa `ClerkProvider`.
- `src/pages/auth/Login.tsx`: tela de sign in com `SignIn`.
- `src/pages/auth/SignUpPage.tsx`: tela de sign up com `SignUp`.
- `src/components/PrivateRoute.tsx`: protege rotas usando `useAuth`.
- `src/pages/landing/Header.tsx`: exibe controles de auth visiveis (sign in/sign up ou user controls quando logado).

## Fluxo da aplicacao

1. Usuario deslogado acessa `/` e ve controles de cadastro/login.
2. Login em `/login` ou cadastro em `/sign-up` via Clerk.
3. Apos autenticar, redirecionamento para `/dashboard`.
4. Rotas protegidas exigem sessao ativa.

## Validacao recomendada

1. `clerk doctor`
2. `yarn build`
3. `yarn test --run`
4. `yarn dev`

## Referencias

- https://clerk.com/docs/cli
- https://clerk.com/docs/js-frontend/getting-started/quickstart
- https://clerk.com/docs/reference/components/overview
