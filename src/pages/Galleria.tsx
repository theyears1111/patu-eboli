import { useState } from "react";
import { galleryImages } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

export default function GalleriaPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <Tulip className="h-12 w-12 mx-auto mb-3" />
            <p className="handwritten text-2xl" style={{color:'#E8857A'}}>uno sguardo</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Galleria</h1>
            <p className="mt-3 max-w-xl mx-auto" style={{color:'rgba(44,44,44,0.65)'}}>
              Il giardino, i piatti, le serate. Le immagini parlano meglio di noi.
            </p>
          </div>
        </Reveal>

        <div style={{columns:'2 200px', gap:16}}>
          {galleryImages.map((src, i) => (
            <Reveal key={src} delay={(i % 6) * 50}>
              <button onClick={() => setActive(src)}
                style={{ display:'block', width:'100%', marginBottom:16, borderRadius:16, overflow:'hidden', border:'none', padding:0, cursor:'pointer' }}>
                <img src={src} alt={`Patù — ${i + 1}`} loading="lazy" style={{ width:'100%', height:'auto', display:'block' }} />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div onClick={() => setActive(null)}
          style={{ position:'fixed', inset:0, zIndex:50, background:'rgba(0,0,0,0.88)', display:'flex', alignItems:'center', justifyContent:'center', padding:16 }}>
          <button onClick={() => setActive(null)}
            style={{ position:'absolute', top:20, right:20, width:48, height:48, borderRadius:'50%', background:'rgba(255,255,255,0.15)', border:'none', cursor:'pointer', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M6 6l12 12M6 18L18 6"/>
            </svg>
          </button>
          <img src={active} alt="" style={{ maxHeight:'90vh', maxWidth:'90vw', borderRadius:16 }} />
        </div>
      )}
    </div>
  );
}
