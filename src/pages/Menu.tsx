
import { useState } from "react";
import { menu } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function MenuPage() {
  const [active, setActive] = useState<string>("Tutti");
  const filters = ["Tutti", ...menu.map((m) => m.title)];
  const visible = active === "Tutti" ? menu : menu.filter((m) => m.title === active);

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

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                  : "bg-card text-foreground/70 hover:bg-primary/10 border border-border"
              }`}
            >
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
                {section.items.map((item, i) => (
                  <Reveal key={item.name} delay={i * 60}>
                    <div className="bg-card rounded-3xl p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-warm)] transition-all hover:-translate-y-0.5 h-full relative">
                      {item.tag && (
                        <span className={`absolute -top-2 right-5 handwritten text-lg px-3 py-0.5 rounded-full ${
                          item.tag === "veg" ? "bg-primary text-primary-foreground" :
                          item.tag === "signature" ? "bg-tulip text-primary-foreground" :
                          "bg-orange text-foreground"
                        }`}>
                          {item.tag === "veg" ? "veggie" : item.tag === "signature" ? "del cuore" : item.tag}
                        </span>
                      )}
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="font-display text-xl font-semibold">{item.name}</h3>
                        <span className="font-display text-xl font-bold text-accent whitespace-nowrap">€ {item.price}</span>
                      </div>
                      {item.desc && <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>}
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
