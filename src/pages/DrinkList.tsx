import { useState } from 'react';
import FilterPills from '../components/FilterPills';
import ScrollReveal from '../components/ScrollReveal';
import { useFirestore } from '../hooks/useFirestore';
import { drinks as fallbackDrinks, drinkCategories, DrinkCategory } from '../data/drinks';
import PageHeader from '../components/PageHeader';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1';
interface Drink { name:string; description:string; price:string; category:string; badge?:string; }
interface DrinksData { items: Drink[]; }

export default function DrinkList() {
  const [active, setActive] = useState<DrinkCategory>('spritz');
  const { data: heroData } = useFirestore<any>('hero_immagini', {});
  const { data: drinksData } = useFirestore<DrinksData>('drinks', { items:[] });

  const getItems = (cat: DrinkCategory) => {
    const fb = (drinksData.items||[]).filter((d:any) => d.category === cat);
    if (fb.length > 0) return fb;
    return fallbackDrinks.filter(d => d.category === cat);
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader title="Drink List"
        subtitle="Aperitivi, cocktail classici e gin tonic selezionati. Ogni drink è preparato con cura."
        image={heroData?.drink_list || DEFAULT_IMAGE} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterPills categories={drinkCategories} active={active} onChange={(v)=>setActive(v as DrinkCategory)} />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {getItems(active).map((drink:any, i:number) => (
            <ScrollReveal key={i} delay={i*50}>
              <div className="group bg-white border border-gray-100 rounded-card p-5 hover:border-olive-200 hover:shadow-sm transition-all duration-200">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-charcoal group-hover:text-olive-600 transition-colors">{drink.name}</h3>
                    {drink.badge && <span className="text-xs px-2 py-0.5 rounded-full bg-olive-100 text-olive-700 font-medium">{drink.badge}</span>}
                  </div>
                  <span className="font-semibold text-olive-600 shrink-0">{drink.price}</span>
                </div>
                {drink.description && <p className="text-sm text-gray-500 leading-relaxed mt-1">{drink.description}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}