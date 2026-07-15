import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ProductsSnapshot from "@/components/home/ProductsSnapshot";
import ApplicationsGrid from "@/components/home/ApplicationsGrid";
import WhyKLCSection from "@/components/home/WhyKLCSection";
import CertificationsBar from "@/components/home/CertificationsBar";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ProductsSnapshot />
      <ApplicationsGrid />
      <WhyKLCSection />
      <CertificationsBar />
      
      {/* Bottom CTA Banner */}
      <section className="bg-primary text-white py-16 relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full text-white" fill="none" viewBox="0 0 100 100">
            <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect width="20" height="20" fill="none" />
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#cta-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <AnimatedSection delay={0.1} yOffset={20}>
            <span className="text-accent text-xs uppercase tracking-widest font-semibold">
              Partner With Us
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mt-2 tracking-tight">
              Looking for a Reliable Calcium Carbonate Supplier?
            </h2>
            <p className="text-white/80 text-sm max-w-2xl mx-auto mt-4 leading-relaxed">
              Contact our sales and technical support teams to request specific sample grades, custom sizing, bulk quotes, or standard product certificates.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} yOffset={20} className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-accent hover:bg-amber-600 text-primary-dark font-bold text-xs px-6 py-3.5 rounded transition-all shadow-md inline-flex items-center gap-2"
            >
              Request a Technical Quote
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+918533887901"
              className="border border-white/30 hover:border-white hover:bg-white/10 text-white font-semibold text-xs px-6 py-3.5 rounded transition-all inline-flex items-center gap-2"
            >
              <Phone size={14} className="text-accent" />
              Call +91 85338 87901
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

