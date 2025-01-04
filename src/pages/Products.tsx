import React, { useState } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import Table from '../components/shared/Table';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';
import ProductModal from '../components/modals/ProductModal';
import ProductFilters from '../components/filters/ProductFilters';
import { useSearch } from '../hooks/useSearch';
import { useModal } from '../hooks/useModal';
import { Product } from '../types';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Router X1000',
    category: 'Networking',
    stockLevel: 45,
    reorderPoint: 20,
    supplier: 'TechNet Solutions',
    lastUpdated: '2024-03-10',
  },
  {
    id: '2',
    name: 'Switch Pro 24',
    category: 'Networking',
    stockLevel: 5,
    reorderPoint: 15,
    supplier: 'NetGear',
    lastUpdated: '2024-03-09',
  },
  {
    id: '3',
    name: 'Fiber Cable 50m',
    category: 'Cables',
    stockLevel: 0,
    reorderPoint: 10,
    supplier: 'CablePro',
    lastUpdated: '2024-03-08',
  },
];

const columns = [
  {
    header: 'Name',
    accessorKey: 'name',
  },
  {
    header: 'Category',
    accessorKey: 'category',
  },
  {
    header: 'Stock',
    accessorKey: 'stockLevel',
    cell: ({ getValue }) => {
      const value = getValue() as number;
      return (
        <span className={`
          px-2 py-1 rounded-full text-xs font-medium
          ${value === 0 ? 'bg-red-100 text-red-800' : 
            value <= 20 ? 'bg-yellow-100 text-yellow-800' : 
            'bg-green-100 text-green-800'}
        `}>
          {value}
        </span>
      );
    },
  },
  {
    header: 'Reorder At',
    accessorKey: 'reorderPoint',
  },
  {
    header: 'Supplier',
    accessorKey: 'supplier',
  },
  {
    header: 'Updated',
    accessorKey: 'lastUpdated',
  },
];

export default function Products() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(mockProducts, ['name', 'category', 'supplier']);
  const modal = useModal();
  const [activeFilters, setActiveFilters] = useState({ stockLevel: 'all' });

  const handleFilter = (filters: any) => {
    setActiveFilters(filters);
  };

  const filteredProducts = filteredItems.filter(product => {
    if (activeFilters.stockLevel === 'all') return true;
    if (activeFilters.stockLevel === 'low') return product.stockLevel <= product.reorderPoint;
    if (activeFilters.stockLevel === 'out') return product.stockLevel === 0;
    if (activeFilters.stockLevel === 'good') return product.stockLevel > product.reorderPoint;
    return true;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
        <Button onClick={() => modal.open()}>
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </Button>
      </div>

      <Card title="Product List">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 w-full border rounded-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant="secondary"
              className="sm:w-auto w-full"
              onClick={() => setActiveFilters({ stockLevel: 'all' })}
            >
              <Filter className="h-5 w-5 mr-2" />
              Clear Filters
            </Button>
          </div>

          <ProductFilters onFilter={handleFilter} activeFilters={activeFilters} />
        </div>

        <div className="mt-6 overflow-x-auto -mx-6 px-6">
          <Table data={filteredProducts} columns={columns} />
        </div>
      </Card>

      <ProductModal
        isOpen={modal.isOpen}
        onClose={modal.close}
        onSubmit={(data) => {
          console.log('Submit:', data);
          modal.close();
        }}
        product={modal.data}
      />
    </div>
  );
}