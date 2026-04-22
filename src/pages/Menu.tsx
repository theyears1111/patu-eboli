import { useState } from "react";
import { Link } from "react-router-dom";
import { useFirestore } from "../hooks/useFirestore";
import { menu as fallbackMenu } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

// Nomi allergeni di default (fallback se Firebase non ha la sezione allergeni)
const ALLERGENI_DEFAULT: Record<number, string> = {
  1: 'Glutine', 2: 'Crostacei', 3: 'Uova', 4: 'Pesce', 5: 'Arachidi',
  6: 'Soia', 7: 'Latte', 8: 'Frutta a guscio', 9: 'Sedano',
  10: 'Senape', 11: 'Sesamo', 12: 'Solfiti', 13: 'Lupini', 14: 'Molluschi',
};

function AllergeneBadge({ n, nomiMap }: { n: number; nomiMap: Record<number, string> }) {
  const nome = nomiMap[n] || ALLERGENI_DEFAULT[n] || `Allergene ${n}`;
  return (
    <Link
      to={`/allergeni#allergene-${n}`}
      title={nome}
      className="inline-flex items-center gap-1 bg-accent/10 text-accent rounded-full px-2 py-0.5 hover:bg-accent hover:text-white transition-colors cursor-pointer"
    >
      <span className="text-[10px] font-bold leading-none">{n}</span>
      <span className="text-[10px] leading-none hidden sm:inline">{nome}</span>
    </Link>
  );
}

function TagBadge({ tag, colore }: { tag: string; colore?: string }) {
  const defaultColors: Record<string, string> = {
    veg: '#7BAF7A', signature: '#E8857A', x2: '#f59e0b', new: '#6366f1',
  };
  const defaultLabels: Record<string, string> = {
    veg: 'veggie', signature: 'del cuore', x2: 'x2', new: 'nuovo',
  };
  const bg = colore || defaultColors[tag] || '#7BAF7A';
  const label = defaultLabels[tag] || tag;
  return (
    <span className="absolute -top-2 right-5 handwritten text-base px-3 py-0.5 rounded-full text-white"
      style={{ backgroundColor: bg }}>
      {label}
    </span>
  );
}

export default function MenuPage() {
  const data = useFirestore('menu', { items: [] });
  const allergeniData = useFirestore('allergeni', { items: [] });

  // Mappa n -> nome da Firebase (dinamico)
  const nomiAllergeni: Record<number, string> = {};
  (allergeniData?.items || []).forEach((a: any) => { nomiAllergeni[a.n] = a.name; });

  const sections: { title: string; items: any[] }[] = (() => {
    if (data?.items?.length) {
      const cats: Record<string, any[]> = {};
      data.items.forEach((item: any) => {
        const cat = item.categoria || 'Altro';
        if (!cats[cat]) cats[cat] = [];
        cats[cat].push(item);
      });
      return Object.entries(cats).map(([title, items]) => ({ title, items }));
    }
    return fallbackMenu;
  })();

  const [active, setActive] = useState<string>("Tutti");
  const filters = ["Tutti", ...sections.map((s) => s.title)];
  const visible = active === "Tutti" ? sections : sections.filter((s) => s.title === active);

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-10">
            <Tulip className="h-12 w-12 mx-auto mb-3 animate-[sway_4s_ease-in-out_infinite] origin-bottom" />
            <p className="handwritten text-2xl text-accent">la nostra cucina</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Menu</h1>
            <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
              Cucina di stagione, ricette di famiglia, ingredienti del territorio.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "bg-card text-foreground/70 hover:bg-primary/10 border border-border"
              }`}>
              {f}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {visible.map((section) => (
            <section key={section.title}>
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{section.title}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-5">
                {section.items.map((item: any, i: number) => {
                  const allergeni: number[] = item.allergeni || item.allergens || [];
                  return (
                    <Reveal key={item.name} delay={i * 60}>
                      <div className="bg-card rounded-3xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-0.5 h-full relative">
                        {item.tag && <TagBadge tag={item.tag} colore={item.tag_colore} />}
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                          <span className="font-display text-xl font-bold text-accent whitespace-nowrap">€ {item.price}</span>
                        </div>
                        {(item.desc || item.description) && (
                          <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc || item.description}</p>
                        )}
                        {allergeni.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-2">
                            {allergeni.map((n: number) => (
                              <AllergeneBadge key={n} n={n} nomiMap={nomiAllergeni} />
                            ))}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 p-5 bg-card rounded-2xl shadow-[var(--shadow-soft)] flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Allergeni:</span>
            {Object.entries(ALLERGENI_DEFAULT).map(([n, nome]) => (
              <Link key={n} to={`/allergeni#allergene-${n}`}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-accent/20 text-accent text-[9px] font-bold">{n}</span>
                {nomiAllergeni[Number(n)] || String(nome)}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}