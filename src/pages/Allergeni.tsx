import { useFirestore } from "../hooks/useFirestore";
import { allergens as fallbackAllergens } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function AllergeniPage() {
  const data = useFirestore('allergeni', { items: [] });
  const allergens = data?.items?.length ? data.items : fallbackAllergens;

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="text-center mb-12">
            <Tulip className="h-12 w-12 mx-auto mb-3" />
            <p className="handwritten text-2xl text-accent">trasparenza</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold">Informativa Allergeni</h1>
            <p className="text-foreground/70 mt-3 max-w-2xl mx-auto text-sm">
              Reg. UE 1169/2011 — Allegato II. La presenza di allergeni nei nostri piatti
              è segnalata su richiesta. In caso di intolleranze o allergie, segnalalo al personale.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-4">
          {allergens.map((a: any, i: number) => (
            <Reveal key={a.n} delay={(i % 4) * 60}>
              <div id={`allergene-${a.n}`} className="bg-card rounded-2xl p-5 shadow-[var(--shadow-soft)] flex gap-4 scroll-mt-24">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/15 text-accent font-display font-bold text-xl flex items-center justify-center">
                  {a.n}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold leading-tight">{a.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{a.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="handwritten text-xl text-center text-primary mt-12">
            chiedi sempre al nostro staff — siamo qui per te 🌷
          </p>
        </Reveal>
      </div>
    </div>
  );
}