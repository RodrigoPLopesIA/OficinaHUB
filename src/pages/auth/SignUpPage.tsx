import { SignUp } from '@clerk/react'

export function SignUpPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-12">
      <SignUp
      
        routing="path"
        path="/sign-up"
        signInUrl="/login"
        forceRedirectUrl="/dashboard"
      />
    </div>
  )
}
