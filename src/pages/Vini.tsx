
import { wines } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function ViniPage() {
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
          {Object.entries(wines).map(([cat, items]) => (
            <section key={cat}>
              <Reveal>
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">{cat}</h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
                </div>
              </Reveal>

              <div className="bg-card rounded-3xl shadow-[var(--shadow-soft)] divide-y divide-dashed divide-border">
                {items.map((w, i) => {
                  const wine = w as { name: string; winery?: string; year?: string; price: string };
                  return (
                    <Reveal key={wine.name} delay={i * 50}>
                      <div className="flex justify-between items-baseline gap-4 p-5">
                        <div>
                          <h3 className="font-display text-lg font-semibold">{wine.name}</h3>
                          {wine.winery && (
                            <p className="text-sm text-muted-foreground">
                              <span className="handwritten text-base text-primary">{wine.winery}</span>
                              {wine.year && <span> · {wine.year}</span>}
                            </p>
                          )}
                        </div>
                        <span className="font-display text-lg font-bold text-accent whitespace-nowrap">€ {wine.price}</span>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
