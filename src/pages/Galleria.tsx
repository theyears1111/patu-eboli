import { useState } from 'react';
import { X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useFirestore } from '../hooks/useFirestore';
import PageHeader from '../components/PageHeader';

const DEFAULT_IMAGE = 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1';
const FALLBACK_IMAGES = [
  { url:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800', titolo:'I nostri piatti' },
  { url:'https://images.pexels.com/photos/1579584/pexels-photo-1579584.jpeg?auto=compress&cs=tinysrgb&w=800', titolo:'Pasta fresca' },
  { url:'https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=800', titolo:'Il nostro giardino' },
  { url:'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800', titolo:'Birre artigianali' },
  { url:'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800', titolo:'Atmosfera serale' },
  { url:'https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800', titolo:'Selezione vini' },
];

interface Foto { url:string; titolo:string; }
interface GalData { items: Foto[]; }

export default function Galleria() {
  const [lightbox, setLightbox] = useState<number|null>(null);
  const { data: heroData } = useFirestore<any>('hero_immagini', {});
  const { data: galData } = useFirestore<GalData>('galleria', { items:[] });

  const images = galData.items?.length > 0 ? galData.items : FALLBACK_IMAGES;

  const prev = () => setLightbox(l => l !== null ? (l-1+images.length)%images.length : null);
  const next = () => setLightbox(l => l !== null ? (l+1)%images.length : null);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader title="Galleria" subtitle="Un'anteprima della nostra atmosfera, dei nostri piatti e di tutto quello che ci rende unici."
        image={heroData?.galleria || DEFAULT_IMAGE} />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img:any, i:number) => (
            <ScrollReveal key={i} delay={i*60}>
              <div className="break-inside-avoid cursor-pointer group overflow-hidden rounded-card"
                onClick={() => setLightbox(i)}>
                <img src={img.url} alt={img.titolo}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {img.titolo && (
                  <p className="text-xs text-gray-400 text-center py-2">{img.titolo}</p>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}>
          <button className="absolute top-4 right-4 text-white/70 hover:text-white z-10" onClick={() => setLightbox(null)}><X size={28}/></button>
          <button className="absolute left-4 text-white/50 hover:text-white text-4xl z-10" onClick={e=>{e.stopPropagation();prev();}}>‹</button>
          <button className="absolute right-4 text-white/50 hover:text-white text-4xl z-10" onClick={e=>{e.stopPropagation();next();}}>›</button>
          <img src={images[lightbox].url} alt={images[lightbox].titolo}
            className="max-w-4xl max-h-[85vh] w-full object-contain rounded-lg"
            onClick={e=>e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}