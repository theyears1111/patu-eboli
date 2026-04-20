import React from 'react';

interface Props {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: Props) {
  return (
    <div className="relative h-56 sm:h-72 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
      <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <h1
          className="text-4xl sm:text-5xl font-bold text-charcoal"
          style={{ letterSpacing: '-0.03em' }}
        >
          {title}
        </h1>
        <p className="mt-3 text-base text-gray-600 max-w-xl leading-relaxed">{subtitle}</p>
      </div>
    </div>
  );
}
