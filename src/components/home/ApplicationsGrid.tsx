"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { applications } from "@/data/applications";

export default function ApplicationsGrid() {
  // Show first 8 for home page grid, or all 12. The task checklist says "all 12-industry grid" so let's show all 12!
  return (
    <section className="py-20 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent text-xs uppercase tracking-widest font-semibold">
            Market Verticals
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary mt-2">
            Industrial Applications
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4" />
          <p className="text-text-secondary text-sm sm:text-base mt-4 leading-relaxed">
            Our Calcium Carbonate solutions are custom-engineered to optimize structural, chemical, and physical properties across multiple industry segments.
          </p>
        </div>

        {/* Applications 3x4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {applications.map((app, idx) => (
            <AnimatedSection
              key={app.slug}
              delay={0.05 * (idx % 4)}
              className="group bg-white rounded-lg border border-border-custom hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Visual Header */}
                <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
                  <Image
                    src={app.imagePrimary}
                    alt={app.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:bg-primary/10 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display font-bold text-sm text-primary tracking-tight group-hover:text-accent transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-text-secondary text-[11px] sm:text-xs mt-2 line-clamp-3 leading-relaxed">
                    {app.headline}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-5 pb-5 pt-1 mt-auto">
                <Link
                  href={`/applications/${app.slug}`}
                  className="flex items-center justify-between text-xs font-semibold text-primary group-hover:text-accent border-t border-border-custom/30 pt-3"
                >
                  <span>Technical Specs</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

            </AnimatedSection>
          ))}
        </div>

        {/* View Hub CTA */}
        <div className="text-center mt-12">
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-xs px-6 py-3 rounded transition-all shadow-sm"
          >
            Explore Applications Hub &rarr;
          </Link>
        </div>

      </div>
    </section>
  );
}
