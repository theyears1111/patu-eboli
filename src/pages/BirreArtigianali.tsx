import ScrollReveal from '../components/ScrollReveal';
import { useFirestore } from '../hooks/useFirestore';
import { birre as fallbackBirre } from '../data/birre';
import PageHeader from '../components/PageHeader';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1';
interface Beer { name:string; brewery:string; style:string; abv:string; description:string; price:string; origin:string; badge?:string; }
interface BirreData { items: Beer[]; }

export default function BirreArtigianali() {
  const { data: heroData } = useFirestore<any>('hero_immagini', {});
  const { data: birreData } = useFirestore<BirreData>('birre', { items:[] });
  const birre = birreData.items?.length > 0 ? birreData.items : fallbackBirre;

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader title="Birre Artigianali"
        subtitle="Una selezione curata di birre italiane e internazionali. Dal luppolo al malto, ogni etichetta racconta una storia."
        image={heroData?.birre || DEFAULT_IMAGE} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {birre.map((beer:any, i:number) => (
            <ScrollReveal key={i} delay={i*70}>
              <div className="group bg-white border border-gray-100 rounded-card p-6 hover:border-olive-200 hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-semibold text-charcoal group-hover:text-olive-600 transition-colors">{beer.name}</h3>
                      {beer.badge && <span className="text-xs px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-700 font-medium">{beer.badge}</span>}
                    </div>
                    <p className="text-xs text-gray-400">{beer.brewery} · {beer.origin}</p>
                  </div>
                  <span className="font-semibold text-olive-600 shrink-0">{beer.price}</span>
                </div>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-olive-50 text-olive-700 border border-olive-100">{beer.style}</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">{beer.abv}</span>
                </div>
                {beer.description && <p className="text-sm text-gray-500 leading-relaxed">{beer.description}</p>}
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 p-5 bg-olive-50 rounded-card border border-olive-100 text-center">
          <p className="text-sm text-gray-600 font-medium">Birre stagionali e fuori listino</p>
          <p className="text-sm text-gray-500 mt-1">Chiedi al personale per le birre del momento.</p>
        </div>
      </div>
    </div>
  );
}