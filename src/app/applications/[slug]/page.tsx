import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, Info, PhoneCall } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { applications } from "@/data/applications";
import { allProductGrades } from "@/data/products";

interface ApplicationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return applications.map((app) => ({
    slug: app.slug,
  }));
}

export default async function ApplicationDetailPage({ params }: ApplicationPageProps) {
  const { slug } = await params;
  const app = applications.find((a) => a.slug === slug);

  if (!app) {
    notFound();
  }

  // Cross-reference recommended grades details
  const recommendedGrades = allProductGrades.filter((grade) =>
    app.recommendedProducts.includes(grade.id) && grade.type !== "GCC"
  );

  const hasGccRecommendation = app.recommendedProducts.some((id) => id.startsWith("klc-g-"));

  return (
    <>
      <PageHero
        title={app.name}
        description={app.headline}
        backgroundImage={app.imagePrimary}
        breadcrumbs={[
          { name: "Applications", href: "/applications" },
          { name: app.name, href: `/applications/${app.slug}` },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Benefits & Details */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Sizing description */}
              <div className="space-y-4">
                <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                  Industry Overview
                </span>
                <h2 className="font-display font-bold text-2xl text-primary mt-1">
                  How Calcium Carbonate Enhances {app.name} Formulations
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Calcium Carbonate plays a critical functional role in {app.name}. It goes beyond behaving as a standard low-cost extender; it directly modifies compounding density, physical strength coefficients, surface smoothness, processing speed, and chemical properties.
                </p>
                {app.imageSecondary && (
                  <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-inner border border-border-custom/30 mt-6">
                    <Image
                      src={app.imageSecondary}
                      alt={`${app.name} Production`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>

              {/* Key Benefits List */}
              <div className="space-y-6">
                <div>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                    Performance Benefits
                  </span>
                  <h3 className="font-display font-bold text-lg text-primary mt-1">
                    Key Performance Advantages
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {app.benefits.map((benefit, idx) => (
                    <div 
                      key={idx}
                      className="bg-surface-2 p-5 rounded-lg border border-border-custom/50 flex gap-3.5 items-start"
                    >
                      <span className="bg-accent/10 text-accent p-1 rounded-full mt-0.5 flex-shrink-0">
                        <CheckCircle2 size={16} className="stroke-[2.5px]" />
                      </span>
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-xs text-primary uppercase tracking-wide">
                          Key Advantage #{idx + 1}
                        </h4>
                        <p className="text-text-secondary text-xs leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Recommended Products */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              
              <div className="bg-white border border-border-custom rounded-xl p-6 shadow-sm space-y-6">
                <div className="border-b border-border-custom/50 pb-3 flex items-center gap-2">
                  <Info size={16} className="text-accent" />
                  <h3 className="font-display font-bold text-sm text-primary uppercase tracking-wider">
                    Recommended Grades
                  </h3>
                </div>

                <div className="space-y-3">
                  {recommendedGrades.map((grade) => (
                    <Link
                      key={grade.id}
                      href={`/products/${grade.type.toLowerCase()}`}
                      className="group border border-border-custom hover:border-accent p-4 rounded-lg bg-surface-2/30 hover:bg-white transition-all block"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-mono font-bold text-sm text-primary group-hover:text-accent transition-colors">
                            {grade.name}
                          </div>
                          <div className="text-[10px] text-text-secondary uppercase tracking-wider mt-0.5">
                            Grade Type: {grade.type}
                          </div>
                        </div>
                        <ChevronRight size={16} className="text-text-secondary group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  ))}

                  {hasGccRecommendation && (
                    <div className="border border-dashed border-border-custom p-4 rounded-lg bg-surface-2/50 space-y-1">
                      <div className="font-semibold text-xs text-primary uppercase tracking-wider">
                        Ground Calcium Carbonate (GCC)
                      </div>
                      <p className="text-[11px] text-text-secondary leading-relaxed">
                        GCC grades are fully customizable according to customer requirements based on micron size (2 to 40 microns).
                      </p>
                      <Link 
                        href="/products/gcc"
                        className="text-[10px] text-accent font-bold hover:underline block pt-1"
                      >
                        Learn about GCC customization &rarr;
                      </Link>
                    </div>
                  )}
                  
                  {recommendedGrades.length === 0 && !hasGccRecommendation && (
                    <div className="text-xs text-text-secondary italic">
                      Please contact our engineers for standard recommendations.
                    </div>
                  )}
                </div>
              </div>

              {/* Call to Sales Box */}
              <div className="bg-primary text-white rounded-xl p-6 space-y-4 border border-white/5 shadow-md">
                <PhoneCall size={24} className="text-accent" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wide">
                  Technical Support
                </h3>
                <p className="text-white/80 text-xs leading-relaxed">
                  Need a custom-engineered particle sizing or specific chemical purity profile? Speak with KLC R&D engineers to arrange laboratory sample batches.
                </p>
                <div className="pt-2">
                  <Link
                    href={`/contact?subject=${encodeURIComponent(app.name + " Sizing Spec")}`}
                    className="w-full bg-accent hover:bg-amber-600 text-primary-dark font-bold text-xs py-3 rounded text-center block transition-all shadow"
                  >
                    Request Technical Grade Sample
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}
