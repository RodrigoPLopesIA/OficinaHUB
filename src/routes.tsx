import { useKeycloak } from "@react-keycloak/web/lib/useKeycloak";
import type { JSX } from "react/jsx-runtime";
import LandingPage from "./pages/landing";

export function ProtectedPage({ children }: { children: JSX.Element }) {
     const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? children : <LandingPage />;
}
