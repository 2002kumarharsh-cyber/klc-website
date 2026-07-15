import React from "react";
import PageHero from "@/components/ui/PageHero";
import SpecTable from "@/components/products/SpecTable";
import ChemicalAnalysis from "@/components/products/ChemicalAnalysis";
import DownloadGate from "@/components/ui/DownloadGate";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { pccGrades } from "@/data/products";
import { pccChemicalAnalysis } from "@/data/chemicalAnalysis";
import Link from "next/link";
import { CheckCircle2, FlaskConical, Settings, HelpCircle } from "lucide-react";

export const metadata = {
  title: "Precipitated Calcium Carbonate (PCC) Specifications",
  description: "Detailed specification tables and chemical analysis for KLC PCC grades: KLC-11, KLC-111, KLC-11 Ultra, KLC-10, KLC-121, KLC-101.",
};

export default function PCCPage() {
  return (
    <>
      <PageHero
        title="Precipitated Calcium Carbonate (PCC)"
        description="Synthetically manufactured to achieve high whiteness, controlled particle sizes, and exceptional chemical purity for specialized industrial applications."
        backgroundImage="/images/manufacturing/finished-product-warehouse-02.jpg"
        breadcrumbs={[
          { name: "Products", href: "/products" },
          { name: "PCC Specifications", href: "/products/pcc" }
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
                Engineered Particle Morphologies & Sizing
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                Precipitated Calcium Carbonate (PCC) is manufactured synthetically by calcining limestone to create carbon dioxide gas and quicklime, which are recombined in a carbonation reactor. This route allows precise control over crystal habit, whiteness, and primary particle morphology (predominantly Aragonite crystal arrays). 
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                KLC offers six standard PCC grades, each engineered for particular flow points, apparent densities, and dispersibility ratings to suit complex compounding conditions.
              </p>
            </div>

            {/* Sidebar Stats */}
            <div className="lg:col-span-4 bg-surface-2 border border-border-custom/50 rounded-lg p-6 space-y-4">
              <h3 className="font-display font-bold text-xs text-primary uppercase tracking-wider flex items-center gap-2 border-b border-border-custom/50 pb-2">
                <FlaskConical size={16} className="text-accent" />
                Key Synthesis Parameters
              </h3>
              <ul className="space-y-3 text-xs text-text-secondary">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>Aragonite Crystal habit</strong> – Provides excellent particle interlocking and structural reinforcement.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>98% Calcium Carbonate assay</strong> – Guarantees low impurity footprint in critical batches.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 size={14} className="text-accent flex-shrink-0 mt-0.5" />
                  <span><strong>pH: 9.3 - 10.3</strong> – Stabilizes latex compounding and plastic acid scavenging.</span>
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
                Technical Datasheet: KLC PCC Grades
              </h3>
            </div>
            <SpecTable grades={pccGrades} />
          </div>

          {/* Chemical Analysis */}
          <div className="space-y-4">
            <div>
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                Assay & Purity
              </span>
              <h3 className="font-display font-bold text-lg text-primary mt-1">
                Typical Chemical Analysis of KLC PCC Grades
              </h3>
            </div>
            <ChemicalAnalysis 
              title="Precipitated Calcium Carbonate Properties" 
              properties={pccChemicalAnalysis} 
            />
          </div>

          {/* Action CTAs & Brochure Gate */}
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
                  <Settings size={14} />
                  Contact Lab Sales
                </Link>
              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  );
}
