import { useFirestore } from "../hooks/useFirestore";
import { info as fallbackInfo } from "../lib/data";
import { Reveal } from "../components/Reveal";
import { Tulip } from "../components/Tulip";

const GIORNI = [
  { key:'lunedi',    label:'Lunedì' },
  { key:'martedi',   label:'Martedì' },
  { key:'mercoledi', label:'Mercoledì' },
  { key:'giovedi',   label:'Giovedì' },
  { key:'venerdi',   label:'Venerdì' },
  { key:'sabato',    label:'Sabato' },
  { key:'domenica',  label:'Domenica' },
];

export default function ContattiPage() {
  const info = useFirestore('info', fallbackInfo);

  const indirizzo = info?.indirizzo || fallbackInfo.address;
  const telefono  = info?.telefono  || fallbackInfo.phone;
  const phoneRaw  = info?.phoneRaw  || fallbackInfo.phoneRaw;
  const instagram = info?.instagram || fallbackInfo.instagram;
  const thefork   = info?.thefork   || fallbackInfo.thefork;
  const mapsUrl   = info?.maps_url  || `https://www.google.com/maps?q=${encodeURIComponent(indirizzo)}&output=embed`;

  return (
    <div className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-14">
            <Tulip className="h-12 w-12 mx-auto mb-3" />
            <p className="handwritten text-2xl text-accent">vieni a trovarci</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold">Contatti</h1>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-card rounded-[2rem] p-8 shadow-[var(--shadow-soft)] h-full">
              <h2 className="font-display text-2xl font-bold mb-2">Dove siamo</h2>
              <p className="handwritten text-xl text-primary mb-6">nel cuore di Eboli</p>
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Indirizzo</p>
                  <p className="text-lg">{indirizzo}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Telefono</p>
                  <a href={`tel:${phoneRaw}`} className="text-lg text-primary hover:underline">{telefono}</a>
                </div>
                {instagram && (
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Instagram</p>
                    <a href={instagram} target="_blank" rel="noopener" className="text-lg text-primary hover:underline">@patu_eboli</a>
                  </div>
                )}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={thefork} target="_blank" rel="noopener" className="btn-pill bg-[#E8857A] text-white">
                  Prenota su TheFork
                </a>
                <a href={`tel:${phoneRaw}`} className="btn-pill bg-primary text-primary-foreground">
                  Chiamaci
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-card rounded-[2rem] p-8 shadow-[var(--shadow-soft)] h-full">
              <h2 className="font-display text-2xl font-bold mb-2">Orari</h2>
              <p className="handwritten text-xl text-primary mb-6">aperti la sera</p>
              <ul className="space-y-3">
                {GIORNI.map(({ key, label }) => {
                  // Firebase: orari.lunedi ecc. — Fallback: array hours
                  const orario = info?.orari?.[key]
                    || fallbackInfo.hours?.find((h: any) => h.day === label)?.time
                    || '—';
                  return (
                    <li key={key} className="flex justify-between items-center pb-3 border-b border-dashed border-border last:border-0 last:pb-0">
                      <span className="font-medium">{label}</span>
                      <span className={orario === 'Chiuso' ? 'handwritten text-xl text-tulip' : 'text-foreground/80'}>
                        {orario}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-8 rounded-[2rem] overflow-hidden shadow-[var(--shadow-soft)] bg-card">
            <iframe
              title="Mappa Patù Eboli"
              src={mapsUrl.includes('embed') ? mapsUrl : `https://www.google.com/maps?q=${encodeURIComponent(indirizzo)}&output=embed`}
              width="100%" height="420"
              style={{ border:0 }} loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}