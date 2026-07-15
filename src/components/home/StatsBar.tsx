"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";

export default function StatsBar() {
  const stats = [
    { value: "1999", label: "Established Year" },
    { value: "25+", label: "Years of Industry Experience" },
    { value: "2", label: "Product Families (PCC & GCC)" },
    { value: "12+", label: "Industrial Segments Served" },
    { value: "7", label: "Safety & ISO Certifications" }
  ];

  return (
    <section className="bg-primary-dark text-white py-10 border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection delay={0.1} className="flex flex-wrap justify-center gap-y-8 md:grid md:grid-cols-5 text-center md:divide-x divide-white/10">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="w-1/2 sm:w-1/3 md:w-full px-2">
              <div className="font-display font-bold text-3xl sm:text-4xl text-accent tracking-tight tabular-nums">
                {stat.value}
              </div>
              <div className="text-white/60 text-[10px] sm:text-xs mt-1 uppercase tracking-wider font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
