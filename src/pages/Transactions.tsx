import React from 'react';
import { History } from 'lucide-react';
import Table from '../components/shared/Table';
import Card from '../components/shared/Card';
import { StockTransaction } from '../types';

const mockTransactions: StockTransaction[] = [
  {
    id: '1',
    productId: '1',
    productName: 'Router X1000',
    type: 'in',
    quantity: 50,
    date: '2024-03-10 14:30',
    userId: '1',
  },
  // Add more mock transactions...
];

const columns = [
  {
    header: 'Product',
    accessorKey: 'productName',
  },
  {
    header: 'Type',
    accessorKey: 'type',
    cell: ({ getValue }: any) => (
      <span
        className={`px-2 py-1 rounded-full text-xs font-medium ${
          getValue() === 'in'
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}
      >
        {getValue() === 'in' ? 'Stock In' : 'Stock Out'}
      </span>
    ),
  },
  {
    header: 'Quantity',
    accessorKey: 'quantity',
  },
  {
    header: 'Date',
    accessorKey: 'date',
  },
];

export default function Transactions() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Stock Transactions</h1>
      </div>

      <Card title="Recent Transactions">
        <div className="flex items-center gap-2 mb-6 text-gray-600">
          <History className="h-5 w-5" />
          <span>Showing recent stock movements</span>
        </div>

        <Table data={mockTransactions} columns={columns} />
      </Card>
    </div>
  );
}