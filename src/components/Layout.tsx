import { Outlet, Navigate, useLocation } from "react-router";
import { useEffect, useState } from "react";

import { authService } from "../services/auth";
import { Navbar } from "./Navbar";

export function Layout() {
  const location = useLocation();

  const [isReady, setIsReady] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const protectedPaths = ["/recipes"];

  const isProtectedRoute = protectedPaths.some(path =>
    location.pathname.startsWith(path)
  );

  useEffect(() => {
    const initAuth = async () => {
      try {

        await new Promise(resolve => setTimeout(resolve, 100));

        const authState = authService.getAuthState();

        setIsAuthenticated(authState.isAuthenticated);

      } catch (error) {
        console.log(error);
      } finally {
        setIsReady(true);
      }
    };

    initAuth();
  }, []);

  if (!isReady) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );
  }

  if (isProtectedRoute && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

    </div>
  );
}
