"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyDetails } from "@/data/company";

export default function WhyKLCSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-accent text-xs uppercase tracking-widest font-semibold">
                Core Strengths
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary mt-2">
                Why Choose Karanwal Lime Chem?
              </h2>
              <div className="w-12 h-1 bg-accent mt-4" />
            </div>

            <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
              Backed by over two decades of industry leadership, we build trust with partners through technical precision, supply assurance, and strict adherence to global safety and quality frameworks.
            </p>

            {/* List of reasons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {companyDetails.whyChooseUs.map((reason, idx) => (
                <AnimatedSection 
                  key={reason.title} 
                  delay={0.05 * (idx % 2)}
                  className="space-y-1.5 flex gap-3 items-start"
                >
                  <span className="bg-accent/10 text-accent rounded-full p-1.5 mt-0.5 flex-shrink-0">
                    <Check size={14} className="stroke-[3px]" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-sm text-primary">
                      {reason.title}
                    </h3>
                    <p className="text-text-secondary text-xs leading-normal">
                      {reason.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-5 relative h-[450px] lg:h-[550px] rounded-xl overflow-hidden shadow-lg border border-border-custom/50">
            <Image
              src="/images/manufacturing/calcination-tower-01.jpg"
              alt="KLC Calcination Tower"
              fill
              className="object-cover object-center"
            />
            {/* Visual Stats overlay */}
            <div className="absolute bottom-6 left-6 right-6 bg-primary/95 text-white p-6 rounded-lg border border-white/10 backdrop-blur-md">
              <h3 className="font-display font-bold text-base text-accent">
                Advanced Production Plant
              </h3>
              <p className="text-white/80 text-xs mt-2 leading-relaxed">
                Featuring state-of-the-art calcination, precipitation, and grinding machinery designed for strict control over chemical assay and particle properties.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
