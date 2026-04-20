import React, { useState } from 'react';
import FilterPills from '../components/FilterPills';
import ScrollReveal from '../components/ScrollReveal';
import { drinks, drinkCategories, DrinkCategory } from '../data/drinks';
import PageHeader from '../components/PageHeader';

export default function DrinkList() {
  const [active, setActive] = useState<DrinkCategory>('spritz');

  const filtered = drinks.filter((d) => d.category === active);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader
        title="Drink List"
        subtitle="Aperitivi, cocktail classici e gin tonic selezionati. Ogni drink è preparato con cura da chi ama il proprio mestiere."
        image="https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-gray-100 mb-10">
          <FilterPills
            categories={drinkCategories}
            active={active}
            onChange={(id) => setActive(id as DrinkCategory)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((drink, i) => (
            <ScrollReveal key={drink.id} delay={i * 70}>
              <div className="group bg-white border border-gray-100 rounded-card p-5 hover:border-olive-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-semibold text-charcoal group-hover:text-olive-600 transition-colors">
                        {drink.name}
                      </h3>
                      {drink.badge && (
                        <span className={`px-2.5 py-0.5 rounded-pill text-xs font-medium ${
                          drink.badge === 'Analcolico'
                            ? 'bg-green-50 text-green-600'
                            : 'bg-terracotta-100 text-terracotta-600'
                        }`}>
                          {drink.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{drink.description}</p>
                  </div>
                  <span className="text-base font-bold text-olive-500 whitespace-nowrap">{drink.price}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-cream rounded-card p-5 border border-gray-100">
              <h4 className="text-sm font-semibold text-charcoal mb-2">Analcolici</h4>
              <p className="text-sm text-gray-500">
                Abbiamo una selezione di drink analcolici per chi non beve alcool. Chiedi al personale per le opzioni del momento.
              </p>
            </div>
            <div className="bg-cream rounded-card p-5 border border-gray-100">
              <h4 className="text-sm font-semibold text-charcoal mb-2">Soft Drinks</h4>
              <p className="text-sm text-gray-500">
                Acqua naturale e frizzante, Coca-Cola, Fanta, succhi di frutta, tè freddo — chiedi al personale.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
