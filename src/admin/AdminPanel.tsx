import { useState, useEffect, useRef } from 'react';
import { User } from 'firebase/auth';
import { getDati, setDati } from '../lib/ristorante';

interface Props { user: User; onLogout: () => void; }

const CLOUDINARY_CLOUD = 'dmybopb31';
const CLOUDINARY_PRESET = 'bollicine_upload';

const sezioni = [
  { id:'info',       label:'Info & Orari',   icon:'📋' },
  { id:'home',       label:'Home',           icon:'🏠' },
  { id:'menu',       label:'Menu Cucina',    icon:'🍽️' },
  { id:'birre',      label:'Birre',          icon:'🍺' },
  { id:'vini',       label:'Vini',           icon:'🍷' },
  { id:'galleria',   label:'Galleria',       icon:'📸' },
  { id:'recensioni', label:'Recensioni',     icon:'⭐' },
];

async function uploadToCloudinary(file: File): Promise<string> {
  const fd = new FormData();
  fd.append('file', file);
  fd.append('upload_preset', CLOUDINARY_PRESET);
  fd.append('quality', 'auto:best');
  fd.append('fetch_format', 'auto');
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/image/upload`, { method:'POST', body:fd });
  const data = await res.json();
  if (!data.secure_url) throw new Error('Upload fallito');
  // Restituisce URL con trasformazioni qualità alta
  return data.secure_url.replace('/upload/', '/upload/q_auto:best,f_auto/');
}

function ImageUpload({ value, onChange, label }: { value:string; onChange:(url:string)=>void; label:string }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const handle = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setError('Max 5MB'); return; }
    setUploading(true); setError('');
    try { onChange(await uploadToCloudinary(file)); }
    catch { setError('Errore upload — riprova'); }
    finally { setUploading(false); }
  };

  return (
    <div style={{ marginBottom:'16px' }}>
      <label style={lbl}>{label}</label>
      {value && (
        <div style={{ position:'relative', marginBottom:'8px' }}>
          <img src={value} alt="" style={{ width:'100%', height:'200px', objectFit:'cover', borderRadius:'8px', display:'block' }} />
          <button onClick={() => onChange('')}
            style={{ position:'absolute', top:'8px', right:'8px', background:'rgba(239,68,68,0.85)', border:'none', color:'#fff', width:'26px', height:'26px', borderRadius:'50%', cursor:'pointer', fontSize:'13px', display:'flex', alignItems:'center', justifyContent:'center' }}>
            ✕
          </button>
        </div>
      )}
      <input ref={ref} type="file" accept="image/*" onChange={handle} style={{ display:'none' }} />
      <button onClick={() => ref.current?.click()} disabled={uploading}
        style={{ background:'transparent', border:'1px solid #6B7F4A', color:'#6B7F4A', padding:'8px 16px', cursor:'pointer', fontSize:'12px', borderRadius:'50px', width:'100%', opacity:uploading?0.6:1, fontFamily:'system-ui' }}>
        {uploading ? 'Caricamento...' : value ? '📷 Cambia foto' : '📷 Carica foto'}
      </button>
      {error && <p style={{ color:'#ef4444', fontSize:'12px', marginTop:'4px' }}>{error}</p>}
    </div>
  );
}

export default function AdminPanel({ user, onLogout }: Props) {
  const [sezione, setSezione] = useState('info');
  const [dati, setDatiState] = useState<any>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    setLoading(true); setSaved(false);
    getDati(sezione).then(d => { setDatiState(d || getDefault(sezione)); setLoading(false); });
  }, [sezione]);

  const save = async () => {
    setSaving(true);
    await setDati(sezione, dati);
    setSaving(false); setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const sezLabel = sezioni.find(s => s.id === sezione);

  return (
    <div style={{ minHeight:'100vh', background:'#F9F6F1', display:'flex', flexDirection:'column', fontFamily:'system-ui' }}>
      <div style={{ background:'#fff', borderBottom:'1px solid #e5e7eb', padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', boxShadow:'0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ display:'flex', alignItems:'center', gap:'10px' }}>
          <button onClick={() => setMobileMenu(!mobileMenu)}
            style={{ background:'transparent', border:'1px solid #e5e7eb', color:'#6B7F4A', padding:'6px 10px', cursor:'pointer', fontSize:'16px', borderRadius:'8px' }}>
            ☰
          </button>
          <div>
            <span style={{ fontWeight:'700', fontSize:'16px', color:'#2C2C2C' }}>patù</span>
            <span style={{ fontSize:'13px', color:'#9ca3af', marginLeft:'8px' }}>{sezLabel?.icon} {sezLabel?.label}</span>
          </div>
        </div>
        <button onClick={save} disabled={saving || loading}
          style={{ background: saved ? '#3B6D11' : '#6B7F4A', color:'#fff', border:'none', padding:'8px 18px', fontSize:'12px', fontWeight:'600', cursor:'pointer', opacity:(saving||loading)?0.6:1, borderRadius:'50px', transition:'background 0.3s', whiteSpace:'nowrap' }}>
          {saved ? '✓ Salvato' : saving ? '...' : 'Salva'}
        </button>
      </div>

      <div style={{ display:'flex', flex:1, overflow:'hidden', position:'relative' }}>
        <div style={{ width:'220px', background:'#fff', borderRight:'1px solid #e5e7eb', display:'flex', flexDirection:'column', flexShrink:0, position:'fixed', top:0, left: mobileMenu ? '0' : '-220px', bottom:0, zIndex:9999, transition:'left 0.25s ease', overflowY:'auto' }}>
          <div style={{ padding:'12px', borderBottom:'1px solid #f3f4f6' }}>
            <p style={{ color:'#9ca3af', fontSize:'11px', margin:0, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{user.email}</p>
          </div>
          <nav style={{ flex:1, padding:'8px 0', overflowY:'auto' }}>
            {sezioni.map(sec => (
              <button key={sec.id} onClick={() => { setSezione(sec.id); setMobileMenu(false); }}
                style={{ width:'100%', background: sezione===sec.id ? '#f0f4e8' : 'transparent', border:'none', borderLeft: sezione===sec.id ? '3px solid #6B7F4A' : '3px solid transparent', color: sezione===sec.id ? '#6B7F4A' : '#6b7280', padding:'10px 14px', textAlign:'left', cursor:'pointer', fontSize:'13px', display:'flex', alignItems:'center', gap:'8px', transition:'all 0.15s', fontFamily:'system-ui' }}>
                <span style={{ fontSize:'14px' }}>{sec.icon}</span>{sec.label}
              </button>
            ))}
          </nav>
          <div style={{ padding:'12px' }}>
            <button onClick={onLogout} style={{ width:'100%', background:'transparent', border:'1px solid #e5e7eb', color:'#9ca3af', padding:'8px', cursor:'pointer', fontSize:'12px', borderRadius:'8px', fontFamily:'system-ui' }}>Esci</button>
          </div>
        </div>

        {mobileMenu && <div onClick={() => setMobileMenu(false)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', zIndex:9998 }} />}

        <div style={{ flex:1, overflowY:'auto', padding:'20px 16px', marginLeft:0 }}>
          {loading
            ? <p style={{ color:'#9ca3af', textAlign:'center', marginTop:'60px' }}>Caricamento...</p>
            : <FormEditor sezione={sezione} dati={dati} onChange={setDatiState} />
          }
        </div>
      </div>
    </div>
  );
}

function FormEditor({ sezione, dati, onChange }: { sezione:string; dati:any; onChange:(d:any)=>void }) {
  const update = (path: string, value: any) => {
    const keys = path.split('.');
    const nd = JSON.parse(JSON.stringify(dati || {}));
    let obj = nd;
    for (let i = 0; i < keys.length-1; i++) { if (!obj[keys[i]]) obj[keys[i]]= {}; obj = obj[keys[i]]; }
    obj[keys[keys.length-1]] = value; onChange(nd);
  };
  const updateItem = (arr: string, i: number, f: string, v: any) => {
    const nd = JSON.parse(JSON.stringify(dati||{}));
    if (!nd[arr]) nd[arr]=[];
    if (!nd[arr][i]) nd[arr][i]={};
    nd[arr][i][f]=v; onChange(nd);
  };
  const addItem = (arr: string, tpl: object) => {
    const nd = JSON.parse(JSON.stringify(dati||{}));
    if (!nd[arr]) nd[arr]=[];
    nd[arr].push({...tpl}); onChange(nd);
  };
  const removeItem = (arr: string, i: number) => {
    const nd = JSON.parse(JSON.stringify(dati||{}));
    nd[arr].splice(i,1); onChange(nd);
  };

  if (sezione==='info')       return <InfoForm dati={dati} update={update} />;
  if (sezione==='home')       return <HomeForm dati={dati} update={update} />;
  if (sezione==='menu')       return <MenuForm dati={dati} updateItem={updateItem} addItem={addItem} removeItem={removeItem} />;
  if (sezione==='birre')      return <BirreForm dati={dati} updateItem={updateItem} addItem={addItem} removeItem={removeItem} />;
  if (sezione==='vini')       return <ViniForm dati={dati} updateItem={updateItem} addItem={addItem} removeItem={removeItem} />;
  if (sezione==='galleria')   return <GalleriaForm dati={dati} updateItem={updateItem} addItem={addItem} removeItem={removeItem} />;
  if (sezione==='recensioni') return <RecensioniForm dati={dati} updateItem={updateItem} addItem={addItem} removeItem={removeItem} />;
  return null;
}

const inp: React.CSSProperties = { width:'100%', border:'1px solid #e5e7eb', borderRadius:'8px', padding:'10px 14px', fontSize:'14px', outline:'none', boxSizing:'border-box', fontFamily:'system-ui', background:'#fff' };
const lbl: React.CSSProperties = { display:'block', fontSize:'11px', fontWeight:'600', color:'#6b7280', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'6px' };
const fld: React.CSSProperties = { marginBottom:'16px' };
const crd: React.CSSProperties = { background:'#fff', border:'1px solid #e5e7eb', borderRadius:'12px', padding:'16px', marginBottom:'12px' };
const stl: React.CSSProperties = { color:'#6B7F4A', fontSize:'12px', fontWeight:'700', letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:'12px', marginTop:0 };
const mxw: React.CSSProperties = { maxWidth:'600px' };
const rmv: React.CSSProperties = { background:'transparent', border:'1px solid rgba(239,68,68,0.4)', color:'#ef4444', padding:'5px 10px', cursor:'pointer', fontSize:'11px', borderRadius:'6px', fontFamily:'system-ui' };
const add: React.CSSProperties = { background:'transparent', border:'1px dashed #6B7F4A', color:'#6B7F4A', padding:'10px 20px', cursor:'pointer', fontSize:'13px', width:'100%', borderRadius:'8px', marginBottom:'16px', fontFamily:'system-ui' };

function Field({ label, value, onChange, multiline }: { label:string; value:string; onChange:(v:string)=>void; multiline?:boolean }) {
  return (
    <div style={fld}>
      <label style={lbl}>{label}</label>
      {multiline
        ? <textarea value={value||''} onChange={e=>onChange(e.target.value)} rows={3} style={{...inp, resize:'vertical'}} />
        : <input style={inp} value={value||''} onChange={e=>onChange(e.target.value)} />
      }
    </div>
  );
}

function InfoForm({ dati, update }: any) {
  const giorni = ['lunedi','martedi','mercoledi','giovedi','venerdi','sabato','domenica'];
  const labels: any = {lunedi:'Lunedì',martedi:'Martedì',mercoledi:'Mercoledì',giovedi:'Giovedì',venerdi:'Venerdì',sabato:'Sabato',domenica:'Domenica'};
  return (
    <div style={mxw}>
      <div style={crd}>
        <p style={stl}>Contatti</p>
        {[['nome','Nome ristorante'],['telefono','Telefono'],['phoneRaw','Telefono raw (es. +393318043454)'],['email','Email'],['indirizzo','Indirizzo'],['facebook','Facebook URL'],['instagram','Instagram URL'],['thefork','TheFork URL'],['tripadvisor','TripAdvisor URL'],['maps_url','Google Maps embed URL']].map(([k,l]) => (
          <Field key={k} label={l} value={dati?.[k]} onChange={v=>update(k,v)} />
        ))}
      </div>
      <div style={crd}>
        <p style={stl}>Orari</p>
        <p style={{ color:'#9ca3af', fontSize:'12px', marginBottom:'12px' }}>Scrivi "Chiuso" per i giorni di chiusura</p>
        {giorni.map(g => (
          <div key={g} style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px' }}>
            <span style={{ color:'#6b7280', fontSize:'13px', width:'80px', flexShrink:0 }}>{labels[g]}</span>
            <input style={{...inp, flex:1}} value={dati?.orari?.[g]||''} onChange={e=>update(`orari.${g}`,e.target.value)} placeholder="es. 18:00 — 01:00" />
          </div>
        ))}
      </div>
    </div>
  );
}

function HomeForm({ dati, update }: any) {
  return (
    <div style={mxw}>
      <div style={crd}>
        <p style={stl}>Testi principali</p>
        <Field label="Titolo hero" value={dati?.titolo} onChange={v=>update('titolo',v)} />
        <Field label="Sottotitolo hero" value={dati?.sottotitolo} onChange={v=>update('sottotitolo',v)} multiline />
        <Field label="Testo sezione pane (storia)" value={dati?.storia} onChange={v=>update('storia',v)} multiline />
        <Field label="Testo box Prenota (in fondo)" value={dati?.testo_cta} onChange={v=>update('testo_cta',v)} multiline />
      </div>
      <div style={crd}>
        <p style={stl}>Citazione chef</p>
        <Field label="Nome chef" value={dati?.nome_chef} onChange={v=>update('nome_chef',v)} />
        <Field label="Citazione" value={dati?.citazione_chef} onChange={v=>update('citazione_chef',v)} />
      </div>
      <div style={crd}>
        <p style={stl}>Foto</p>
        <ImageUpload label="Foto pane (grande, sezione centrale)" value={dati?.foto_pane||''} onChange={v=>update('foto_pane',v)} />
        <ImageUpload label="Foto giardino (sezione grande in basso)" value={dati?.foto_giardino||''} onChange={v=>update('foto_giardino',v)} />
      </div>
      <div style={crd}>
        <p style={stl}>Statistiche (contatori animati)</p>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
          <Field label="Numero 1 (es. 181)" value={dati?.stat1_num} onChange={v=>update('stat1_num',v)} />
          <Field label="Label 1" value={dati?.stat1_label} onChange={v=>update('stat1_label',v)} />
          <Field label="Numero 2 (es. 13)" value={dati?.stat2_num} onChange={v=>update('stat2_num',v)} />
          <Field label="Label 2" value={dati?.stat2_label} onChange={v=>update('stat2_label',v)} />
          <Field label="Numero 3 (es. 46 = 4.6)" value={dati?.stat3_num} onChange={v=>update('stat3_num',v)} />
          <Field label="Label 3" value={dati?.stat3_label} onChange={v=>update('stat3_label',v)} />
        </div>
      </div>
    </div>
  );
}

function MenuForm({ dati, updateItem, addItem, removeItem }: any) {
  const allItems: any[] = dati?.items || [];

  // Categorie dinamiche: quelle già usate nei piatti + le default
  const DEFAULT_CAT = ['Antipasti','Primi','Secondi','Panini Terra','Panini di Mare','Contorni','Dolci'];
  const usedCats = Array.from(new Set(allItems.map((x: any) => x.categoria).filter(Boolean)));
  const CATEGORIE = Array.from(new Set([...DEFAULT_CAT, ...usedCats]));

  const [catAttiva, setCatAttiva] = useState(CATEGORIE[0]);
  const [nuovaCat, setNuovaCat] = useState('');

  const catIndexes = allItems
    .map((x: any, i: number) => x.categoria === catAttiva ? i : -1)
    .filter((i: number) => i !== -1);

  const nomiAllergeni: Record<number, string> = {
    1:'Glutine', 2:'Crostacei', 3:'Uova', 4:'Pesce', 5:'Arachidi',
    6:'Soia', 7:'Latte', 8:'Frutta a guscio', 9:'Sedano',
    10:'Senape', 11:'Sesamo', 12:'Solfiti', 13:'Lupini', 14:'Molluschi',
  };

  return (
    <div style={mxw}>
      {/* Tab categorie */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'20px' }}>
        {CATEGORIE.map(cat => (
          <button key={cat} onClick={() => setCatAttiva(cat)}
            style={{ padding:'6px 14px', borderRadius:'50px',
              border: catAttiva===cat ? '2px solid #6B7F4A' : '1px solid #e5e7eb',
              background: catAttiva===cat ? '#f0f4e8' : '#fff',
              color: catAttiva===cat ? '#6B7F4A' : '#6b7280',
              fontSize:'12px', cursor:'pointer', fontWeight: catAttiva===cat ? 600 : 400 }}>
            {cat}
            <span style={{ marginLeft:'5px', fontSize:'10px', opacity:0.6 }}>
              ({allItems.filter((x: any) => x.categoria === cat).length})
            </span>
          </button>
        ))}
      </div>

      {catIndexes.map((realIdx: number) => {
        const item = allItems[realIdx];
        return (
          <div key={realIdx} style={crd}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'12px' }}>
              <span style={{ color:'#9ca3af', fontSize:'12px' }}>{item.name || 'Nuovo piatto'}</span>
              <button onClick={() => removeItem('items', realIdx)} style={rmv}>Rimuovi</button>
            </div>
            <Field label="Nome piatto" value={item.name} onChange={v => updateItem('items', realIdx, 'name', v)} />
            <Field label="Descrizione" value={item.desc || item.description} onChange={v => updateItem('items', realIdx, 'desc', v)} multiline />
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
              <Field label="Prezzo (€)" value={item.price} onChange={v => updateItem('items', realIdx, 'price', v)} />
              <div style={fld}>
                <label style={lbl}>Tag (testo libero)</label>
                <input style={inp} value={item.tag||''} onChange={e => updateItem('items', realIdx, 'tag', e.target.value)} placeholder="es. del cuore, veggie..." />
              </div>
            </div>
            {item.tag && (
              <div style={{ marginBottom:'16px', display:'flex', alignItems:'center', gap:'12px' }}>
                <div style={{ flex:1 }}>
                  <label style={lbl}>Colore etichetta</label>
                  <input type="color"
                    value={item.tag_colore || '#E8857A'}
                    onChange={e => updateItem('items', realIdx, 'tag_colore', e.target.value)}
                    style={{ ...inp, padding:'4px', height:'42px', cursor:'pointer' }} />
                </div>
                <div style={{ paddingTop:'20px' }}>
                  <span style={{ background: item.tag_colore || '#E8857A', color:'#fff', padding:'3px 14px', borderRadius:50, fontSize:'13px', fontFamily:'Caveat,cursive', whiteSpace:'nowrap' }}>
                    {item.tag}
                  </span>
                </div>
              </div>
            )}
            <div style={fld}>
              <label style={lbl}>Allergeni — clicca per aggiungere/rimuovere</label>
              <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'8px' }}>
                {([1,2,3,4,5,6,7,8,9,10,11,12,13,14] as number[]).map(n => {
                  const selected = (item.allergeni || []).includes(n);
                  return (
                    <button key={n} type="button"
                      title={nomiAllergeni[n]}
                      onClick={() => {
                        const curr: number[] = item.allergeni || [];
                        const next = selected
                          ? curr.filter((x: number) => x !== n)
                          : [...curr, n].sort((a, b) => a - b);
                        updateItem('items', realIdx, 'allergeni', next);
                      }}
                      style={{ width:36, height:36, borderRadius:'50%',
                        border: selected ? '2px solid #6B7F4A' : '1px solid #e5e7eb',
                        background: selected ? '#6B7F4A' : '#fff',
                        color: selected ? '#fff' : '#6b7280',
                        fontWeight:600, fontSize:13, cursor:'pointer', transition:'all 0.15s' }}>
                      {n}
                    </button>
                  );
                })}
              </div>
              {(item.allergeni || []).length > 0 && (
                <p style={{ fontSize:'11px', color:'#6b7280', lineHeight:1.6 }}>
                  ⚠️ {(item.allergeni || []).map((n: number) => nomiAllergeni[n]).join(', ')}
                </p>
              )}
            </div>
          </div>
        );
      })}
      <button onClick={() => addItem('items', { name:'', desc:'', price:'', tag:'', tag_colore:'#E8857A', allergeni:[], categoria: catAttiva })} style={add}>
        + Aggiungi piatto in {catAttiva}
      </button>

      {/* Aggiungi nuova categoria */}
      <div style={{ marginTop:'8px', padding:'14px', background:'#f9fafb', borderRadius:'10px', border:'1px solid #e5e7eb' }}>
        <p style={{ fontSize:'11px', fontWeight:600, color:'#6b7280', textTransform:'uppercase', letterSpacing:'0.05em', marginBottom:'10px', marginTop:0 }}>
          Aggiungi nuova categoria
        </p>
        <div style={{ display:'flex', gap:'8px' }}>
          <input
            style={{ ...inp, flex:1 }}
            value={nuovaCat}
            onChange={e => setNuovaCat(e.target.value)}
            placeholder="es. Speciali, Piatti unici..."
            onKeyDown={e => {
              if (e.key === 'Enter' && nuovaCat.trim()) {
                setCatAttiva(nuovaCat.trim());
                setNuovaCat('');
              }
            }}
          />
          <button
            onClick={() => { if (nuovaCat.trim()) { setCatAttiva(nuovaCat.trim()); setNuovaCat(''); } }}
            style={{ background:'#6B7F4A', color:'#fff', border:'none', padding:'0 16px', borderRadius:'8px', cursor:'pointer', fontSize:'13px', whiteSpace:'nowrap' }}>
            Crea
          </button>
        </div>
        <p style={{ fontSize:'11px', color:'#9ca3af', marginTop:'6px', marginBottom:0 }}>
          Dopo aver creato la categoria, aggiungi piatti con il bottone qui sopra
        </p>
      </div>
    </div>
  );
}

function BirreForm({ dati, updateItem, addItem, removeItem }: any) {
  return (
    <div style={mxw}>
      {(dati?.items||[]).map((b: any, i: number) => (
        <div key={i} style={crd}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'12px' }}>
            <span style={{ color:'#9ca3af', fontSize:'12px' }}>{b.name || `Birra ${i+1}`}</span>
            <button onClick={() => removeItem('items',i)} style={rmv}>Rimuovi</button>
          </div>
          <Field label="Nome" value={b.name} onChange={v=>updateItem('items',i,'name',v)} />
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
            <Field label="Birrificio" value={b.brewery} onChange={v=>updateItem('items',i,'brewery',v)} />
            <Field label="Stile (es. IPA)" value={b.style} onChange={v=>updateItem('items',i,'style',v)} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
            <Field label="Grado alcolico" value={b.abv} onChange={v=>updateItem('items',i,'abv',v)} />
            <Field label="Prezzo (€)" value={b.price} onChange={v=>updateItem('items',i,'price',v)} />
          </div>
          <Field label="Note di degustazione" value={b.notes||b.description} onChange={v=>updateItem('items',i,'notes',v)} multiline />
        </div>
      ))}
      <button onClick={() => addItem('items',{name:'',brewery:'',style:'',abv:'',notes:'',price:'5'})} style={add}>+ Aggiungi birra</button>
    </div>
  );
}

function ViniForm({ dati, updateItem, addItem, removeItem }: any) {
  const CATEGORIE_VINI = ['I Bianchi','I Rossi','I Rosati','Al Calice'];
  const [catAttiva, setCatAttiva] = useState(CATEGORIE_VINI[0]);
  const allItems: any[] = dati?.items || [];
  const catIndexes = allItems
    .map((x: any, i: number) => x.categoria === catAttiva ? i : -1)
    .filter((i: number) => i !== -1);

  return (
    <div style={mxw}>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'6px', marginBottom:'20px' }}>
        {CATEGORIE_VINI.map(cat => (
          <button key={cat} onClick={() => setCatAttiva(cat)}
            style={{ padding:'6px 14px', borderRadius:'50px',
              border: catAttiva===cat ? '2px solid #9c6b8a' : '1px solid #e5e7eb',
              background: catAttiva===cat ? '#f5eef3' : '#fff',
              color: catAttiva===cat ? '#9c6b8a' : '#6b7280',
              fontSize:'12px', cursor:'pointer', fontWeight: catAttiva===cat ? 600 : 400 }}>
            {cat}
            <span style={{ marginLeft:'5px', fontSize:'10px', opacity:0.6 }}>
              ({allItems.filter((x: any) => x.categoria === cat).length})
            </span>
          </button>
        ))}
      </div>
      {catIndexes.map((realIdx: number) => {
        const v = allItems[realIdx];
        return (
          <div key={realIdx} style={crd}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'12px' }}>
              <span style={{ color:'#9ca3af', fontSize:'12px' }}>{v.name || 'Nuovo vino'}</span>
              <button onClick={() => removeItem('items', realIdx)} style={rmv}>Rimuovi</button>
            </div>
            <Field label="Nome vino" value={v.name} onChange={val=>updateItem('items',realIdx,'name',val)} />
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
              <Field label="Cantina / Produttore" value={v.winery||v.producer} onChange={val=>updateItem('items',realIdx,'winery',val)} />
              <Field label="Zona / Denominazione" value={v.year||v.region} onChange={val=>updateItem('items',realIdx,'year',val)} />
            </div>
            <Field label="Prezzo bottiglia (€)" value={v.price} onChange={val=>updateItem('items',realIdx,'price',val)} />
          </div>
        );
      })}
      <button onClick={() => addItem('items',{name:'',winery:'',year:'',price:'',categoria:catAttiva})} style={add}>+ Aggiungi vino in {catAttiva}</button>
    </div>
  );
}

function GalleriaForm({ dati, updateItem, addItem, removeItem }: any) {
  const items = dati?.items || [];
  return (
    <div style={mxw}>
      <div style={{ background:'#f0f4e8', border:'1px solid #6B7F4A', borderRadius:'10px', padding:'12px 16px', marginBottom:'20px' }}>
        <p style={{ color:'#6B7F4A', fontSize:'12px', margin:0 }}>📷 {items.length} foto totali — carica direttamente dal telefono o PC · Max 5MB</p>
      </div>
      {items.map((foto: any, i: number) => (
        <div key={i} style={crd}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'12px' }}>
            <span style={{ color:'#9ca3af', fontSize:'12px' }}>Foto {i+1}</span>
            <button onClick={() => removeItem('items',i)} style={rmv}>Rimuovi</button>
          </div>
          <ImageUpload label="Immagine" value={foto.url||''} onChange={v=>updateItem('items',i,'url',v)} />
          <Field label="Titolo/Descrizione" value={foto.titolo} onChange={v=>updateItem('items',i,'titolo',v)} />
          <div style={fld}>
            <label style={lbl}>Categoria</label>
            <select value={foto.categoria||'Cibo'} onChange={e=>updateItem('items',i,'categoria',e.target.value)} style={inp}>
              {['Cibo','Birre','Drink','Vini','Giardino','Atmosfera','Eventi'].map(c=><option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      ))}
      <button onClick={() => addItem('items',{url:'',titolo:'',categoria:'Cibo'})} style={add}>+ Aggiungi foto</button>
    </div>
  );
}

function RecensioniForm({ dati, updateItem, addItem, removeItem }: any) {
  return (
    <div style={mxw}>
      {(dati?.items||[]).map((r: any, i: number) => (
        <div key={i} style={crd}>
          <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'12px' }}>
            <span style={{ color:'#9ca3af', fontSize:'12px' }}>{r.nome || `Recensione ${i+1}`}</span>
            <button onClick={() => removeItem('items',i)} style={rmv}>Rimuovi</button>
          </div>
          <Field label="Nome cliente" value={r.nome} onChange={v=>updateItem('items',i,'nome',v)} />
          <Field label="Testo recensione" value={r.testo} onChange={v=>updateItem('items',i,'testo',v)} multiline />
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
            <div style={fld}>
              <label style={lbl}>Stelle</label>
              <select value={String(r.stelle||5)} onChange={e=>updateItem('items',i,'stelle',Number(e.target.value))} style={inp}>
                {[5,4,3,2,1].map(n=><option key={n} value={n}>{n} ★</option>)}
              </select>
            </div>
            <Field label="Periodo" value={r.data} onChange={v=>updateItem('items',i,'data',v)} />
          </div>
          <div style={fld}>
            <label style={lbl}>Fonte</label>
            <select value={r.fonte||'Google'} onChange={e=>updateItem('items',i,'fonte',e.target.value)} style={inp}>
              {['Google','TheFork','TripAdvisor','Facebook'].map(f=><option key={f} value={f}>{f}</option>)}
            </select>
          </div>
        </div>
      ))}
      <button onClick={() => addItem('items',{nome:'',testo:'',stelle:5,data:'',fonte:'Google'})} style={add}>+ Aggiungi recensione</button>
    </div>
  );
}

function getDefault(sezione: string) {
  if (sezione==='info') return {nome:'Patù',telefono:'331 804 3454',phoneRaw:'+393318043454',email:'',indirizzo:'Via Enrico Perito, 38, 84025 Eboli (SA)',facebook:'https://www.facebook.com/PatuEboli/',instagram:'https://www.instagram.com/patu_eboli/',thefork:'https://www.thefork.it/ristorante/patu-pane-tulipani-r810703',tripadvisor:'',maps_url:'',orari:{lunedi:'18:00 — 01:00',martedi:'Chiuso',mercoledi:'Chiuso',giovedi:'18:00 — 01:00',venerdi:'18:00 — 01:00',sabato:'18:00 — 01:00',domenica:'18:00 — 01:00'}};
  if (sezione==='home') return {titolo:'',sottotitolo:'',storia:'',testo_cta:'',nome_chef:'',citazione_chef:'',foto_pane:'',foto_giardino:'',stat1_num:'181',stat1_label:'recensioni Google',stat2_num:'13',stat2_label:'birre artigianali',stat3_num:'46',stat3_label:'valutazione media'};
  if (sezione==='menu')       return {items:[]};
  if (sezione==='birre')      return {items:[]};
  if (sezione==='vini')       return {items:[]};
  if (sezione==='galleria')   return {items:[]};
  if (sezione==='recensioni') return {items:[]};
  return {};
}