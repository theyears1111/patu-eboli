export interface Beer {
  id: number;
  name: string;
  brewery: string;
  style: string;
  abv: string;
  description: string;
  price: string;
  origin: string;
  badge?: string;
}

export const birreSpina: Beer[] = [
  { id: 1, name: 'Nastro Azzurro', brewery: 'Peroni', style: 'Pilsener', abv: '4,8%', description: 'Premium Pilsener classica', price: '€3', origin: 'Italia' },
  { id: 2, name: 'Ceres Strong Ale', brewery: 'Ceres', style: 'Strong Ale', abv: '7,9%', description: 'Strong ale dal carattere deciso', price: '€3', origin: 'Danimarca' },
  { id: 3, name: "Tennent's Super", brewery: "Tennent's", style: 'Scotch Ale', abv: '9%', description: 'Scotch ale robusta e intensa', price: '€3', origin: 'Scozia' },
];

export const birre: Beer[] = [
  { id: 4, name: 'Wolf Tundra Tropical IPA', brewery: 'Wolf', style: 'IPA', abv: '5%', description: 'American IPA con decise fragranze di luppolo e toni di frutta tropicale. Corpo pieno, gusto morbido e amaro meno deciso.', price: '€5', origin: 'Italia' },
  { id: 5, name: 'Monkey Forzuta', brewery: 'Monkey', style: 'Italian Triple', abv: '7,7%', description: 'Italian triple con malti locali, acqua pura umbra e luppolo incredibile. Pura energia in ogni sorso.', price: '€5', origin: 'Italia' },
  { id: 6, name: 'Birra Salento Beggia', brewery: 'Birra Salento', style: 'Belgian Ale', abv: '7%', description: 'Belgian ale ambrata per bevitori esigenti. Gusto morbido con note di biscotto e caramello. Corpo fermo.', price: '€5', origin: 'Italia' },
  { id: 7, name: 'Schneider Aventinus', brewery: 'Schneider', style: 'Weizen Bock', abv: '8,2%', description: 'Weizen bock artigianale scuro. Aroma fruttato con nota di banana. Intenso e bevibile. 50cl.', price: '€5', origin: 'Germania' },
  { id: 8, name: 'Blanche de Namur', brewery: 'Brasserie du Bocq', style: 'Blanche', abv: '4,5%', description: 'Profumo agrumato e speziato con coriandolo e curaçao. Fresca e leggera.', price: '€5', origin: 'Belgio' },
  { id: 9, name: "1979 Abbaye de Rocs", brewery: "Abbaye de Rocs", style: 'Belgian Strong Ale', abv: '9%', description: 'Malto e luppolo purissimi. Aroma di caramello e cioccolato, gusto lussurioso con accenni di caffè.', price: '€5', origin: 'Belgio' },
  { id: 10, name: 'Rye River Coastal IPA', brewery: 'Rye River', style: 'IPA', abv: '5,2%', description: 'Aroma di pompelmo rosa e limone, gusto luppolato e rinfrescante.', price: '€5', origin: 'Irlanda' },
  { id: 11, name: 'Timmermans', brewery: 'Timmermans', style: 'Kriek', abv: '4%', description: 'Birra belga alla ciliegia. Fruttata e piacevole.', price: '€5', origin: 'Belgio' },
  { id: 12, name: 'Barbar Bok', brewery: 'Lefebvre', style: 'Bok al miele', abv: '8,5%', description: 'Birra belga bruna al miele. Dolce e avvolgente.', price: '€5', origin: 'Belgio' },
  { id: 13, name: 'Wicklow Wolf Mammoth IPA', brewery: 'Wicklow Wolf', style: 'IPA', abv: '6,2%', description: 'Colore ambrato con note floreali, resinose e agrumate. Luppoli simcoe, chinook, cascade ed eureka.', price: '€5', origin: 'Irlanda' },
  { id: 14, name: 'Corsendonk Rousse', brewery: 'Corsendonk', style: 'Belgian Strong Ale', abv: '8,1%', description: 'Note dolci di caramello e zucchero, lievi note di lievito e spezie. Dolce al palato.', price: '€5', origin: 'Belgio' },
  { id: 15, name: 'Uiltje IPA (Bird of Prey)', brewery: 'Uiltje', style: 'IPA', abv: '7%', description: 'Esplosione di note fruttate, speziate e di luppolo. Sentori di pino, frutta tropicale, pesca e mango.', price: '€5', origin: 'Olanda' },
  { id: 16, name: 'Wicklow Wolf Red Ale', brewery: 'Wicklow Wolf', style: 'Red Ale', abv: '5%', description: 'Leggermente tostato, caramello, toffee, frutti rossi. Tocco legnoso e aromatico.', price: '€5', origin: 'Irlanda' },
];