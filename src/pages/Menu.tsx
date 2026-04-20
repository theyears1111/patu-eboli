import { useState } from 'react';
import FilterPills from '../components/FilterPills';
import ScrollReveal from '../components/ScrollReveal';
import { useFirestore } from '../hooks/useFirestore';
import { menuItems as fallbackItems, menuCategories, MenuCategory } from '../data/menu';
import { Leaf } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1';
interface FBItem { name:string; description:string; price:string; allergens?:string[]; badge?:string; foto?:string; }
interface MenuData { items: FBItem[]; }

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>('antipasti');
  const { data: heroData } = useFirestore<any>('hero_immagini', {});
  const { data: antipasti } = useFirestore<MenuData>('menu_antipasti', { items:[] });
  const { data: primi } = useFirestore<MenuData>('menu_primi', { items:[] });
  const { data: secondi } = useFirestore<MenuData>('menu_secondi', { items:[] });
  const { data: paniniTerra } = useFirestore<MenuData>('menu_panini_terra', { items:[] });
  const { data: paniniMare } = useFirestore<MenuData>('menu_panini_mare', { items:[] });
  const { data: contorni } = useFirestore<MenuData>('menu_contorni', { items:[] });

  const fbMap: Partial<Record<MenuCategory, FBItem[]>> = {
    antipasti: antipasti.items||[], primi: primi.items||[], secondi: secondi.items||[],
    'panini-terra': paniniTerra.items||[], 'panini-mare': paniniMare.items||[], contorni: contorni.items||[],
  };

  const getItems = (cat: MenuCategory) => {
    const fb = fbMap[cat] || [];
    if (fb.length > 0) return fb.map((item, i) => ({ ...item, id:i, category:cat }));
    return fallbackItems.filter(item => item.category === cat);
  };

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader title="Il Nostro Menu"
        subtitle="Cucina del territorio con ingredienti freschi, pane fatto a mano e piatti della tradizione campana."
        image={heroData?.menu || DEFAULT_IMAGE} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FilterPills categories={menuCategories} active={active} onChange={(v)=>setActive(v as MenuCategory)} />
        <div className="mt-8 space-y-3">
          {getItems(active).map((item:any, i:number) => (
            <ScrollReveal key={i} delay={i*50}>
              <div className="group flex items-start justify-between gap-4 p-5 bg-white border border-gray-100 rounded-card hover:border-olive-200 hover:shadow-sm transition-all duration-200">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-semibold text-charcoal group-hover:text-olive-600 transition-colors">{item.name}</h3>
                    {item.badge && <span className="text-xs px-2 py-0.5 rounded-full bg-olive-100 text-olive-700 font-medium">{item.badge}</span>}
                  </div>
                  {item.description && <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>}
                  {item.allergens && item.allergens.length > 0 && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <Leaf size={11} className="text-olive-400" />
                      <span className="text-xs text-gray-400">Allergeni: {item.allergens.join(', ')}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {item.foto && <img src={item.foto} alt={item.name} className="w-14 h-14 object-cover rounded-lg border border-gray-100" />}
                  <span className="font-semibold text-olive-600 whitespace-nowrap">{item.price}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 p-4 bg-olive-50 rounded-card border border-olive-100 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-medium text-olive-700">Informazione allergeni:</span>{' '}
            <a href="/allergeni" className="text-olive-600 underline">Informativa Allergeni</a> o chiedi al personale.
          </p>
        </div>
      </div>
    </div>
  );
}