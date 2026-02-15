import { Login as LoginAPI, Register as RegisterAPI } from "../config/action";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
}

export const AUTH_KEY = "rahasia_bunda_auth";
export const TOKEN_KEY = "rahasia_bunda_token";

export const authService = {
  getAuthState(): AuthState {
    const token = localStorage.getItem(TOKEN_KEY);
    const user = localStorage.getItem(AUTH_KEY);

    if (token && user) {
      return {
        user: JSON.parse(user),
        token,
        isAuthenticated: true,
      };
    }
    return {
      user: null,
      token: null,
      isAuthenticated: false,
    };
  },

  async register(data: {
    name: string;
    email: string;
    password: string;
  }): Promise<{ success: boolean; message: string }> {
    try {
      const res = await RegisterAPI(data);

      // asumsi response: { success: true, message: "..."}
      if (res.user) {
        return {
          success: true,
          message: res.message || "Registrasi berhasil",
        };
      }

      return {
        success: false,
        message: res.message || "Registrasi gagal",
      };
    } catch (error: any) {
      return {
        success: false,
        message: error?.response?.data?.message || "Terjadi kesalahan",
      };
    }
  },

  async login(
    email: string,
    password: string
  ): Promise<{ success: boolean; message: string; user?: User }> {
    try {
      const res = await LoginAPI({ email, password });

      /**
       * asumsi response API:
       * {
       *   success: true,
       *   message: "...",
       *   data: {
       *     user: {...},
       *     token: "xxxxx"
       *   }
       * }
       */

      if (res.token) {
          console.log('res', res);
        
        const user = res.user;
        const token = res.token;

        // simpan user
        localStorage.setItem(AUTH_KEY, JSON.stringify(user));

        // simpan token
        if (token) {
          localStorage.setItem(TOKEN_KEY, token);
        }

        return {
          success: true,
          message: res.message || "Login berhasil",
          user,
        };
      }

      return {
        success: false,
        message: res.message || "Login gagal",
      };
    } catch (error: any) {
      return {
        success: false,
        message: error?.response?.data?.message || "Email atau password salah",
      };
    }
  },

  logout(): void {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(TOKEN_KEY);
  },

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
};
