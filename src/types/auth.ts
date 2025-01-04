export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'manager' | 'staff';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}