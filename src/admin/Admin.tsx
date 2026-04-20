import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import AdminPanel from './AdminPanel';

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => { setUser(u); setLoading(false); });
    return unsub;
  }, []);

  const login = async (e: React.FormEvent) => {
    e.preventDefault(); setError('');
    try { await signInWithEmailAndPassword(auth, email, password); }
    catch { setError('Email o password errati'); }
  };

  if (loading) return (
    <div style={{ minHeight:'100vh', background:'#F9F6F1', display:'flex', alignItems:'center', justifyContent:'center' }}>
      <p style={{ color:'#6B7F4A', fontFamily:'system-ui' }}>Caricamento...</p>
    </div>
  );

  if (user) return <AdminPanel user={user} onLogout={() => signOut(auth)} />;

  return (
    <div style={{ minHeight:'100vh', background:'#F9F6F1', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px' }}>
      <div style={{ width:'100%', maxWidth:'400px', background:'#fff', borderRadius:'16px', padding:'40px', boxShadow:'0 4px 24px rgba(0,0,0,0.08)' }}>
        <div style={{ textAlign:'center', marginBottom:'32px' }}>
          <p style={{ fontFamily:'DM Sans, system-ui', fontSize:'28px', fontWeight:'700', color:'#2C2C2C', margin:0 }}>patù</p>
          <p style={{ fontFamily:'DM Sans, system-ui', fontSize:'13px', color:'#9ca3af', margin:'4px 0 0' }}>Pannello Admin</p>
        </div>
        <form onSubmit={login} style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
          <div>
            <label style={{ display:'block', fontFamily:'system-ui', fontSize:'11px', fontWeight:'600', color:'#6b7280', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'6px' }}>Email</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
              style={{ width:'100%', border:'1px solid #e5e7eb', borderRadius:'8px', padding:'10px 14px', fontSize:'14px', outline:'none', boxSizing:'border-box', fontFamily:'system-ui' }}
              placeholder="la-tua@email.it" />
          </div>
          <div>
            <label style={{ display:'block', fontFamily:'system-ui', fontSize:'11px', fontWeight:'600', color:'#6b7280', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'6px' }}>Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required
              style={{ width:'100%', border:'1px solid #e5e7eb', borderRadius:'8px', padding:'10px 14px', fontSize:'14px', outline:'none', boxSizing:'border-box', fontFamily:'system-ui' }}
              placeholder="••••••••" />
          </div>
          {error && <p style={{ color:'#ef4444', fontSize:'13px', textAlign:'center', fontFamily:'system-ui' }}>{error}</p>}
          <button type="submit"
            style={{ background:'#6B7F4A', color:'#fff', border:'none', borderRadius:'50px', padding:'12px', fontSize:'14px', fontWeight:'600', cursor:'pointer', fontFamily:'system-ui', marginTop:'8px' }}>
            Accedi
          </button>
        </form>
      </div>
    </div>
  );
}
