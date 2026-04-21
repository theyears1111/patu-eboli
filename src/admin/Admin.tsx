import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { RISTORANTE_ID } from '../lib/ristorante';
import AdminPanel from './AdminPanel';

const MASTER_EMAIL = 'g.neymar96@gmail.com';

async function verificaAccesso(email: string): Promise<boolean> {
  if (email.toLowerCase() === MASTER_EMAIL.toLowerCase()) return true;
  const ref = doc(db, 'ristoranti', RISTORANTE_ID, 'admin', 'accesso');
  const snap = await getDoc(ref);
  if (!snap.exists()) return false;
  const utenti: string[] = snap.data().utenti || [];
  return utenti.includes(email.toLowerCase());
}

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        const ok = await verificaAccesso(u.email || '');
        if (ok) { setUser(u); }
        else { await signOut(auth); setError('Non sei autorizzato per questo sito.'); }
      } else { setUser(null); }
      setLoading(false);
    });
    return unsub;
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const ok = await verificaAccesso(cred.user.email || '');
      if (!ok) { await signOut(auth); setError('Non sei autorizzato per questo sito.'); }
    } catch { setError('Email o password errati'); }
  };

  const sendReset = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetSent(true);
    } catch { setError('Email non trovata — verifica e riprova'); }
  };

  if (loading) return (
    <div style={{ minHeight:'100vh', background:'#F9F6F1', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <p style={{ color:'#6B7F4A', fontFamily:'system-ui' }}>Caricamento...</p>
    </div>
  );

  if (user) return <AdminPanel user={user} onLogout={() => { signOut(auth); setUser(null); }} />;

  return (
    <div style={{ minHeight:'100vh', background:'#F9F6F1', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}>
      <div style={{ width:'100%', maxWidth:'400px', background:'#fff', borderRadius:'16px', padding:'40px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <p style={{ fontFamily:'DM Sans, system-ui', fontSize:'28px', fontWeight:'700', color:'#2C2C2C', margin:0 }}>patù</p>
          <p style={{ fontFamily:'DM Sans, system-ui', fontSize:'13px', color:'#9ca3af', margin:'4px 0 0' }}>
            {resetMode ? 'Recupera password' : 'Pannello Admin'}
          </p>
        </div>

        {!resetMode ? (
          <form onSubmit={login} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <div>
              <label style={lbl}>Email</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required style={inp} placeholder="la-tua@email.it" />
            </div>
            <div>
              <label style={lbl}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} required style={inp} placeholder="••••••••" />
            </div>
            {error && <p style={{ color:'#ef4444', fontSize:'13px', textAlign:'center' }}>{error}</p>}
            <button type="submit" style={btnPrimary}>Accedi</button>
            <button type="button" onClick={() => { setResetMode(true); setError(''); }}
              style={{ background:'transparent', border:'none', color:'#6B7F4A', fontSize:'13px', cursor:'pointer', textDecoration:'underline', fontFamily:'system-ui' }}>
              Password dimenticata?
            </button>
          </form>
        ) : resetSent ? (
          <div style={{ textAlign:'center' }}>
            <p style={{ fontSize:'32px', marginBottom:'12px' }}>📧</p>
            <p style={{ fontFamily:'system-ui', fontSize:'14px', color:'#2C2C2C', fontWeight:'600', marginBottom:'8px' }}>Email inviata!</p>
            <p style={{ fontFamily:'system-ui', fontSize:'13px', color:'#9ca3af', marginBottom:'24px' }}>Controlla la tua casella e segui le istruzioni per reimpostare la password.</p>
            <button onClick={() => { setResetMode(false); setResetSent(false); setResetEmail(''); }} style={btnPrimary}>Torna al login</button>
          </div>
        ) : (
          <form onSubmit={sendReset} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
            <p style={{ fontFamily:'system-ui', fontSize:'13px', color:'#6b7280', margin:'0 0 8px' }}>
              Inserisci la tua email — ti mandiamo un link per reimpostare la password.
            </p>
            <div>
              <label style={lbl}>Email</label>
              <input type="email" value={resetEmail} onChange={e => setResetEmail(e.target.value)} required style={inp} placeholder="la-tua@email.it" />
            </div>
            {error && <p style={{ color:'#ef4444', fontSize:'13px', textAlign:'center' }}>{error}</p>}
            <button type="submit" style={btnPrimary}>Invia link di recupero</button>
            <button type="button" onClick={() => { setResetMode(false); setError(''); }}
              style={{ background:'transparent', border:'none', color:'#9ca3af', fontSize:'13px', cursor:'pointer', fontFamily:'system-ui' }}>
              ← Torna al login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const inp: React.CSSProperties = { width:'100%', border:'1px solid #e5e7eb', borderRadius:'8px', padding:'10px 14px', fontSize:'14px', outline:'none', boxSizing:'border-box', fontFamily:'system-ui' };
const lbl: React.CSSProperties = { display:'block', fontFamily:'system-ui', fontSize:'11px', fontWeight:'600', color:'#6b7280', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'6px' };
const btnPrimary: React.CSSProperties = { background:'#6B7F4A', color:'#fff', border:'none', borderRadius:'50px', padding:'12px', fontSize:'14px', fontWeight:'600', cursor:'pointer', fontFamily:'system-ui', width:'100%' };
