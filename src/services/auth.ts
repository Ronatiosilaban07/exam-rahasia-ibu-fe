import { Login, Register } from "../config/action";
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

const AUTH_KEY = 'rahasia_bunda_auth';
const USERS_KEY = 'rahasia_bunda_users';

export const authService = {
  getAuthState(): AuthState {
    const authData = localStorage.getItem(AUTH_KEY);
    if (authData) {
      const user = JSON.parse(authData);
      return { user, isAuthenticated: true };
    }
    return { user: null, isAuthenticated: false };
  },

  register(data: Omit<User, 'id'> & { password: string }): { success: boolean; message: string } {
    const users = this.getAllUsers();
    
    if (users.find(u => u.email === data.email)) {
      return { success: false, message: 'Email sudah terdaftar' };
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: data.name,
      email: data.email,
    };

    users.push({ ...newUser, password: data.password });
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    return { success: true, message: 'Registrasi berhasil' };
  },

  login(email: string, password: string): { success: boolean; message: string; user?: User } {
    const users = this.getAllUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const { password: _, ...userWithoutPassword } = user;
      localStorage.setItem(AUTH_KEY, JSON.stringify(userWithoutPassword));
      return { success: true, message: 'Login berhasil', user: userWithoutPassword };
    }

    return { success: false, message: 'Email atau password salah' };
  },

  logout(): void {
    localStorage.removeItem(AUTH_KEY);
  },

  getAllUsers(): any[] {
    const usersData = localStorage.getItem(USERS_KEY);
    return usersData ? JSON.parse(usersData) : [];
  }
};