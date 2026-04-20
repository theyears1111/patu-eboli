import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ArrowRight, ExternalLink, Phone } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const THEFORK_URL = 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703';

const highlights = [
  {
    icon: '🍞',
    title: 'Pane Artigianale',
    desc: 'Impastiamo ogni giorno pane fatto a mano con farine selezionate e lievito madre.',
  },
  {
    icon: '🌿',
    title: 'Ingredienti del Territorio',
    desc: 'Lavoriamo con produttori locali della Campania per garantire freschezza e autenticità.',
  },
  {
    icon: '🍺',
    title: 'Birre Artigianali',
    desc: 'Una selezione curata di birre italiane e internazionali per ogni palato.',
  },
  {
    icon: '🍷',
    title: 'Carta dei Vini',
    desc: 'Vini campani e non, scelti per esaltare i nostri piatti e creare abbinamenti perfetti.',
  },
];

const quickLinks = [
  { to: '/menu', label: 'Menu', desc: 'Antipasti, Primi, Secondi, Panini' },
  { to: '/birre', label: 'Birre Artigianali', desc: '12 etichette selezionate' },
  { to: '/drink-list', label: 'Drink List', desc: 'Spritz, Cocktail, Gin' },
  { to: '/vini', label: 'Carta dei Vini', desc: 'Bianchi, Rossi, Rosati' },
];

export default function Home() {
  return (
    <div className="pt-16">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1"
            alt="Terrazza del bistrot Patù con tavoli e atmosfera accogliente"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-olive-100 text-olive-600 text-sm font-medium mb-6">
              <MapPin size={14} />
              Eboli, Salerno — Aperto Oggi
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-charcoal leading-tight mb-6" style={{ letterSpacing: '-0.03em' }}>
              Pane fresco,<br />
              <span className="text-olive-500">tulipani</span> e<br />
              buona cucina
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Un angolo caldo nel cuore di Eboli. Bistrot autentico dove il pane è fatto ogni giorno e ogni piatto racconta il territorio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={THEFORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill bg-olive-500 text-white font-semibold text-base hover:bg-olive-600 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Prenota un Tavolo
                <ExternalLink size={16} />
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-pill border-2 border-charcoal text-charcoal font-semibold text-base hover:border-olive-500 hover:text-olive-500 transition-all duration-200"
              >
                Sfoglia il Menu
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 5 ? 'fill-terracotta-500 text-terracotta-500' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-charcoal">4.6</span>
                <span className="text-sm text-gray-500">· 181 recensioni</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <Clock size={14} className="text-olive-500" />
                Mar–Dom 18:00–00:00
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="bg-white rounded-card p-6 border border-gray-100 hover:border-olive-200 hover:shadow-md transition-all duration-300 group">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-base font-semibold text-charcoal mb-2 group-hover:text-olive-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                  alt="Pane artigianale di Patù"
                  className="w-full h-80 lg:h-96 object-cover rounded-card shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-olive-500 text-white px-5 py-3 rounded-card shadow-lg">
                  <p className="text-xs font-medium opacity-80">Fatto ogni giorno</p>
                  <p className="text-sm font-bold">Pane di Casa</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div>
                <span className="text-terracotta-500 text-sm font-semibold uppercase tracking-widest">La nostra storia</span>
                <h2 className="mt-3 text-4xl font-bold text-charcoal leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Un bistrot con l'anima<br />della Campania
                </h2>
                <p className="mt-5 text-base text-gray-600 leading-relaxed">
                  Patù nasce dalla passione per il pane fatto a mano e per i sapori autentici del territorio campano. Ogni sera apriamo le nostre porte per accoglierti in un'atmosfera familiare e genuina.
                </p>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">
                  Il nostro menu cambia con le stagioni, seguendo i prodotti locali e la tradizione della cucina del sud Italia — con qualche sorpresa creativa.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/menu"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-olive-500 text-white font-semibold hover:bg-olive-600 transition-colors"
                  >
                    Scopri il Menu
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="tel:+393318043454"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill border border-gray-200 text-charcoal font-semibold hover:border-olive-400 hover:text-olive-600 transition-colors"
                  >
                    <Phone size={16} />
                    Chiamaci
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-charcoal" style={{ letterSpacing: '-0.02em' }}>
                Esplora la nostra carta
              </h2>
              <p className="mt-3 text-gray-500 text-base">
                Dal cibo ai drink, tutto pensato per la tua serata
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <ScrollReveal key={link.to} delay={i * 80}>
                <Link
                  to={link.to}
                  className="group block bg-white rounded-card p-6 border border-gray-100 hover:border-olive-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-semibold text-charcoal group-hover:text-olive-600 transition-colors">
                      {link.label}
                    </h3>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-olive-500 group-hover:translate-x-1 transition-all duration-200 mt-0.5 shrink-0" />
                  </div>
                  <p className="text-sm text-gray-400">{link.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-card">
                <img
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                  alt="Interno del bistrot Patù"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-medium opacity-80 mb-1">Un'atmosfera unica</p>
                  <p className="text-lg font-bold">Il nostro spazio</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative overflow-hidden rounded-card">
                <img
                  src="https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&dpr=1"
                  alt="Selezione di birre artigianali"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-xs font-medium opacity-80 mb-1">12 etichette selezionate</p>
                  <p className="text-lg font-bold">Birre Artigianali</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 bg-olive-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ letterSpacing: '-0.02em' }}>
              Riserva il tuo tavolo
            </h2>
            <p className="text-olive-100 text-base mb-8 max-w-md mx-auto">
              Vieni a trovarci dal martedì alla domenica dalle 18:00. Prenota in anticipo per garantirti un posto.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={THEFORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-pill bg-white text-olive-600 font-bold text-base hover:bg-olive-50 transition-colors shadow-lg"
              >
                Prenota su TheFork
                <ExternalLink size={16} />
              </a>
              <a
                href="tel:+393318043454"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-pill border-2 border-white/40 text-white font-semibold text-base hover:bg-white/10 transition-colors"
              >
                <Phone size={16} />
                331 804 3454
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}