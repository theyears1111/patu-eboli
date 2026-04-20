import { Link } from 'react-router-dom';
import { MapPin, Clock, Star, ExternalLink, Phone } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useFirestore } from '../hooks/useFirestore';

const THEFORK_URL = 'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703';

const FALLBACK_HIGHLIGHTS = [
  { icon:'🍞', title:'Pane Artigianale', desc:'Impastiamo ogni giorno pane fatto a mano con farine selezionate e lievito madre.' },
  { icon:'🌿', title:'Ingredienti del Territorio', desc:'Lavoriamo con produttori locali della Campania per garantire freschezza e autenticità.' },
  { icon:'🍺', title:'Birre Artigianali', desc:'Una selezione curata di birre italiane e internazionali per ogni palato.' },
  { icon:'🍷', title:'Carta dei Vini', desc:'Vini campani e non, scelti per esaltare i nostri piatti e creare abbinamenti perfetti.' },
];

interface HomeData { titolo?:string; sottotitolo?:string; storia?:string; }
interface InfoData { telefono?:string; orari?:Record<string,string>; thefork?:string; }

export default function Home() {
  const { data: hd } = useFirestore<HomeData>('home', {});
  const { data: info } = useFirestore<InfoData>('info', {});
  const { data: heroData } = useFirestore<any>('hero_immagini', {});

  const thefork = info.thefork || THEFORK_URL;
  const heroImage = heroData?.home || 'https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1';

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Patù bistrot" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill bg-olive-100 text-olive-600 text-sm font-medium mb-6">
              <MapPin size={14} /> Eboli, Salerno — Aperto Oggi
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-charcoal leading-tight mb-6" style={{letterSpacing:'-0.03em'}}>
              {hd.titolo || <>Pane fresco,<br /><span className="text-olive-500">tulipani</span> e<br />buona cucina</>}
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {hd.sottotitolo || 'Un angolo caldo nel cuore di Eboli. Bistrot autentico dove il pane è fatto ogni giorno e ogni piatto racconta il territorio.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={thefork} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-olive-500 text-white font-semibold hover:bg-olive-600 transition-colors">
                Prenota un Tavolo <ExternalLink size={15} />
              </a>
              <Link to="/menu" className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border-2 border-olive-500 text-olive-600 font-semibold hover:bg-olive-50 transition-colors">
                Sfoglia il Menu
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex items-center gap-1"><Star size={14} className="fill-terracotta-500 text-terracotta-500" /><span className="font-semibold text-charcoal">4.6</span>· 181 recensioni</div>
              <div className="flex items-center gap-1.5"><Clock size={14} className="text-olive-500" />Lun, Gio–Dom 18:00–01:00 · Mar–Mer chiuso</div>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FALLBACK_HIGHLIGHTS.map((h, i) => (
              <ScrollReveal key={i} delay={i*100}>
                <div className="bg-white rounded-card p-6 border border-gray-100 hover:border-olive-200 hover:shadow-sm transition-all duration-300">
                  <div className="text-3xl mb-3">{h.icon}</div>
                  <h3 className="font-semibold text-charcoal mb-2">{h.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{h.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STORIA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <img src="https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Patù bistrot" className="w-full h-80 object-cover rounded-card" />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xs font-semibold text-olive-500 uppercase tracking-widest mb-3">La nostra storia</p>
              <h2 className="text-4xl font-bold text-charcoal mb-6" style={{letterSpacing:'-0.02em'}}>Un bistrot con l'anima della Campania</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {hd.storia || "Patù nasce dalla passione per il pane fatto a mano e per i sapori autentici del territorio campano. Ogni sera apriamo le nostre porte per accoglierti in un'atmosfera familiare e genuina."}
              </p>
              <div className="flex gap-3 mt-6">
                <Link to="/menu" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-olive-500 text-white text-sm font-semibold hover:bg-olive-600 transition-colors">Scopri il Menu</Link>
                <a href={`tel:${info.telefono?.replace(/\s/g,'') || '3318043454'}`} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill border border-gray-200 text-gray-700 text-sm font-semibold hover:border-olive-300 transition-colors"><Phone size={14}/>Chiamaci</a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><h2 className="text-3xl font-bold text-charcoal text-center mb-10" style={{letterSpacing:'-0.02em'}}>Esplora la nostra carta</h2></ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{to:'/menu',label:'Menu',desc:'Antipasti, Primi, Secondi, Panini'},{to:'/birre',label:'Birre Artigianali',desc:'Selezione curata'},{to:'/drink-list',label:'Drink List',desc:'Spritz, Cocktail, Gin'},{to:'/vini',label:'Carta dei Vini',desc:'Bianchi, Rossi, Rosati'}].map((l,i)=>(
              <ScrollReveal key={i} delay={i*80}>
                <Link to={l.to} className="group bg-white rounded-card p-5 border border-gray-100 hover:border-olive-300 hover:shadow-md transition-all duration-300 block">
                  <h3 className="font-semibold text-charcoal group-hover:text-olive-600 transition-colors mb-1">{l.label}</h3>
                  <p className="text-xs text-gray-400">{l.desc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-olive-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-4">Riserva il tuo tavolo</h2>
            <p className="text-olive-100 mb-8">Aperto lunedì e da giovedì a domenica dalle 18:00. Chiuso martedì e mercoledì.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={thefork} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-pill bg-white text-olive-600 font-semibold hover:bg-olive-50 transition-colors">
                Prenota su TheFork <ExternalLink size={15}/>
              </a>
              <a href={`tel:${info.telefono?.replace(/\s/g,'') || '3318043454'}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-pill border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-colors">
                <Phone size={15}/>{info.telefono || '331 804 3454'}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}