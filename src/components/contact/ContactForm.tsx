"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "Product Inquiry",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xzbkbknd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          subject: "Product Inquiry",
          message: "",
        });
      } else {
        setError("Failed to submit form. Please verify the information and try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An unexpected network error occurred. Please try again or contact us directly via email.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center space-y-4">
        <CheckCircle2 size={36} className="text-green-600 mx-auto" />
        <h3 className="font-display font-bold text-lg text-green-900">
          Enquiry Received Successfully!
        </h3>
        <p className="text-green-700 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
          Thank you for contacting Karanwal Lime Chem. Our technical sales team has received your enquiry and will respond within 24 hours.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="bg-primary hover:bg-primary-dark text-white font-semibold text-xs px-5 py-2.5 rounded transition-all inline-block"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 rounded p-4 flex gap-3 items-center text-xs">
          <AlertCircle size={16} className="text-red-600 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1">
          <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
            className="w-full text-xs p-3 border border-border-custom rounded bg-surface-2 focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary/40 font-medium"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Work Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@company.com"
            value={form.email}
            onChange={handleChange}
            className="w-full text-xs p-3 border border-border-custom rounded bg-surface-2 focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary/40 font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Company */}
        <div className="space-y-1">
          <label htmlFor="company" className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Company Name *
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            placeholder="Acme Corp"
            value={form.company}
            onChange={handleChange}
            className="w-full text-xs p-3 border border-border-custom rounded bg-surface-2 focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary/40 font-medium"
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-primary">
            Phone / WhatsApp *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+91 99999 99999"
            value={form.phone}
            onChange={handleChange}
            className="w-full text-xs p-3 border border-border-custom rounded bg-surface-2 focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary/40 font-medium"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="space-y-1">
        <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-wider text-primary">
          Enquiry Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full text-xs p-3 border border-border-custom rounded bg-surface-2 focus:outline-none focus:border-accent text-text-primary font-medium"
        >
          <option value="Product Inquiry">Product Inquiry & Quotation</option>
          <option value="Sample Request">Product Sizing Sample Request</option>
          <option value="Custom Specifications">Custom Laboratory Sizing Specifications</option>
          <option value="General Support">General Corporate Enquiry</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-primary">
          Detailed Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Please describe your application and required specs (e.g. mesh size, assay purity, particle diameter)..."
          value={form.message}
          onChange={handleChange}
          className="w-full text-xs p-3 border border-border-custom rounded bg-surface-2 focus:outline-none focus:border-accent text-text-primary placeholder:text-text-secondary/40 font-medium leading-relaxed"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-xs py-3.5 rounded transition-all flex items-center justify-center gap-2 shadow cursor-pointer disabled:opacity-50"
      >
        <Send size={14} />
        {submitting ? "Submitting Request..." : "Submit Technical Enquiry"}
      </button>

    </form>
  );
}
