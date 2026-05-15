import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact Us | Duwin Accounting & Finance",
  description:
    "Contact Duwin Accounting & Finance in Adelaide SA. Book a consultation, call (08) 8121 6066 or email info@duwin.com.au.",
};

const contactDetails = [
  {
    icon: MapPin,
    label: "Office Address",
    value: "310/147 Pirie St, Adelaide SA 5000",
    subValue: "(Aurora on Pirie)",
    href: "https://maps.google.com/?q=147+Pirie+St+Adelaide+SA+5000",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(08) 8121 6066",
    href: "tel:0881216066",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@duwin.com.au",
    href: "mailto:info@duwin.com.au",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon – Fri: 9:00am – 5:30pm",
    subValue: "Sat – Sun: By appointment",
  },
];

const memberships = [
  "Chartered Accountants Australia & New Zealand",
  "Xero Payroll Certified",
  "Xero Advisor Certified Individual",
  "Registered Tax Agent",
  "Licensed Mortgage Broker",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Duwin"
        subtitle="Have a question or ready to get started? We'd love to hear from you. We typically respond within one business day."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      {/* Main content */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              <div
                className="bg-white rounded-2xl p-8 sm:p-10"
                style={{
                  boxShadow: "0 4px 8px rgba(36,94,118,.08), 0 16px 48px rgba(36,94,118,.14), 0 32px 64px rgba(7,25,34,.12)",
                  borderTop: "4px solid #245e76",
                }}
              >
                <h2
                  className="text-[1.5rem] font-bold text-neutral-900 mb-2 tracking-[-0.02em]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Send us a message
                </h2>
                <p className="text-neutral-500 text-[0.875rem] mb-8">
                  Fill in the form and we&apos;ll get back to you within one business day.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div
                className="bg-white rounded-2xl p-8"
                style={{
                  boxShadow: "0 1px 2px rgba(36,94,118,.06), 0 4px 12px rgba(36,94,118,.10), 0 12px 32px rgba(36,94,118,.08)",
                  border: "1px solid rgba(36,94,118,.10)",
                }}
              >
                <h2
                  className="text-[1.25rem] font-bold text-neutral-900 mb-6 tracking-[-0.015em]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Contact Details
                </h2>
                <ul className="space-y-5">
                  {contactDetails.map(({ icon: Icon, label, value, subValue, href }) => (
                    <li key={label} className="flex gap-4">
                      <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-brand-500" />
                      </div>
                      <div>
                        <p className="text-[0.6875rem] font-bold text-neutral-400 uppercase tracking-[0.12em] mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            target={href.startsWith("http") ? "_blank" : undefined}
                            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-neutral-800 text-[0.9375rem] font-medium hover:text-brand-400 transition-[opacity] duration-150"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-neutral-800 text-[0.9375rem] font-medium">{value}</p>
                        )}
                        {subValue && (
                          <p className="text-neutral-500 text-[0.8125rem] mt-0.5">{subValue}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden border border-brand-100" style={{ boxShadow: "0 1px 2px rgba(36,94,118,.06), 0 4px 12px rgba(36,94,118,.10)" }}>
                <iframe
                  title="Duwin office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.2!2d138.6035!3d-34.9245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf4ebb2c5b4b%3A0x1!2s147+Pirie+St%2C+Adelaide+SA+5000!5e0!3m2!1sen!2sau!4v1"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Memberships */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{
                  background: "linear-gradient(135deg, #0e2b38 0%, #245e76 100%)",
                }}
              >
                <p className="font-bold text-[0.9375rem] mb-4 text-white">Professional Memberships</p>
                <ul className="space-y-2.5">
                  {memberships.map((m) => (
                    <li key={m} className="flex items-center gap-2.5 text-[0.875rem] text-brand-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
