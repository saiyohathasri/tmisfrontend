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

export interface Product {
  id: string;
  name: string;
  category: string;
  stockLevel: number;
  reorderPoint: number;
  supplier: string;
  lastUpdated: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  status: 'active' | 'inactive';
  orderCount: number;
}

export interface StockTransaction {
  id: string;
  productId: string;
  productName: string;
  type: 'in' | 'out';
  quantity: number;
  date: string;
  userId: string;
}

export interface Alert {
  id: string;
  type: 'low_stock' | 'overdue_order';
  message: string;
  date: string;
  isRead: boolean;
}