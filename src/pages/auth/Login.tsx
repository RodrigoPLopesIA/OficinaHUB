import { SignIn } from '@clerk/react'

export function Login() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <SignIn
        routing="path"
        path="/login"
        signUpUrl="/sign-up"
        forceRedirectUrl="/oficina"
      />
    </div>
  )
}
