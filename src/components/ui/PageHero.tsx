import Image from "next/image";
import Link from "next/image"; // wait, let's use next/link for standard link navigation.

export interface PageHeroProps {
  title: string;
  description?: string;
  backgroundImage: string;
  breadcrumbs?: { name: string; href: string }[];
}

import NextLink from "next/link";

export default function PageHero({
  title,
  description,
  backgroundImage,
  breadcrumbs = [],
}: PageHeroProps) {
  return (
    <div className="relative bg-primary text-white py-16 md:py-24 overflow-hidden border-b border-border-custom/10">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex mb-4 text-xs font-medium text-white/60 space-x-2 items-center" aria-label="Breadcrumb">
            <NextLink href="/" className="hover:text-accent transition-colors">
              Home
            </NextLink>
            {breadcrumbs.map((crumb, idx) => (
              <span key={crumb.href} className="flex space-x-2 items-center">
                <span>/</span>
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-white font-semibold">{crumb.name}</span>
                ) : (
                  <NextLink href={crumb.href} className="hover:text-accent transition-colors">
                    {crumb.name}
                  </NextLink>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Content */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-4">
          {title}
        </h1>
        {description && (
          <p className="text-base sm:text-lg text-white/80 max-w-3xl leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Industrial Grid Accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none opacity-10">
        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 100 100">
          <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100" height="100" fill="url(#hero-grid)" />
        </svg>
      </div>

    </div>
  );
}
