"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { applications } from "@/data/applications";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [appsOpen, setAppsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setIsOpen(false);
    setProductsOpen(false);
    setAppsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      {/* Top bar info */}
      <div className="bg-primary text-white text-xs py-2 px-4 md:px-8 flex justify-between items-center border-b border-white/10 z-50 relative">
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline-flex items-center gap-1.5 opacity-90">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            An ISO 9001 | ISO 14001 | OHSAS 45001 | FSSC 22000 Certified Co.
          </span>
        </div>
        <div className="flex items-center gap-4 ml-auto">
          <a href="tel:+918533887901" className="flex items-center gap-1 hover:text-accent transition-colors font-medium">
            <Phone size={12} className="text-accent" />
            +91 85338 87901
          </a>
          <span className="text-white/30">|</span>
          <a href="mailto:karanwallimechem@gmail.com" className="flex items-center gap-1 hover:text-accent transition-colors font-medium">
            <Mail size={12} className="text-accent" />
            karanwallimechem@gmail.com
          </a>
        </div>
      </div>

      {/* Main navigation header */}
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          scrolled 
            ? "bg-white shadow-md py-3 border-border-custom" 
            : "bg-white/95 backdrop-blur-md py-4 border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/images/brand/klc-logo.svg"
                  alt="KLC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-primary tracking-tight">
                  KARANWAL LIME CHEM
                </span>
                <span className="text-[10px] text-text-secondary tracking-widest uppercase font-semibold leading-none">
                  Excellence in Calcium Carbonate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "font-medium text-sm transition-colors hover:text-accent",
                    pathname === link.href ? "text-primary font-semibold border-b-2 border-accent pb-1 -mb-1.5" : "text-text-secondary"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {/* Products Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  className={cn(
                    "flex items-center gap-1 font-medium text-sm transition-colors hover:text-accent py-2",
                    pathname.startsWith("/products") ? "text-primary font-semibold" : "text-text-secondary"
                  )}
                >
                  Products
                  <ChevronDown size={14} className={cn("transition-transform duration-200", productsOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border border-border-custom py-2 transition-all duration-200 mt-1",
                    productsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                  )}
                >
                  <Link
                    href="/products/pcc"
                    className="block px-4 py-2 hover:bg-surface-2 transition-colors"
                  >
                    <div className="font-semibold text-primary text-sm">Precipitated Calcium Carbonate</div>
                    <div className="text-xs text-text-secondary">PCC - High purity & brightness</div>
                  </Link>
                  <Link
                    href="/products/gcc"
                    className="block px-4 py-2 hover:bg-surface-2 transition-colors border-t border-border-custom/50"
                  >
                    <div className="font-semibold text-primary text-sm">Ground Calcium Carbonate</div>
                    <div className="text-xs text-text-secondary">GCC - Natural micronized calcite</div>
                  </Link>
                  <div className="border-t border-border-custom/50 mt-1 pt-1">
                    <Link
                      href="/products"
                      className="block px-4 py-1.5 text-xs text-accent font-semibold hover:underline"
                    >
                      View All Products &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              {/* Applications Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setAppsOpen(true)}
                onMouseLeave={() => setAppsOpen(false)}
              >
                <button
                  onClick={() => setAppsOpen(!appsOpen)}
                  className={cn(
                    "flex items-center gap-1 font-medium text-sm transition-colors hover:text-accent py-2",
                    pathname.startsWith("/applications") ? "text-primary font-semibold" : "text-text-secondary"
                  )}
                >
                  Applications
                  <ChevronDown size={14} className={cn("transition-transform duration-200", appsOpen && "rotate-180")} />
                </button>
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white shadow-xl rounded-lg border border-border-custom p-4 transition-all duration-200 mt-1 grid grid-cols-2 gap-2",
                    appsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"
                  )}
                >
                  {applications.slice(0, 10).map((app) => (
                    <Link
                      key={app.slug}
                      href={`/applications/${app.slug}`}
                      className="p-2 hover:bg-surface-2 rounded transition-colors text-left"
                    >
                      <div className="font-semibold text-primary text-xs">{app.name}</div>
                      <div className="text-[10px] text-text-secondary truncate">{app.headline}</div>
                    </Link>
                  ))}
                  <div className="col-span-2 border-t border-border-custom/50 pt-2 mt-1 flex justify-between items-center">
                    <span className="text-[10px] text-text-secondary italic">Serving 12+ major industrial segments</span>
                    <Link
                      href="/applications"
                      className="text-xs text-accent font-semibold hover:underline"
                    >
                      View All Applications &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                href="/quality"
                className={cn(
                  "font-medium text-sm transition-colors hover:text-accent",
                  pathname === "/quality" ? "text-primary font-semibold border-b-2 border-accent pb-1 -mb-1.5" : "text-text-secondary"
                )}
              >
                Quality
              </Link>
            </nav>

            {/* Contact CTA Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white text-xs font-semibold px-5 py-2.5 rounded transition-all shadow-sm hover:shadow"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-text-primary hover:bg-surface-2 rounded-lg transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            "lg:hidden fixed inset-x-0 top-[112px] bg-white border-b border-border-custom shadow-xl transition-all duration-300 ease-in-out z-30 overflow-y-auto max-h-[calc(100vh-112px)]",
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          )}
        >
          <div className="px-4 pt-2 pb-6 space-y-3">
            <Link
              href="/"
              className={cn(
                "block py-2 px-3 rounded-md font-semibold text-sm",
                pathname === "/" ? "bg-surface-2 text-primary" : "text-text-secondary hover:bg-surface-2"
              )}
            >
              Home
            </Link>
            
            <Link
              href="/about"
              className={cn(
                "block py-2 px-3 rounded-md font-semibold text-sm",
                pathname === "/about" ? "bg-surface-2 text-primary" : "text-text-secondary hover:bg-surface-2"
              )}
            >
              About KLC
            </Link>

            {/* Products Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="w-full flex justify-between items-center py-2 px-3 rounded-md text-text-secondary font-semibold text-sm hover:bg-surface-2"
              >
                <span>Products</span>
                <ChevronDown size={16} className={cn("transition-transform duration-200", productsOpen && "rotate-180")} />
              </button>
              {productsOpen && (
                <div className="pl-6 space-y-1 bg-surface-2/40 py-1 rounded-md">
                  <Link
                    href="/products"
                    className="block py-2 text-xs font-medium text-text-secondary hover:text-primary"
                  >
                    All Products Hub
                  </Link>
                  <Link
                    href="/products/pcc"
                    className="block py-2 text-xs font-medium text-text-secondary hover:text-primary"
                  >
                    Precipitated Calcium Carbonate (PCC)
                  </Link>
                  <Link
                    href="/products/gcc"
                    className="block py-2 text-xs font-medium text-text-secondary hover:text-primary"
                  >
                    Ground Calcium Carbonate (GCC)
                  </Link>
                </div>
              )}
            </div>

            {/* Applications Accordion */}
            <div className="space-y-1">
              <button
                onClick={() => setAppsOpen(!appsOpen)}
                className="w-full flex justify-between items-center py-2 px-3 rounded-md text-text-secondary font-semibold text-sm hover:bg-surface-2"
              >
                <span>Applications</span>
                <ChevronDown size={16} className={cn("transition-transform duration-200", appsOpen && "rotate-180")} />
              </button>
              {appsOpen && (
                <div className="pl-6 space-y-1 bg-surface-2/40 py-1 rounded-md max-h-60 overflow-y-auto">
                  <Link
                    href="/applications"
                    className="block py-2 text-xs font-semibold text-accent hover:underline"
                  >
                    View All Applications &rarr;
                  </Link>
                  {applications.map((app) => (
                    <Link
                      key={app.slug}
                      href={`/applications/${app.slug}`}
                      className="block py-2 text-xs font-medium text-text-secondary hover:text-primary"
                    >
                      {app.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/quality"
              className={cn(
                "block py-2 px-3 rounded-md font-semibold text-sm",
                pathname === "/quality" ? "bg-surface-2 text-primary" : "text-text-secondary hover:bg-surface-2"
              )}
            >
              Quality & Certifications
            </Link>

            <div className="pt-4 border-t border-border-custom">
              <Link
                href="/contact"
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white text-sm font-semibold py-3 rounded-md shadow"
              >
                Contact & Quote Request
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
