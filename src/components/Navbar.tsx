import { Link, useNavigate, useLocation } from "react-router";
import { ChefHat, LogOut, Menu, X } from "lucide-react";
import { authService } from "../services/auth";
import { useState } from "react";

export function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const { user, isAuthenticated } = authService.getAuthState();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isMobile =
    localStorage.getItem("isMobile") === "true";

  const handleLogout = () => {
    if (isMobile) {

      if (window?.ReactNativeWebView) {
        window?.ReactNativeWebView.postMessage(
          JSON.stringify({
            type: "LOGOUT",
          })
        );

      }

      return;
    }

    authService.logout();
    navigate("/");
    setMobileMenuOpen(false);

  };

  const toggleMobileMenu = () =>
    setMobileMenuOpen(!mobileMenuOpen);

  if (
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register"
  ) {
    return null;
  }

  return (

    <nav className="bg-[#F97316] text-white shadow-lg sticky top-0 z-50 webview-navbar">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}

          <Link
            to="/recipes"
            className="flex items-center gap-2 hover:opacity-90"
          >

            <ChefHat className="w-8 h-8" />

            <span className="font-bold text-xl hidden sm:inline">
              RahasiaBunda
            </span>

          </Link>

          {/* Desktop */}

          {isAuthenticated && (

            <div className="hidden md:flex items-center gap-6">

              <Link to="/recipes">

                Resep Masakan

              </Link>

              <div className="flex items-center gap-4">

                <span>

                  Halo, <b>{user?.name}</b>

                </span>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-[#22C55E] px-4 py-2 rounded-lg webview-logout-button"
                >

                  <LogOut className="w-4 h-4" />

                  Keluar

                </button>

              </div>

            </div>

          )}

          {/* Mobile button */}

          {isAuthenticated && (

            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg"
            >

              {mobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />
              }

            </button>

          )}

        </div>

      </div>

      {/* Mobile menu */}

      {mobileMenuOpen && isAuthenticated && (

        <div className="md:hidden bg-orange-600">

          <div className="px-4 py-4 space-y-4">

            <div>

              <p>Halo,</p>

              <p className="font-semibold">

                {user?.name}

              </p>

            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 w-full bg-[#22C55E] px-4 py-2 rounded-lg webview-logout-button"
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
