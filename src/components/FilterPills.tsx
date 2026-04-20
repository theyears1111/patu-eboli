import React from 'react';

interface Category {
  id: string;
  label: string;
}

interface Props {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
}

export default function FilterPills({ categories, active, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`px-5 py-2 rounded-pill text-sm font-medium transition-all duration-200 border ${
            active === cat.id
              ? 'bg-olive-500 text-white border-olive-500 shadow-sm'
              : 'bg-white text-charcoal border-gray-200 hover:border-olive-400 hover:text-olive-600'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
