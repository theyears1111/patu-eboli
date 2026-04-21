export function Tulip({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 75" className={className} aria-hidden fill="none">
      <path d="M30 72 C30 60 29 48 30 32" stroke="#7BAF7A" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M27 54 C18 47 10 38 8 28 C16 34 24 44 27 52 Z" fill="#7BAF7A" opacity="0.85"/>
      <path d="M33 50 C42 43 50 34 52 24 C44 30 36 40 33 48 Z" fill="#7BAF7A" opacity="0.75"/>
      <path d="M22 32 C20 20 24 8 30 3 C36 8 40 20 38 32 C36 38 33 41 30 41 C27 41 24 38 22 32 Z" fill="#C8483A"/>
      <path d="M23 34 C15 26 15 14 20 5 C23 14 23 25 25 33 Z" fill="#D4566A" opacity="0.82"/>
      <path d="M37 34 C45 26 45 14 40 5 C37 14 37 25 35 33 Z" fill="#D4566A" opacity="0.82"/>
      <path d="M28 16 C29 10 30 4 30 3 C31 8 31 14 30 18 Z" fill="white" opacity="0.28"/>
    </svg>
  );
}
