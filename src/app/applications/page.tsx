import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { applications } from "@/data/applications";

export const metadata = {
  title: "Industrial Applications Index | Calcium Carbonate Solutions",
  description: "Browse KLC's tailored Precipitated and Ground Calcium Carbonate solutions across rubber, PVC, paper, paints, food, and pharmaceutical industries.",
};

export default function ApplicationsHubPage() {
  return (
    <>
      <PageHero
        title="Industrial Applications"
        description="KLC's Calcium Carbonate grades act as active enhancers, modifiers, and high-performance extenders across a wide range of industrial verticals."
        backgroundImage="/images/manufacturing/processing-equipment-01.jpg"
        breadcrumbs={[{ name: "Applications", href: "/applications" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Market Verticals
            </span>
            <h2 className="font-display font-bold text-3xl text-primary mt-2">
              Serving Global Industrial Markets
            </h2>
            <div className="w-12 h-1 bg-accent mx-auto mt-4" />
            <p className="text-text-secondary text-sm sm:text-base mt-4 leading-relaxed">
              Calcium Carbonate is not just a filler; its particle size distribution, crystal shape, surface area, and chemical purity directly alter chemical compounding mechanics, rheology, and final mechanical thresholds.
            </p>
          </div>

          {/* Flex wrap container to center trailing items */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {applications.map((app, idx) => (
              <AnimatedSection
                key={app.slug}
                delay={0.05 * (idx % 4)}
                className="group bg-white rounded-lg border border-border-custom hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
              >
                <div>
                  {/* Image cover */}
                  <div className="relative w-full h-44 bg-gray-100 overflow-hidden">
                    <Image
                      src={app.imagePrimary}
                      alt={app.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/10 transition-colors" />
                  </div>

                  {/* Body text */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-display font-bold text-sm text-primary tracking-tight group-hover:text-accent transition-colors">
                      {app.name}
                    </h3>
                    <p className="text-text-secondary text-xs mt-2 leading-relaxed line-clamp-3">
                      {app.headline}
                    </p>
                  </div>
                </div>

                {/* Footer Link */}
                <div className="px-5 pb-5 pt-1 mt-auto">
                  <Link
                    href={`/applications/${app.slug}`}
                    className="flex items-center justify-between text-xs font-semibold text-primary group-hover:text-accent border-t border-border-custom/30 pt-3"
                  >
                    <span>Technical Grading Spec</span>
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

              </AnimatedSection>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
