"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

const services = [
  "Personal Tax Return",
  "Business Tax Return",
  "SMSF Tax Return",
  "BAS & IAS Lodgement",
  "Bookkeeping",
  "Payroll Management",
  "Financial Reporting",
  "Government Grant Application",
  "Due Diligence",
  "Business Setup / Restructuring",
  "Tax Planning",
  "Home Loan",
  "Investment Loan",
  "Commercial Loan",
  "Refinancing",
  "Construction Loan",
  "Personal Loan",
  "General Enquiry",
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  function validate() {
    const e: Record<string, string> = {};
    if (!formData.firstName.trim()) e.firstName = "First name is required";
    if (!formData.lastName.trim()) e.lastName = "Last name is required";
    if (!formData.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      e.email = "Please enter a valid email address";
    }
    if (!formData.service) e.service = "Please select a service";
    if (!formData.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorField)?.focus();
      return;
    }
    setFormState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-5">
          <CheckCircle2 size={30} className="text-brand-400" />
        </div>
        <h3
          className="text-[1.25rem] font-bold text-neutral-900 mb-2"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          Message Sent!
        </h3>
        <p className="text-neutral-500 text-[0.875rem] max-w-xs leading-[1.65]">
          Thank you for reaching out. We&apos;ll be in touch within one business day.
        </p>
        <button
          onClick={() => {
            setFormState("idle");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
          }}
          className="mt-6 text-[0.875rem] text-brand-400 font-semibold hover:text-brand-500 transition-[opacity] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 rounded"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border text-[0.9375rem] text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 ${
      errors[field]
        ? "border-red-400 focus:ring-red-300/40 bg-red-50"
        : "border-neutral-200 focus:ring-brand-400/30 focus:border-brand-400 bg-white"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      {formState === "error" && (
        <div
          role="alert"
          className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6 text-[0.875rem]"
        >
          <AlertCircle size={16} className="shrink-0" />
          Something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-[0.875rem] font-medium text-neutral-700 mb-1.5">
            First Name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            autoComplete="given-name"
            value={formData.firstName}
            onChange={handleChange}
            className={inputClass("firstName")}
            placeholder="Sophie"
            aria-required="true"
            aria-describedby={errors.firstName ? "firstName-error" : undefined}
          />
          {errors.firstName && (
            <p id="firstName-error" role="alert" className="text-red-600 text-[0.75rem] mt-1.5">
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block text-[0.875rem] font-medium text-neutral-700 mb-1.5">
            Last Name <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            autoComplete="family-name"
            value={formData.lastName}
            onChange={handleChange}
            className={inputClass("lastName")}
            placeholder="Wang"
            aria-required="true"
            aria-describedby={errors.lastName ? "lastName-error" : undefined}
          />
          {errors.lastName && (
            <p id="lastName-error" role="alert" className="text-red-600 text-[0.75rem] mt-1.5">
              {errors.lastName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-[0.875rem] font-medium text-neutral-700 mb-1.5">
            Email <span aria-hidden className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClass("email")}
            placeholder="you@example.com"
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-600 text-[0.75rem] mt-1.5">
              {errors.email}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-[0.875rem] font-medium text-neutral-700 mb-1.5">
            Phone <span className="text-neutral-400 font-normal">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className={inputClass("phone")}
            placeholder="(08) 8121 6066"
          />
        </div>
      </div>

      {/* Service */}
      <div className="mt-5">
        <label htmlFor="service" className="block text-[0.875rem] font-medium text-neutral-700 mb-1.5">
          Service Interested In <span aria-hidden className="text-red-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass("service")}
          aria-required="true"
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.service && (
          <p id="service-error" role="alert" className="text-red-600 text-[0.75rem] mt-1.5">
            {errors.service}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="mt-5">
        <label htmlFor="message" className="block text-[0.875rem] font-medium text-neutral-700 mb-1.5">
          Message <span aria-hidden className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass("message")} resize-none`}
          placeholder="Tell us a bit about what you need help with…"
          aria-required="true"
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-red-600 text-[0.75rem] mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 active:bg-brand-700 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg text-[0.9375rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 active:scale-[0.98]"
        style={{
          boxShadow: "0 1px 2px rgba(12,60,96,.20), 0 4px 12px rgba(12,60,96,.30)",
          transition: "transform 200ms cubic-bezier(0.34,1.56,0.64,1), box-shadow 200ms ease",
        }}
        aria-busy={formState === "submitting"}
      >
        {formState === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
      <p className="text-[0.75rem] text-neutral-400 mt-3 text-center">
        Fields marked <span className="text-red-500">*</span> are required
      </p>
    </form>
  );
}
