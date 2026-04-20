import React, { useState } from 'react';
import FilterPills from '../components/FilterPills';
import ScrollReveal from '../components/ScrollReveal';
import { menuItems, menuCategories, MenuCategory } from '../data/menu';
import { Leaf } from 'lucide-react';
import PageHeader from '../components/PageHeader';

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>('antipasti');

  const filtered = menuItems.filter((item) => item.category === active);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader
        title="Il Nostro Menu"
        subtitle="Cucina del territorio con ingredienti freschi, pane fatto a mano e piatti della tradizione campana."
        image="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-gray-100 mb-10">
          <FilterPills
            categories={menuCategories}
            active={active}
            onChange={(id) => setActive(id as MenuCategory)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 60}>
              <div className="group bg-white border border-gray-100 rounded-card p-5 hover:border-olive-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-charcoal group-hover:text-olive-600 transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-pill text-xs font-medium bg-terracotta-100 text-terracotta-600">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                  <span className="text-base font-bold text-olive-500 whitespace-nowrap">{item.price}</span>
                </div>

                {item.allergens && item.allergens.length > 0 && (
                  <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-gray-50">
                    <Leaf size={12} className="text-gray-300" />
                    <span className="text-xs text-gray-400">
                      Allergeni: {item.allergens.join(', ')}
                    </span>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 p-5 bg-cream rounded-card border border-gray-100">
            <p className="text-sm text-gray-500 text-center leading-relaxed">
              <strong className="text-charcoal">Informazione allergeni:</strong> Per dettagli sugli allergeni presenti nei nostri piatti, consulta la nostra{' '}
              <a href="/allergeni" className="text-olive-500 hover:underline font-medium">
                Informativa Allergeni
              </a>{' '}
              o chiedi al personale di sala.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
