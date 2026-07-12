import { UserButton, useUser } from '@clerk/react'

export function Dashboard() {
  const { user } = useUser()

  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold">
            Dashboard {user?.firstName || user?.username || user?.primaryEmailAddress?.emailAddress || ''}
          </h1>
          <UserButton />
        </div>
      </div>
    </div>
  )
}