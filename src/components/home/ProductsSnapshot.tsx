"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ProductsSnapshot() {
  const products = [
    {
      type: "PCC",
      fullName: "Precipitated Calcium Carbonate",
      image: "/images/manufacturing/production-line-01.jpg",
      description: "KLC's PCC is synthetically processed to achieve high chemical purity, controlled particle morphology, and extreme whiteness. It is optimized for applications requiring strict uniformity, low grit, and performance enhancement.",
      bulletPoints: [
        "Synthetic chemical process (high consistency)",
        "Controlled particle size distribution (d50: 4-9 µm)",
        "Predominant Aragonite crystal habit",
        "Excellent dispersibility and high brightness"
      ],
      gradesLink: "/products/pcc",
      bgStyle: "bg-white border border-border-custom shadow-sm"
    },
    {
      type: "GCC",
      fullName: "Ground Calcium Carbonate",
      image: "/images/manufacturing/industrial-grinding-mill-01.jpg",
      description: "Manufactured from high-purity natural white calcite crystal, KLC's Ground Calcium Carbonate (GCC) is processed in our state-of-the-art ultrafine grinding mill to deliver optimal particle size distribution and brightness cost-effectively.",
      bulletPoints: [
        "Processed from premium natural calcite deposits",
        "Ultrafine micronized grades (d50 down to 2 µm)",
        "Highly cost-effective filler & extender solution",
        "Strictly controlled top-cut (d97) distribution"
      ],
      gradesLink: "/products/gcc",
      bgStyle: "bg-surface-2 border border-border-custom/50 shadow-sm"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Product Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary mt-2">
            Calcium Carbonate Solutions
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4" />
          <p className="text-text-secondary text-sm sm:text-base mt-4 leading-relaxed">
            We manufacture a comprehensive range of Calcium Carbonate grades, segmented into two distinct families engineered to meet the technical requirements of industrial formulations.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {products.map((product, idx) => (
            <AnimatedSection 
              key={product.type} 
              delay={0.1 * (idx + 1)}
              className={`flex flex-col h-full rounded-xl overflow-hidden p-6 md:p-8 ${product.bgStyle}`}
            >
              {/* Product Type Tag */}
              <div className="flex justify-between items-center mb-6">
                <span className="bg-primary text-white font-display font-bold text-xs px-3 py-1 rounded">
                  {product.type} FAMILY
                </span>
                <span className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                  Technical Grade
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-xl sm:text-2xl text-primary mb-3">
                {product.fullName}
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Product Visual */}
              <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6 border border-border-custom/30">
                <Image
                  src={product.image}
                  alt={product.fullName}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Technical features list */}
              <div className="space-y-3 mb-8 flex-grow">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Key Technical Characteristics:
                </h4>
                <ul className="space-y-2">
                  {product.bulletPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-xs text-text-secondary leading-normal">
                      <CheckCircle2 size={16} className="text-accent flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <div className="pt-4 border-t border-border-custom/50 mt-auto">
                <Link
                  href={product.gradesLink}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-xs py-3 rounded text-center block transition-all group"
                >
                  View Specific {product.type} Grades & Specs
                  <ArrowRight size={14} className="inline-block ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
