import { Link } from 'react-router-dom';
import { useFirestore } from '../hooks/useFirestore';

interface Props {
  size?: 'sm' | 'md' | 'lg';
  dark?: boolean;
}

interface BrandData { logo_url?: string; }

export default function Logo({ size = 'md', dark = false }: Props) {
  const { data: brand } = useFirestore<BrandData>('brand', {});

  const sizes = {
    sm: { text: 'text-xl', height: 28 },
    md: { text: 'text-2xl', height: 34 },
    lg: { text: 'text-4xl', height: 52 },
  };
  const { text, height } = sizes[size];

  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="Patù - Home">
      {brand.logo_url ? (
        <img src={brand.logo_url} alt="Logo Patù"
          style={{ height:`${height}px`, width:'auto', objectFit:'contain' }} />
      ) : (
        <>
          <TulipIcon size={height} />
          <span
            className={`${text} font-semibold tracking-tight ${dark ? 'text-white' : 'text-charcoal'} group-hover:text-olive-500 transition-colors duration-200`}
            style={{ letterSpacing: '-0.02em' }}>
            pat<span className="text-olive-500">ù</span>
          </span>
        </>
      )}
    </Link>
  );
}

function TulipIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M20 38V22" stroke="#6B7F4A" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M20 22C20 22 14 21 12 17C10 13 13 8 13 8C13 8 16 11 20 11C24 11 27 8 27 8C27 8 30 13 28 17C26 21 20 22 20 22Z" fill="#D93A2F" stroke="#D93A2F" strokeWidth="0.5" strokeLinejoin="round" />
      <path d="M15 14C15 14 14 10 16 8" stroke="#C12020" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M25 14C25 14 26 10 24 8" stroke="#C12020" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M20 26C20 26 18 26 16 28" stroke="#6B7F4A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}