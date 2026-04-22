import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "../components/Reveal";
import { useFirestore } from "../hooks/useFirestore";
import { info as fallbackInfo } from "../lib/data";
import bread from "../assets/bread.jpg";
import leaves from "../assets/leaves.png";

function useCounter(target: number, duration = 1600, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const total = Math.ceil(duration / 16);
    const timer = setInterval(() => {
      frame++;
      setCount(Math.round(target * (frame / total)));
      if (frame >= total) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [start, target, duration]);
  return count;
}

function StatsSection({ homeData }: { homeData: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const stat1 = useCounter(Number(homeData?.stat1_num) || 181, 1600, started);
  const stat2 = useCounter(Number(homeData?.stat2_num) || 13, 1000, started);
  const stat3 = useCounter(Number(homeData?.stat3_num) || 46, 800, started);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const stats = [
    { value: stat1.toString(), label: homeData?.stat1_label || "recensioni Google" },
    { value: `${stat2}+`, label: homeData?.stat2_label || "birre artigianali" },
    { value: (stat3 / 10).toFixed(1), label: homeData?.stat3_label || "valutazione media" },
  ];

  return (
    <div ref={ref} className="grid grid-cols-3 gap-4 py-10 border-y border-border/50 my-10">
      {stats.map((s, i) => (
        <div key={i} className="text-center">
          <div className="font-display text-4xl md:text-5xl font-bold text-primary">{s.value}</div>
          <div className="handwritten text-base md:text-lg text-muted-foreground mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function AnimatedLogo() {
  return (
    <div className="relative mx-auto w-fit mb-6">
      <svg viewBox="0 0 160 180" className="w-40 h-40 mx-auto" aria-hidden>
        <style>{`
          @keyframes stemGrow { from{stroke-dashoffset:120;opacity:0;} to{stroke-dashoffset:0;opacity:1;} }
          @keyframes leafPop { 0%,40%{opacity:0;transform:scale(0);} 70%{opacity:1;transform:scale(1.1);} 100%{opacity:1;transform:scale(1);} }
          @keyframes petalBloom { 0%,55%{opacity:0;transform:scaleY(0);} 80%{opacity:1;transform:scaleY(1.06);} 100%{opacity:1;transform:scaleY(1);} }
          @keyframes sideBloom { 0%,62%{opacity:0;transform:scaleX(0);} 85%{opacity:1;transform:scaleX(1.04);} 100%{opacity:1;transform:scaleX(1);} }
          @keyframes textSlide { 0%,75%{opacity:0;transform:translateY(8px);} 100%{opacity:1;transform:translateY(0);} }
          @keyframes subSlide { 0%,85%{opacity:0;transform:translateY(6px);} 100%{opacity:0.7;transform:translateY(0);} }
          @keyframes tulipSway { 0%,100%{transform:rotate(0deg);transform-origin:80px 160px;} 30%{transform:rotate(2deg);transform-origin:80px 160px;} 70%{transform:rotate(-1.5deg);transform-origin:80px 160px;} }
          .stem-anim{stroke-dasharray:120;animation:stemGrow 1s ease-out forwards;}
          .leaf-l{animation:leafPop 1.5s ease-out forwards;transform-origin:65px 115px;}
          .leaf-r{animation:leafPop 1.5s 0.12s ease-out forwards;transform-origin:95px 108px;}
          .petal-c{animation:petalBloom 1.8s ease-out forwards;transform-origin:80px 75px;}
          .petal-l{animation:sideBloom 1.8s 0.05s ease-out forwards;transform-origin:60px 75px;}
          .petal-r{animation:sideBloom 1.8s 0.1s ease-out forwards;transform-origin:100px 75px;}
          .tulip-g{animation:tulipSway 5s 2.2s ease-in-out infinite;}
          .txt-patu{animation:textSlide 2s ease-out forwards;}
          .txt-sub{animation:subSlide 2.4s ease-out forwards;}
        `}</style>
        <g className="tulip-g">
          <path className="stem-anim" d="M80 158 C80 138 78 118 80 78" fill="none" stroke="#7BAF7A" strokeWidth="4" strokeLinecap="round"/>
          <path className="leaf-l" d="M74 118 C62 108 52 96 48 82 C58 90 70 102 74 114 Z" fill="#7BAF7A" opacity="0.85"/>
          <path className="leaf-r" d="M86 110 C98 100 108 88 112 74 C102 82 90 94 86 106 Z" fill="#7BAF7A" opacity="0.75"/>
          <path className="petal-c" d="M66 78 C63 58 70 36 80 28 C90 36 97 58 94 78 C91 88 86 93 80 93 C74 93 69 88 66 78 Z" fill="#C8483A"/>
          <path className="petal-l" d="M67 80 C57 68 57 50 64 36 C68 50 68 66 71 78 Z" fill="#D4566A" opacity="0.85"/>
          <path className="petal-r" d="M93 80 C103 68 103 50 96 36 C92 50 92 66 89 78 Z" fill="#D4566A" opacity="0.85"/>
          <path className="petal-c" d="M77 52 C78 40 80 29 80 28 C81 36 81 46 80 54 Z" fill="white" opacity="0.3"/>
        </g>
        <text className="txt-patu" x="80" y="150" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="32" fontWeight="700" fill="#2C2C2C">patù</text>
        <text className="txt-sub" x="80" y="168" textAnchor="middle" fontFamily="'Caveat', cursive" fontSize="14" fill="#7BAF7A" letterSpacing="2">pane &amp; tulipani</text>
      </svg>
    </div>
  );
}

// Ottimizza URL Cloudinary — aggiunge trasformazioni solo se non già presenti
function optimizeImg(url: string, width = 1200): string {
  if (!url || !url.includes('cloudinary.com')) return url;
  if (url.includes('/upload/q_')) return url; // già ottimizzata
  return url.replace('/upload/', `/upload/q_auto:best,f_auto,w_${width}/`);
}

export default function Home() {
  const homeData = useFirestore('home', {});
  const infoData = useFirestore('info', fallbackInfo);

  const thefork   = infoData?.thefork  || fallbackInfo.thefork;
  const telefono  = infoData?.telefono || fallbackInfo.phone;
  const phoneRaw  = infoData?.phoneRaw || fallbackInfo.phoneRaw;

  const titolo    = homeData?.titolo    || null;
  const sottotitolo = homeData?.sottotitolo || 'Cucina di stagione, panini gourmet, birre artigianali e un giardino che ti aspetta ogni sera.';
  const storia    = homeData?.storia    || 'Ogni mattina lo chef inizia dal pane: lievito madre, farine selezionate, 48 ore di pazienza. È la base di tutti i nostri panini e taglieri, e a volte diventa il piatto stesso — come la strazzata lucana con peperoni cruschi.';
  const citazione = homeData?.citazione_chef || 'Il pane è poesia che si mangia.';
  const nomeChef  = homeData?.nome_chef || 'lo chef';
  const testoCta  = homeData?.testo_cta || "Aperti dal giovedì alla domenica (più il lunedì) dalle 18 all'una. Il giardino ti aspetta.";

  const breadImg   = homeData?.foto_pane ? optimizeImg(homeData.foto_pane, 1200) : bread;
  const gardinoImg = homeData?.foto_giardino ? optimizeImg(homeData.foto_giardino, 1600) : 'https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=1200';

  return (
    <>
      {/* HERO */}
      <div className="px-5 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-10">
              <AnimatedLogo />
              <p className="handwritten text-2xl text-accent mb-2">bistrot artigianale · Eboli</p>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight">
                {titolo ? titolo : (
                  <>Pane fresco,<br /><span className="text-primary italic">tulipani</span> e<br />buona cucina</>
                )}
              </h1>
              <p className="text-foreground/70 mt-5 max-w-xl mx-auto text-lg leading-relaxed">{sottotitolo}</p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <a href={thefork} target="_blank" rel="noopener"
                  className="btn-pill bg-[#E8857A] text-white hover:-translate-y-0.5 transition-transform duration-300 shadow-[0_4px_16px_-4px_#E8857A]">
                  Prenota su TheFork
                </a>
                <Link to="/menu"
                  className="btn-pill bg-card text-foreground border border-border hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300">
                  Esplora il menu
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="text-amber-400">★★★★★</span>
                <span className="font-display font-bold text-lg">4.6</span>
                <span className="text-sm text-muted-foreground">· 181 recensioni Google</span>
              </div>
            </div>
          </Reveal>
          <StatsSection homeData={homeData} />
        </div>
      </div>

      <div className="wavy-divider mx-auto max-w-6xl" />

      {/* IL PANE */}
      <section className="py-20 md:py-28 px-5 relative overflow-hidden">
        <img src={leaves} alt="" className="absolute -top-10 -right-20 w-[500px] opacity-40 pointer-events-none select-none" />
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center relative">
          <Reveal>
            <div className="relative group">
              <img src={breadImg} alt="Pane artigianale" loading="lazy"
                className="rounded-[2rem] shadow-[var(--shadow-warm)] w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              <div className="absolute -bottom-6 -left-4 md:-left-8 bg-cream rounded-2xl px-5 py-3 shadow-[var(--shadow-soft)] rotate-[-4deg] group-hover:rotate-[-2deg] transition-transform duration-500">
                <span className="handwritten text-2xl text-tulip">il pane di oggi</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="handwritten text-2xl text-accent mb-3">dal forno</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Lievitato lento,<br />mangiato lentamente.
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed mb-6">{storia}</p>
            <div className="mt-8 p-6 bg-card rounded-3xl shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-transform duration-300 border-l-4 border-primary">
              <p className="handwritten text-2xl text-primary leading-relaxed mb-2">"{citazione}"</p>
              <p className="text-sm text-muted-foreground">— {nomeChef}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-20 px-5 bg-secondary/40">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="text-center mb-12">
              <p className="handwritten text-2xl text-accent mb-2">scopri</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Cosa c'è da Patù</h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { to: "/menu",  label: "Cucina", note: "antipasti, primi & panini",  emoji: "🍽️", color: "bg-accent/15 text-accent" },
              { to: "/birre", label: "Birre",  note: "artigianali italiane & non",  emoji: "🍺", color: "bg-amber-100 text-amber-700" },
              { to: "/drink", label: "Drink",  note: "spritz, cocktail & sour",     emoji: "🍹", color: "bg-primary/15 text-primary" },
              { to: "/vini",  label: "Vini",   note: "bianchi, rossi, al calice",   emoji: "🍷", color: "bg-rose-100 text-rose-700" },
            ].map((card, i) => (
              <Reveal key={card.to} delay={i * 100}>
                <Link to={card.to}
                  className="block bg-card rounded-[2rem] p-7 shadow-[var(--shadow-soft)] hover:-translate-y-2 hover:shadow-[var(--shadow-warm)] transition-all duration-300 group h-full">
                  <div className={`inline-flex h-14 w-14 rounded-full items-center justify-center mb-5 text-2xl ${card.color}`}>
                    {card.emoji}
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-1">{card.label}</h3>
                  <p className="handwritten text-lg text-muted-foreground">{card.note}</p>
                  <span className="text-sm font-medium text-primary mt-4 inline-block group-hover:translate-x-2 transition-transform duration-300">scopri →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GIARDINO */}
      <section className="py-20 px-5">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="relative rounded-[2.5rem] overflow-hidden h-80 group cursor-pointer">
              <img src={gardinoImg} alt="Il giardino di Patù"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                <div>
                  <p className="handwritten text-2xl text-white/80 mb-1">aperto ogni sera</p>
                  <h3 className="font-display text-3xl md:text-4xl font-bold text-white">Il nostro giardino</h3>
                </div>
                <Link to="/galleria"
                  className="btn-pill bg-white/20 text-white border border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors shrink-0">
                  Galleria →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-5">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="text-center bg-primary text-primary-foreground rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-[var(--shadow-warm)]">
              <div className="absolute -top-8 -right-8 opacity-20">
                <svg viewBox="0 0 60 75" className="h-40 w-40" fill="none">
                  <path d="M30 72 C30 60 29 48 30 32" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                  <path d="M22 32 C20 20 24 8 30 3 C36 8 40 20 38 32 C36 38 33 41 30 41 C27 41 24 38 22 32 Z" fill="white"/>
                  <path d="M23 34 C15 26 15 14 20 5 C23 14 23 25 25 33 Z" fill="white" opacity="0.7"/>
                  <path d="M37 34 C45 26 45 14 40 5 C37 14 37 25 35 33 Z" fill="white" opacity="0.7"/>
                </svg>
              </div>
              <p className="handwritten text-3xl mb-3 opacity-95">vieni a trovarci</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-5">Prenota un tavolo</h2>
              <p className="opacity-85 mb-8 max-w-lg mx-auto leading-relaxed">{testoCta}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href={thefork} target="_blank" rel="noopener"
                  className="btn-pill bg-[#E8857A] text-white hover:-translate-y-0.5 transition-transform duration-300">
                  Prenota su TheFork →
                </a>
                <a href={`tel:${phoneRaw || telefono}`}
                  className="btn-pill bg-transparent border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
                  {telefono}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}