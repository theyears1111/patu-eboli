import { useState, useEffect } from 'react';
import { getDati } from '../lib/ristorante';

// Legge una sezione da Firebase con cache localStorage
// Ritorna any per flessibilità — stesso pattern di Bollicine
export function useFirestore(sezione: string, fallback: any = {}): any {
  const cacheKey = `patu_${sezione}`;

  const [data, setData] = useState<any>(() => {
    try {
      const cached = localStorage.getItem(cacheKey);
      return cached ? JSON.parse(cached) : fallback;
    } catch {
      return fallback;
    }
  });

  useEffect(() => {
    getDati(sezione).then((d) => {
      if (d) {
        setData(d);
        try { localStorage.setItem(cacheKey, JSON.stringify(d)); } catch {}
      }
    });
  }, [sezione]);

  return data;
}