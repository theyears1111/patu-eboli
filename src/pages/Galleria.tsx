import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { X } from 'lucide-react';
import PageHeader from '../components/PageHeader';

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Piatti del menu di Patù',
    label: 'I nostri piatti',
  },
  {
    src: 'https://images.pexels.com/photos/1579584/pexels-photo-1579584.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Pasta fresca',
    label: 'Primi piatti',
  },
  {
    src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Interno del bistrot',
    label: 'Il nostro spazio',
  },
  {
    src: 'https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Birre artigianali',
    label: 'Birre Artigianali',
  },
  {
    src: 'https://images.pexels.com/photos/3407777/pexels-photo-3407777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Cocktail della serata',
    label: 'I nostri cocktail',
  },
  {
    src: 'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Selezione di vini',
    label: 'Carta dei Vini',
  },
  {
    src: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Pane artigianale di Patù',
    label: 'Il nostro pane',
  },
  {
    src: 'https://images.pexels.com/photos/2814828/pexels-photo-2814828.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Spazio esterno del bistrot',
    label: 'Spazio esterno',
  },
  {
    src: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Tavoli del ristorante',
    label: "L'atmosfera",
  },
  {
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Primo piatto di pasta',
    label: 'Pasta di casa',
  },
  {
    src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Antipasti e stuzzichini',
    label: 'Antipasti',
  },
  {
    src: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Piatto di pesce',
    label: 'Secondi di mare',
  },
];

export default function Galleria() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <div className="pt-16 min-h-screen bg-white">
      <PageHeader
        title="Galleria"
        subtitle="Un'anteprima della nostra atmosfera, dei nostri piatti e di tutto quello che ci rende unici."
        image="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&dpr=1"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 50} className="break-inside-avoid">
              <button
                onClick={() => setLightbox(img)}
                className="group relative block w-full overflow-hidden rounded-card cursor-pointer"
                aria-label={`Apri immagine: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 rounded-card" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-sm font-medium drop-shadow-lg">{img.label}</span>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.alt}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Chiudi"
          >
            <X size={22} />
          </button>
          <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full rounded-card max-h-[80vh] object-contain"
            />
            <p className="text-white/70 text-sm text-center mt-3">{lightbox.label}</p>
          </div>
        </div>
      )}
    </div>
  );
}
