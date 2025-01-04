import React from 'react';
import Button from '../shared/Button';

interface ProductFiltersProps {
  onFilter: (filters: any) => void;
  activeFilters: any;
}

export default function ProductFilters({ onFilter, activeFilters }: ProductFiltersProps) {
  const stockLevels = [
    { label: 'All', value: 'all' },
    { label: 'Low Stock', value: 'low' },
    { label: 'Out of Stock', value: 'out' },
    { label: 'Well Stocked', value: 'good' },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {stockLevels.map(level => (
        <Button
          key={level.value}
          variant={activeFilters?.stockLevel === level.value ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => onFilter({ stockLevel: level.value })}
        >
          {level.label}
        </Button>
      ))}
    </div>
  );
}