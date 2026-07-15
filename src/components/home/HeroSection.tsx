"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden min-h-[85vh] flex items-center">
      
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/manufacturing/manufacturing-facility-aerial-view-01.jpg"
          alt="KLC Manufacturing Facility"
          fill
          className="object-cover object-center opacity-30 select-none pointer-events-none"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-8 space-y-6">
            
            <AnimatedSection delay={0.1} yOffset={30}>
              <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/30 text-accent font-semibold px-3 py-1.5 rounded-full text-xs uppercase tracking-wider">
                <ShieldCheck size={14} />
                Precision Industrial Manufacturing
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} yOffset={30}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                Excellence in <br />
                <span className="text-accent">Calcium Carbonate</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3} yOffset={30}>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed">
                Karanwal Lime Chem I Private Limited (KLC) is a trusted, ISO-certified manufacturer of Precipitated Calcium Carbonate (PCC) and Ground Calcium Carbonate (GCC), delivering engineered solutions for rubber, PVC, paper, pharmaceutical, food, and coating applications since 1999.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4} yOffset={30}>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/products"
                  className="bg-accent hover:bg-amber-600 text-primary-dark font-bold text-sm px-6 py-3.5 rounded transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2 group"
                >
                  Explore Products
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold text-sm px-6 py-3.5 rounded transition-all inline-flex items-center gap-2"
                >
                  Contact Technical Sales
                </Link>
              </div>
            </AnimatedSection>

            {/* Certifications Quick View */}
            <AnimatedSection delay={0.5} yOffset={30} className="pt-8 border-t border-white/10 max-w-xl">
              <div className="flex items-center gap-3 text-xs text-white/60">
                <Award size={18} className="text-accent flex-shrink-0" />
                <span>Certified for quality and food safety compliance: FSSC 22000 | WHO-GMP | ISO 9001 | FSSAI</span>
              </div>
            </AnimatedSection>

          </div>

        </div>
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-15 pointer-events-none hidden lg:block">
        <svg className="w-full h-full text-white" fill="none" viewBox="0 0 100 100">
          <pattern id="grid-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.25" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-pattern)" />
        </svg>
      </div>

    </section>
  );
}
