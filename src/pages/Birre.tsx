import { useFirestore } from "../hooks/useFirestore";
import { beers as fallbackBeers } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function BirrePage() {
  const data = useFirestore('birre', { items: [] });
  const beers = data?.items?.length ? data.items : fallbackBeers;

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <Tulip className="h-12 w-12 mx-auto mb-3" />
            <p className="handwritten text-2xl text-accent">selezione craft</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Birre Artigianali</h1>
            <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
              Una rotazione di birre indipendenti scelte una a una.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {beers.map((b: any, i: number) => (
            <Reveal key={b.name} delay={i * 80}>
              <div className="bg-card rounded-[2rem] p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-1 h-full">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="handwritten text-xl text-primary leading-none">{b.brewery || b.birrificio}</p>
                    <h3 className="font-display text-2xl font-bold mt-1">{b.name}</h3>
                  </div>
                  <span className="bg-orange/30 text-foreground rounded-full px-3 py-1 text-sm font-semibold whitespace-nowrap">
                    {b.abv}
                  </span>
                </div>
                <span className="inline-block bg-primary/15 text-primary rounded-full px-3 py-1 text-xs font-medium mb-4">
                  {b.style}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.notes || b.description}</p>
                {b.price && (
                  <p className="font-display text-lg font-bold text-accent mt-4">€ {b.price}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="handwritten text-xl text-center text-muted-foreground mt-12">
            * la disponibilità cambia spesso — chiedi al banco la spina del giorno!
          </p>
        </Reveal>
      </div>
    </div>
  );
}