import { Outlet, Navigate, useLocation } from 'react-router';
import { authService } from '../services/auth';
import { Navbar } from './Navbar'

export function Layout() {
  const location = useLocation();
  const { isAuthenticated } = authService.getAuthState();

  const protectedPaths = ['/recipes'];
  const isProtectedRoute = protectedPaths.some(path => location.pathname.startsWith(path));

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
