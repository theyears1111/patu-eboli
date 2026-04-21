import { Link } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';
import { info as fallbackInfo } from '../lib/data';

const LOGO = 'https://d3a2x5gco7pf9q.cloudfront.net/ADMIN/StyleOfficial/PaTuPaneeTulipani/Logo_512_20230511.png';
const links = [
  { to: '/menu', label: 'Menu' }, { to: '/birre', label: 'Birre' },
  { to: '/drink', label: 'Drink' }, { to: '/vini', label: 'Vini' },
  { to: '/galleria', label: 'Galleria' }, { to: '/contatti', label: 'Contatti' },
  { to: '/allergeni', label: 'Allergeni' },
];
const GIORNI = ['lunedi','martedi','mercoledi','giovedi','venerdi','sabato','domenica'];
const G_LABEL: any = { lunedi:'Lun', martedi:'Mar', mercoledi:'Mer', giovedi:'Gio', venerdi:'Ven', sabato:'Sab', domenica:'Dom' };

export function Footer() {
  const info = useFirestore('info', fallbackInfo);

  return (
    <footer style={{ background:'#2C2C2C', color:'rgba(255,255,255,0.6)', fontFamily:'DM Sans, system-ui' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'60px 24px 32px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:48, marginBottom:48 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ display:'inline-block', marginBottom:20 }}>
              <img src={LOGO} alt="Patù" style={{ height:50, width:'auto', objectFit:'contain', filter:'brightness(0) invert(1)', opacity:0.85 }} />
            </Link>
            <p style={{ fontSize:13, lineHeight:1.8, opacity:0.55, maxWidth:220 }}>
              Bistrot artigianale nel cuore di Eboli.<br />
              Pane fatto ogni giorno, cucina autentica<br />e un giardino che ti aspetta.
            </p>
            <div style={{ display:'flex', gap:14, marginTop:18, flexWrap:'wrap' }}>
              {(info as any).instagram && <a href={(info as any).instagram} target="_blank" rel="noopener" style={{ color:'rgba(255,255,255,0.45)', textDecoration:'none', fontSize:12 }}>Instagram</a>}
              {(info as any).facebook  && <a href={(info as any).facebook}  target="_blank" rel="noopener" style={{ color:'rgba(255,255,255,0.45)', textDecoration:'none', fontSize:12 }}>Facebook</a>}
              {(info as any).tripadvisor && <a href={(info as any).tripadvisor} target="_blank" rel="noopener" style={{ color:'rgba(255,255,255,0.45)', textDecoration:'none', fontSize:12 }}>TripAdvisor</a>}
            </div>
          </div>

          {/* Navigazione */}
          <div>
            <h4 style={{ color:'#7BAF7A', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600, marginBottom:16, marginTop:0 }}>Esplora</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
              {links.map(l => (
                <Link key={l.to} to={l.to} style={{ color:'rgba(255,255,255,0.45)', textDecoration:'none', fontSize:14 }}>{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 style={{ color:'#7BAF7A', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600, marginBottom:16, marginTop:0 }}>Contatti</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:10, fontSize:13 }}>
              {(info as any).indirizzo && (
                <div style={{ display:'flex', gap:8 }}>
                  <span style={{ opacity:0.4 }}>📍</span>
                  <span style={{ opacity:0.6, lineHeight:1.6 }}>{(info as any).indirizzo}</span>
                </div>
              )}
              {((info as any).telefono || (info as any).phone) && (
                <div style={{ display:'flex', gap:8, alignItems:'center' }}>
                  <span style={{ opacity:0.4 }}>📞</span>
                  <a href={`tel:${(info as any).phoneRaw || (info as any).telefono}`} style={{ color:'rgba(255,255,255,0.6)', textDecoration:'none' }}>
                    {(info as any).telefono || (info as any).phone}
                  </a>
                </div>
              )}
              {(info as any).thefork && (
                <a href={(info as any).thefork} target="_blank" rel="noopener"
                  style={{ display:'inline-flex', alignItems:'center', gap:6, background:'#E8857A', color:'#fff', textDecoration:'none', padding:'8px 16px', borderRadius:50, fontSize:12, fontWeight:600, marginTop:4, width:'fit-content' }}>
                  Prenota su TheFork →
                </a>
              )}
            </div>
          </div>

          {/* Orari */}
          <div>
            <h4 style={{ color:'#7BAF7A', fontSize:11, letterSpacing:'0.12em', textTransform:'uppercase', fontWeight:600, marginBottom:16, marginTop:0 }}>Orari</h4>
            <div style={{ display:'flex', flexDirection:'column', gap:6, fontSize:12 }}>
              {GIORNI.map(g => {
                const orario = (info as any)?.orari?.[g] || '';
                return (
                  <div key={g} style={{ display:'flex', justifyContent:'space-between', gap:16 }}>
                    <span style={{ opacity:0.4, width:28, flexShrink:0 }}>{G_LABEL[g]}</span>
                    <span style={{ opacity: orario === 'Chiuso' ? 0.3 : 0.7, color: orario === 'Chiuso' ? '#fff' : '#7BAF7A', fontWeight: orario === 'Chiuso' ? 400 : 500 }}>
                      {orario || '—'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:24, display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:12, fontSize:11, opacity:0.3 }}>
          <span>© {new Date().getFullYear()} Patù — Pane & Tulipani · Tutti i diritti riservati</span>
          <span>{(info as any).indirizzo || 'Via Enrico Perito 38, Eboli (SA)'}</span>
        </div>
      </div>
    </footer>
  );
}