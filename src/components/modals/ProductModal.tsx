import React from 'react';
import { X } from 'lucide-react';
import Button from '../shared/Button';
import FormInput from '../shared/FormInput';

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  product?: any;
}

export default function ProductModal({ isOpen, onClose, onSubmit, product }: ProductModalProps) {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    onSubmit({
      // Form data
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={onClose} />
        
        <div className="relative bg-white rounded-lg w-full max-w-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">{product ? 'Edit' : 'Add'} Product</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput
              id="name"
              label="Product Name"
              defaultValue={product?.name}
              required
            />
            
            <FormInput
              id="category"
              label="Category"
              defaultValue={product?.category}
              required
            />
            
            <FormInput
              id="stockLevel"
              type="number"
              label="Stock Level"
              defaultValue={product?.stockLevel}
              required
            />
            
            <FormInput
              id="reorderPoint"
              type="number"
              label="Reorder Point"
              defaultValue={product?.reorderPoint}
              required
            />

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                {product ? 'Update' : 'Add'} Product
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}