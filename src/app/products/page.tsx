import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Industrial Calcium Carbonate Products Portfolio",
  description: "Manufacturer of Precipitated Calcium Carbonate (PCC) and Ground Calcium Carbonate (GCC). View specific industrial grades and chemical analysis.",
};

export default function ProductsHubPage() {
  const families = [
    {
      id: "pcc",
      name: "Precipitated Calcium Carbonate (PCC)",
      tagline: "Synthetic High-Purity Calcium Carbonate",
      description: "Precipitated Calcium Carbonate (PCC) is synthetically produced from high-purity limestone through a carbonation process. This chemical routing allows us to tightly regulate physical shape (aragonite/calcite), bulk density, particle size, and extreme brightness.",
      image: "/images/manufacturing/production-line-01.jpg",
      grades: ["KLC-11", "KLC-111", "KLC-11 Ultra", "KLC-10", "KLC-121", "KLC-101"],
      keySpecs: [
        "Morphology: Aragonite, Semi-Calcite",
        "Primary Particle Size: 0.3 - 1.4 µm",
        "Brightness: Ultra High Brightness",
        "Assay: 97% - 98% CaCO₃ purity profile"
      ],
      link: "/products/pcc"
    },
    {
      id: "gcc",
      name: "Ground Calcium Carbonate (GCC)",
      tagline: "Natural Ultrafine Calcite Powder",
      description: "Ground Calcium Carbonate (GCC) is processed mechanically by milling and classifying premium natural white calcite mineral deposits. It is known for its high cost-efficiency, low absorption characteristics, high whiteness, and optimal particle packing curves.",
      image: "/images/manufacturing/industrial-grinding-mill-01.jpg",
      grades: ["KLC-G-7", "KLC-G-10", "KLC-G-15", "KLC-G-20", "KLC-G-25"],
      keySpecs: [
        "Morphology: Natural rhombohedral calcite",
        "Particle Size (d50): 2.0 - 6.0 µm",
        "Fineness: 99.6% passing 325 mesh (45 µm)",
        "Brightness: 95.6% - 96.0% profile"
      ],
      link: "/products/gcc"
    }
  ];

  return (
    <>
      <PageHero
        title="Our Product Portfolio"
        description="KLC provides custom-engineered Calcium Carbonate products across two distinct product families, matching chemical purity, particle sizing, and functional parameters."
        backgroundImage="/images/manufacturing/finished-product-warehouse-01.jpg"
        breadcrumbs={[{ name: "Products", href: "/products" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="space-y-20">
            {families.map((fam, idx) => (
              <AnimatedSection 
                key={fam.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-16 border-b border-border-custom/50 last:border-0 last:pb-0`}
              >
                
                {/* Visual block */}
                <div className={`lg:col-span-5 relative h-80 sm:h-96 rounded-xl overflow-hidden shadow border border-border-custom/30 ${idx % 2 === 1 ? "lg:order-last" : ""}`}>
                  <Image
                    src={fam.image}
                    alt={fam.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                </div>

                {/* Content block */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                      {fam.tagline}
                    </span>
                    <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary mt-1">
                      {fam.name}
                    </h2>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {fam.description}
                  </p>

                  {/* Sizing / Key Parameters */}
                  <div className="bg-surface-2 p-5 rounded-lg border border-border-custom/50">
                    <h3 className="font-display font-bold text-xs text-primary uppercase tracking-wider mb-3">
                      Typical Sizing & Parameters
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
                      {fam.keySpecs.map((spec) => (
                        <li key={spec} className="flex gap-2 items-center">
                          <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Grades included */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-primary font-bold">Standard Grades:</span>
                    {fam.grades.map((grade) => (
                      <span key={grade} className="bg-surface-2 px-2.5 py-1 rounded text-text-secondary border border-border-custom/50 font-mono">
                        {grade}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <Link
                      href={fam.link}
                      className="bg-primary hover:bg-primary-dark text-white font-semibold text-xs px-6 py-3 rounded inline-flex items-center gap-2 transition-all group"
                    >
                      View Full Grade Sizing & Specifications
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>

              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>

      {/* Safety & Compliance info bar */}
      <section className="bg-surface-2 py-12 border-t border-border-custom/40">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-accent/10 text-accent mb-2">
            <ShieldAlert size={24} />
          </div>
          <h3 className="font-display font-bold text-lg text-primary">
            Looking for Food or Pharmaceutical Grade?
          </h3>
          <p className="text-text-secondary text-xs sm:text-sm leading-relaxed">
            Our specialized Precipitated Calcium Carbonate grade <strong className="text-primary">KLC-101</strong> is manufactured under strict WHO-GMP, FSSC 22000, and FSSAI sanitation frameworks. It is suitable for calcium fortification, antacid formulation, and excipient tablet compressibility.
          </p>
          <div className="pt-2">
            <Link 
              href="/contact?subject=Pharma Grade Inquiry"
              className="text-xs text-accent font-bold hover:underline"
            >
              Request WHO-GMP certificate and sample datasheets &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
