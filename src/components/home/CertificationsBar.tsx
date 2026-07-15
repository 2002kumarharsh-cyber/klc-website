"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyDetails } from "@/data/company";

export default function CertificationsBar() {
  return (
    <section className="py-16 bg-surface-2 border-y border-border-custom/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Quality Assurance
          </span>
          <h2 className="font-display font-bold text-2xl text-primary mt-1">
            Global Compliance & Standards
          </h2>
          <p className="text-text-secondary text-xs mt-2 leading-relaxed">
            Our processes and facilities are audited and certified by leading global bodies to guarantee compliance, traceability, and batch reliability.
          </p>
        </div>

        {/* Logos Grid */}
        <AnimatedSection delay={0.1} className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
          {companyDetails.certifications.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white p-4 rounded-lg border border-border-custom/50 w-32 h-32 flex flex-col justify-between items-center text-center shadow-sm hover:shadow hover:border-accent transition-all duration-200"
            >
              <div className="relative w-16 h-16 flex-shrink-0">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  fill
                  className="object-contain filter opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-display font-bold text-[10px] text-primary tracking-wide leading-none">
                {cert.name}
              </span>
            </div>
          ))}
        </AnimatedSection>

        {/* View Quality Specs CTA */}
        <div className="text-center mt-10">
          <Link
            href="/quality"
            className="text-xs text-primary font-bold hover:text-accent hover:underline inline-flex items-center gap-1.5"
          >
            Review quality benchmarks & process checkpoints &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
