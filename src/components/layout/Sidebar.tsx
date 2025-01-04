import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { X, LayoutDashboard, Package, Truck, History, Bell, BarChart, Users, Settings } from 'lucide-react';

interface SidebarProps {
  onClose?: () => void;
}

const NavItem = ({ to, icon: Icon, children }: { to: string; icon: React.ElementType; children: React.ReactNode }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors ${
        isActive ? 'bg-blue-50 text-blue-700' : ''
      }`
    }
  >
    <Icon className="w-5 h-5 mr-3" />
    <span>{children}</span>
  </NavLink>
);

export default function Sidebar({ onClose }: SidebarProps) {
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';
  const isManager = user?.role === 'manager';

  return (
    <div className="h-full flex flex-col bg-white shadow-lg">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">TIMS</h2>
        <button
          onClick={onClose}
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <nav className="flex-1 overflow-y-auto p-4 space-y-2">
        <NavItem to="/dashboard" icon={LayoutDashboard}>Dashboard</NavItem>
        <NavItem to="/products" icon={Package}>Products</NavItem>
        {(isAdmin || isManager) && (
          <NavItem to="/suppliers" icon={Truck}>Suppliers</NavItem>
        )}
        <NavItem to="/transactions" icon={History}>Transactions</NavItem>
        <NavItem to="/alerts" icon={Bell}>Alerts</NavItem>
        <NavItem to="/reports" icon={BarChart}>Reports</NavItem>
        {isAdmin && (
          <NavItem to="/users" icon={Users}>Users</NavItem>
        )}
        <NavItem to="/settings" icon={Settings}>Settings</NavItem>
      </nav>
    </div>
  );
}