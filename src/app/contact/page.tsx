import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyDetails } from "@/data/company";

export const metadata = {
  title: "Contact Us & Request Technical Quote",
  description: "Contact Karanwal Lime Chem technical sales. Address: 7 Km Dattyana Road, Chandpur, District-Bijnor-246725, UP, India. Phone: +91 85338 87901.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact KLC Sales"
        description="For bulk inquiries, custom sizing requests, specification documentation, or standard samples, get in touch with our support teams."
        backgroundImage="/images/manufacturing/calcination-tower-01.jpg"
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Info details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider block">
                  Get In Touch
                </span>
                <h2 className="font-display font-bold text-2xl text-primary mt-1">
                  Contact Information
                </h2>
                <div className="w-12 h-1 bg-accent mt-4" />
              </div>

              <p className="text-text-secondary text-sm leading-relaxed">
                Whether you are evaluating our standard PCC / GCC grades or require laboratory-level testing curves for custom sizing, our support and engineering teams are ready to help.
              </p>

              {/* Info icons list */}
              <div className="space-y-6">
                
                {/* Registered Office */}
                <div className="flex gap-4">
                  <span className="bg-surface-2 border border-border-custom/50 text-accent rounded-lg p-3 flex-shrink-0 self-start">
                    <MapPin size={20} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary">
                      Registered Office & Factory
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mt-1">
                      {companyDetails.address}
                    </p>
                    <a
                      href={companyDetails.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-accent font-semibold hover:underline block mt-2"
                    >
                      View on Google Maps &rarr;
                    </a>
                  </div>
                </div>

                {/* Direct Contacts */}
                <div className="flex gap-4">
                  <span className="bg-surface-2 border border-border-custom/50 text-accent rounded-lg p-3 flex-shrink-0 self-start">
                    <Phone size={20} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary">
                      Direct Enquiry Lines
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mt-1">
                      Call / WhatsApp: <a href="tel:+918533887901" className="text-primary font-semibold hover:underline">{companyDetails.phone}</a>
                    </p>
                    <p className="text-[10px] text-text-secondary/80 mt-0.5">
                      Available Mon - Sat, 9:00 AM - 6:00 PM (IST)
                    </p>
                  </div>
                </div>

                {/* Email Support */}
                <div className="flex gap-4">
                  <span className="bg-surface-2 border border-border-custom/50 text-accent rounded-lg p-3 flex-shrink-0 self-start">
                    <Mail size={20} />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-xs uppercase tracking-wider text-primary">
                      Corporate Correspondence
                    </h3>
                    <p className="text-text-secondary text-xs leading-relaxed mt-1">
                      Enquiries: <a href="mailto:karanwallimechem@gmail.com" className="text-primary font-semibold hover:underline">{companyDetails.email}</a>
                    </p>
                    <p className="text-[10px] text-text-secondary/80 mt-0.5">
                      Standard response time is within 24 business hours.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white border border-border-custom rounded-xl p-6 sm:p-8 shadow-sm">
              <div className="border-b border-border-custom/50 pb-4 mb-6">
                <h3 className="font-display font-bold text-sm uppercase tracking-wide text-primary">
                  Technical Quote & Sample Request
                </h3>
                <p className="text-text-secondary text-xs mt-1">
                  Fields marked with * are required.
                </p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="h-96 w-full border-t border-border-custom relative bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13961.50346399625!2d78.13280145!3d29.123512249999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390bc576f3f019bb%3A0xe5f87b8d0c2e6462!2sChandpur%2C%20Uttar%20Pradesh%20246725!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="KLC Location Map"
          className="filter grayscale opacity-80 hover:opacity-100 transition-opacity"
        />
      </section>
    </>
  );
}
