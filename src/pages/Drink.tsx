
import { drinks } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function DrinkPage() {
  const categories = Object.entries(drinks);

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <Tulip className="h-12 w-12 mx-auto mb-3 animate-[float_6s_ease-in-out_infinite]" />
            <p className="handwritten text-2xl text-accent">il banco</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Drink List</h1>
            <p className="text-foreground/70 mt-3 max-w-xl mx-auto">
              Classici reinterpretati e signature drink, miscelati a vista.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map(([cat, items], i) => (
            <Reveal key={cat} delay={i * 80}>
              <div className="bg-card rounded-[2rem] p-7 shadow-[var(--shadow-soft)] h-full">
                <div className="flex items-center gap-3 mb-5">
                  <h2 className="font-display text-3xl font-bold text-primary">{cat}</h2>
                  <div className="flex-1 h-px bg-primary/30" />
                </div>
                <ul className="space-y-4">
                  {items.map((d) => (
                    <li key={d.name} className="border-b border-dashed border-border last:border-0 pb-4 last:pb-0">
                      <div className="flex justify-between items-baseline gap-3">
                        <h3 className="font-display text-lg font-semibold">{d.name}</h3>
                        <span className="font-display text-lg font-bold text-accent">€ {d.price}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{d.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
