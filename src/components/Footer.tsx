import { Link } from 'react-router-dom';
import { Tulip } from './Tulip';
import { info } from '@/lib/data';

export function Footer() {
  return (
    <footer style={{ marginTop:80, background:'#7BAF7A', color:'#fff' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'48px 24px 32px' }}>
        <div style={{ display:'flex', flexWrap:'wrap', gap:32, justifyContent:'space-between', marginBottom:32 }}>
          {/* Logo + desc */}
          <div style={{ minWidth:200 }}>
            <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:12 }}>
              <Tulip className="h-10 w-10" />
              <div>
                <div style={{ fontFamily:'"Playfair Display",serif', fontSize:22, fontWeight:700 }}>Patù</div>
                <div style={{ fontFamily:'Caveat,cursive', fontSize:16, opacity:0.85, marginTop:-3 }}>Pane & Tulipani</div>
              </div>
            </div>
            <p style={{ fontSize:13, opacity:0.85, lineHeight:1.7, maxWidth:220 }}>Bistrot artigianale nel cuore di Eboli. Pane fresco, cucina onesta, atmosfera calorosa.</p>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontFamily:'Caveat,cursive', fontSize:18, marginBottom:12 }}>esplora</p>
            <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
              {[{to:'/menu',l:'Menu'},{to:'/birre',l:'Birre Artigianali'},{to:'/drink',l:'Drink List'},{to:'/vini',l:'Carta dei Vini'},{to:'/galleria',l:'Galleria'},{to:'/allergeni',l:'Allergeni'}].map(x => (
                <Link key={x.to} to={x.to} style={{ fontSize:13, color:'rgba(255,255,255,0.8)', textDecoration:'none' }}>{x.l}</Link>
              ))}
            </div>
          </div>

          {/* Orari */}
          <div>
            <p style={{ fontFamily:'Caveat,cursive', fontSize:18, marginBottom:12 }}>orari</p>
            {info.hours.map(h => (
              <div key={h.day} style={{ display:'flex', justifyContent:'space-between', gap:24, fontSize:13, paddingBottom:4 }}>
                <span style={{ opacity:0.75 }}>{h.day}</span>
                <span style={{ opacity: h.time==='Chiuso' ? 0.5 : 0.9, color: h.time==='Chiuso' ? '#ffd0cc' : '#fff' }}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Social + CTA */}
          <div>
            <p style={{ fontFamily:'Caveat,cursive', fontSize:18, marginBottom:12 }}>seguici</p>
            <div style={{ display:'flex', flexDirection:'column', gap:8, marginBottom:20 }}>
              {[
                { href:info.instagram, label:'@patu_eboli' },
                { href:info.facebook, label:'Facebook' },
                { href:info.tripadvisor, label:'TripAdvisor' },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener"
                  style={{ fontSize:13, color:'rgba(255,255,255,0.8)', textDecoration:'none' }}>{s.label}</a>
              ))}
            </div>
            <a href={info.thefork} target="_blank" rel="noopener"
              style={{ display:'inline-block', padding:'10px 20px', borderRadius:50, background:'#fff', color:'#7BAF7A', fontSize:12, fontWeight:600, textDecoration:'none' }}>
              Prenota su TheFork →
            </a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.2)', paddingTop:20, display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:8 }}>
          <p style={{ fontSize:12, opacity:0.5 }}>© {new Date().getFullYear()} Patù — Pane & Tulipani · Via Enrico Perito 38, Eboli (SA)</p>
          <Link to="/allergeni" style={{ fontSize:12, opacity:0.5, color:'#fff', textDecoration:'none' }}>Informativa Allergeni</Link>
        </div>
      </div>
    </footer>
  );
}
