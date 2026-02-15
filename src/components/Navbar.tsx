import { Link, useNavigate, useLocation } from 'react-router';
import { ChefHat, LogOut, Menu, X } from 'lucide-react';
import { authService } from '../services/auth';
import { useState } from 'react';

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, isAuthenticated } = authService.getAuthState();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    authService.logout();
    navigate('/');
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Don't show navbar on landing, login, or register pages
  if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <nav className="bg-[#F97316] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/recipes" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <ChefHat className="w-8 h-8" />
            <span className="font-bold text-xl hidden sm:inline">RahasiaBunda</span>
          </Link>

          {/* Desktop Navigation */}
          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-6">
              <Link 
                to="/recipes" 
                className="hover:text-orange-100 transition-colors"
              >
                Resep Masakan
              </Link>
              <div className="flex items-center gap-4">
                <span className="text-sm">
                  Halo, <span className="font-semibold">{user?.name}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] px-4 py-2 rounded-lg transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Keluar
                </button>
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          {isAuthenticated && (
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && isAuthenticated && (
        <div className="md:hidden bg-orange-600 border-t border-orange-700">
          <div className="px-4 py-4 space-y-4">
            <div className="pb-3 border-b border-orange-500">
              <p className="text-sm text-orange-100">Halo,</p>
              <p className="font-semibold">{user?.name}</p>
              <p className="text-sm text-orange-100">{user?.email}</p>
            </div>
            <Link
              to="/recipes"
              onClick={closeMobileMenu}
              className="block py-2 hover:text-orange-100 transition-colors"
            >
              Resep Masakan
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full bg-[#22C55E] hover:bg-[#16A34A] px-4 py-2 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Keluar
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}