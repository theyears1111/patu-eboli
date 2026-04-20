import React from 'react';
import { AlertTriangle, Info } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { menuItems } from '../data/menu';

const allergens = [
  { id: 'glutine', label: 'Glutine', emoji: '🌾', desc: 'Cereali contenenti glutine (grano, segale, orzo, avena, farro)' },
  { id: 'crostacei', label: 'Crostacei', emoji: '🦐', desc: 'Gamberi, aragoste, granchi, scampi' },
  { id: 'uova', label: 'Uova', emoji: '🥚', desc: 'Uova e prodotti derivati' },
  { id: 'pesce', label: 'Pesce', emoji: '🐟', desc: 'Pesce e prodotti a base di pesce' },
  { id: 'arachidi', label: 'Arachidi', emoji: '🥜', desc: 'Arachidi e prodotti a base di arachidi' },
  { id: 'soia', label: 'Soia', emoji: '🫘', desc: 'Soia e prodotti a base di soia' },
  { id: 'latte', label: 'Latte', emoji: '🥛', desc: 'Latte e prodotti lattiero-caseari (incluso lattosio)' },
  { id: 'frutta a guscio', label: 'Frutta a Guscio', emoji: '🌰', desc: 'Mandorle, nocciole, noci, anacardi, pistacchi' },
  { id: 'sedano', label: 'Sedano', emoji: '🌿', desc: 'Sedano e prodotti a base di sedano' },
  { id: 'senape', label: 'Senape', emoji: '🟡', desc: 'Senape e prodotti a base di senape' },
  { id: 'sesamo', label: 'Sesamo', emoji: '⚪', desc: 'Semi di sesamo e prodotti a base di sesamo' },
  { id: 'solfiti', label: 'Solfiti', emoji: '🍾', desc: 'Anidride solforosa e solfiti (concentrazioni > 10 mg/kg)' },
  { id: 'lupini', label: 'Lupini', emoji: '🌸', desc: 'Lupini e prodotti a base di lupini' },
  { id: 'molluschi', label: 'Molluschi', emoji: '🦑', desc: 'Molluschi e prodotti a base di molluschi' },
];

const categories: { id: string; label: string }[] = [
  { id: 'antipasti', label: 'Antipasti' },
  { id: 'primi', label: 'Primi' },
  { id: 'secondi', label: 'Secondi' },
  { id: 'panini-terra', label: 'Panini Terra' },
  { id: 'panini-mare', label: 'Panini di Mare' },
  { id: 'contorni', label: 'Contorni' },
];

export default function Allergeni() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="bg-cream border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-card bg-terracotta-100 flex items-center justify-center shrink-0">
              <AlertTriangle size={22} className="text-terracotta-600" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-charcoal" style={{ letterSpacing: '-0.03em' }}>
                Informativa Allergeni
              </h1>
              <p className="mt-3 text-base text-gray-600 leading-relaxed max-w-2xl">
                Ai sensi del Reg. UE 1169/2011, informiamo i nostri ospiti sui principali allergeni presenti nei piatti del nostro menu. Per qualsiasi necessità o dubbio, il personale di sala è a disposizione.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <ScrollReveal>
          <div className="bg-amber-50 border border-amber-200 rounded-card p-5 flex items-start gap-3">
            <Info size={18} className="text-amber-600 mt-0.5 shrink-0" />
            <div className="text-sm text-amber-800 leading-relaxed">
              <strong>Attenzione:</strong> I nostri piatti vengono preparati in una cucina dove sono presenti tutti i principali allergeni. Non possiamo garantire l'assenza di contaminazioni crociate. Per allergie o intolleranze gravi, vi preghiamo di informarci prima di ordinare.
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div>
            <h2 className="text-2xl font-bold text-charcoal mb-6" style={{ letterSpacing: '-0.02em' }}>
              I 14 Allergeni Regolamentati (UE)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {allergens.map((allergen) => (
                <div
                  key={allergen.id}
                  className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-card hover:border-olive-200 transition-colors"
                >
                  <span className="text-2xl">{allergen.emoji}</span>
                  <div>
                    <p className="text-sm font-semibold text-charcoal">{allergen.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{allergen.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {categories.map((cat, ci) => {
          const items = menuItems.filter((item) => item.category === cat.id);
          return (
            <ScrollReveal key={cat.id} delay={ci * 50}>
              <div>
                <h2 className="text-xl font-bold text-charcoal mb-4" style={{ letterSpacing: '-0.01em' }}>
                  {cat.label}
                </h2>
                <div className="overflow-x-auto rounded-card border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-cream">
                        <th className="text-left px-4 py-3 font-semibold text-charcoal w-1/2">Piatto</th>
                        <th className="text-left px-4 py-3 font-semibold text-charcoal">Allergeni presenti</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, i) => (
                        <tr
                          key={item.id}
                          className={`border-t border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                        >
                          <td className="px-4 py-3">
                            <p className="font-medium text-charcoal">{item.name}</p>
                          </td>
                          <td className="px-4 py-3">
                            {item.allergens && item.allergens.length > 0 ? (
                              <div className="flex flex-wrap gap-1.5">
                                {item.allergens.map((a) => (
                                  <span
                                    key={a}
                                    className="px-2 py-0.5 rounded-pill text-xs font-medium bg-terracotta-50 text-terracotta-700 border border-terracotta-100"
                                  >
                                    {a}
                                  </span>
                                ))}
                              </div>
                            ) : (
                              <span className="text-gray-400 text-xs">Nessuno dei principali allergeni</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </ScrollReveal>
          );
        })}

        <ScrollReveal>
          <div className="bg-cream rounded-card p-6 border border-gray-100">
            <h3 className="text-base font-semibold text-charcoal mb-3">Note Importanti</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-olive-500 mt-0.5">•</span>
                Le informazioni sugli allergeni possono variare in base alla disponibilità stagionale degli ingredienti.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive-500 mt-0.5">•</span>
                I nostri fornitori occasionalmente modificano le proprie ricette; verifica sempre con il personale di sala.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive-500 mt-0.5">•</span>
                Per allergie severe o anafilassi, vi consigliamo di contattarci preventivamente al 331 804 3454.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive-500 mt-0.5">•</span>
                Documento aggiornato a {new Date().toLocaleDateString('it-IT', { month: 'long', year: 'numeric' })}.
              </li>
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
