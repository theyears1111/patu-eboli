import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, Instagram, Star } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PageHeader from '../components/PageHeader';

const THEFORK_URL = 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703';

const hours = [
  { day: 'Lunedì', time: 'Chiuso', closed: true },
  { day: 'Martedì', time: '18:00 – 00:00', closed: false },
  { day: 'Mercoledì', time: '18:00 – 00:00', closed: false },
  { day: 'Giovedì', time: '18:00 – 00:00', closed: false },
  { day: 'Venerdì', time: '18:00 – 00:00', closed: false },
  { day: 'Sabato', time: '18:00 – 00:00', closed: false },
  { day: 'Domenica', time: '18:00 – 00:00', closed: false },
];

const today = new Date().toLocaleDateString('it-IT', { weekday: 'long' });

export default function Contatti() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader
        title="Contatti & Prenotazioni"
        subtitle="Siamo a Eboli, nel cuore del Cilento. Vieni a trovarci o prenota il tuo tavolo online."
        image="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal>
              <div className="bg-white border border-gray-100 rounded-card p-6 hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-charcoal mb-5">Informazioni</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-card bg-olive-50 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-olive-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Indirizzo</p>
                      <p className="text-sm text-gray-500 mt-0.5">Via Enrico Perito 38<br />84025 Eboli (SA), Italia</p>
                      <a
                        href="https://maps.google.com/?q=Via+Enrico+Perito+38+Eboli+SA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-olive-500 hover:underline mt-1"
                      >
                        Apri su Google Maps
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-card bg-olive-50 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-olive-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Telefono</p>
                      <a
                        href="tel:+393318043454"
                        className="text-sm text-gray-500 hover:text-olive-500 transition-colors mt-0.5 block"
                      >
                        331 804 3454
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-card bg-olive-50 flex items-center justify-center shrink-0">
                      <Star size={18} className="text-olive-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Valutazione Google</p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} className="fill-terracotta-500 text-terracotta-500" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">4.6 · 181 recensioni</span>
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-card bg-olive-50 flex items-center justify-center shrink-0">
                      <Instagram size={18} className="text-olive-500" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">Social</p>
                      <div className="flex flex-col gap-1 mt-0.5">
                        <a href="https://www.instagram.com/patu_eboli/" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-500 font-medium hover:underline">Instagram: @patu_eboli</a>
                        <a href="https://www.facebook.com/PatuEboli/" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-500 font-medium hover:underline">Facebook: Patù Eboli</a>
                        <a href="https://www.tripadvisor.it/Restaurant_Review-g1396311-d26828442-Reviews-Patu_Pane_Tulipani-Eboli_Province_of_Salerno_Campania.html" target="_blank" rel="noopener noreferrer" className="text-sm text-olive-500 font-medium hover:underline">TripAdvisor</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="bg-white border border-gray-100 rounded-card p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-olive-500" />
                  <h2 className="text-lg font-bold text-charcoal">Orari</h2>
                </div>
                <ul className="space-y-2.5">
                  {hours.map((h) => {
                    const isToday = today.toLowerCase() === h.day.toLowerCase();
                    return (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm transition-colors ${
                          isToday ? 'bg-olive-50 border border-olive-100' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className={`font-medium ${isToday ? 'text-olive-700' : 'text-charcoal'}`}>
                          {h.day}
                          {isToday && (
                            <span className="ml-2 text-xs font-semibold text-olive-500 bg-olive-100 px-2 py-0.5 rounded-pill">
                              Oggi
                            </span>
                          )}
                        </span>
                        <span className={h.closed ? 'text-gray-400' : isToday ? 'text-olive-600 font-semibold' : 'text-gray-500'}>
                          {h.time}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal delay={150}>
              <div className="bg-olive-500 rounded-card p-7 text-center">
                <h2 className="text-xl font-bold text-white mb-3">Prenota il tuo tavolo</h2>
                <p className="text-olive-100 text-sm mb-6 leading-relaxed">
                  Riserva il tuo posto in pochi click su TheFork. Disponibilità in tempo reale.
                </p>
                <a
                  href={THEFORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-pill bg-white text-olive-600 font-bold text-sm hover:bg-olive-50 transition-colors shadow-md"
                >
                  Prenota su TheFork
                  <ExternalLink size={14} />
                </a>
                <p className="text-olive-200 text-xs mt-4">Oppure chiamaci al 331 804 3454</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white border border-gray-100 rounded-card overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-64 bg-gray-100 relative">
                  <iframe
                    title="Mappa Patù - Pane & Tulipani"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.5!2d15.0557!3d40.6178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133ba4b0e0000001%3A0x1234567890abcdef!2sVia%20Enrico%20Perito%2038%2C%2084025%20Eboli%20SA!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-charcoal">Via Enrico Perito 38</p>
                  <p className="text-sm text-gray-400">84025 Eboli (SA)</p>
                  <a
                    href="https://maps.google.com/?q=Via+Enrico+Perito+38+Eboli+SA+Italy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-olive-500 hover:underline mt-2"
                  >
                    Ottieni indicazioni
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}