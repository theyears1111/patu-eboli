import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { birre } from '../data/birre';
import PageHeader from '../components/PageHeader';

export default function BirreArtigianali() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader
        title="Birre Artigianali"
        subtitle="Una selezione curata di birre italiane e internazionali. Dal luppolo al malto, ogni etichetta racconta una storia."
        image="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {birre.map((beer, i) => (
            <ScrollReveal key={beer.id} delay={i * 70}>
              <div className="group bg-white border border-gray-100 rounded-card p-6 hover:border-olive-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h3 className="text-base font-bold text-charcoal group-hover:text-olive-600 transition-colors">
                        {beer.name}
                      </h3>
                      {beer.badge && (
                        <span className="px-2.5 py-0.5 rounded-pill text-xs font-medium bg-terracotta-100 text-terracotta-600">
                          {beer.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-400">{beer.brewery} · {beer.origin}</p>
                  </div>
                  <span className="text-lg font-bold text-olive-500 whitespace-nowrap">{beer.price}</span>
                </div>

                <div className="flex gap-2 mb-3">
                  <span className="px-3 py-1 rounded-pill text-xs font-medium bg-olive-50 text-olive-600 border border-olive-100">
                    {beer.style}
                  </span>
                  <span className="px-3 py-1 rounded-pill text-xs font-medium bg-gray-50 text-gray-500 border border-gray-100">
                    {beer.abv}
                  </span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed">{beer.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 bg-cream rounded-card p-6 text-center border border-gray-100">
            <p className="text-sm font-medium text-charcoal mb-1">Birre stagionali e fuori listino</p>
            <p className="text-sm text-gray-500">
              Chiedi al personale per le birre del momento: collaboriamo con birrifici artigianali locali e abbiamo sempre qualche novità.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
