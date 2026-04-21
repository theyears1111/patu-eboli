import { useFirestore } from "../hooks/useFirestore";
import { wines as fallbackWines } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function ViniPage() {
  const data = useFirestore('vini', { items: [] });

  // Da Firebase: array flat con campo categoria
  // Fallback: oggetto { "I Bianchi": [...], "I Rossi": [...] }
  const categories: [string, any[]][] = (() => {
    if (data?.items?.length) {
      const cats: Record<string, any[]> = {};
      data.items.forEach((item: any) => {
        const cat = item.categoria || 'Vini';
        if (!cats[cat]) cats[cat] = [];
        cats[cat].push(item);
      });
      return Object.entries(cats);
    }
    return Object.entries(fallbackWines);
  })();

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="text-center mb-14">
            <Tulip className="h-12 w-12 mx-auto mb-3" />
            <p className="handwritten text-2xl text-accent">in cantina</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Carta dei Vini</h1>
            <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
              Etichette del territorio campano e qualche viaggio fuori porta.
            </p>
          </div>
        </Reveal>

        <div className="space-y-12">
          {categories.map(([cat, items]) => (
            <section key={cat}>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{cat}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                </div>
              </Reveal>
              <div className="bg-card rounded-3xl shadow-[var(--shadow-soft)] divide-y divide-dashed divide-border">
                {items.map((w: any, i: number) => (
                  <Reveal key={w.name} delay={i * 50}>
                    <div className="flex justify-between items-baseline gap-4 p-5">
                      <div>
                        <h3 className="font-display text-lg font-semibold">{w.name}</h3>
                        {(w.winery || w.producer) && (
                          <p className="text-sm text-muted-foreground">
                            <span className="handwritten text-base text-primary">{w.winery || w.producer}</span>
                            {(w.year || w.region) && <span> · {w.year || w.region}</span>}
                          </p>
                        )}
                      </div>
                      <span className="font-display text-lg font-bold text-accent whitespace-nowrap">€ {w.price}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}