export type WineType = 'bianco' | 'rosso' | 'rosato' | 'calice';

export interface Wine {
  id: number;
  name: string;
  producer: string;
  region: string;
  price: string;
  description: string;
  type: WineType;
  badge?: string;
}

export const wineTypes: { id: WineType; label: string }[] = [
  { id: 'bianco', label: 'I Bianchi' },
  { id: 'rosso', label: 'I Rossi' },
  { id: 'rosato', label: 'I Rosati' },
  { id: 'calice', label: 'Vini al Calice' },
];

export const vini: Wine[] = [
  // BIANCHI
  { id: 1, name: 'Lacryma Christi Vesù', producer: '', region: 'Campania — DOC', price: '€24', description: 'Bianco vesuviano dalla mineralità vulcanica', type: 'bianco' },
  { id: 2, name: 'Pecorino Secolo IX', producer: 'Tenuta Secolo IX', region: '', price: '€23', description: 'Pecorino dal profumo di frutta a polpa bianca, miele di acacia e erbe fresche', type: 'bianco' },
  { id: 3, name: 'Luigi Bianco', producer: '', region: '', price: '€24', description: '', type: 'bianco' },
  { id: 4, name: 'Vigna Traverso Sauvignon', producer: 'Vigna Traverso', region: '', price: '€22', description: '', type: 'bianco' },
  { id: 5, name: 'Falanghina IGP', producer: '', region: 'Campania', price: '€23', description: '', type: 'bianco' },
  { id: 6, name: 'Traminer IGT', producer: '', region: '', price: '€24', description: '', type: 'bianco' },
  { id: 7, name: 'Fonte Fiorita (Colline Pescaresi) IGT', producer: 'Tenuta Secolo IX', region: 'Abruzzo', price: '€23', description: 'Fresco e dalla spiccata personalità', type: 'bianco' },
  // ROSSI
  { id: 8, name: 'Baruch', producer: '', region: '', price: '€38', description: '', type: 'rosso', badge: 'Premium' },
  { id: 9, name: 'Scepp Campi Taurasini', producer: '', region: 'Campania', price: '€22', description: '', type: 'rosso' },
  { id: 10, name: 'Taurasi Terre di Valter', producer: '', region: 'Campania — DOCG', price: '€28', description: '', type: 'rosso' },
  { id: 11, name: 'Perdigal', producer: '', region: '', price: '€24', description: '', type: 'rosso' },
  { id: 12, name: 'Primitivo IGP Sguardo Fiero', producer: '', region: 'Puglia', price: '€22', description: '', type: 'rosso' },
  { id: 13, name: "Orgiolo Lacrima di Morro d'Alba DOC", producer: '', region: 'Marche', price: '€25', description: '', type: 'rosso' },
  { id: 14, name: 'Happiness (Piceno Superiore DOC)', producer: '', region: 'Marche', price: '€25', description: '', type: 'rosso' },
  { id: 15, name: 'Côtes-du-Rhône DOP', producer: '', region: 'Francia', price: '€24', description: '', type: 'rosso' },
  { id: 16, name: 'Elimarò', producer: '', region: '', price: '€25', description: '', type: 'rosso' },
  // ROSATI
  { id: 17, name: 'Pungirosa', producer: '', region: '', price: '€22', description: '', type: 'rosato' },
  { id: 18, name: 'Luigi Rosato', producer: '', region: '', price: '€24', description: '', type: 'rosato' },
  { id: 19, name: 'Vesù DOC', producer: '', region: 'Campania', price: '€24', description: '', type: 'rosato' },
  { id: 20, name: 'Lumare', producer: '', region: '', price: '€23', description: '', type: 'rosato' },
  // AL CALICE
  { id: 21, name: 'Calice rosato', producer: '', region: '', price: '€5', description: '', type: 'calice' },
  { id: 22, name: 'Calice bianco', producer: '', region: '', price: '€5', description: '', type: 'calice' },
  { id: 23, name: 'Calice rosso', producer: '', region: '', price: '€5', description: '', type: 'calice' },
];