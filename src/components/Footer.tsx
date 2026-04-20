import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, ExternalLink } from 'lucide-react';
import Logo from './Logo';

const THEFORK_URL = 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703';

export default function Footer() {
  return (
    <footer className="bg-cream border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Pane fatto a mano, ingredienti del territorio, birre artigianali e una selezione di vini per ogni palato.
            </p>
            <div className="flex items-center gap-1.5 mt-4">
              <Star size={15} className="fill-terracotta-500 text-terracotta-500" />
              <span className="text-sm font-semibold text-charcoal">4.6</span>
              <span className="text-sm text-gray-500">/ 181 recensioni Google</span>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/patu_eboli/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-olive-500 transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://www.facebook.com/PatuEboli/" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-olive-500 transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.tripadvisor.it/Restaurant_Review-g1396311-d26828442-Reviews-Patu_Pane_Tulipani-Eboli_Province_of_Salerno_Campania.html" target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-olive-500 transition-colors text-xs font-medium" aria-label="TripAdvisor">TA</a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Informazioni</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-600">
                <MapPin size={15} className="text-olive-500 mt-0.5 shrink-0" />
                <span>Via Enrico Perito 38<br />84025 Eboli (SA), Italia</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-gray-600">
                <Phone size={15} className="text-olive-500 shrink-0" />
                <a href="tel:+393318043454" className="hover:text-olive-500 transition-colors">
                  331 804 3454
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-600">
                <Clock size={15} className="text-olive-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-charcoal">Mar–Dom: 18:00–00:00</p>
                  <p className="text-gray-400">Lunedì chiuso</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Esplora</h3>
            <ul className="space-y-2">
              {[
                { to: '/menu', label: 'Menu' },
                { to: '/birre', label: 'Birre Artigianali' },
                { to: '/drink-list', label: 'Drink List' },
                { to: '/vini', label: 'Carta dei Vini' },
                { to: '/galleria', label: 'Galleria' },
                { to: '/allergeni', label: 'Informativa Allergeni' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-600 hover:text-olive-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-charcoal uppercase tracking-wider mb-4">Prenota</h3>
            <p className="text-sm text-gray-600 mb-4">
              Riserva il tuo tavolo direttamente su TheFork in pochi click.
            </p>
            <a
              href={THEFORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-olive-500 text-white text-sm font-semibold hover:bg-olive-600 transition-colors"
            >
              Prenota ora
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Patù - Pane & Tulipani. Tutti i diritti riservati.
          </p>
          <Link
            to="/allergeni"
            className="text-xs text-gray-400 hover:text-olive-500 transition-colors"
          >
            Informativa Allergeni
          </Link>
        </div>
      </div>
    </footer>
  );
}