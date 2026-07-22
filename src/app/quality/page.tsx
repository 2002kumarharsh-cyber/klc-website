import React from "react";
import { ClipboardCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CertificationsList from "@/components/quality/CertificationsList";
import { companyDetails } from "@/data/company";

export const metadata = {
  title: "Quality Control Standards & ISO Certifications",
  description: "Certified ISO 9001, ISO 14001, OHSAS 45001, FSSC 22000, and WHO-GMP. Review KLC's industrial quality assurance framework and laboratory testing criteria.",
};

export default function QualityPage() {
  const qcSteps = [
    {
      step: "01",
      title: "Raw Material Sourcing Purity",
      desc: "Limestone feedstock and calcite raw mineral are sourced from premium high-purity calcite quarries and verified for calcium carbonate assay and minimal acid-insoluble impurities before processing."
    },
    {
      step: "02",
      title: "Reactor Carbonation Sizing",
      desc: "During precipitation, carbon dioxide gas and hydration ratios are monitored. This allows reactors to control the crystal habit (forming uniform aragonite patterns) and initial particle width."
    },
    {
      step: "03",
      title: "Classification & Sieve Residue Checks",
      desc: "For both GCC and PCC, materials undergo automated air classification. We verify sieve residue (checking that 99.5% - 99.9% passes through a 325 mesh / 45 µm sieve) to prevent grit problems."
    },
    {
      step: "04",
      title: "Microbial Testing (Pharma/Food Grades)",
      desc: "For KLC-101 grade, we test for total bacterial counts and yeast/mold parameters in clean lab rooms, enforcing standards under WHO-GMP and FSSC 22000 specifications."
    },
    {
      step: "05",
      title: "Laser Particle Diffraction",
      desc: "We analyze d50 (medium diameter) and d97 top-cut using laser particle size analyzers. This ensures consistency and prevents formulation drift for plastics and coatings."
    },
    {
      step: "06",
      title: "Retention Samples & Traceability",
      desc: "Every shipped batch is stamped with a unique batch serial number. We retain physical verification samples and laboratory test records for 12 months to ensure traceability."
    }
  ];

  return (
    <>
      <PageHero
        title="Quality & Certifications"
        description="Enforcing rigorous quality control procedures and holding leading global safety certificates is central to KLC's manufacturing philosophy."
        backgroundImage="/images/manufacturing/electrical-control-panel-01.jpg"
        breadcrumbs={[{ name: "Quality & Certifications", href: "/quality" }]}
      />

      {/* Certifications Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Compliance
            </span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2">
              Holding Global Trust Standards
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4" />
            <p className="text-text-secondary text-sm sm:text-base mt-4 leading-relaxed">
              We align our manufacturing plants with international management frameworks, securing credentials across quality, environmental responsibility, safety, and hygiene.
            </p>
          </div>

          {/* Cards (Client Component) */}
          <CertificationsList certifications={companyDetails.certifications} />

        </div>
      </section>

      {/* QC Checkpoints Section */}
      <section className="py-20 bg-surface-2 border-t border-border-custom/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Process Audits
            </span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2">
              Our 6-Step Quality Control Protocol
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4" />
            <p className="text-text-secondary text-sm mt-4 leading-relaxed">
              Batch consistency is maintained by executing testing checks at each step of the calcite and chemical carbonation process.
            </p>
          </div>

          {/* Sizing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qcSteps.map((step, idx) => (
              <AnimatedSection
                key={step.step}
                delay={0.05 * (idx % 3)}
                className="bg-white border border-border-custom rounded-lg p-6 relative shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Visual Step Marker */}
                <div className="absolute top-4 right-4 font-display font-bold text-2xl text-accent/20">
                  {step.step}
                </div>

                <div className="space-y-3">
                  <div className="inline-flex p-2 rounded-lg bg-accent/15 text-accent">
                    <ClipboardCheck size={20} />
                  </div>
                  
                  <h3 className="font-display font-bold text-sm text-primary">
                    {step.title}
                  </h3>
                  
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {step.desc}
                  </p>
                </div>

              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
