import { useState } from 'react';
import FilterPills from '../components/FilterPills';
import ScrollReveal from '../components/ScrollReveal';
import { useFirestore } from '../hooks/useFirestore';
import { vini as fallbackVini, wineTypes, WineType } from '../data/vini';
import PageHeader from '../components/PageHeader';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1';
interface Wine { name:string; producer:string; region:string; price:string; description?:string; badge?:string; }
interface ViniData { bianchi:Wine[]; rossi:Wine[]; rosati:Wine[]; calice:Wine[]; }

export default function CartaVini() {
  const [active, setActive] = useState<WineType>('bianco');
  const { data: heroData } = useFirestore<any>('hero_immagini', {});
  const { data: viniData } = useFirestore<ViniData>('vini', { bianchi:[], rossi:[], rosati:[], calice:[] });

  const typeToKey: Record<WineType, keyof ViniData> = {
    bianco:'bianchi', rosso:'rossi', rosato:'rosati', calice:'calice'
  };

  const getFbVini = (type: WineType): Wine[] => viniData[typeToKey[type]] || [];
  const getFallback = (type: WineType) => fallbackVini.filter(v => v.type === type);
  const getVini = (type: WineType) => {
    const fb = getFbVini(type);
    return fb.length > 0 ? fb : getFallback(type);
  };

  const filtered = getVini(active);
  const allTypes = [...wineTypes, { id: 'calice' as WineType, label: 'Vini al Calice' }];

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader title="Carta dei Vini"
        subtitle="Vini campani e non, selezionati con cura per esaltare ogni piatto."
        image={heroData?.vini || DEFAULT_IMAGE} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterPills categories={allTypes} active={active} onChange={(v)=>setActive(v as WineType)} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((wine:any, i:number) => (
            <ScrollReveal key={i} delay={i*60}>
              <div className="group bg-white border border-gray-100 rounded-card p-5 hover:border-olive-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-charcoal group-hover:text-olive-600 transition-colors">{wine.name}</h3>
                      {wine.badge && <span className="text-xs px-2 py-0.5 rounded-full bg-olive-100 text-olive-700 font-medium">{wine.badge}</span>}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{[wine.producer, wine.region].filter(Boolean).join(' · ')}</p>
                  </div>
                  <span className="font-semibold text-olive-600 shrink-0">{wine.price}</span>
                </div>
                {wine.description && <p className="text-sm text-gray-500 mt-2 leading-relaxed">{wine.description}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 p-5 bg-olive-50 rounded-card border border-olive-100 text-center">
          <p className="text-sm text-gray-600">Hai un'etichetta preferita? Parliamo con te di vini.</p>
        </div>
      </div>
    </div>
  );
}