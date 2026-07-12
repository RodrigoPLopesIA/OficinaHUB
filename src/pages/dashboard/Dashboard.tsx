
import { useKeycloak } from '@react-keycloak/web/lib/useKeycloak';
export function Dashboard() {
    const { keycloak } = useKeycloak();
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-950 text-white">
      <h1 className="text-4xl font-bold">Dashboard {keycloak.tokenParsed?.preferred_username}</h1>
    </div>
  )
}