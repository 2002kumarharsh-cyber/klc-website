import React from "react";
import Image from "next/image";
import { BookOpen, Users, Compass, Eye } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyDetails } from "@/data/company";

export const metadata = {
  title: "About Us | Karanwal Lime Chem (KLC)",
  description: "Learn about KLC's 25+ years of Calcium Carbonate manufacturing expertise, our directors' vision, and our state-of-the-art facilities in Chandpur, UP.",
};

export default function AboutPage() {
  const steps = [
    {
      num: "01",
      name: "Limestone Calcination",
      desc: "Limestone is heated at 1600°C in calcination towers to split calcium carbonate into carbon dioxide gas and quicklime."
    },
    {
      num: "02",
      name: "Reactor Carbonation",
      desc: "For PCC, quicklime is hydrated and reacted with carbon dioxide under strict temperature monitoring to form pure calcite crystals."
    },
    {
      num: "03",
      name: "Ultrafine Grinding",
      desc: "For GCC, calcite crystals undergo mechanical dry-milling and high-velocity air classification down to 2 µm."
    },
    {
      num: "04",
      name: "Grading & Packaging",
      desc: "Batches are sifted, packed in moisture-resistant bags, batch-serialized, and laboratory verified before warehouse storage."
    }
  ];

  return (
    <>
      <PageHero
        title="About Karanwal Lime Chem"
        description="Providing high-performance Calcium Carbonate solutions, backed by technical expertise, quality control, and long-term customer partnerships."
        backgroundImage="/images/manufacturing/manufacturing-plant-wide-view-01.jpg"
        breadcrumbs={[{ name: "About", href: "/about" }]}
      />

      {/* Corporate Narrative & Quote */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                  Our History
                </span>
                <h2 className="font-display font-bold text-3xl text-primary mt-1">
                  25+ Years of Calcium Carbonate Expertise
                </h2>
                <div className="w-12 h-1 bg-accent mt-4" />
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                Karanwal Lime Chem I Private Limited (KLC) was established in 1999. Over the past two decades, KLC has grown to become a trusted and leading manufacturer of high-quality Calcium Carbonate products, specialising in Precipitated Calcium Carbonate (PCC) and Ground Calcium Carbonate (GCC).
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Our state-of-the-art manufacturing facilities, combined with stringent quality check points at every stage, guarantee that our products meet the highest industrial standards of batch consistency and reliability. We continuously align with evolving market criteria by investing in automation and R&D.
              </p>
            </div>

            {/* Directors Note Card */}
            <div className="lg:col-span-5 bg-surface-2 border border-border-custom rounded-xl p-6 relative shadow-sm">
              <span className="text-accent font-display font-bold text-5xl absolute -top-5 left-4 select-none opacity-20">
                &ldquo;
              </span>
              <div className="space-y-4 pt-2">
                <h3 className="font-display font-semibold text-xs text-primary uppercase tracking-wider">
                  Director's Message
                </h3>
                <p className="text-text-secondary text-xs italic leading-relaxed whitespace-pre-line">
                  {companyDetails.directorsNote}
                </p>
                <div className="border-t border-border-custom/50 pt-4 flex flex-col">
                  <span className="font-display font-bold text-xs text-primary">
                    Mr. Vikas Karanwal
                  </span>
                  <span className="text-[10px] text-text-secondary font-medium">
                    Director, Karanwal Lime Chem Pvt Ltd
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-surface-2 border-y border-border-custom/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Workflow
            </span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2">
              Our Manufacturing Process
            </h2>
            <p className="text-text-secondary text-sm mt-4 leading-relaxed">
              We operate automated reactors and classification grinding mills to control particle morphology, whiteness, and purity.
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <AnimatedSection
                key={step.num}
                className="bg-white rounded-lg border border-border-custom p-6 relative shadow-sm"
              >
                <div className="font-display font-bold text-3xl text-accent/30 absolute top-4 right-4">
                  {step.num}
                </div>
                <div className="space-y-3 mt-4">
                  <h3 className="font-display font-bold text-sm text-primary">
                    {step.name}
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

      {/* Facility Photography Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Production Facilities
            </span>
            <h2 className="font-display font-bold text-2xl text-primary mt-1">
              Inside Our Manufacturing Plant
            </h2>
            <p className="text-text-secondary text-xs mt-2 leading-relaxed">
              Our plant is built for large-scale production, raw mineral stockpiling, and batch traceability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { path: "/images/manufacturing/calcination-tower-02.jpg", title: "Lime Kilns" },
              { path: "/images/manufacturing/finished-product-warehouse-01.jpg", title: "Batch Packaging Line" },
              { path: "/images/manufacturing/processing-equipment-01.jpg", title: "Precipitation Reactors" },
              { path: "/images/manufacturing/electrical-control-panel-01.jpg", title: "Automation Control Panel" },
              { path: "/images/manufacturing/limestone-stockpile-01.jpg", title: "Limestone Feedstock Stockpile" },
              { path: "/images/manufacturing/production-line-01.jpg", title: "Continuous Dryers" }
            ].map((img, idx) => (
              <AnimatedSection
                key={idx}
                delay={0.05 * (idx % 3)}
                className="group relative h-64 rounded-lg overflow-hidden border border-border-custom/50 shadow-sm"
              >
                <Image
                  src={img.path}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay Text */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-display font-bold text-xs text-white uppercase tracking-wider">
                    {img.title}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
