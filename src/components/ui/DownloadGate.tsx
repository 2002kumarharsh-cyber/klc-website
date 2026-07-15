"use client";

import React, { useState, useEffect } from "react";
import { Download, X, Mail, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadGateProps {
  buttonText?: string;
  className?: string;
}

export default function DownloadGate({
  buttonText = "Download Technical Brochure",
  className = "",
}: DownloadGateProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [alreadyVerified, setAlreadyVerified] = useState(false);

  // Check if email already submitted in localStorage
  useEffect(() => {
    const verified = localStorage.getItem("klc_brochure_unlocked");
    if (verified === "true") {
      setAlreadyVerified(true);
    }
  }, []);

  const handleTriggerDownload = () => {
    if (alreadyVerified) {
      triggerBrowserDownload();
    } else {
      setIsOpen(true);
    }
  };

  const triggerBrowserDownload = () => {
    const link = document.createElement("a");
    link.href = "/brochure.pdf";
    link.download = "KLC_Product_Catalogue.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/xzbkbknd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          formType: "Technical Brochure Download",
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        localStorage.setItem("klc_brochure_unlocked", "true");
        setAlreadyVerified(true);
        setSuccess(true);
        
        // Short delay to show success before download
        setTimeout(() => {
          triggerBrowserDownload();
          setSuccess(false);
        }, 1200);
      } else {
        alert("Failed to register email. Please try again or contact us directly.");
      }
    } catch (err) {
      // Fallback: download anyway on offline failure
      console.error("Formspree submission error", err);
      triggerBrowserDownload();
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleTriggerDownload}
        className={cn(
          "inline-flex items-center gap-2 bg-accent hover:bg-amber-600 text-primary-dark font-bold text-xs px-5 py-3 rounded transition-all shadow-md cursor-pointer",
          className
        )}
      >
        <Download size={14} className="stroke-[2.5px]" />
        {buttonText}
      </button>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          
          {/* Modal Container */}
          <div className="bg-white rounded-lg shadow-xl border border-border-custom max-w-md w-full overflow-hidden relative">
            
            {/* Header / Close */}
            <div className="bg-primary p-5 text-white flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-2">
                <Download size={18} className="text-accent" />
                <h3 className="font-display font-bold text-sm tracking-wide uppercase">
                  Technical Specifications Download
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors focus:outline-none"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <p className="text-xs text-text-secondary leading-relaxed">
                Please enter your work email address below to unlock and download the full technical brochure for Karanwal Lime Chem Calcium Carbonate grades.
              </p>

              {success ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded p-4 text-center space-y-2">
                  <ShieldCheck size={24} className="text-green-600 mx-auto" />
                  <div className="text-xs font-semibold">Verification Successful!</div>
                  <div className="text-[10px] text-green-700">Your download is starting automatically...</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <label htmlFor="gate-email" className="sr-only">Work Email</label>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-secondary">
                      <Mail size={16} />
                    </div>
                    <input
                      id="gate-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-xs bg-surface-2 border border-border-custom rounded focus:outline-none focus:border-accent font-medium text-text-primary placeholder:text-text-secondary/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-xs py-3 rounded transition-all flex items-center justify-center gap-2 shadow disabled:opacity-50"
                  >
                    {submitting ? "Processing..." : "Verify & Start Download"}
                  </button>
                </form>
              )}

              <div className="text-[9px] text-text-secondary/60 text-center flex items-center justify-center gap-1">
                <span>We respect your privacy. Submitting will not enroll you in spam lists.</span>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
