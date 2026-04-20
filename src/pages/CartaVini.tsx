import React, { useState } from 'react';
import FilterPills from '../components/FilterPills';
import ScrollReveal from '../components/ScrollReveal';
import { vini, wineTypes, WineType } from '../data/vini';
import PageHeader from '../components/PageHeader';

const wineColors: Record<WineType, string> = {
  bianco: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  rosso: 'bg-red-50 text-red-700 border-red-200',
  rosato: 'bg-pink-50 text-pink-600 border-pink-200',
};

export default function CartaVini() {
  const [active, setActive] = useState<WineType>('bianco');

  const filtered = vini.filter((v) => v.type === active);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader
        title="Carta dei Vini"
        subtitle="Vini campani e non, selezionati con cura per esaltare ogni piatto. Dalla Falanghina all'Aglianico, un viaggio tra i vigneti d'Italia."
        image="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm py-4 -mx-4 px-4 border-b border-gray-100 mb-10">
          <FilterPills
            categories={wineTypes}
            active={active}
            onChange={(id) => setActive(id as WineType)}
          />
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filtered.map((wine, i) => (
            <ScrollReveal key={wine.id} delay={i * 60}>
              <div className="group bg-white border border-gray-100 rounded-card p-6 hover:border-olive-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="text-base font-bold text-charcoal group-hover:text-olive-600 transition-colors">
                        {wine.name}
                      </h3>
                      {wine.badge && (
                        <span className="px-2.5 py-0.5 rounded-pill text-xs font-medium bg-terracotta-100 text-terracotta-600">
                          {wine.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-3 text-sm text-gray-400">
                      <span>{wine.producer}</span>
                      <span>·</span>
                      <span>{wine.region}</span>
                      {wine.year && (
                        <>
                          <span>·</span>
                          <span>{wine.year}</span>
                        </>
                      )}
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{wine.description}</p>

                    {wine.grapes && (
                      <span className={`inline-flex px-3 py-1 rounded-pill text-xs font-medium border ${wineColors[wine.type]}`}>
                        {wine.grapes}
                      </span>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-base font-bold text-olive-500">{wine.price}</p>
                    {wine.priceBottle && (
                      <p className="text-sm text-gray-400 mt-0.5">{wine.priceBottle} bottiglia</p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 bg-cream rounded-card p-6 text-center border border-gray-100">
            <p className="text-sm font-medium text-charcoal mb-1">Hai un\'etichetta preferita?</p>
            <p className="text-sm text-gray-500">
              Parliamo con te di vini. Chiedi al personale per abbinamenti e bottiglie fuori carta.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
