import '@testing-library/jest-dom'
import type { ReactNode } from 'react'
import { vi } from 'vitest'

vi.mock('@clerk/react', () => ({
	SignInButton: ({ children }: { children: ReactNode }) => children,
	SignUpButton: ({ children }: { children: ReactNode }) => children,
	UserButton: () => null,
	SignIn: () => null,
	SignUp: () => null,
	useAuth: () => ({
		isLoaded: true,
		isSignedIn: false,
		sessionClaims: {},
	}),
	useUser: () => ({
		user: {
			firstName: 'Test',
			username: 'test-user',
			primaryEmailAddress: { emailAddress: 'test@example.com' },
		},
	}),
}))
