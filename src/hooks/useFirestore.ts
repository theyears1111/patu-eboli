import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { RISTORANTE_ID } from '../lib/ristorante';

export function useFirestore<T>(sezione: string, fallback: T): { data: T; loading: boolean } {
  const cacheKey = `cache_${RISTORANTE_ID}_${sezione}`;
  const cached = (() => {
    try { const r = localStorage.getItem(cacheKey); return r ? JSON.parse(r) as T : null; }
    catch { return null; }
  })();

  const [data, setData] = useState<T>(cached || fallback);
  const [loading, setLoading] = useState(!cached);

  useEffect(() => {
    const ref = doc(db, 'ristoranti', RISTORANTE_ID, 'dati', sezione);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const d = snap.data() as T;
        setData(d);
        try { localStorage.setItem(cacheKey, JSON.stringify(d)); } catch {}
      }
      setLoading(false);
    }, () => setLoading(false));
    return unsub;
  }, [sezione]);

  return { data, loading };
}
