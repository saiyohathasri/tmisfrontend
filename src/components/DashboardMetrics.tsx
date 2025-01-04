import React from 'react';
import { Package, AlertTriangle, Truck, BarChart3 } from 'lucide-react';

const MetricCard = ({ title, value, icon: Icon, color }: {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
}) => (
  <div className="bg-white rounded-lg shadow-lg p-6">
    <div className="flex items-center">
      <div className={`p-3 rounded-full ${color} bg-opacity-10 mr-4`}>
        <Icon className={`h-6 w-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div>
        <p className="text-sm text-gray-600 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

export default function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Total Products"
        value="1,234"
        icon={Package}
        color="bg-blue-500"
      />
      <MetricCard
        title="Low Stock Alerts"
        value="12"
        icon={AlertTriangle}
        color="bg-red-500"
      />
      <MetricCard
        title="Active Suppliers"
        value="48"
        icon={Truck}
        color="bg-green-500"
      />
      <MetricCard
        title="Monthly Orders"
        value="156"
        icon={BarChart3}
        color="bg-purple-500"
      />
    </div>
  );
}