"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Eye, X, Download } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

interface Certification {
  id: string;
  name: string;
  logo: string;
  fullName: string;
  description: string;
  pdf?: string;
}

interface CertificationsListProps {
  certifications: Certification[];
}

export default function CertificationsList({ certifications }: CertificationsListProps) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedName, setSelectedName] = useState<string>("");

  const handleOpenPdf = (pdfPath: string, name: string) => {
    setSelectedPdf(pdfPath);
    setSelectedName(name);
  };

  const handleClose = () => {
    setSelectedPdf(null);
    setSelectedName("");
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {certifications.map((cert, idx) => (
          <AnimatedSection
            key={cert.id}
            delay={0.05 * (idx % 3)}
            className="bg-surface-2 border border-border-custom/50 rounded-lg p-6 flex flex-col justify-between hover:border-accent hover:shadow transition-all duration-300 shadow-sm"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border-custom/30 pb-3">
                <span className="font-mono text-xs font-bold text-accent">
                  CERTIFICATE
                </span>
                <span className="bg-primary/10 text-primary font-display font-bold text-[10px] px-2 py-0.5 rounded">
                  ACTIVE
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 flex-shrink-0 bg-white p-1.5 rounded border border-border-custom/30">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm text-primary leading-tight">
                    {cert.name}
                  </h3>
                  <div className="text-[10px] text-text-secondary font-medium mt-1">
                    {cert.fullName}
                  </div>
                </div>
              </div>

              <p className="text-text-secondary text-[11px] leading-relaxed pt-2">
                {cert.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-border-custom/20 flex items-center justify-between">
              <div className="text-[10px] text-green-700 font-semibold flex items-center gap-1">
                <ShieldCheck size={12} className="stroke-[2.5px]" />
                <span>Valid & Audited</span>
              </div>
              {cert.pdf && (
                <button
                  onClick={() => handleOpenPdf(cert.pdf!, cert.name)}
                  className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-accent font-bold transition-colors focus:outline-none"
                >
                  <Eye size={14} />
                  View Certificate
                </button>
              )}
            </div>

          </AnimatedSection>
        ))}
      </div>

      {/* PDF Modal Viewer */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl border border-border-custom w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden relative">
            
            {/* Modal Header */}
            <div className="bg-primary p-4 text-white flex justify-between items-center border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-accent" />
                <h3 className="font-display font-bold text-sm tracking-wide uppercase">
                  {selectedName} Certificate
                </h3>
              </div>
              <div className="flex items-center gap-4">
                <a 
                  href={selectedPdf} 
                  download 
                  className="text-white/80 hover:text-accent flex items-center gap-1.5 text-xs font-semibold transition-colors"
                >
                  <Download size={14} />
                  Download
                </a>
                <span className="text-white/20">|</span>
                <button 
                  onClick={handleClose}
                  className="text-white/60 hover:text-white transition-colors focus:outline-none"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal PDF Viewer Body */}
            <div className="flex-grow bg-gray-100 p-2 relative">
              <iframe
                src={`${selectedPdf}#toolbar=0`}
                className="w-full h-full border-0 rounded"
                title={`${selectedName} PDF Viewer`}
              />
            </div>

            {/* Modal Footer */}
            <div className="bg-surface-2 p-3 text-[10px] text-text-secondary text-center border-t border-border-custom/50 flex-shrink-0">
              Karanwal Lime Chem I Private Limited &copy; Official Quality Credentials Verification
            </div>

          </div>
        </div>
      )}
    </>
  );
}
