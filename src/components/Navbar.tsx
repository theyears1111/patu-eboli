import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/birre', label: 'Birre' },
  { to: '/drink-list', label: 'Drink List' },
  { to: '/vini', label: 'Vini' },
  { to: '/galleria', label: 'Galleria' },
  { to: '/contatti', label: 'Contatti' },
  { to: '/allergeni', label: 'Allergeni' },
];

const THEFORK_URL = 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo size="sm" />

            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigazione principale">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-olive-500 bg-olive-50'
                      : 'text-charcoal hover:text-olive-500 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={THEFORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center px-5 py-2 rounded-pill bg-olive-500 text-white text-sm font-semibold hover:bg-olive-600 active:bg-olive-700 transition-colors duration-200 shadow-sm"
              >
                Prenota
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-lg text-charcoal hover:bg-gray-100 transition-colors"
                aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-lg py-4 px-4">
            <div className="flex flex-col gap-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-card text-base font-medium transition-all ${
                    isActive(link.to)
                      ? 'text-olive-500 bg-olive-50'
                      : 'text-charcoal hover:text-olive-500 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <a
              href={THEFORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-5 py-3 rounded-pill bg-olive-500 text-white text-base font-semibold hover:bg-olive-600 transition-colors"
            >
              Prenota su TheFork
            </a>
          </nav>
        </div>
      )}
    </>
  );
}