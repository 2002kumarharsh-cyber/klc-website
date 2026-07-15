import React from "react";
import PageHero from "@/components/ui/PageHero";
import SpecTable from "@/components/products/SpecTable";
import ChemicalAnalysis from "@/components/products/ChemicalAnalysis";
import DownloadGate from "@/components/ui/DownloadGate";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { gccGrades } from "@/data/products";
import { gccChemicalAnalysis } from "@/data/chemicalAnalysis";
import Link from "next/link";
import { CheckCircle2, Factory, ShieldAlert, Award } from "lucide-react";

export const metadata = {
  title: "Ground Calcium Carbonate (GCC) Specifications",
  description: "Detailed specification tables and chemical analysis for KLC Ground Calcium Carbonate grades: KLC-G-7, KLC-G-10, KLC-G-15, KLC-G-20, KLC-G-25.",
};

export default function GCCPage() {
  return (
    <>
      <PageHero
        title="Ground Calcium Carbonate (GCC)"
        description="Processed mechanically from premium natural white calcite mineral deposits to deliver high whiteness and cost-effective filler properties."
        backgroundImage="/images/manufacturing/industrial-grinding-mill-01.jpg"
        breadcrumbs={[
          { name: "Products", href: "/products" },
          { name: "GCC Specifications", href: "/products/gcc" }
        ]}
      />

      {/* Main Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Sizing description */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                Technical Overview
              </span>
              <h2 className="font-display font-bold text-2xl text-primary mt-1">
                Micronized Calcite Powders
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                KLC's Ground Calcium Carbonate (GCC) is processed from carefully selected, high-purity natural white calcite crystal. Utilizing our advanced, automated ultrafine grinding mill, the raw mineral is finely ground and air-classified to produce a narrow, consistent particle size distribution.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                GCC behaves as a highly functional filler and extender pigment in plastic compounding, PVC pipes, paint formulations, adhesives, paper coating, and building materials where quality must balance cost efficiency.
              </p>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-4 bg-surface-2 border border-border-custom/50 rounded-lg p-6 space-y-4">
              <h3 className="font-display font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-2 border-b border-border-custom/50 pb-2">
                <Factory size={16} className="text-accent" />
                Key Processing Parameters
              </h3>
              <ul className="space-y-3 text-xs text-text-secondary">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Narrow PSD (Particle Size Distribution)</strong> – Controls top-cut (d97) sizes to ensure zero grid blockage.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>98% Calcite Whiteness</strong> – Enhances pigment spacing and print clarity.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Lower oil absorption values</strong> – Saves resin and binder consumption in compounding formulations.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Spec Grid Table */}
          <div className="space-y-4">
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                Product Specifications
              </span>
              <h3 className="font-display font-bold text-lg text-primary mt-1">
                Technical Datasheet: KLC GCC Grades
              </h3>
            </div>
            <SpecTable grades={gccGrades} />
          </div>

          {/* Chemical Analysis */}
          <div className="space-y-4">
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                Assay & Composition
              </span>
              <h3 className="font-display font-bold text-lg text-primary mt-1">
                Typical Chemical Analysis of KLC GCC Grades
              </h3>
            </div>
            <ChemicalAnalysis 
              title="Grounded Calcium Carbonate Properties" 
              properties={gccChemicalAnalysis} 
            />
          </div>

          {/* Action CTAs */}
          <AnimatedSection className="bg-primary text-white rounded-xl p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-lg">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  Technical Documentation
                </span>
                <h3 className="font-display font-bold text-2xl tracking-tight">
                  Need Sizing Charts, MSDS Sheets, or Custom Specifications?
                </h3>
                <p className="text-white/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Download the complete technical catalogue containing detailed grading curves, dispersibility curves, and packaging parameters, or contact our laboratories for custom compounding.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <DownloadGate 
                  buttonText="Download Specs Catalogue" 
                  className="w-full text-center py-3 justify-center"
                />
                <Link
                  href="/contact?subject=Technical Specs Request"
                  className="w-full border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold text-xs py-3 rounded text-center transition-all inline-flex items-center justify-center gap-1.5"
                >
                  <Award size={14} />
                  Contact Quality Sales
                </Link>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
