import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Download } from "lucide-react";
import { companyDetails } from "@/data/company";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10">
      
      {/* Top Footer Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 bg-white rounded p-1">
                <Image
                  src="/images/brand/klc-logo.svg"
                  alt="KLC Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <span className="font-display font-bold text-base leading-tight tracking-tight block">
                  KARANWAL LIME CHEM
                </span>
                <span className="text-[9px] text-white/60 tracking-widest uppercase font-semibold block leading-none">
                  Excellence in Calcium Carbonate
                </span>
              </div>
            </Link>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              Established in 1999, KLC is a premier manufacturer of high-quality Precipitated and Ground Calcium Carbonate, serving major industries worldwide with precision and reliability.
            </p>
            <div className="pt-2">
              <Link 
                href="/public/brochure.pdf" 
                target="_blank" 
                download
                className="inline-flex items-center gap-2 bg-accent hover:bg-amber-600 text-primary-dark font-bold text-xs px-4 py-2.5 rounded transition-all"
              >
                <Download size={14} />
                Download Brochure
              </Link>
            </div>
          </div>

          {/* Col 2: Products & Solutions */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-accent mb-4">
              Products
            </h3>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <Link href="/products/pcc" className="hover:text-accent transition-colors">
                  Precipitated Calcium Carbonate (PCC)
                </Link>
              </li>
              <li>
                <Link href="/products/gcc" className="hover:text-accent transition-colors">
                  Ground Calcium Carbonate (GCC)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors italic">
                  View Specifications Index &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Industrial Applications */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-accent mb-4">
              Applications
            </h3>
            <ul className="space-y-2 text-xs text-white/80 grid grid-cols-1 gap-y-2">
              <li>
                <Link href="/applications/rubber" className="hover:text-accent transition-colors">
                  Rubber Industry
                </Link>
              </li>
              <li>
                <Link href="/applications/plastics-and-pvc" className="hover:text-accent transition-colors">
                  Plastics & PVC
                </Link>
              </li>
              <li>
                <Link href="/applications/paper" className="hover:text-accent transition-colors">
                  Paper Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/applications/paints-and-coatings" className="hover:text-accent transition-colors">
                  Paints & Coatings
                </Link>
              </li>
              <li>
                <Link href="/applications/pharmaceutical" className="hover:text-accent transition-colors">
                  Pharmaceuticals
                </Link>
              </li>
              <li>
                <Link href="/applications" className="hover:text-accent transition-colors font-medium">
                  View All Industries &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm tracking-wide uppercase text-accent">
              Get In Touch
            </h3>
            <ul className="space-y-3 text-xs text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {companyDetails.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-accent flex-shrink-0" />
                <a href="tel:+918533887901" className="hover:text-accent transition-colors">
                  {companyDetails.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-accent flex-shrink-0" />
                <a href="mailto:karanwallimechem@gmail.com" className="hover:text-accent transition-colors">
                  {companyDetails.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>



      {/* Bottom Copyright Bar */}
      <div className="bg-[#0b1b2a] py-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <div>
            &copy; {currentYear} {companyDetails.name}. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>&bull;</span>
            <Link href="/quality" className="hover:text-white transition-colors">Quality Standard</Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
