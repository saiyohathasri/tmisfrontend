import React, { useState } from 'react';
import { Plus, Search } from 'lucide-react';
import Table from '../components/shared/Table';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import { Supplier } from '../types';

const mockSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'TechNet Solutions',
    email: 'contact@technet.com',
    phone: '+1 234-567-8900',
    address: '123 Tech Street, CA',
    status: 'active',
    orderCount: 156,
  },
  // Add more mock suppliers...
];

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Email',
    accessorKey: 'email',
  },
  {
    header: 'Phone',
    accessorKey: 'phone',
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: ({ getValue }: any) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          getValue() === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {getValue()}
      </span>
    ),
  },
  {
    header: 'Orders',
    accessorKey: 'orderCount',
  },
];

export default function Suppliers() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Suppliers</h1>
        <Button>
          <Plus className="h-5 w-5 mr-2" />
          Add Supplier
        </Button>
      </div>

      <Card title="Supplier List">
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search suppliers..."
              className="pl-10 pr-4 py-2 w-full border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table data={mockSuppliers} columns={columns} />
      </Card>
    </div>
  );
}