import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tulip } from './Tulip';
import { info } from '@/lib/data';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/birre', label: 'Birre' },
  { to: '/drink', label: 'Drink' },
  { to: '/vini', label: 'Vini' },
  { to: '/galleria', label: 'Galleria' },
  { to: '/contatti', label: 'Contatti' },
  { to: '/allergeni', label: 'Allergeni' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  return (
    <header style={{ position:'sticky', top:0, zIndex:40, backdropFilter:'blur(12px)', backgroundColor:'rgba(249,245,238,0.85)', borderBottom:'1px solid rgba(0,0,0,0.07)' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'14px 20px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <Link to="/" onClick={() => setOpen(false)} style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
          <Tulip className="h-9 w-9" />
          <div>
            <div style={{ fontFamily:'"Playfair Display",serif', fontSize:20, fontWeight:700, color:'#2C2C2C', lineHeight:1 }}>Patù</div>
            <div style={{ fontFamily:'Caveat,cursive', fontSize:15, color:'#7BAF7A', marginTop:-2 }}>Pane & Tulipani</div>
          </div>
        </Link>
        <nav style={{ display:'flex', alignItems:'center', gap:4 }} className="hidden-mobile">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              style={{ padding:'8px 14px', borderRadius:50, fontSize:13, fontWeight:500, textDecoration:'none',
                color: loc.pathname===l.to ? '#7BAF7A' : 'rgba(44,44,44,0.7)',
                background: loc.pathname===l.to ? 'rgba(123,175,122,0.12)' : 'transparent',
                transition:'all 0.2s' }}>
              {l.label}
            </Link>
          ))}
          <a href={info.thefork} target="_blank" rel="noopener"
            style={{ marginLeft:8, padding:'8px 20px', borderRadius:50, background:'#E8857A', color:'#fff', fontSize:13, fontWeight:500, textDecoration:'none' }}>
            Prenota
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="show-mobile"
          style={{ background:'transparent', border:'none', cursor:'pointer', padding:8, borderRadius:8 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2C2C2C" strokeWidth="2.2" strokeLinecap="round">
            {open ? <><path d="M6 6l12 12"/><path d="M6 18L18 6"/></> : <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>}
          </svg>
        </button>
      </div>
      {open && (
        <nav style={{ borderTop:'1px solid rgba(0,0,0,0.07)', background:'#F9F5EE', padding:'12px 20px', display:'flex', flexDirection:'column', gap:4 }}>
          {links.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
              style={{ padding:'12px 16px', borderRadius:12, fontSize:15, fontWeight:500, textDecoration:'none',
                color: loc.pathname===l.to ? '#7BAF7A' : '#2C2C2C',
                background: loc.pathname===l.to ? 'rgba(123,175,122,0.12)' : 'transparent' }}>
              {l.label}
            </Link>
          ))}
          <a href={info.thefork} target="_blank" rel="noopener"
            style={{ marginTop:8, padding:'12px 20px', borderRadius:50, background:'#E8857A', color:'#fff', fontSize:14, fontWeight:500, textDecoration:'none', textAlign:'center' }}>
            Prenota su TheFork
          </a>
        </nav>
      )}
      <style>{`.hidden-mobile { display:flex; } .show-mobile { display:none; } @media(max-width:768px){.hidden-mobile{display:none!important;}.show-mobile{display:block!important;}}`}</style>
    </header>
  );
}
